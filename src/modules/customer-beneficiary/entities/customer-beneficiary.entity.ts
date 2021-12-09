import { Beneficiary } from 'src/modules/beneficiary/entities/beneficiary.entity';
import { Customer } from 'src/modules/customer/entities/customer.entity';
import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('customer_beneficiary', { schema: 'safeway_schema' })
export class CustomerBeneficiary {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'id' })
  id: string;

  @ManyToOne(
    () => Beneficiary,
    (beneficiary) => beneficiary.customerBeneficiaries,
  )
  @JoinColumn([{ name: 'beneficiary_id', referencedColumnName: 'id' }])
  beneficiary: Beneficiary;

  @ManyToOne(() => Customer, (customer) => customer.customerBeneficiaries)
  @JoinColumn([{ name: 'customer_id', referencedColumnName: 'id' }])
  customer: Customer;
}
