import { PartialType } from '@nestjs/swagger';
import { CreatePlanMembershipDto } from './create-plan-membership.dto';

export class UpdatePlanMembershipDto extends PartialType(CreatePlanMembershipDto) {}
