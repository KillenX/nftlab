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
import { IsString, IsOptional, ValidateNested } from "class-validator";
import { MetadatumWhereUniqueInput } from "../../metadatum/base/MetadatumWhereUniqueInput";
import { Type } from "class-transformer";
@InputType()
class AttributeUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  displayType?: string | null;

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
  traitType?: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  value?: string;
}
export { AttributeUpdateInput };
