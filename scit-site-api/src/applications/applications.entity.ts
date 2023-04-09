import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Application {
    @PrimaryGeneratedColumn({ type: 'int'})
    id: number;
    
    @Column({ type: 'varchar'})
    applicationType: string;
}