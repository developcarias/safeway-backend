import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserDto } from './dto/user.dto';
import { User } from './entities/user.entity';
import { UserRepository } from './user.repository';
import * as bcrypt from 'bcryptjs';
import { RoleRepository } from '../role/role.repository';
import { UserRoleRepository } from '../user-role/user-role.repository';
import { UserRole } from '../user-role/entities/user-role.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserRepository)
    private readonly _userRepository: UserRepository,
    @InjectRepository(RoleRepository)
    private readonly _roleRepository: RoleRepository,
    @InjectRepository(UserRoleRepository)
    private readonly _userRoleRepository: UserRoleRepository,
  ) {}

  async create(createUserDto: UserDto) {
    const { email } = createUserDto;

    const userInDb = await this._userRepository.findOne({
      where: [{ email }, { userName: email }],
    });
    if (userInDb) {
      throw new ConflictException(
        `User with email or user name ${email} already exists`,
      );
    }

    const hashedPassword = await bcrypt.hash(createUserDto.password, 12);
    const role = await this._roleRepository.findOne({ type: 'broker' });
    const newUser: User = await this._userRepository.save({
      ...createUserDto,
      userName: email,
      password: hashedPassword,
      aproveToAccess: 1,
      active: 1,
      userCustomers: [],
      userRoles: [],
    });
    const userRole = new UserRole();
    userRole.role = role;
    userRole.user = newUser;
    this._userRoleRepository.save(userRole);
    return {
      ...newUser,
      password: null,
    };
  }

  findAll() {
    return `This action returns all user`;
  }

  findByUserName(userName: string) {
    return this._userRepository.findOne({
      userName,
    });
  }

  findById(id: string) {
    return this._userRepository.findOne(id);
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
