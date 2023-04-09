import { Args, Mutation, Resolver, Query } from "@nestjs/graphql";
import { PaymentMethod } from "./models/paymentMethod.model";
import { PaymentMethodService } from "./paymentMethods.service";
import { NewPaymentMethodInput } from "./dto/new-paymentMethod.input";
import { EditPaymentMethodInput } from "./dto/edit-paymentMethod.input";
import { PaymentMethodArgs } from "./dto/paymentMethod.args";

@Resolver(of => PaymentMethod)
export class PaymentMethodResolver {
    constructor(private readonly paymentMethodService: PaymentMethodService) {}

    //Return one paymentMethod by id
    @Query(returns => PaymentMethod)
    async paymentMethod(@Args('id') id: number) {
        return await this.paymentMethodService.findOneById(id);
    }

    //Return all paymentMethods
    @Query(returns => [PaymentMethod])
    async paymentMethods(@Args() paymentMethodArgs: PaymentMethodArgs) {
        return await this.paymentMethodService.findAll();
    }

    //Create a new paymentMethod
    @Mutation(returns => PaymentMethod)
    async createPaymentMethod(@Args('data') data: NewPaymentMethodInput) {
        return await this.paymentMethodService.create(data);
    }

    //Delete a paymentMethod
    @Mutation(returns => Boolean)
    async deletePaymentMethod(@Args('id') id: string) {
        return await this.paymentMethodService.remove(id);
    }

    // Edit a paymentMethod
    @Mutation(returns => PaymentMethod)
    async editPaymentMethod(@Args('id') id: number, @Args('data') data: EditPaymentMethodInput) {
        return await this.paymentMethodService.edit(id, data);
    }

}