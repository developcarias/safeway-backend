import { EntityRepository, Repository } from 'typeorm';
import { SurveyCustomer } from './entities/survey-customer.entity';

@EntityRepository(SurveyCustomer)
export class SurveyCustomerRepository extends Repository<SurveyCustomer> {}
