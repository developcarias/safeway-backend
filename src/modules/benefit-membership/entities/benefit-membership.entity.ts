import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Benefit } from 'src/modules/benefit/entities/benefit.entity';
import { Membereship } from 'src/modules/membership/entities/membership.entity';

@Entity('benefit_membership', { schema: 'safeway_schema' })
export class BenefitMembership {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'id' })
  id: string;

  @Column('bigint', { name: 'benefit_id', unique: true })
  benefitId: string;

  @Column('bigint', { name: 'membership_id', unique: true })
  membershipId: string;

  @ManyToOne(() => Benefit, (benefit) => benefit.benefitMemberships)
  @JoinColumn([{ name: 'benefit_id', referencedColumnName: 'id' }])
  benefit: Benefit;

  @ManyToOne(() => Membereship, (membereship) => membereship.benefitMemberships)
  @JoinColumn([{ name: 'membership_id', referencedColumnName: 'id' }])
  membership: Membereship;
}
