import { Module } from '@nestjs/common';
import { PotentialCustomerService } from './potential-customer.service';
import { PotentialCustomerController } from './potential-customer.controller';
import { PotentialCustomerRepository } from './potential-customer.repository';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([PotentialCustomerRepository])],
  controllers: [PotentialCustomerController],
  providers: [PotentialCustomerService],
})
export class PotentialCustomerModule {}
