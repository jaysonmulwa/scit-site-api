import { Field, InputType } from '@nestjs/graphql';
import { IsOptional, Length, MaxLength } from 'class-validator';

@InputType()
export class EditProgrammeInput {
  @Field({ nullable: false })
  @Length(30, 255)
  programmeName?: string;

}