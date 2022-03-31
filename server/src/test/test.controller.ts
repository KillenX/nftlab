import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { TestService } from "./test.service";
import { TestControllerBase } from "./base/test.controller.base";

@swagger.ApiTags("tests")
@common.Controller("tests")
export class TestController extends TestControllerBase {
  constructor(
    protected readonly service: TestService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
