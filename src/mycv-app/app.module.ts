import { Module } from '@nestjs/common';
import { AppController } from './app.controller';

import { ReportsModule } from './reports/reports.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [UsersModule, ReportsModule],
  controllers: [AppController],
  providers: [],
})
export class MyCvModule {}
