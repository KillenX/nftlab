import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { TestServiceBase } from "./base/test.service.base";

@Injectable()
export class TestService extends TestServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
