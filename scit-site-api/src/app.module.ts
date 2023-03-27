import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { StaffModule } from './staff/staff.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      debug: true,
      playground: true,
      include: [StaffModule],
      autoSchemaFile: true,
      sortSchema: true,
      //context: ({ req }) => ({ req }),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
