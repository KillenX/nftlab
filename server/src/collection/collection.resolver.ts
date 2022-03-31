import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { CollectionResolverBase } from "./base/collection.resolver.base";
import { Collection } from "./base/Collection";
import { CollectionService } from "./collection.service";

@graphql.Resolver(() => Collection)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class CollectionResolver extends CollectionResolverBase {
  constructor(
    protected readonly service: CollectionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
