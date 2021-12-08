import { Injectable } from '@nestjs/common';
import { CreateSurveyCustomerDto } from './dto/create-survey-customer.dto';
import { UpdateSurveyCustomerDto } from './dto/update-survey-customer.dto';

@Injectable()
export class SurveyCustomerService {
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
