import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ContractTypeService } from "./contractType.service";
import { ContractTypeControllerBase } from "./base/contractType.controller.base";

@swagger.ApiTags("contractTypes")
@common.Controller("contractTypes")
export class ContractTypeController extends ContractTypeControllerBase {
  constructor(
    protected readonly service: ContractTypeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
