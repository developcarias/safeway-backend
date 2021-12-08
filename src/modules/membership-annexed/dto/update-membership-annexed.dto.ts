import { PartialType } from '@nestjs/swagger';
import { CreateMembershipAnnexedDto } from './create-membership-annexed.dto';

export class UpdateMembershipAnnexedDto extends PartialType(CreateMembershipAnnexedDto) {}
