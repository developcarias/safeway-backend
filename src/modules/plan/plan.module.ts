import { Module } from '@nestjs/common';
import { PlanService } from './plan.service';
import { PlanController } from './plan.controller';
import { PlanRepository } from './plan.repository';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([PlanRepository])],
  controllers: [PlanController],
  providers: [PlanService],
})
export class PlanModule {}
