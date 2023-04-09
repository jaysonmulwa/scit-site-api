import { Module } from '@nestjs/common';
import { ApplicationService } from './applications.service';
import { ApplicationResolver } from './applications.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Application } from './applications.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Application])],
    providers: [ApplicationService, ApplicationResolver],
})

export class ApplicationsModule {}