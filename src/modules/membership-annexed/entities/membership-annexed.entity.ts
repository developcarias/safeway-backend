import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Annexed } from 'src/modules/annexed/entities/annexed.entity';
import { Membereship } from 'src/modules/membership/entities/membership.entity';
import { CustomerMembershipAnnexed } from 'src/modules/customer-membership-annexed/entities/customer-membership-annexed.entity';

@Entity('membership_annexed', { schema: 'safeway_schema' })
export class MembershipAnnexed {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'id' })
  id: string;

  @Column('bigint', { name: 'membership_id', unique: true })
  membershipId: string;

  @Column('bigint', { name: 'annexed_id', unique: true })
  annexedId: string;

  @Column('double precision', { name: 'price_USD', precision: 53 })
  priceUsd: number;

  @OneToMany(
    () => CustomerMembershipAnnexed,
    (customerMembershipAnnexed) => customerMembershipAnnexed.membershipAnnexed,
  )
  customerMembershipAnnexeds: CustomerMembershipAnnexed[];

  @ManyToOne(() => Annexed, (annexed) => annexed.membershipAnnexeds)
  @JoinColumn([{ name: 'annexed_id', referencedColumnName: 'id' }])
  annexed: Annexed;

  @ManyToOne(() => Membereship, (membereship) => membereship.membershipAnnexeds)
  @JoinColumn([{ name: 'membership_id', referencedColumnName: 'id' }])
  membership: Membereship;
}
