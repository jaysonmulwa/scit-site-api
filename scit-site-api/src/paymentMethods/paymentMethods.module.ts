import { Module } from '@nestjs/common';
import { PaymentMethodService } from './paymentMethods.service';
import { PaymentMethodResolver } from './paymentMethods.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PaymentMethod } from './paymentMethod.entity';

@Module({
    imports: [TypeOrmModule.forFeature([PaymentMethod])],
    providers: [PaymentMethodService, PaymentMethodResolver],
})

export class PaymentMethodsModule {}