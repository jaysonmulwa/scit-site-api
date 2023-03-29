import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Users {
    @PrimaryGeneratedColumn({ type: 'int'})
    id: number;
    
    @Column({ nullable: false, length: 100, type: 'varchar'})
    firstName: string;
    
    @Column({ length: 50, default: '00000000', type: 'varchar'})
    lastName: string;

    @Column({ length: 100, type: 'varchar'})
    email: string;

    @Column({ length: 100, type: 'varchar'})
    password: string;

    @Column({ length: 100, type: 'varchar'})
    role: string;
}