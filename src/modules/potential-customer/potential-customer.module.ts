import { Module } from '@nestjs/common';
import { PotentialCustomerService } from './potential-customer.service';
import { PotentialCustomerController } from './potential-customer.controller';
import { PotentialCustomerRepository } from './potential-customer.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlanMembershipRepository } from '../plan-membership/plan-membership.repository';
import { MembershipAnnexedRepository } from '../membership-annexed/membership-annexed.repository';
import { PotentialCustomerMembershipAnnexedRepository } from '../potential-customer-membership-annexed/potential-customer-membership-annexed.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      PotentialCustomerRepository,
      PlanMembershipRepository,
      MembershipAnnexedRepository,
      PotentialCustomerMembershipAnnexedRepository,
    ]),
  ],
  controllers: [PotentialCustomerController],
  providers: [PotentialCustomerService],
})
export class PotentialCustomerModule {}
