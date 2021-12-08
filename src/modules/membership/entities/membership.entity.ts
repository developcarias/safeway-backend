import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { MembershipAnnexed } from 'src/modules/membership-annexed/entities/membership-annexed.entity';
import { PlanMembership } from 'src/modules/plan-membership/entities/plan-membership.entity';
import { BenefitMembership } from 'src/modules/benefit-membership/entities/benefit-membership.entity';

@Entity('membereship', { schema: 'safeway_schema' })
export class Membereship {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'id' })
  id: string;

  @Column('text', { name: 'name' })
  name: string;

  @Column('text', { name: 'type' })
  type: string;

  @Column('text', { name: 'description', nullable: true })
  description: string | null;

  @Column('integer', { name: 'active', default: () => '1' })
  active: number;

  @Column('date', { name: 'created' })
  created: string;

  @Column('date', { name: 'updated', default: () => 'CURRENT_DATE' })
  updated: string;

  @OneToMany(
    () => BenefitMembership,
    (benefitMembership) => benefitMembership.membership,
  )
  benefitMemberships: BenefitMembership[];

  @OneToMany(
    () => MembershipAnnexed,
    (membershipAnnexed) => membershipAnnexed.membership,
  )
  membershipAnnexeds: MembershipAnnexed[];

  @OneToMany(
    () => PlanMembership,
    (planMembership) => planMembership.membership,
  )
  planMemberships: PlanMembership[];
}
