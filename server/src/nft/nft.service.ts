import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { NftServiceBase } from "./base/nft.service.base";

@Injectable()
export class NftService extends NftServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
