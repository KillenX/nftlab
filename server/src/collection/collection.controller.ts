import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CollectionService } from "./collection.service";
import { CollectionControllerBase } from "./base/collection.controller.base";

@swagger.ApiTags("collections")
@common.Controller("collections")
export class CollectionController extends CollectionControllerBase {
  constructor(
    protected readonly service: CollectionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
