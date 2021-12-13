import { Module } from '@nestjs/common';
import { SurveyCustomerService } from './survey-customer.service';
import { SurveyCustomerController } from './survey-customer.controller';
import { SurveyCustomerRepository } from './survey-customer.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SurveyRepository } from '../survey/survey.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([SurveyCustomerRepository, SurveyRepository]),
  ],
  controllers: [SurveyCustomerController],
  providers: [SurveyCustomerService],
})
export class SurveyCustomerModule {}
