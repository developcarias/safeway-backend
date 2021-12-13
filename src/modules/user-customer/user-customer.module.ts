import { Module } from '@nestjs/common';
import { UserCustomerService } from './user-customer.service';
import { UserCustomerController } from './user-customer.controller';
import { UserCustomerRepository } from './user-customer.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerService } from '../customer/customer.service';
import { BeneficiaryService } from '../beneficiary/beneficiary.service';
import { SurveyService } from '../survey/survey.service';
import { InvoiceService } from '../invoice/invoice.service';
import { SurveyCustomerRepository } from '../survey-customer/survey-customer.repository';
import { SurveyRepository } from '../survey/survey.repository';
import { CustomerRepository } from '../customer/customer.repository';
import { PlanMembershipRepository } from '../plan-membership/plan-membership.repository';
import { BeneficiaryRepository } from '../beneficiary/beneficiary.repository';
import { InvoiceRepository } from '../invoice/invoice.repository';
import { SurveyCustomerService } from '../survey-customer/survey-customer.service';
import { CustomerMembershipAnnexedService } from '../customer-membership-annexed/customer-membership-annexed.service';
import { CustomerMembershipAnnexedRepository } from '../customer-membership-annexed/customer-membership-annexed.repository';
import { MembershipAnnexedRepository } from '../membership-annexed/membership-annexed.repository';
import { UserRepository } from '../user/user.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      UserCustomerRepository,
      SurveyCustomerRepository,
      SurveyRepository,
      CustomerRepository,
      PlanMembershipRepository,
      BeneficiaryRepository,
      InvoiceRepository,
      CustomerMembershipAnnexedRepository,
      MembershipAnnexedRepository,
      UserRepository,
    ]),
  ],
  controllers: [UserCustomerController],
  providers: [
    UserCustomerService,
    CustomerService,
    BeneficiaryService,
    SurveyService,
    InvoiceService,
    SurveyCustomerService,
    CustomerMembershipAnnexedService,
  ],
})
export class UserCustomerModule {}
