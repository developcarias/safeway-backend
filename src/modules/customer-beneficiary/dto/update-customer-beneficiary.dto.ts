import { PartialType } from '@nestjs/swagger';
import { CreateCustomerBeneficiaryDto } from './create-customer-beneficiary.dto';

export class UpdateCustomerBeneficiaryDto extends PartialType(CreateCustomerBeneficiaryDto) {}
