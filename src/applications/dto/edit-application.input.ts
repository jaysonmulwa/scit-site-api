import { InputType, Field } from "@nestjs/graphql";
import { Length } from "class-validator";

@InputType()
export class EditApplicationInput {
    @Field({ nullable: true })
    @Length(30, 255)
    applicationType: string;
}