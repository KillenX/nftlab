import { Module } from "@nestjs/common";
import { CollectionModuleBase } from "./base/collection.module.base";
import { CollectionService } from "./collection.service";
import { CollectionController } from "./collection.controller";
import { CollectionResolver } from "./collection.resolver";

@Module({
  imports: [CollectionModuleBase],
  controllers: [CollectionController],
  providers: [CollectionService, CollectionResolver],
  exports: [CollectionService],
})
export class CollectionModule {}
