import { Module } from '@nestjs/common';
import { AppController } from './programmes.controller';
import { AppService } from './programmes.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
