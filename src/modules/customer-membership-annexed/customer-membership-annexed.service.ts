import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Customer } from '../customer/entities/customer.entity';
import { CreateMembershipAnnexedDto } from '../membership-annexed/dto/create-membership-annexed.dto';
import { MembershipAnnexedRepository } from '../membership-annexed/membership-annexed.repository';
import { CustomerMembershipAnnexedRepository } from './customer-membership-annexed.repository';
import { CreateCustomerMembershipAnnexedDto } from './dto/create-customer-membership-annexed.dto';
import { UpdateCustomerMembershipAnnexedDto } from './dto/update-customer-membership-annexed.dto';
import { CustomerMembershipAnnexed } from './entities/customer-membership-annexed.entity';

@Injectable()
export class CustomerMembershipAnnexedService {
  constructor(
    @InjectRepository(CustomerMembershipAnnexedRepository)
    private readonly _customerMembershipAnnexedRepository: CustomerMembershipAnnexedRepository,
    @InjectRepository(MembershipAnnexedRepository)
    private readonly _membershipAnnexedRepository: MembershipAnnexedRepository,
  ) {}

  create(
    createCustomerMembershipAnnexedDto: CreateCustomerMembershipAnnexedDto,
  ) {
    return 'This action adds a new customerMembershipAnnexed';
  }

  async createWithCustomer(
    createMembershipAnnexedDtos: CreateMembershipAnnexedDto[],
    customer: Customer,
  ) {
    const customerMembershipAnnexeds: CustomerMembershipAnnexed[] = [];
    for (const membershipAnnexedDto of createMembershipAnnexedDtos) {
      const customerMembershipAnnexed: CustomerMembershipAnnexed =
        new CustomerMembershipAnnexed();
      customerMembershipAnnexed.customer = customer;
      customerMembershipAnnexed.membershipAnnexed =
        await this._membershipAnnexedRepository.findOne({
          id: membershipAnnexedDto.membership_annexed_id,
        });
      customerMembershipAnnexeds.push(customerMembershipAnnexed);
    }
    return await this._customerMembershipAnnexedRepository.save(
      customerMembershipAnnexeds,
    );
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
