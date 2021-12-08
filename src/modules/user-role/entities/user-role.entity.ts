import {
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Role } from 'src/modules/role/entities/role.entity';
import { User } from 'src/modules/user/entities/user.entity';

@Entity('user_role', { schema: 'safeway_schema' })
export class UserRole {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'id' })
  id: string;

  @ManyToOne(() => Role, (role) => role.userRoles)
  @JoinColumn([{ name: 'role_id', referencedColumnName: 'id' }])
  role: Role;

  @ManyToOne(() => User, (user) => user.userRoles)
  @JoinColumn([{ name: 'user_id', referencedColumnName: 'id' }])
  user: User;
}
