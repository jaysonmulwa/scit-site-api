import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Department } from './departments.entity';
import { NewDepartmentInput } from './dto/new-departments.input';
import { EditDepartmentInput } from './dto/edit-departments.input';


@Injectable()
export class DepartmentService {
    constructor(
        @InjectRepository(Department)
        private readonly academicsRepository: Repository<Department>,
    ) {}

    async findOneById(id: number): Promise<Department> {
        return this.academicsRepository.findOneBy({ id: id });
    }

    async findAll(): Promise<Department[]> {
        return this.academicsRepository.find();
    }

    async create(data: NewDepartmentInput): Promise<Department> {
        const academics = new Department();
        academics.name = data.name;
        academics.description = data.description;
        return this.academicsRepository.save(academics);
    }

    async remove(id: string): Promise<boolean> {
        return this.academicsRepository.delete(id).then(() => true);
    }

    async edit(id: number, data: EditDepartmentInput): Promise<Department> {
        const academics = new Department();
        academics.id = id;
        academics.name = data.name;
        academics.description = data.description;
        return this.academicsRepository.save(academics);
    }
}