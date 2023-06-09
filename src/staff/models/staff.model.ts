import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Staff {
  @Field(type => Int)
  id: number;

  @Field({ nullable: true })
  firstName?: string;

  @Field({ nullable: true })
  lastName?: string;

  @Field({ nullable: true })
  speciality?: string;

  @Field({ nullable: true })
  departmentId?: number;

}