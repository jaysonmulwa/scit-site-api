import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field(type => Int)
  id: number;

  @Field({ nullable: true })
  firstName?: string;

  @Field({ nullable: true })
  lastName?: string;

  @Field({ nullable: false })
  email: string;

  @Field({ nullable: false })
  password: string;

  @Field({ nullable: true })
  role?: string;

}