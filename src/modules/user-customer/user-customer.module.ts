import { Module } from '@nestjs/common';
import { UserCustomerService } from './user-customer.service';
import { UserCustomerController } from './user-customer.controller';
import { UserCustomerRepository } from './user-customer.repository';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([UserCustomerRepository])],
  controllers: [UserCustomerController],
  providers: [UserCustomerService],
})
export class UserCustomerModule {}
