import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { CustomerMembershipAnnexed } from 'src/modules/customer-membership-annexed/entities/customer-membership-annexed.entity';
import { PlanMembership } from 'src/modules/plan-membership/entities/plan-membership.entity';
import { SurveyCustomer } from 'src/modules/survey-customer/entities/survey-customer.entity';
import { UserCustomer } from 'src/modules/user-customer/entities/user-customer.entity';
import { Invoice } from 'src/modules/invoice/entities/invoice.entity';

@Entity('customer', { schema: 'safeway_schema' })
export class Customer {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'id' })
  id: string;

  @Column('text', { name: 'identify' })
  identify: string;

  @Column('text', { name: 'type_identify' })
  typeIdentify: string;

  @Column('text', { name: 'first_name' })
  firstName: string;

  @Column('text', { name: 'last_name' })
  lastName: string;

  @Column('text', { name: 'email' })
  email: string;

  @Column('text', { name: 'cellphone_contact' })
  cellphoneContact: string;

  @Column('text', { name: 'phone_contact' })
  phoneContact: string;

  @Column('integer', { name: 'terms_accepted' })
  termsAccepted: number;

  @ManyToOne(() => PlanMembership, (planMembership) => planMembership.customers)
  @JoinColumn([{ name: 'plan_membership_id', referencedColumnName: 'id' }])
  planMembership: PlanMembership;

  @OneToMany(() => Invoice, (invoice) => invoice.customer)
  invoices: Invoice[];

  @OneToMany(
    () => CustomerMembershipAnnexed,
    (customerMembershipAnnexed) => customerMembershipAnnexed.customer,
  )
  customerMembershipAnnexeds: CustomerMembershipAnnexed[];

  @OneToMany(() => SurveyCustomer, (surveyCustomer) => surveyCustomer.customer)
  surveyCustomers: SurveyCustomer[];

  @OneToMany(() => UserCustomer, (userCustomer) => userCustomer.customer)
  userCustomers: UserCustomer[];
}
