import { Args, Mutation, Resolver, Query } from "@nestjs/graphql";
import { Payment } from "./models/payment.model";
import { PaymentService } from "./payment.service";
import { NewPaymentInput } from "./dto/new-payment.input";
import { EditPaymentInput } from "./dto/edit-payment.input";
import { PaymentArgs } from "./dto/payment.args";

@Resolver(of => Payment)
export class PaymentResolver {
    constructor(private readonly paymentService: PaymentService) {}

    //Return one payment by id
    @Query(returns => Payment)
    async payment(@Args('id') id: number) {
        return await this.paymentService.findOneById(id);
    }

    //Return all payments
    @Query(returns => [Payment])
    async payments(@Args() paymentArgs: PaymentArgs) {
        return await this.paymentService.findAll();
    }

    //Create a new payment
    @Mutation(returns => Payment)
    async createPayment(@Args('data') data: NewPaymentInput) {
        return await this.paymentService.create(data);
    }

    //Delete a payment
    @Mutation(returns => Boolean)
    async deletePayment(@Args('id') id: string) {
        return await this.paymentService.remove(id);
    }

    // Edit a payment
    @Mutation(returns => Payment)
    async editPayment(@Args('id') id: number, @Args('data') data: EditPaymentInput) {
        return await this.paymentService.edit(id, data);
    }

}