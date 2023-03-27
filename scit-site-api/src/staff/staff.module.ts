import { Module } from '@nestjs/common';
import { AppController } from './staff.controller';
import { AppService } from './staff.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
