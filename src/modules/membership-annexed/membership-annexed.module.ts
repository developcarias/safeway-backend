import { Module } from '@nestjs/common';
import { MembershipAnnexedService } from './membership-annexed.service';
import { MembershipAnnexedController } from './membership-annexed.controller';
import { MembershipAnnexedRepository } from './membership-annexed.repository';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([MembershipAnnexedRepository])],
  controllers: [MembershipAnnexedController],
  providers: [MembershipAnnexedService],
})
export class MembershipAnnexedModule {}
