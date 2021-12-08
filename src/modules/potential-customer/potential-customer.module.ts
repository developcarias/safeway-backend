import { Module } from '@nestjs/common';
import { PotentialCustomerService } from './potential-customer.service';
import { PotentialCustomerController } from './potential-customer.controller';

@Module({
  controllers: [PotentialCustomerController],
  providers: [PotentialCustomerService]
})
export class PotentialCustomerModule {}
