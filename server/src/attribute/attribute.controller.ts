import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { AttributeService } from "./attribute.service";
import { AttributeControllerBase } from "./base/attribute.controller.base";

@swagger.ApiTags("attributes")
@common.Controller("attributes")
export class AttributeController extends AttributeControllerBase {
  constructor(
    protected readonly service: AttributeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
