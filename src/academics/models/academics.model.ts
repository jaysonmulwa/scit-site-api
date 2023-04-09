import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Column } from 'typeorm';

@ObjectType()
export class Academics {
    @Field(type => Int)
    id: number;
    
    @Field({ nullable: true })
    name ?: string;

    @Field({ nullable: true })
    description ?: string;

    @Field({ nullable: true })
    activityType ?: string;

    @Field({ nullable: true })
    departmentId ?: number;
}