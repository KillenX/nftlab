import { Module } from "@nestjs/common";
import { MetadatumModuleBase } from "./base/metadatum.module.base";
import { MetadatumService } from "./metadatum.service";
import { MetadatumController } from "./metadatum.controller";
import { MetadatumResolver } from "./metadatum.resolver";

@Module({
  imports: [MetadatumModuleBase],
  controllers: [MetadatumController],
  providers: [MetadatumService, MetadatumResolver],
  exports: [MetadatumService],
})
export class MetadatumModule {}
