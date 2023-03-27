import { Field, InputType } from '@nestjs/graphql';
import { IsOptional, Length, MaxLength } from 'class-validator';

@InputType()
export class EditStaffInput {
  @Field({ nullable: true })
  @IsOptional()
  @Length(30, 255)
  firstName?: string;

 @Field(type => [String], { nullable: true })
  @IsOptional()
  @Length(30, 255)
  lastName: string;
}