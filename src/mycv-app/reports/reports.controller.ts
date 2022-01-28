import { Controller, Get } from '@nestjs/common';
import { ReportsService } from './reports.service';

@Controller()
export class ReportsController {
  constructor(public reportsService: ReportsService) {}

  @Get()
  getReports(): string {
    return 'all reports';
  }
}
