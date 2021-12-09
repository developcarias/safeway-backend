import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Customer } from 'src/modules/customer/entities/customer.entity';
import { MembershipAnnexed } from 'src/modules/membership-annexed/entities/membership-annexed.entity';

@Entity('customer_membership_annexed', { schema: 'safeway_schema' })
export class CustomerMembershipAnnexed {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'id' })
  id: string;

  @ManyToOne(() => Customer, (customer) => customer.customerMembershipAnnexeds)
  @JoinColumn([{ name: 'customer_id', referencedColumnName: 'id' }])
  customer: Customer;

  @ManyToOne(
    () => MembershipAnnexed,
    (membershipAnnexed) => membershipAnnexed.customerMembershipAnnexeds,
  )
  @JoinColumn([{ name: 'membership_annexed_id', referencedColumnName: 'id' }])
  membershipAnnexed: MembershipAnnexed;
}
