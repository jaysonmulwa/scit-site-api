import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Login {
    @Field({ nullable: false })
    email: string;
    @Field({ nullable: false })
    password: string;
}

@ObjectType()
export class Logout {
    @Field({ nullable: false })
    email: string;
}