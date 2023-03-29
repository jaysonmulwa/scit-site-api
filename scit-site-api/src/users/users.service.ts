import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from './users.entity';
import { NewUserInput } from './dto/new-user.input';
import { EditUserInput } from './dto/edit-user.input';
import { UserArgs } from './dto/user.args';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(Users)
    private readonly usersRepository: Repository<Users>,
  ) {}

 
  async findOneById(id: number): Promise<Users> {
    return this.usersRepository.findOneBy({ id: id });
  }

  async findOneByEmail(email: string): Promise<Users> {
    return this.usersRepository.findOneBy({ email: email });
  }

  async findAll(usersArgs: UserArgs): Promise<Users[]> {
    return this.usersRepository.find();
  }

  async create(data: NewUserInput): Promise<Users> {
    const users = new Users();
    users.firstName = data.firstName;
    users.lastName = data.lastName;
    users.email = data.email;
    users.password = data.password;
    users.role = data.role;
    return this.usersRepository.save(users);
  }

  async remove(id: string): Promise<boolean> {
    return this.usersRepository.delete(id).then(() => true);
  }

  async edit(id: number, data: EditUserInput): Promise<Users> {
    const users = new Users();
    users.id = id;
    users.firstName = data.firstName;
    users.lastName = data.lastName;
    users.email = data.email;
    users.password = data.password;
    users.role = data.role;
    return this.usersRepository.save(users);
  }
}
