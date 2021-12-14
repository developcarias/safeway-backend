import { EntityRepository, Repository } from 'typeorm';
import { PotentialCustomerMembershipAnnexed } from './entities/potential-customer-membership-annexed.entity';

@EntityRepository(PotentialCustomerMembershipAnnexed)
export class PotentialCustomerMembershipAnnexedRepository extends Repository<PotentialCustomerMembershipAnnexed> {}
