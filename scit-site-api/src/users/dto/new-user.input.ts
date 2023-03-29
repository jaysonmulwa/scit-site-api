import { Field, InputType } from '@nestjs/graphql';
import { IsOptional, Length, MaxLength } from 'class-validator';

@InputType()
export class NewUserInput {
  @Field({ nullable: true })
  @IsOptional()
  @Length(30, 255)
  firstName?: string;

  @Field(type => [String], { nullable: true })
  @IsOptional()
  @Length(30, 255)
  lastName: string;

  @Field({ nullable: false })
  @Length(30, 255)
  email: string;

  @Field({ nullable: false })
  @Length(30, 255)
  password: string;

  @Field({ nullable: true })
  @IsOptional()
  @Length(30, 255)
  role: string;
  
}