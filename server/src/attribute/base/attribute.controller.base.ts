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
import { AttributeService } from "../attribute.service";
import { AttributeCreateInput } from "./AttributeCreateInput";
import { AttributeWhereInput } from "./AttributeWhereInput";
import { AttributeWhereUniqueInput } from "./AttributeWhereUniqueInput";
import { AttributeFindManyArgs } from "./AttributeFindManyArgs";
import { AttributeUpdateInput } from "./AttributeUpdateInput";
import { Attribute } from "./Attribute";
@swagger.ApiBearerAuth()
export class AttributeControllerBase {
  constructor(
    protected readonly service: AttributeService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Post()
  @nestAccessControl.UseRoles({
    resource: "Attribute",
    action: "create",
    possession: "any",
  })
  @swagger.ApiCreatedResponse({ type: Attribute })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async create(
    @common.Body() data: AttributeCreateInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<Attribute> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "create",
      possession: "any",
      resource: "Attribute",
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
        `providing the properties: ${properties} on ${"Attribute"} creation is forbidden for roles: ${roles}`
      );
    }
    return await this.service.create({
      data: {
        ...data,

        metadatum: data.metadatum
          ? {
              connect: data.metadatum,
            }
          : undefined,
      },
      select: {
        createdAt: true,
        displayType: true,
        id: true,

        metadatum: {
          select: {
            id: true,
          },
        },

        traitType: true,
        updatedAt: true,
        value: true,
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
    resource: "Attribute",
    action: "read",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: [Attribute] })
  @swagger.ApiForbiddenResponse()
  @ApiNestedQuery(AttributeFindManyArgs)
  async findMany(
    @common.Req() request: Request,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<Attribute[]> {
    const args = plainToClass(AttributeFindManyArgs, request.query);

    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Attribute",
    });
    const results = await this.service.findMany({
      ...args,
      select: {
        createdAt: true,
        displayType: true,
        id: true,

        metadatum: {
          select: {
            id: true,
          },
        },

        traitType: true,
        updatedAt: true,
        value: true,
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
    resource: "Attribute",
    action: "read",
    possession: "own",
  })
  @swagger.ApiOkResponse({ type: Attribute })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async findOne(
    @common.Param() params: AttributeWhereUniqueInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<Attribute | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "Attribute",
    });
    const result = await this.service.findOne({
      where: params,
      select: {
        createdAt: true,
        displayType: true,
        id: true,

        metadatum: {
          select: {
            id: true,
          },
        },

        traitType: true,
        updatedAt: true,
        value: true,
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
    resource: "Attribute",
    action: "update",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: Attribute })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async update(
    @common.Param() params: AttributeWhereUniqueInput,
    @common.Body()
    data: AttributeUpdateInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<Attribute | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Attribute",
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
        `providing the properties: ${properties} on ${"Attribute"} update is forbidden for roles: ${roles}`
      );
    }
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          metadatum: data.metadatum
            ? {
                connect: data.metadatum,
              }
            : undefined,
        },
        select: {
          createdAt: true,
          displayType: true,
          id: true,

          metadatum: {
            select: {
              id: true,
            },
          },

          traitType: true,
          updatedAt: true,
          value: true,
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
    resource: "Attribute",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: Attribute })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async delete(
    @common.Param() params: AttributeWhereUniqueInput
  ): Promise<Attribute | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          createdAt: true,
          displayType: true,
          id: true,

          metadatum: {
            select: {
              id: true,
            },
          },

          traitType: true,
          updatedAt: true,
          value: true,
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
