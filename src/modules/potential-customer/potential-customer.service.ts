import { Injectable } from '@nestjs/common';
import { CreatePotentialCustomerDto } from './dto/create-potential-customer.dto';
import { UpdatePotentialCustomerDto } from './dto/update-potential-customer.dto';

@Injectable()
export class PotentialCustomerService {
  create(createPotentialCustomerDto: CreatePotentialCustomerDto) {
    return 'This action adds a new potentialCustomer';
  }

  findAll() {
    return `This action returns all potentialCustomer`;
  }

  findOne(id: number) {
    return `This action returns a #${id} potentialCustomer`;
  }

  update(id: number, updatePotentialCustomerDto: UpdatePotentialCustomerDto) {
    return `This action updates a #${id} potentialCustomer`;
  }

  remove(id: number) {
    return `This action removes a #${id} potentialCustomer`;
  }
}
