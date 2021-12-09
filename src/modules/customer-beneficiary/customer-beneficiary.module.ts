import { Module } from '@nestjs/common';
import { CustomerBeneficiaryService } from './customer-beneficiary.service';
import { CustomerBeneficiaryController } from './customer-beneficiary.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerBeneficiaryRepository } from './customer-beneficiary.repository';

@Module({
  imports: [TypeOrmModule.forFeature([CustomerBeneficiaryRepository])],
  controllers: [CustomerBeneficiaryController],
  providers: [CustomerBeneficiaryService],
})
export class CustomerBeneficiaryModule {}
