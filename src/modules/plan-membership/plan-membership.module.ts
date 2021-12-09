import { Module } from '@nestjs/common';
import { PlanMembershipService } from './plan-membership.service';
import { PlanMembershipController } from './plan-membership.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlanMembershipRepository } from './plan-membership.repository';

@Module({
  imports: [TypeOrmModule.forFeature([PlanMembershipRepository])],
  controllers: [PlanMembershipController],
  providers: [PlanMembershipService],
})
export class PlanMembershipModule {}
