import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateSurveyCustomerDto } from './dto/create-survey-customer.dto';
import { UpdateSurveyCustomerDto } from './dto/update-survey-customer.dto';
import { SurveyCustomerRepository } from './survey-customer.repository';

@Injectable()
export class SurveyCustomerService {
  constructor(
    @InjectRepository(SurveyCustomerRepository)
    private readonly _surveyCustomerRepository: SurveyCustomerRepository,
  ) {}

  create(createSurveyCustomerDto: CreateSurveyCustomerDto) {
    return 'This action adds a new surveyCustomer';
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
