import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Customer } from '../customer/entities/customer.entity';
import { SurveyRepository } from '../survey/survey.repository';
import { CreateSurveyCustomerDto } from './dto/create-survey-customer.dto';
import { UpdateSurveyCustomerDto } from './dto/update-survey-customer.dto';
import { SurveyCustomer } from './entities/survey-customer.entity';
import { SurveyCustomerRepository } from './survey-customer.repository';

@Injectable()
export class SurveyCustomerService {
  constructor(
    @InjectRepository(SurveyCustomerRepository)
    private readonly _surveyCustomerRepository: SurveyCustomerRepository,
    @InjectRepository(SurveyRepository)
    private readonly _surveyRepository: SurveyRepository,
  ) {}

  create(createSurveyCustomerDto: CreateSurveyCustomerDto) {
    return 'This action adds a new surveyCustomer';
  }

  createAllWithCustomer(
    createSurveyCustomerDtos: CreateSurveyCustomerDto[],
    customer: Customer,
  ) {
    let surveCurstomers: SurveyCustomer[];
    createSurveyCustomerDtos.forEach(
      async (surveyCustomerDto: CreateSurveyCustomerDto) => {
        const surveyCusomer: SurveyCustomer = new SurveyCustomer();
        surveyCusomer.customer = customer;
        surveyCusomer.survey = await this._surveyRepository.findOne({
          id: surveyCustomerDto.survey_id,
        });
        surveyCusomer.valueText = surveyCustomerDto.answer_text;
        surveyCusomer.valueBoolean = surveyCusomer.valueBoolean;
        surveCurstomers.push(surveyCusomer);
      },
    );
    return this._surveyCustomerRepository.save(surveCurstomers);
  }

  findAll() {
    return `This action returns all surveyCustomer`;
  }

  findOne(id: number) {
    return `This action returns a #${id} surveyCustomer`;
  }

  update(id: number, updateSurveyCustomerDto: UpdateSurveyCustomerDto) {
    return `This action updates a #${id} surveyCustomer`;
  }

  remove(id: number) {
    return `This action removes a #${id} surveyCustomer`;
  }
}
