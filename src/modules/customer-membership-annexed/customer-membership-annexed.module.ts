import { Module } from '@nestjs/common';
import { CustomerMembershipAnnexedService } from './customer-membership-annexed.service';
import { CustomerMembershipAnnexedController } from './customer-membership-annexed.controller';
import { CustomerMembershipAnnexedRepository } from './customer-membership-annexed.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MembershipAnnexedRepository } from '../membership-annexed/membership-annexed.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      CustomerMembershipAnnexedRepository,
      MembershipAnnexedRepository,
    ]),
  ],
  controllers: [CustomerMembershipAnnexedController],
  providers: [CustomerMembershipAnnexedService],
})
export class CustomerMembershipAnnexedModule {}
