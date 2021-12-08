import { Injectable } from '@nestjs/common';
import { CreateUserCustomerDto } from './dto/create-user-customer.dto';
import { UpdateUserCustomerDto } from './dto/update-user-customer.dto';

@Injectable()
export class UserCustomerService {
  create(createUserCustomerDto: CreateUserCustomerDto) {
    return 'This action adds a new userCustomer';
  }

  findAll() {
    return `This action returns all userCustomer`;
  }

  findOne(id: number) {
    return `This action returns a #${id} userCustomer`;
  }

  update(id: number, updateUserCustomerDto: UpdateUserCustomerDto) {
    return `This action updates a #${id} userCustomer`;
  }

  remove(id: number) {
    return `This action removes a #${id} userCustomer`;
  }
}