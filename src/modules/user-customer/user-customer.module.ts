import { Module } from '@nestjs/common';
import { UserCustomerService } from './user-customer.service';
import { UserCustomerController } from './user-customer.controller';

@Module({
  controllers: [UserCustomerController],
  providers: [UserCustomerService]
})
export class UserCustomerModule {}
