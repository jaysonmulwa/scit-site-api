import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Programme {
    @PrimaryGeneratedColumn({ type: 'int'})
    id: number;
    
    @Column({ length: 100, type: 'varchar'})
    programmeName: string;

    @Column({ length: 100, type: 'varchar'})
    programmeDescription: string;

    @Column({ length: 10, type: 'int'})
    departmentId: number;
}