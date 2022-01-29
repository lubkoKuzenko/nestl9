import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { TypeormService } from './config';

import { ReportsModule } from './reports/reports.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({ useClass: TypeormService }),
    UsersModule,
    ReportsModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class MyCvModule {}
