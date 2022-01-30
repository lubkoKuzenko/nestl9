import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AuthModule } from './auth';
import { TypeormService } from './config';

import { ReportsModule } from './reports/reports.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({ useClass: TypeormService }),
    AuthModule,
    UsersModule,
    ReportsModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class MyCvModule {}
