import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { UserCustomer } from 'src/modules/user-customer/entities/user-customer.entity';
import { UserRole } from 'src/modules/user-role/entities/user-role.entity';

@Entity('user', { schema: 'safeway_schema' })
export class User {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'id' })
  id: string;

  @Column('text', { name: 'first_name' })
  firstName: string;

  @Column('text', { name: 'last_name' })
  lastName: string;

  @Column('text', { name: 'user_name', unique: true })
  userName: string;

  @Column('text', { name: 'email', unique: true })
  email: string;

  @Column('text', { name: 'contact_phone', nullable: true })
  contactPhone: string | null;

  @Column('date', { name: 'birth_date' })
  birthDate: string;

  @Column('text', { name: 'password' })
  password: string;

  @Column('integer', { name: 'aprove_to_access' })
  aproveToAccess: number;

  @Column('integer', { name: 'active', default: () => '1' })
  active: number;

  @OneToMany(() => UserCustomer, (userCustomer) => userCustomer.user)
  userCustomers: UserCustomer[];

  @OneToMany(() => UserRole, (userRole) => userRole.user)
  userRoles: UserRole[];
}
