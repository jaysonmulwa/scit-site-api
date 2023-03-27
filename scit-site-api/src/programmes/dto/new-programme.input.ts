import { Field, InputType } from '@nestjs/graphql';
import { IsOptional, Length, MaxLength } from 'class-validator';

@InputType()
export class NewProgrammeInput {
  @Field({ nullable: true })
  @Length(30, 255)
  programmeName?: string;

}