import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Payment } from './payment.entity';
import { NewPaymentInput } from './dto/new-payment.input';
import { EditPaymentInput } from './dto/edit-payment.input';


@Injectable()
export class PaymentService {
    constructor(
        @InjectRepository(Payment)
        private readonly paymentRepository: Repository<Payment>,
    ) {}

    async findOneById(id: number): Promise<Payment> {
        return this.paymentRepository.findOneBy({ id: id });
    }

    async findAll(): Promise<Payment[]> {
        return this.paymentRepository.find();
    }

    async create(data: NewPaymentInput): Promise<Payment> {
        const payment = new Payment();
        payment.transactionDate = data.transactionDate;
        payment.transactionAmount = data.transactionAmount;
        payment.transactionStatus = data.transactionStatus;
        payment.transactionReference = data.transactionReference;
        payment.paymentMethodId = data.paymentMethodId;
        return this.paymentRepository.save(payment);
    }

    async remove(id: string): Promise<boolean> {
        return this.paymentRepository.delete(id).then(() => true);
    }

    async edit(id: number, data: EditPaymentInput): Promise<Payment> {
        const payment = new Payment();
        payment.id = id;
        payment.transactionDate = data.transactionDate;
        payment.transactionAmount = data.transactionAmount;
        payment.transactionStatus = data.transactionStatus;
        payment.transactionReference = data.transactionReference;
        payment.paymentMethodId = data.paymentMethodId;
        return this.paymentRepository.save(payment);
    }
}