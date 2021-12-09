import { Module } from '@nestjs/common';
import { SurveyService } from './survey.service';
import { SurveyController } from './survey.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SurveyRepository } from './survey.repository';

@Module({
  imports: [TypeOrmModule.forFeature([SurveyRepository])],
  controllers: [SurveyController],
  providers: [SurveyService],
})
export class SurveyModule {}
