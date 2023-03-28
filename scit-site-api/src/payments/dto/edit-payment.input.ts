import { InputType, Field } from "@nestjs/graphql";
import { Length } from "class-validator";

@InputType()
export class EditPaymentInput {
    @Field({ nullable: true })
    @Length(30, 255)
    payment: string;
}