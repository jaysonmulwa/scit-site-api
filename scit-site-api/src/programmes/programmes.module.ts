import { Module } from '@nestjs/common';
import { ProgrammeService } from './programmes.service';
import { ProgrammeResolver } from './programmes.resolver';

@Module({
  providers: [ProgrammeService, ProgrammeResolver],
})
export class ProgrammesModule {}
