import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Programme {
    @PrimaryGeneratedColumn({ type: 'int'})
    id: number;
    
    @Column({ type: 'varchar', nullable: true})
    programmeName: string;

    @Column({ type: 'varchar'})
    programmeDescription: string;

    @Column({ type: 'int'})
    departmentId: number;
}