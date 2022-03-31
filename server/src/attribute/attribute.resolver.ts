import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { AttributeResolverBase } from "./base/attribute.resolver.base";
import { Attribute } from "./base/Attribute";
import { AttributeService } from "./attribute.service";

@graphql.Resolver(() => Attribute)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class AttributeResolver extends AttributeResolverBase {
  constructor(
    protected readonly service: AttributeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
