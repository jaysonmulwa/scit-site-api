import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Academics {
    @PrimaryGeneratedColumn({ type: 'int'})
    id: number;

    @Column({ type: 'varchar'})
    name: string;

    @Column({ type: 'varchar'})
    description: string;

    @Column({ type: 'varchar'})
    activityType: string;

    @Column({ type: 'integer'})
    departmentId: number;
    
}