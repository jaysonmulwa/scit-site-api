import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Programme {
  @Field(type => Int)
  id: number;

  @Field({ nullable: true })
  programmeName ?: string;
}