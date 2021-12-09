import { EntityRepository, Repository } from 'typeorm';
import { UserRole } from './entities/user-role.entity';

@EntityRepository(UserRole)
export class UserRoleRepository extends Repository<UserRole> {}
