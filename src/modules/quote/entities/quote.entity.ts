import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { UserCustomer } from 'src/modules/user-customer/entities/user-customer.entity';

@Entity('quote', { schema: 'safeway_schema' })
export class Quote {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'id' })
  id: string;

  @Column('date', { name: 'created' })
  created: string;

  @Column('date', { name: 'payed_date' })
  payedDate: string;

  @Column('integer', { name: 'paid' })
  paid: number;

  @ManyToOne(() => UserCustomer, (userCustomer) => userCustomer.quotes)
  @JoinColumn([{ name: 'user_customer_id', referencedColumnName: 'id' }])
  userCustomer: UserCustomer;
}
