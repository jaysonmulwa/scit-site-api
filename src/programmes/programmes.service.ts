import { Injectable } from '@nestjs/common';
import { NewProgrammeInput } from './dto/new-programme.input';
import { EditProgrammeInput } from './dto/edit-programme.input';
import { ProgrammeArgs } from './dto/programme.args';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Programme } from './programme.entity';

@Injectable()
export class ProgrammeService {
  constructor(
    @InjectRepository(Programme)
    private readonly programmeRepository: Repository<Programme>,
  ) {}

  async findOneById(id: number): Promise<Programme> {
    return this.programmeRepository.findOneBy({ id: id });
  }

  async findAll(programmeArgs: ProgrammeArgs): Promise<Programme[]> {
    return this.programmeRepository.find();
  }

  async create(data: NewProgrammeInput): Promise<Programme> {
    const programme = new Programme();
    programme.programmeName = data.programmeName;
    return this.programmeRepository.save(programme);
  }

  async remove(id: string): Promise<boolean> {
    return this.programmeRepository.delete(id).then(() => true);
  }

  async edit(id: number, data: EditProgrammeInput): Promise<Programme> {
    const programme = new Programme();
    programme.id = id;
    programme.programmeName = data.programmeName;
    return this.programmeRepository.save(programme);
  }
}
