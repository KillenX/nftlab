import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { MetadatumServiceBase } from "./base/metadatum.service.base";

@Injectable()
export class MetadatumService extends MetadatumServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
