import { PartialType } from '@nestjs/swagger';
import { CreatePotentialCustomerMembershipAnnexedDto } from './create-potential-customer-membership-annexed.dto';

export class UpdatePotentialCustomerMembershipAnnexedDto extends PartialType(CreatePotentialCustomerMembershipAnnexedDto) {}
