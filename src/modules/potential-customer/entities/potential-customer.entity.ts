import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { PlanMembership } from 'src/modules/plan-membership/entities/plan-membership.entity';
import { PotentialCustomerMembershipAnnexed } from 'src/modules/potential-customer-membership-annexed/entities/potential-customer-membership-annexed.entity';

@Entity('potential_customer', { schema: 'safeway_schema' })
export class PotentialCustomer {
  [x: string]: any;
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

  @Column('text', { name: 'phone_contact' })
  phoneContact: string;

  @Column('date', { name: 'created' })
  created: Date;

  @ManyToOne(
    () => PlanMembership,
    (planMembership) => planMembership.potentialCustomers,
  )
  @JoinColumn([{ name: 'plan_membership_id', referencedColumnName: 'id' }])
  planMembership: PlanMembership;

  @OneToMany(
    () => PotentialCustomerMembershipAnnexed,
    (customerMembershipAnnexed) => customerMembershipAnnexed.potenntialCustomer,
  )
  portentialCustomerMembershipAnnexeds: PotentialCustomerMembershipAnnexed[];
}
