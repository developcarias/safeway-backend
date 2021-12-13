import { Module } from '@nestjs/common';
import { BeneficiaryService } from './beneficiary.service';
import { BeneficiaryController } from './beneficiary.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BeneficiaryRepository } from './beneficiary.repository';
import { CustomerService } from '../customer/customer.service';
import { CustomerRepository } from '../customer/customer.repository';
import { PlanMembershipRepository } from '../plan-membership/plan-membership.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      BeneficiaryRepository,
      CustomerRepository,
      PlanMembershipRepository,
    ]),
  ],
  controllers: [BeneficiaryController],
  providers: [BeneficiaryService],
})
export class BeneficiaryModule {}
