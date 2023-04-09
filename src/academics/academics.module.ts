import { Module } from '@nestjs/common';
import { AcademicsService } from './academics.service';
import { AcademicsResolver } from './academics.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Academics } from './academics.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Academics])],
    providers: [AcademicsService, AcademicsResolver],
})

export class AcademicsModule {}