import { EntityRepository, Repository } from 'typeorm';
import { PlanMembership } from './entities/plan-membership.entity';

@EntityRepository(PlanMembership)
export class PlanMembershipRepository extends Repository<PlanMembership> {}
