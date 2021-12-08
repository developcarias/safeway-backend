import { PartialType } from '@nestjs/swagger';
import { CreateBenefitMembershipDto } from './create-benefit-membership.dto';

export class UpdateBenefitMembershipDto extends PartialType(CreateBenefitMembershipDto) {}
