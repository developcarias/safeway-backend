import { Module } from '@nestjs/common';
import { UserRoleService } from './user-role.service';
import { UserRoleController } from './user-role.controller';
import { UserRoleRepository } from './user-role.repository';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([UserRoleRepository])],
  controllers: [UserRoleController],
  providers: [UserRoleService],
})
export class UserRoleModule {}
