import { Customer } from 'src/modules/customer/entities/customer.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('invoice', { schema: 'safeway_schema' })
export class Invoice {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'id' })
  id: string;

  @Column('integer', { name: 'is_customer' })
  isCustomer: number;

  @Column('text', { name: 'business_name' })
  businessName: string;

  @Column('text', { name: 'ruc' })
  ruc: string;

  @Column('text', { name: 'email' })
  email: string;

  @Column('text', { name: 'phone' })
  phone: string;

  @Column('text', { name: 'address' })
  address: string;

  @ManyToOne(() => Customer, (customer) => customer.invoices)
  @JoinColumn([{ name: 'customer_id', referencedColumnName: 'id' }])
  customer: Customer;
}
