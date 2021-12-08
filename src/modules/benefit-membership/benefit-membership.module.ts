import { Module } from '@nestjs/common';
import { BenefitMembershipService } from './benefit-membership.service';
import { BenefitMembershipController } from './benefit-membership.controller';

@Module({
  controllers: [BenefitMembershipController],
  providers: [BenefitMembershipService]
})
export class BenefitMembershipModule {}
