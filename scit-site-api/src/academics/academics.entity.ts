import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Academics {
    @PrimaryGeneratedColumn({ type: 'int'})
    id: number;

    @Column({ length: 100, type: 'varchar'})
    name: string;

    @Column({ length: 100, type: 'varchar'})
    description: string;

    @Column({ length: 100, type: 'varchar'})
    activityType: string;

    @Column({ length: 10, type: 'integer'})
    departmentId: number;
    
}