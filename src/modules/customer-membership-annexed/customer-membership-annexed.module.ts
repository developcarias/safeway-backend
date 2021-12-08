import { Module } from '@nestjs/common';
import { CustomerMembershipAnnexedService } from './customer-membership-annexed.service';
import { CustomerMembershipAnnexedController } from './customer-membership-annexed.controller';

@Module({
  controllers: [CustomerMembershipAnnexedController],
  providers: [CustomerMembershipAnnexedService]
})
export class CustomerMembershipAnnexedModule {}
