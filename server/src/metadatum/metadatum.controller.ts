import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { MetadatumService } from "./metadatum.service";
import { MetadatumControllerBase } from "./base/metadatum.controller.base";

@swagger.ApiTags("metadata")
@common.Controller("metadata")
export class MetadatumController extends MetadatumControllerBase {
  constructor(
    protected readonly service: MetadatumService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
