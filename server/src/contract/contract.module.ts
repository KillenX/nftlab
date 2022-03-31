import { Module } from "@nestjs/common";
import { ContractModuleBase } from "./base/contract.module.base";
import { ContractService } from "./contract.service";
import { ContractController } from "./contract.controller";
import { ContractResolver } from "./contract.resolver";

@Module({
  imports: [ContractModuleBase],
  controllers: [ContractController],
  providers: [ContractService, ContractResolver],
  exports: [ContractService],
})
export class ContractModule {}
