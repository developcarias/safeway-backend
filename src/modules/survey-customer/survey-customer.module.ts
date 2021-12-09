import { Module } from '@nestjs/common';
import { SurveyCustomerService } from './survey-customer.service';
import { SurveyCustomerController } from './survey-customer.controller';
import { SurveyCustomerRepository } from './survey-customer.repository';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([SurveyCustomerRepository])],
  controllers: [SurveyCustomerController],
  providers: [SurveyCustomerService],
})
export class SurveyCustomerModule {}
