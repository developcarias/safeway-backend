import { Module } from '@nestjs/common';
import { MembershipAnnexedService } from './membership-annexed.service';
import { MembershipAnnexedController } from './membership-annexed.controller';

@Module({
  controllers: [MembershipAnnexedController],
  providers: [MembershipAnnexedService]
})
export class MembershipAnnexedModule {}
