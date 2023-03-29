import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Department {
    @PrimaryGeneratedColumn({ type: 'int'})
    id: number;

    @Column({ length: 100, type: 'varchar'})
    name: string;

    @Column({ length: 100, type: 'varchar'})
    description: string;
    
}