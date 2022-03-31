import { Test } from "@nestjs/testing";
import { INestApplication, HttpStatus, ExecutionContext } from "@nestjs/common";
import request from "supertest";
import { MorganModule } from "nest-morgan";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { ContractController } from "../contract.controller";
import { ContractService } from "../contract.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  address: "exampleAddress",
  createdAt: new Date(),
  description: "exampleDescription",
  externalLink: "exampleExternalLink",
  feeRecipient: "exampleFeeRecipient",
  id: "exampleId",
  image: "exampleImage",
  name: "exampleName",
  sellerFeeBasisPoints: 42,
  updatedAt: new Date(),
  uri: "exampleUri",
};
const CREATE_RESULT = {
  address: "exampleAddress",
  createdAt: new Date(),
  description: "exampleDescription",
  externalLink: "exampleExternalLink",
  feeRecipient: "exampleFeeRecipient",
  id: "exampleId",
  image: "exampleImage",
  name: "exampleName",
  sellerFeeBasisPoints: 42,
  updatedAt: new Date(),
  uri: "exampleUri",
};
const FIND_MANY_RESULT = [
  {
    address: "exampleAddress",
    createdAt: new Date(),
    description: "exampleDescription",
    externalLink: "exampleExternalLink",
    feeRecipient: "exampleFeeRecipient",
    id: "exampleId",
    image: "exampleImage",
    name: "exampleName",
    sellerFeeBasisPoints: 42,
    updatedAt: new Date(),
    uri: "exampleUri",
  },
];
const FIND_ONE_RESULT = {
  address: "exampleAddress",
  createdAt: new Date(),
  description: "exampleDescription",
  externalLink: "exampleExternalLink",
  feeRecipient: "exampleFeeRecipient",
  id: "exampleId",
  image: "exampleImage",
  name: "exampleName",
  sellerFeeBasisPoints: 42,
  updatedAt: new Date(),
  uri: "exampleUri",
};

const service = {
  create() {
    return CREATE_RESULT;
  },
  findMany: () => FIND_MANY_RESULT,
  findOne: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

describe("Contract", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: ContractService,
          useValue: service,
        },
      ],
      controllers: [ContractController],
      imports: [MorganModule.forRoot(), ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /contracts", async () => {
    await request(app.getHttpServer())
      .post("/contracts")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /contracts", async () => {
    await request(app.getHttpServer())
      .get("/contracts")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /contracts/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/contracts"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /contracts/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/contracts"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
