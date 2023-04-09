import { Module } from '@nestjs/common';
import { ProgrammeService } from './programmes.service';
import { ProgrammeResolver } from './programmes.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Programme } from './programme.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Programme])],
  providers: [ProgrammeService, ProgrammeResolver],
})
export class ProgrammesModule {}
