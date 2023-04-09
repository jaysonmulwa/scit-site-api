import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class PaymentMethod {
    @PrimaryGeneratedColumn({ type: 'int'})
    id: number;
    
    @Column({ length: 100, type: 'varchar'})
    paymentMethodName: string;
}