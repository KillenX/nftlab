/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestMorgan from "nest-morgan";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import * as abacUtil from "../../auth/abac.util";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { NftService } from "../nft.service";
import { NftCreateInput } from "./NftCreateInput";
import { NftWhereInput } from "./NftWhereInput";
import { NftWhereUniqueInput } from "./NftWhereUniqueInput";
import { NftFindManyArgs } from "./NftFindManyArgs";
import { NftUpdateInput } from "./NftUpdateInput";
import { Nft } from "./Nft";
@swagger.ApiBearerAuth()
export class NftControllerBase {
  constructor(
    protected readonly service: NftService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Post()
  @nestAccessControl.UseRoles({
    resource: "Nft",
    action: "create",
    possession: "any",
  })
  @swagger.ApiCreatedResponse({ type: Nft })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async create(
    @common.Body() data: NftCreateInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<Nft> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "create",
      possession: "any",
      resource: "Nft",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new errors.ForbiddenException(
        `providing the properties: ${properties} on ${"Nft"} creation is forbidden for roles: ${roles}`
      );
    }
    return await this.service.create({
      data: {
        ...data,

        contract: {
          connect: data.contract,
        },

        metadatum: data.metadatum
          ? {
              connect: data.metadatum,
            }
          : undefined,
      },
      select: {
        contract: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,

        metadatum: {
          select: {
            id: true,
          },
        },

        tokenId: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Get()
  @nestAccessControl.UseRoles({
    resource: "Nft",
    action: "read",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: [Nft] })
  @swagger.ApiForbiddenResponse()
  @ApiNestedQuery(NftFindManyArgs)
  async findMany(
    @common.Req() request: Request,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<Nft[]> {
    const args = plainToClass(NftFindManyArgs, request.query);

    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Nft",
    });
    const results = await this.service.findMany({
      ...args,
      select: {
        contract: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,

        metadatum: {
          select: {
            id: true,
          },
        },

        tokenId: true,
        updatedAt: true,
      },
    });
    return results.map((result) => permission.filter(result));
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Get("/:id")
  @nestAccessControl.UseRoles({
    resource: "Nft",
    action: "read",
    possession: "own",
  })
  @swagger.ApiOkResponse({ type: Nft })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async findOne(
    @common.Param() params: NftWhereUniqueInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<Nft | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "Nft",
    });
    const result = await this.service.findOne({
      where: params,
      select: {
        contract: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,

        metadatum: {
          select: {
            id: true,
          },
        },

        tokenId: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return permission.filter(result);
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Patch("/:id")
  @nestAccessControl.UseRoles({
    resource: "Nft",
    action: "update",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: Nft })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async update(
    @common.Param() params: NftWhereUniqueInput,
    @common.Body()
    data: NftUpdateInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<Nft | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Nft",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new errors.ForbiddenException(
        `providing the properties: ${properties} on ${"Nft"} update is forbidden for roles: ${roles}`
      );
    }
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          contract: {
            connect: data.contract,
          },

          metadatum: data.metadatum
            ? {
                connect: data.metadatum,
              }
            : undefined,
        },
        select: {
          contract: {
            select: {
              id: true,
            },
          },

          createdAt: true,
          id: true,

          metadatum: {
            select: {
              id: true,
            },
          },

          tokenId: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Delete("/:id")
  @nestAccessControl.UseRoles({
    resource: "Nft",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: Nft })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async delete(
    @common.Param() params: NftWhereUniqueInput
  ): Promise<Nft | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          contract: {
            select: {
              id: true,
            },
          },

          createdAt: true,
          id: true,

          metadatum: {
            select: {
              id: true,
            },
          },

          tokenId: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}