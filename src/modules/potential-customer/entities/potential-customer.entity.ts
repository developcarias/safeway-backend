import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { PlanMembership } from 'src/modules/plan-membership/entities/plan-membership.entity';

@Entity('potential_customer', { schema: 'safeway_schema' })
export class PotentialCustomer {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'id' })
  id: string;

  @Column('text', { name: 'first_name' })
  firstName: string;

  @Column('text', { name: 'last_name' })
  lastName: string;

  @Column('text', { name: 'email' })
  email: string;

  @Column('text', { name: 'cellphone_contect', nullable: true })
  cellphoneContect: string | null;

  @Column('text', { name: 'phone_contct' })
  phoneContct: string;

  @Column('date', { name: 'created' })
  created: string;

  @ManyToOne(
    () => PlanMembership,
    (planMembership) => planMembership.potentialCustomers,
  )
  @JoinColumn([{ name: 'plan_membership_id', referencedColumnName: 'id' }])
  planMembership: PlanMembership;
}
