import { Test } from "@nestjs/testing";
import { INestApplication, HttpStatus, ExecutionContext } from "@nestjs/common";
import request from "supertest";
import { MorganModule } from "nest-morgan";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { MetadatumController } from "../metadatum.controller";
import { MetadatumService } from "../metadatum.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  animationUrl: "exampleAnimationUrl",
  backgroundColor: "exampleBackgroundColor",
  createdAt: new Date(),
  description: "exampleDescription",
  externalUrl: "exampleExternalUrl",
  id: "exampleId",
  image: "exampleImage",
  name: "exampleName",
  updatedAt: new Date(),
  youTubeUrl: "exampleYouTubeUrl",
};
const CREATE_RESULT = {
  animationUrl: "exampleAnimationUrl",
  backgroundColor: "exampleBackgroundColor",
  createdAt: new Date(),
  description: "exampleDescription",
  externalUrl: "exampleExternalUrl",
  id: "exampleId",
  image: "exampleImage",
  name: "exampleName",
  updatedAt: new Date(),
  youTubeUrl: "exampleYouTubeUrl",
};
const FIND_MANY_RESULT = [
  {
    animationUrl: "exampleAnimationUrl",
    backgroundColor: "exampleBackgroundColor",
    createdAt: new Date(),
    description: "exampleDescription",
    externalUrl: "exampleExternalUrl",
    id: "exampleId",
    image: "exampleImage",
    name: "exampleName",
    updatedAt: new Date(),
    youTubeUrl: "exampleYouTubeUrl",
  },
];
const FIND_ONE_RESULT = {
  animationUrl: "exampleAnimationUrl",
  backgroundColor: "exampleBackgroundColor",
  createdAt: new Date(),
  description: "exampleDescription",
  externalUrl: "exampleExternalUrl",
  id: "exampleId",
  image: "exampleImage",
  name: "exampleName",
  updatedAt: new Date(),
  youTubeUrl: "exampleYouTubeUrl",
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

describe("Metadatum", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: MetadatumService,
          useValue: service,
        },
      ],
      controllers: [MetadatumController],
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

  test("POST /metadata", async () => {
    await request(app.getHttpServer())
      .post("/metadata")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /metadata", async () => {
    await request(app.getHttpServer())
      .get("/metadata")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /metadata/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/metadata"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /metadata/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/metadata"}/${existingId}`)
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
