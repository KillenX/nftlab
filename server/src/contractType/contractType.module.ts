import { Module } from "@nestjs/common";
import { ContractTypeModuleBase } from "./base/contractType.module.base";
import { ContractTypeService } from "./contractType.service";
import { ContractTypeController } from "./contractType.controller";
import { ContractTypeResolver } from "./contractType.resolver";

@Module({
  imports: [ContractTypeModuleBase],
  controllers: [ContractTypeController],
  providers: [ContractTypeService, ContractTypeResolver],
  exports: [ContractTypeService],
})
export class ContractTypeModule {}
