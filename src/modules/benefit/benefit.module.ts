import { Module } from '@nestjs/common';
import { BenefitService } from './benefit.service';
import { BenefitController } from './benefit.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BenefitRepository } from './benefit.repository';

@Module({
  imports: [TypeOrmModule.forFeature([BenefitRepository])],
  controllers: [BenefitController],
  providers: [BenefitService],
})
export class BenefitModule {}
