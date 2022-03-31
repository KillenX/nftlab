import { Module } from "@nestjs/common";
import { TestModuleBase } from "./base/test.module.base";
import { TestService } from "./test.service";
import { TestController } from "./test.controller";
import { TestResolver } from "./test.resolver";

@Module({
  imports: [TestModuleBase],
  controllers: [TestController],
  providers: [TestService, TestResolver],
  exports: [TestService],
})
export class TestModule {}
