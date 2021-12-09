import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CustomerBeneficiaryRepository } from './customer-beneficiary.repository';
import { CreateCustomerBeneficiaryDto } from './dto/create-customer-beneficiary.dto';
import { UpdateCustomerBeneficiaryDto } from './dto/update-customer-beneficiary.dto';

@Injectable()
export class CustomerBeneficiaryService {
  constructor(
    @InjectRepository(CustomerBeneficiaryRepository)
    private readonly _customerBeneficiaryRepository: CustomerBeneficiaryRepository,
  ) {}

  create(createCustomerBeneficiaryDto: CreateCustomerBeneficiaryDto) {
    return 'This action adds a new customerBeneficiary';
  }

  findAll() {
    return `This action returns all customerBeneficiary`;
  }

  findOne(id: number) {
    return `This action returns a #${id} customerBeneficiary`;
  }

  update(
    id: number,
    updateCustomerBeneficiaryDto: UpdateCustomerBeneficiaryDto,
  ) {
    return `This action updates a #${id} customerBeneficiary`;
  }

  remove(id: number) {
    return `This action removes a #${id} customerBeneficiary`;
  }
}
