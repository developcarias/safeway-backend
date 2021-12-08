import { PartialType } from '@nestjs/swagger';
import { CreateCustomerMembershipAnnexedDto } from './create-customer-membership-annexed.dto';

export class UpdateCustomerMembershipAnnexedDto extends PartialType(CreateCustomerMembershipAnnexedDto) {}
