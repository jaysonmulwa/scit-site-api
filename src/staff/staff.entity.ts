import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Staff {
    @PrimaryGeneratedColumn({ type: 'int'})
    id: number;
    
    @Column({ nullable: false, type: 'varchar'})
    firstName: string;
    
    @Column({ default: '00000000', type: 'varchar'})
    lastName: string;

    @Column({ type: 'varchar'})
    speciality: string;

    @Column({ type: 'integer'})
    departmentId: number;
}