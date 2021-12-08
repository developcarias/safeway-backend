import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { CustomerBeneficiary } from 'src/modules/customer-beneficiary/entities/customer-beneficiary.entity';

@Entity('beneficiary', { schema: 'safeway_schema' })
export class Beneficiary {
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

  @Column('date', { name: 'birth_date' })
  birthDate: string;

  @Column('character varying', { name: 'gender' })
  gender: string;

  @Column('text', { name: 'place_of_birth' })
  placeOfBirth: string;

  @Column('integer', { name: 'height' })
  height: number;

  @Column('integer', { name: 'weight' })
  weight: number;

  @OneToMany(
    () => CustomerBeneficiary,
    (customerBeneficiary) => customerBeneficiary.beneficiary,
  )
  customerBeneficiaries: CustomerBeneficiary[];
}
