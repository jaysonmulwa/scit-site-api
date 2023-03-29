import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Payment {
    @Field(type => Int)
    id: number;
    
    @Field({ nullable: true })
    transactionDate ?: string;

    @Field({ nullable: true })
    transactionAmount ?: number;

    @Field({ nullable: true })
    transactionStatus ?: string;

    @Field({ nullable: true })
    transactionReference ?: string;

    @Field({ nullable: true })
    paymentMethodId ?: number;

}