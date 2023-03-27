import { Injectable } from '@nestjs/common';
import { Programme } from './models/programme.model';
import { NewProgrammeInput } from './dto/new-programme.input';
import { ProgrammeArgs } from './dto/programme.args';

@Injectable()
export class ProgrammeService {
  getHello(): string {
    return 'Hello World!';
  }

  async create(data: NewProgrammeInput): Promise<Programme> {
    return {} as any;
  }

  async findOneById(id: number): Promise<Programme> {
    return {} as any;
  }

  async findAll(staffArgs: ProgrammeArgs): Promise<Programme[]> {
    return [] as Programme[];
  }

  async remove(id: string): Promise<boolean> {
    return true;
  }
}
