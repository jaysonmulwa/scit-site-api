import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Payment {
    @Field(type => Int)
    id: number;
    
    @Field({ nullable: true })
    payment ?: string;
}