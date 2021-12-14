import { CreateMembershipAnnexedDto } from 'src/modules/membership-annexed/dto/create-membership-annexed.dto';

export class CreatePotentialCustomerDto {
  plan_membership_id: string;
  membership_annexed: CreateMembershipAnnexedDto[];
  first_name: string;
  last_name: string;
  cellphone: string;
  email: string;
}
