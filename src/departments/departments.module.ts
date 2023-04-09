import { Module } from '@nestjs/common';
import { DepartmentService } from './departments.service';
import { DepartmentResolver } from './departments.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Department } from './departments.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Department])],
    providers: [DepartmentService, DepartmentResolver],
})

export class DepartmentsModule {}