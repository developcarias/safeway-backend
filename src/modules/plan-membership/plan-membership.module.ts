import { Module } from '@nestjs/common';
import { PlanMembershipService } from './plan-membership.service';
import { PlanMembershipController } from './plan-membership.controller';

@Module({
  controllers: [PlanMembershipController],
  providers: [PlanMembershipService]
})
export class PlanMembershipModule {}
