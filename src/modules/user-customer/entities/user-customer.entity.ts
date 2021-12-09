import {
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Customer } from 'src/modules/customer/entities/customer.entity';
import { User } from 'src/modules/user/entities/user.entity';
import { Quote } from 'src/modules/quote/entities/quote.entity';

@Entity('user_customer', { schema: 'safeway_schema' })
export class UserCustomer {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'id' })
  id: string;

  @OneToMany(() => Quote, (quote) => quote.userCustomer)
  quotes: Quote[];

  @ManyToOne(() => Customer, (customer) => customer.userCustomers)
  @JoinColumn([{ name: 'customer_id', referencedColumnName: 'id' }])
  customer: Customer;

  @ManyToOne(() => User, (user) => user.userCustomers)
  @JoinColumn([{ name: 'user_id', referencedColumnName: 'id' }])
  user: User;
}
