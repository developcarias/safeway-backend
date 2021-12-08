import { PartialType } from '@nestjs/swagger';
import { CreateSurveyCustomerDto } from './create-survey-customer.dto';

export class UpdateSurveyCustomerDto extends PartialType(CreateSurveyCustomerDto) {}
