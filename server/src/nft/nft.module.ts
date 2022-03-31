import { Module } from "@nestjs/common";
import { NftModuleBase } from "./base/nft.module.base";
import { NftService } from "./nft.service";
import { NftController } from "./nft.controller";
import { NftResolver } from "./nft.resolver";

@Module({
  imports: [NftModuleBase],
  controllers: [NftController],
  providers: [NftService, NftResolver],
  exports: [NftService],
})
export class NftModule {}
