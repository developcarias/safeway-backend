import { CreateBeneficiaryDto } from 'src/modules/beneficiary/dto/create-beneficiary.dto';
import { CreateCustomerMembershipAnnexedDto } from 'src/modules/customer-membership-annexed/dto/create-customer-membership-annexed.dto';
import { CreateCustomerDto } from 'src/modules/customer/dto/create-customer.dto';
import { CreateInvoiceDto } from 'src/modules/invoice/dto/create-invoice.dto';
import { CreateSurveyCustomerDto } from 'src/modules/survey-customer/dto/create-survey-customer.dto';

export class CreateUserCustomerDto {
  user_id: string;
  membership_annexed: CreateCustomerMembershipAnnexedDto[];
  info_customer: CreateCustomerDto;
  beneficiaries: CreateBeneficiaryDto[];
  survey: CreateSurveyCustomerDto[];
  invoice: CreateInvoiceDto;
}
