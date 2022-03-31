/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ContractWhereInput } from "./ContractWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class ContractListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => ContractWhereInput,
  })
  @ValidateNested()
  @Type(() => ContractWhereInput)
  @IsOptional()
  @Field(() => ContractWhereInput, {
    nullable: true,
  })
  every?: ContractWhereInput;

  @ApiProperty({
    required: false,
    type: () => ContractWhereInput,
  })
  @ValidateNested()
  @Type(() => ContractWhereInput)
  @IsOptional()
  @Field(() => ContractWhereInput, {
    nullable: true,
  })
  some?: ContractWhereInput;

  @ApiProperty({
    required: false,
    type: () => ContractWhereInput,
  })
  @ValidateNested()
  @Type(() => ContractWhereInput)
  @IsOptional()
  @Field(() => ContractWhereInput, {
    nullable: true,
  })
  none?: ContractWhereInput;
}
export { ContractListRelationFilter };
