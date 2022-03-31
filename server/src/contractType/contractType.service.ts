import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { ContractTypeServiceBase } from "./base/contractType.service.base";

@Injectable()
export class ContractTypeService extends ContractTypeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
