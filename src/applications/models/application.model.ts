import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Application {
    @Field(type => Int)
    id: number;
    
    @Field({ nullable: true })
    applicationType ?: string;
}