/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ContractWhereInput } from "./ContractWhereInput";
import { Type } from "class-transformer";
import { ContractOrderByInput } from "./ContractOrderByInput";

@ArgsType()
class ContractFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => ContractWhereInput,
  })
  @Field(() => ContractWhereInput, { nullable: true })
  @Type(() => ContractWhereInput)
  where?: ContractWhereInput;

  @ApiProperty({
    required: false,
    type: [ContractOrderByInput],
  })
  @Field(() => [ContractOrderByInput], { nullable: true })
  @Type(() => ContractOrderByInput)
  orderBy?: Array<ContractOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { ContractFindManyArgs };
