import { InputType, Field } from "@nestjs/graphql";
import { Length } from "class-validator";

@InputType()
export class NewPaymentMethodInput {
    @Field({ nullable: true })
    @Length(30, 255)
    paymentMethodName: string;
}