import { InputType, Field } from "@nestjs/graphql";
import { Length } from "class-validator";

@InputType()
export class NewPaymentInput {
    @Field({ nullable: true })
    @Length(30, 255)
    payment: string;
}