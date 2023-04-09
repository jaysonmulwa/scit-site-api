import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Column } from 'typeorm';

@ObjectType()
export class Department {
    @Field(type => Int)
    id: number;
    
    @Field({ nullable: true })
    name ?: string;

    @Field({ nullable: true })
    description ?: string;
}