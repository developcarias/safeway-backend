import { EntityRepository, Repository } from 'typeorm';
import { UserCustomer } from './entities/user-customer.entity';

@EntityRepository(UserCustomer)
export class UserCustomerRepository extends Repository<UserCustomer> {}
