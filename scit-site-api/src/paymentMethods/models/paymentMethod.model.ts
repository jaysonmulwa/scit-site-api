import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class PaymentMethod {
    @Field(type => Int)
    id: number;
    
    @Field({ nullable: true })
    paymentMethodName ?: string;
}