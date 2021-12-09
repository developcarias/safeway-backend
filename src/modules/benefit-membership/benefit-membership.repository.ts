import { EntityRepository, Repository } from 'typeorm';
import { BenefitMembership } from './entities/benefit-membership.entity';

@EntityRepository(BenefitMembership)
export class BenefitMembershipRepository extends Repository<BenefitMembership> {}
