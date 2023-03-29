import { InputType, Field } from "@nestjs/graphql";
import { Length } from "class-validator";

@InputType()
export class NewPaymentInput {
    
    @Field({ nullable: true })
    @Length(30, 255)
    transactionDate: string;

    @Field({ nullable: false })
    @Length(30, 255)
    transactionAmount: number;

    @Field({ nullable: true })
    @Length(30, 255)
    transactionStatus: string;

    @Field({ nullable: true })
    @Length(30, 255)
    transactionReference: string;

    @Field({ nullable: true })
    @Length(30, 255)
    paymentMethodId: number;

}