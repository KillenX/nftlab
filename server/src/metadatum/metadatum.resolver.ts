import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { MetadatumResolverBase } from "./base/metadatum.resolver.base";
import { Metadatum } from "./base/Metadatum";
import { MetadatumService } from "./metadatum.service";

@graphql.Resolver(() => Metadatum)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class MetadatumResolver extends MetadatumResolverBase {
  constructor(
    protected readonly service: MetadatumService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
