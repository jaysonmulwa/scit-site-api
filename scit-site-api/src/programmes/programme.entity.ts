import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Programme {
    @PrimaryGeneratedColumn({ type: 'int'})
    id: number;
    
    @Column({ nullable: false, length: 100, type: 'varchar'})
    programmeName: string;
}