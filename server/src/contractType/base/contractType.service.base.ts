/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "nestjs-prisma";
import { Prisma, ContractType, Contract } from "@prisma/client";

export class ContractTypeServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.ContractTypeFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ContractTypeFindManyArgs>
  ): Promise<number> {
    return this.prisma.contractType.count(args);
  }

  async findMany<T extends Prisma.ContractTypeFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ContractTypeFindManyArgs>
  ): Promise<ContractType[]> {
    return this.prisma.contractType.findMany(args);
  }
  async findOne<T extends Prisma.ContractTypeFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.ContractTypeFindUniqueArgs>
  ): Promise<ContractType | null> {
    return this.prisma.contractType.findUnique(args);
  }
  async create<T extends Prisma.ContractTypeCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ContractTypeCreateArgs>
  ): Promise<ContractType> {
    return this.prisma.contractType.create<T>(args);
  }
  async update<T extends Prisma.ContractTypeUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ContractTypeUpdateArgs>
  ): Promise<ContractType> {
    return this.prisma.contractType.update<T>(args);
  }
  async delete<T extends Prisma.ContractTypeDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.ContractTypeDeleteArgs>
  ): Promise<ContractType> {
    return this.prisma.contractType.delete(args);
  }

  async findContracts(
    parentId: string,
    args: Prisma.ContractFindManyArgs
  ): Promise<Contract[]> {
    return this.prisma.contractType
      .findUnique({
        where: { id: parentId },
      })
      .contracts(args);
  }
}
