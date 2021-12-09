import { EntityRepository, Repository } from 'typeorm';
import { PotentialCustomer } from './entities/potential-customer.entity';

@EntityRepository(PotentialCustomer)
export class PotentialCustomerRepository extends Repository<PotentialCustomer> {}
