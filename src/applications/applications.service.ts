import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Application } from './applications.entity';
import { NewApplicationInput } from './dto/new-application.input';
import { EditApplicationInput } from './dto/edit-application.input';


@Injectable()
export class ApplicationService {
    constructor(
        @InjectRepository(Application)
        private readonly applicationRepository: Repository<Application>,
    ) {}

    async findOneById(id: number): Promise<Application> {
        return this.applicationRepository.findOneBy({ id: id });
    }

    async findAll(): Promise<Application[]> {
        return this.applicationRepository.find();
    }

    async create(data: NewApplicationInput): Promise<Application> {
        const application = new Application();
        application.applicationType = data.applicationType;
        return this.applicationRepository.save(application);
    }

    async remove(id: string): Promise<boolean> {
        return this.applicationRepository.delete(id).then(() => true);
    }

    async edit(id: number, data: EditApplicationInput): Promise<Application> {
        const application = new Application();
        application.id = id;
        application.applicationType = data.applicationType;
        return this.applicationRepository.save(application);
    }
}