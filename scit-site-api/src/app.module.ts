import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StaffModule } from './staff/staff.module';
import { ProgrammesModule } from './programmes/programmes.module';
import { PaymentsModule } from './payments/payment.module';
import { PaymentMethodsModule} from './paymentMethods/paymentMethods.module';
import { ApplicationsModule } from './applications/applications.module';
import { AcademicssModule } from './academics/academics.module';
import { Staff } from './staff/staff.entity';
import { Programme } from './programmes/programme.entity';
import { Payment } from './payments/payment.entity';
import { PaymentMethod } from './paymentMethods/paymentMethod.entity';
import { Application } from './applications/applications.entity';
import { Academics } from './academics/academics.entity';


@Module({
  imports: [
    StaffModule,
    ProgrammesModule,
    PaymentsModule,
    PaymentMethodsModule,
    ApplicationsModule,
    AcademicssModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'test',
      entities: [ Staff, Programme , Payment, PaymentMethod, Application, Academics],
      synchronize: true, //not to be used in production
    }),
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
