import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { BenefitMembership } from 'src/modules/benefit-membership/entities/benefit-membership.entity';

@Index('benefit_pk', ['id'], { unique: true })
@Entity('benefit', { schema: 'safeway_schema' })
export class Benefit {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'id' })
  id: string;

  @Column('text', { name: 'name' })
  name: string;

  @Column('text', { name: 'description' })
  description: string;

  @Column('integer', { name: 'active', default: () => '1' })
  active: number;

  @OneToMany(
    () => BenefitMembership,
    (benefitMembership) => benefitMembership.benefit,
  )
  benefitMemberships: BenefitMembership[];
}
