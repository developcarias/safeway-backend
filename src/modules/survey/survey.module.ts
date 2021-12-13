import { Module } from '@nestjs/common';
import { SurveyService } from './survey.service';
import { SurveyController } from './survey.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SurveyRepository } from './survey.repository';
import { SurveyCustomerRepository } from '../survey-customer/survey-customer.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([SurveyRepository, SurveyCustomerRepository]),
  ],
  controllers: [SurveyController],
  providers: [SurveyService],
})
export class SurveyModule {}
