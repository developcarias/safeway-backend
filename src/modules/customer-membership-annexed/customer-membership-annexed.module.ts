import { Module } from '@nestjs/common';
import { CustomerMembershipAnnexedService } from './customer-membership-annexed.service';
import { CustomerMembershipAnnexedController } from './customer-membership-annexed.controller';
import { CustomerMembershipAnnexedRepository } from './customer-membership-annexed.repository';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([CustomerMembershipAnnexedRepository])],
  controllers: [CustomerMembershipAnnexedController],
  providers: [CustomerMembershipAnnexedService],
})
export class CustomerMembershipAnnexedModule {}
