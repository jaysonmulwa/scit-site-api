import { Module } from '@nestjs/common';
import { StaffService } from './staff.service';
import { StaffResolver } from './staff.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Staff } from './staff.entity';
//import { AuthModule } from 'src/auth/auth.module';

@Module({
  //imports: [TypeOrmModule.forFeature([Staff]), AuthModule],
  imports: [TypeOrmModule.forFeature([Staff])],
  providers: [StaffService, StaffResolver],
})
export class StaffModule {}
