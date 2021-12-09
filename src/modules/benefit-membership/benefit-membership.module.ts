import { Module } from '@nestjs/common';
import { BenefitMembershipService } from './benefit-membership.service';
import { BenefitMembershipController } from './benefit-membership.controller';
import { BenefitMembershipRepository } from './benefit-membership.repository';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([BenefitMembershipRepository])],
  controllers: [BenefitMembershipController],
  providers: [BenefitMembershipService],
})
export class BenefitMembershipModule {}
