import { Module } from '@nestjs/common';
import { CustomerBeneficiaryService } from './customer-beneficiary.service';
import { CustomerBeneficiaryController } from './customer-beneficiary.controller';

@Module({
  controllers: [CustomerBeneficiaryController],
  providers: [CustomerBeneficiaryService]
})
export class CustomerBeneficiaryModule {}
