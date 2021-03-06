import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { UserRole } from 'src/modules/user-role/entities/user-role.entity';

@Entity('role', { schema: 'safeway_schema' })
export class Role {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'id' })
  id: string;

  @Column('text', { name: 'name' })
  name: string;

  @Column('character varying', { name: 'type' })
  type: string;

  @Column('integer', { name: 'active', default: () => '1' })
  active: number;

  @OneToMany(() => UserRole, (userRole) => userRole.role)
  userRoles: UserRole[];
}
