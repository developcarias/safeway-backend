import { EntityRepository, Repository } from 'typeorm';
import { CustomerBeneficiary } from './entities/customer-beneficiary.entity';

@EntityRepository(CustomerBeneficiary)
export class CustomerBeneficiaryRepository extends Repository<CustomerBeneficiary> {}
