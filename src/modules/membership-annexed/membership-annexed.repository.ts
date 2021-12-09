import { EntityRepository, Repository } from 'typeorm';
import { MembershipAnnexed } from './entities/membership-annexed.entity';

@EntityRepository(MembershipAnnexed)
export class MembershipAnnexedRepository extends Repository<MembershipAnnexed> {}
