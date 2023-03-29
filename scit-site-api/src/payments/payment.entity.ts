import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Payment {
    @PrimaryGeneratedColumn({ type: 'int'})
    id: number;
    
    @Column({ length: 100, type: 'varchar'})
    transactionDate: string;

    @Column({ length: 100, type: 'varchar'})
    transactionAmount: number;

    @Column({ length: 100, type: 'varchar'})
    transactionStatus: string;

    @Column({ length: 100, type: 'varchar'})
    transactionReference: string;

    @Column({ length: 100, type: 'varchar'})
    paymentMethodId: number;
}