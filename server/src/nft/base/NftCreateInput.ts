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
import { ContractWhereUniqueInput } from "../../contract/base/ContractWhereUniqueInput";
import { ValidateNested, IsOptional, IsString } from "class-validator";
import { Type } from "class-transformer";
import { MetadatumWhereUniqueInput } from "../../metadatum/base/MetadatumWhereUniqueInput";
@InputType()
class NftCreateInput {
  @ApiProperty({
    required: true,
    type: () => ContractWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ContractWhereUniqueInput)
  @Field(() => ContractWhereUniqueInput)
  contract!: ContractWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => MetadatumWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => MetadatumWhereUniqueInput)
  @IsOptional()
  @Field(() => MetadatumWhereUniqueInput, {
    nullable: true,
  })
  metadatum?: MetadatumWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  tokenId?: string | null;
}
export { NftCreateInput };
