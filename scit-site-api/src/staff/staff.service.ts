import { Injectable } from '@nestjs/common';
import { Staff } from './models/staff.model';
import { NewStaffInput } from './dto/new-staff.input';
import { StaffArgs } from './dto/staff.args';

@Injectable()
export class StaffService {
  // getHello(): string {
  //   return 'Hello World!';
  // }

  async create(data: NewStaffInput): Promise<Staff> {
    return {} as any;
  }

  async findOneById(id: number): Promise<Staff> {
    return {} as any;
  }

  async findAll(staffArgs: StaffArgs): Promise<Staff[]> {
    return [] as Staff[];
  }

  async remove(id: string): Promise<boolean> {
    return true;
  }
}
