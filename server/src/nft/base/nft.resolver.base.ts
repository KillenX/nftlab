/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import * as gqlUserRoles from "../../auth/gqlUserRoles.decorator";
import * as abacUtil from "../../auth/abac.util";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { CreateNftArgs } from "./CreateNftArgs";
import { UpdateNftArgs } from "./UpdateNftArgs";
import { DeleteNftArgs } from "./DeleteNftArgs";
import { NftFindManyArgs } from "./NftFindManyArgs";
import { NftFindUniqueArgs } from "./NftFindUniqueArgs";
import { Nft } from "./Nft";
import { Collection } from "../../collection/base/Collection";
import { Contract } from "../../contract/base/Contract";
import { Metadatum } from "../../metadatum/base/Metadatum";
import { NftService } from "../nft.service";

@graphql.Resolver(() => Nft)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class NftResolverBase {
  constructor(
    protected readonly service: NftService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Nft",
    action: "read",
    possession: "any",
  })
  async _nftsMeta(
    @graphql.Args() args: NftFindManyArgs
  ): Promise<MetaQueryPayload> {
    const results = await this.service.count({
      ...args,
      skip: undefined,
      take: undefined,
    });
    return {
      count: results,
    };
  }

  @graphql.Query(() => [Nft])
  @nestAccessControl.UseRoles({
    resource: "Nft",
    action: "read",
    possession: "any",
  })
  async nfts(
    @graphql.Args() args: NftFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Nft[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Nft",
    });
    const results = await this.service.findMany(args);
    return results.map((result) => permission.filter(result));
  }

  @graphql.Query(() => Nft, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Nft",
    action: "read",
    possession: "own",
  })
  async nft(
    @graphql.Args() args: NftFindUniqueArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Nft | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "Nft",
    });
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return permission.filter(result);
  }

  @graphql.Mutation(() => Nft)
  @nestAccessControl.UseRoles({
    resource: "Nft",
    action: "create",
    possession: "any",
  })
  async createNft(
    @graphql.Args() args: CreateNftArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Nft> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "create",
      possession: "any",
      resource: "Nft",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(
      permission,
      args.data
    );
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new apollo.ApolloError(
        `providing the properties: ${properties} on ${"Nft"} creation is forbidden for roles: ${roles}`
      );
    }
    // @ts-ignore
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        collection: args.data.collection
          ? {
              connect: args.data.collection,
            }
          : undefined,

        contract: {
          connect: args.data.contract,
        },

        metadatum: args.data.metadatum
          ? {
              connect: args.data.metadatum,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => Nft)
  @nestAccessControl.UseRoles({
    resource: "Nft",
    action: "update",
    possession: "any",
  })
  async updateNft(
    @graphql.Args() args: UpdateNftArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Nft | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Nft",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(
      permission,
      args.data
    );
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new apollo.ApolloError(
        `providing the properties: ${properties} on ${"Nft"} update is forbidden for roles: ${roles}`
      );
    }
    try {
      // @ts-ignore
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          collection: args.data.collection
            ? {
                connect: args.data.collection,
              }
            : undefined,

          contract: {
            connect: args.data.contract,
          },

          metadatum: args.data.metadatum
            ? {
                connect: args.data.metadatum,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Nft)
  @nestAccessControl.UseRoles({
    resource: "Nft",
    action: "delete",
    possession: "any",
  })
  async deleteNft(@graphql.Args() args: DeleteNftArgs): Promise<Nft | null> {
    try {
      // @ts-ignore
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => Collection, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Nft",
    action: "read",
    possession: "any",
  })
  async collection(
    @graphql.Parent() parent: Nft,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Collection | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Collection",
    });
    const result = await this.service.getCollection(parent.id);

    if (!result) {
      return null;
    }
    return permission.filter(result);
  }

  @graphql.ResolveField(() => Contract, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Nft",
    action: "read",
    possession: "any",
  })
  async contract(
    @graphql.Parent() parent: Nft,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Contract | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Contract",
    });
    const result = await this.service.getContract(parent.id);

    if (!result) {
      return null;
    }
    return permission.filter(result);
  }

  @graphql.ResolveField(() => Metadatum, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Nft",
    action: "read",
    possession: "any",
  })
  async metadatum(
    @graphql.Parent() parent: Nft,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Metadatum | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Metadatum",
    });
    const result = await this.service.getMetadatum(parent.id);

    if (!result) {
      return null;
    }
    return permission.filter(result);
  }
}
