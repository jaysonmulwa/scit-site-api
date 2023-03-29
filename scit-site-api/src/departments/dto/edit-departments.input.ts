import { InputType, Field } from "@nestjs/graphql";
import { Length } from "class-validator";

@InputType()
export class EditDepartmentInput {

    @Field({ nullable: true })
    @Length(30, 255)
    name: string;

    @Field({ nullable: true })
    @Length(30, 255)
    description: string;

    @Field({ nullable: true })
    @Length(30, 255)
    departmentId: number;
    
}