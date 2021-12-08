import { Module } from '@nestjs/common';
import { SurveyCustomerService } from './survey-customer.service';
import { SurveyCustomerController } from './survey-customer.controller';

@Module({
  controllers: [SurveyCustomerController],
  providers: [SurveyCustomerService]
})
export class SurveyCustomerModule {}
