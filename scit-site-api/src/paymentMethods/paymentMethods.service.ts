import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PaymentMethod } from './paymentMethod.entity';
import { NewPaymentMethodInput } from './dto/new-paymentMethod.input';
import { EditPaymentMethodInput } from './dto/edit-paymentMethod.input';


@Injectable()
export class PaymentMethodService {
    constructor(
        @InjectRepository(PaymentMethod)
        private readonly paymentMethodRepository: Repository<PaymentMethod>,
    ) {}

    async findOneById(id: number): Promise<PaymentMethod> {
        return this.paymentMethodRepository.findOneBy({ id: id });
    }

    async findAll(): Promise<PaymentMethod[]> {
        return this.paymentMethodRepository.find();
    }

    async create(data: NewPaymentMethodInput): Promise<PaymentMethod> {
        const paymentMethod = new PaymentMethod();
        paymentMethod.paymentMethodName = data.paymentMethodName;
        return this.paymentMethodRepository.save(paymentMethod);
    }

    async remove(id: string): Promise<boolean> {
        return this.paymentMethodRepository.delete(id).then(() => true);
    }

    async edit(id: number, data: EditPaymentMethodInput): Promise<PaymentMethod> {
        const paymentMethod = new PaymentMethod();
        paymentMethod.id = id;
        paymentMethod.paymentMethodName = data.paymentMethodName;
        return this.paymentMethodRepository.save(paymentMethod);
    }
}