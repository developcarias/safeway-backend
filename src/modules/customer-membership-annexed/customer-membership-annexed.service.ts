import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CustomerMembershipAnnexedRepository } from './customer-membership-annexed.repository';
import { CreateCustomerMembershipAnnexedDto } from './dto/create-customer-membership-annexed.dto';
import { UpdateCustomerMembershipAnnexedDto } from './dto/update-customer-membership-annexed.dto';

@Injectable()
export class CustomerMembershipAnnexedService {
  constructor(
    @InjectRepository(CustomerMembershipAnnexedRepository)
    private readonly _customerMembershipAnnexedRepository: CustomerMembershipAnnexedRepository,
  ) {}

  create(
    createCustomerMembershipAnnexedDto: CreateCustomerMembershipAnnexedDto,
  ) {
    return 'This action adds a new customerMembershipAnnexed';
  }

  findAll() {
    return `This action returns all customerMembershipAnnexed`;
  }

  findOne(id: number) {
    return `This action returns a #${id} customerMembershipAnnexed`;
  }

  update(
    id: number,
    updateCustomerMembershipAnnexedDto: UpdateCustomerMembershipAnnexedDto,
  ) {
    return `This action updates a #${id} customerMembershipAnnexed`;
  }

  remove(id: number) {
    return `This action removes a #${id} customerMembershipAnnexed`;
  }
}
