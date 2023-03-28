import { Module } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { PaymentResolver } from './payment.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Payment } from './payment.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Payment])],
    providers: [PaymentService, PaymentResolver],
})

export class PaymentsModule {}