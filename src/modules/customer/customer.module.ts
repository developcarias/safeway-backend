import { Module } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CustomerController } from './customer.controller';
import { CustomerRepository } from './customer.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlanMembershipRepository } from '../plan-membership/plan-membership.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([CustomerRepository, PlanMembershipRepository]),
  ],
  controllers: [CustomerController],
  providers: [CustomerService],
})
export class CustomerModule {}
