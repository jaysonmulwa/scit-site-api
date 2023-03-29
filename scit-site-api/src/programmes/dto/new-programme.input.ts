import { Field, InputType } from '@nestjs/graphql';
import { IsOptional, Length, MaxLength } from 'class-validator';

@InputType()
export class NewProgrammeInput {
  
  @Field({ nullable: true })
  @Length(30, 255)
  programmeName?: string;

  @Field({ nullable: true })
  @Length(30, 255)
  programmeDescription?: string;

  @Field({ nullable: true })
  @Length(30, 255)
  departmentId?: number;

}