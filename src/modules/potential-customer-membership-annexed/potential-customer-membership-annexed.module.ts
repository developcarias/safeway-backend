import { Module } from '@nestjs/common';
import { PotentialCustomerMembershipAnnexedService } from './potential-customer-membership-annexed.service';
import { PotentialCustomerMembershipAnnexedController } from './potential-customer-membership-annexed.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PotentialCustomerMembershipAnnexedRepository } from './potential-customer-membership-annexed.repository';
import { MembershipAnnexedRepository } from '../membership-annexed/membership-annexed.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      PotentialCustomerMembershipAnnexedRepository,
      MembershipAnnexedRepository,
    ]),
  ],
  controllers: [PotentialCustomerMembershipAnnexedController],
  providers: [PotentialCustomerMembershipAnnexedService],
})
export class PotentialCustomerMembershipAnnexedModule {}
