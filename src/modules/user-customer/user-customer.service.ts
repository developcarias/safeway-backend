import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BeneficiaryService } from '../beneficiary/beneficiary.service';
import { CustomerMembershipAnnexedService } from '../customer-membership-annexed/customer-membership-annexed.service';
import { CustomerService } from '../customer/customer.service';
import { Customer } from '../customer/entities/customer.entity';
import { InvoiceService } from '../invoice/invoice.service';
import { SurveyCustomerService } from '../survey-customer/survey-customer.service';
import { UserRepository } from '../user/user.repository';
import { CreateUserCustomerDto } from './dto/create-user-customer.dto';
import { UpdateUserCustomerDto } from './dto/update-user-customer.dto';
import { UserCustomer } from './entities/user-customer.entity';
import { UserCustomerRepository } from './user-customer.repository';

@Injectable()
export class UserCustomerService {
  constructor(
    @InjectRepository(UserCustomerRepository)
    private readonly _userCustomerRepository: UserCustomerRepository,
    @InjectRepository(UserCustomerRepository)
    private readonly _userRepository: UserRepository,
    private customerService: CustomerService,
    private customerMembershipAnnexedService: CustomerMembershipAnnexedService,
    private beneficiaryService: BeneficiaryService,
    private surveyService: SurveyCustomerService,
    private invoiceService: InvoiceService,
  ) {}

  async create(createUserCustomerDto: CreateUserCustomerDto) {
    const customer: Customer = await this.customerService.create(
      createUserCustomerDto.info_customer,
    );
    this.customerMembershipAnnexedService.createWithCustomer(
      createUserCustomerDto.membership_annexed,
      customer,
    );
    this.beneficiaryService.createAllWithCustomer(
      createUserCustomerDto.beneficiaries,
      customer,
    );
    this.surveyService.createAllWithCustomer(
      createUserCustomerDto.survey,
      customer,
    );
    this.invoiceService.createWithCustomer(
      createUserCustomerDto.invoice,
      customer,
    );
    const userCustomerEntity: UserCustomer = new UserCustomer();
    userCustomerEntity.customer = customer;
    userCustomerEntity.user = await this._userRepository.findOne({
      id: createUserCustomerDto.user_id,
    });
    return this._userCustomerRepository.save(userCustomerEntity);
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
