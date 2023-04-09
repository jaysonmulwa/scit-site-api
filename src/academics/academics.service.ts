import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Academics } from './academics.entity';
import { NewAcademicsInput } from './dto/new-academics.input';
import { EditAcademicsInput } from './dto/edit-academics.input';


@Injectable()
export class AcademicsService {
    constructor(
        @InjectRepository(Academics)
        private readonly academicsRepository: Repository<Academics>,
    ) {}

    async findOneById(id: number): Promise<Academics> {
        return this.academicsRepository.findOneBy({ id: id });
    }

    async findAll(): Promise<Academics[]> {
        return this.academicsRepository.find();
    }

    async create(data: NewAcademicsInput): Promise<Academics> {
        const academics = new Academics();
        academics.name = data.name;
        academics.description = data.description;
        academics.activityType = data.activityType;
        academics.departmentId = data.departmentId;
        return this.academicsRepository.save(academics);
    }

    async remove(id: string): Promise<boolean> {
        return this.academicsRepository.delete(id).then(() => true);
    }

    async edit(id: number, data: EditAcademicsInput): Promise<Academics> {
        const academics = new Academics();
        academics.id = id;
        academics.name = data.name;
        academics.description = data.description;
        academics.activityType = data.activityType;
        academics.departmentId = data.departmentId;
        return this.academicsRepository.save(academics);
    }
}