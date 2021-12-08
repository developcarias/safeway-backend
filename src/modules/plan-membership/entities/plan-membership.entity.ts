import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Membereship } from 'src/modules/membership/entities/membership.entity';
import { Plan } from 'src/modules/plan/entities/plan.entity';
import { PotentialCustomer } from 'src/modules/potential-customer/entities/potential-customer.entity';
import { Customer } from 'src/modules/customer/entities/customer.entity';

@Index('plan_membership_pk', ['id'], { unique: true })
@Index('plan_membership_un', ['membershipId', 'planId'], { unique: true })
@Entity('plan_membership', { schema: 'safeway_schema' })
export class PlanMembership {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'id' })
  id: string;

  @Column('bigint', { name: 'plan_id', unique: true })
  planId: string;

  @Column('bigint', { name: 'membership_id', unique: true })
  membershipId: string;

  @Column('double precision', { name: 'price_USD', precision: 53 })
  priceUsd: number;

  @OneToMany(() => Customer, (customer) => customer.planMembership)
  customers: Customer[];

  @ManyToOne(() => Membereship, (membereship) => membereship.planMemberships)
  @JoinColumn([{ name: 'membership_id', referencedColumnName: 'id' }])
  membership: Membereship;

  @ManyToOne(() => Plan, (plan) => plan.planMemberships)
  @JoinColumn([{ name: 'plan_id', referencedColumnName: 'id' }])
  plan: Plan;

  @OneToMany(
    () => PotentialCustomer,
    (potentialCustomer) => potentialCustomer.planMembership,
  )
  potentialCustomers: PotentialCustomer[];
}
