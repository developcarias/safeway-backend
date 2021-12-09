import { EntityRepository, Repository } from 'typeorm';
import { CustomerMembershipAnnexed } from './entities/customer-membership-annexed.entity';

@EntityRepository(CustomerMembershipAnnexed)
export class CustomerMembershipAnnexedRepository extends Repository<CustomerMembershipAnnexed> {}
