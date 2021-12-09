import { Module } from '@nestjs/common';
import { BeneficiaryService } from './beneficiary.service';
import { BeneficiaryController } from './beneficiary.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BeneficiaryRepository } from './beneficiary.repository';

@Module({
  imports: [TypeOrmModule.forFeature([BeneficiaryRepository])],
  controllers: [BeneficiaryController],
  providers: [BeneficiaryService],
})
export class BeneficiaryModule {}
