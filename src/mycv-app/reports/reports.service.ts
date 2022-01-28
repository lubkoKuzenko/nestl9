import { Injectable } from '@nestjs/common';
import { ReportsRepository } from './reports.repository';

@Injectable()
export class ReportsService {
  constructor(public reportsRepository: ReportsRepository) {}
}
