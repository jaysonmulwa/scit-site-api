import { Module } from '@nestjs/common';
import { ApplicationService } from './academics.service';
import { ApplicationResolver } from './academics.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Application } from './academics.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Application])],
    providers: [ApplicationService, ApplicationResolver],
})

export class ApplicationsModule {}