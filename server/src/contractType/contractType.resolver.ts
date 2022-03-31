import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { ContractTypeResolverBase } from "./base/contractType.resolver.base";
import { ContractType } from "./base/ContractType";
import { ContractTypeService } from "./contractType.service";

@graphql.Resolver(() => ContractType)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class ContractTypeResolver extends ContractTypeResolverBase {
  constructor(
    protected readonly service: ContractTypeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
