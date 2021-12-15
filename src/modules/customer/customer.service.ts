import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PlanMembershipRepository } from '../plan-membership/plan-membership.repository';
import { CustomerRepository } from './customer.repository';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { Customer } from './entities/customer.entity';

@Injectable()
export class CustomerService {
  constructor(
    @InjectRepository(CustomerRepository)
    private readonly _customerRepository: CustomerRepository,
    @InjectRepository(PlanMembershipRepository)
    private readonly _planMembershipRepository: PlanMembershipRepository,
  ) {}

  async create(createCustomerDto: CreateCustomerDto): Promise<Customer> {
    const customerEntity: Customer = new Customer();
    customerEntity.planMembership =
      await this._planMembershipRepository.findOne({
        id: createCustomerDto.plan_membership_id,
      });
    customerEntity.typeIdentify = createCustomerDto.identification_type;
    (customerEntity.identify = createCustomerDto.identification),
      (customerEntity.firstName = createCustomerDto.first_name),
      (customerEntity.lastName = createCustomerDto.last_name),
      (customerEntity.email = createCustomerDto.email),
      (customerEntity.cellphoneContact = createCustomerDto.cellphone);
    customerEntity.phoneContact = createCustomerDto.conventional_phone;
    customerEntity.termsAccepted = 1;
    return this._customerRepository.save(customerEntity);
  }

  findAll() {
    return `This action returns all customer`;
  }

  findOne(id: number) {
    return `This action returns a #${id} customer`;
  }

  update(id: number, updateCustomerDto: UpdateCustomerDto) {
    return `This action updates a #${id} customer`;
  }

  remove(id: number) {
    return `This action removes a #${id} customer`;
  }
}
