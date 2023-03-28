import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Payment {
    @PrimaryGeneratedColumn({ type: 'int'})
    id: number;
    
    @Column({ length: 100, type: 'varchar'})
    payment: string;
}