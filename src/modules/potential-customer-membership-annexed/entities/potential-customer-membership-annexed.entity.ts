import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { PotentialCustomer } from 'src/modules/potential-customer/entities/potential-customer.entity';
import { MembershipAnnexed } from 'src/modules/membership-annexed/entities/membership-annexed.entity';

@Entity('potential_customer_membership_annexed', { schema: 'safeway_schema' })
export class PotentialCustomerMembershipAnnexed {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'id' })
  id: string;

  @ManyToOne(
    () => PotentialCustomer,
    (PotentialCustomer) =>
      PotentialCustomer.potentialCustomerMembershipAnnexeds,
  )
  @JoinColumn([{ name: 'potential_customer_id', referencedColumnName: 'id' }])
  potenntialCustomer: PotentialCustomer;

  @ManyToOne(
    () => MembershipAnnexed,
    (membershipAnnexed) => membershipAnnexed.customerMembershipAnnexeds,
  )
  @JoinColumn([{ name: 'membership_annexed_id', referencedColumnName: 'id' }])
  membershipAnnexed: MembershipAnnexed;
}
