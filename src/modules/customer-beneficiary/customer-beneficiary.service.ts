import { Injectable } from '@nestjs/common';
import { CreateCustomerBeneficiaryDto } from './dto/create-customer-beneficiary.dto';
import { UpdateCustomerBeneficiaryDto } from './dto/update-customer-beneficiary.dto';

@Injectable()
export class CustomerBeneficiaryService {
  create(createCustomerBeneficiaryDto: CreateCustomerBeneficiaryDto) {
    return 'This action adds a new customerBeneficiary';
  }

  findAll() {
    return `This action returns all customerBeneficiary`;
  }

  findOne(id: number) {
    return `This action returns a #${id} customerBeneficiary`;
  }

  update(id: number, updateCustomerBeneficiaryDto: UpdateCustomerBeneficiaryDto) {
    return `This action updates a #${id} customerBeneficiary`;
  }

  remove(id: number) {
    return `This action removes a #${id} customerBeneficiary`;
  }
}
