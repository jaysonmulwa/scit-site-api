import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Staff } from './staff.entity';
import { NewStaffInput } from './dto/new-staff.input';
import { EditStaffInput } from './dto/edit-staff.input';
import { StaffArgs } from './dto/staff.args';
import { Repository } from 'typeorm';

@Injectable()
export class StaffService {

  constructor(
    @InjectRepository(Staff)
    private readonly staffRepository: Repository<Staff>,
  ) {}

 
  async findOneById(id: number): Promise<Staff> {
    return this.staffRepository.findOneBy({ id: id });
  }

  async findAll(staffArgs: StaffArgs): Promise<Staff[]> {
    return this.staffRepository.find();
  }

  async create(data: NewStaffInput): Promise<Staff> {
    const staff = new Staff();
    staff.firstName = data.firstName;
    staff.lastName = data.lastName;
    return this.staffRepository.save(staff);
  }

  async remove(id: string): Promise<boolean> {
    return this.staffRepository.delete(id).then(() => true);
  }

  async edit(id: number, data: EditStaffInput): Promise<Staff> {
    const staff = new Staff();
    staff.id = id;
    staff.firstName = data.firstName;
    staff.lastName = data.lastName;
    return this.staffRepository.save(staff);
  }
}
