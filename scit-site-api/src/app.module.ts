import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { StaffModule } from './staff/staff.module';

@Module({
  imports: [
    StaffModule,
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      debug: true,
      playground: true,
      autoSchemaFile: 'schema.gql',
      sortSchema: true,
    }),
  ],
})
export class AppModule {}
