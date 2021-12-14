import { Injectable } from '@nestjs/common';
import { CreatePotentialCustomerMembershipAnnexedDto } from './dto/create-potential-customer-membership-annexed.dto';
import { UpdatePotentialCustomerMembershipAnnexedDto } from './dto/update-potential-customer-membership-annexed.dto';

@Injectable()
export class PotentialCustomerMembershipAnnexedService {
  create(
    createPotentialCustomerMembershipAnnexedDto: CreatePotentialCustomerMembershipAnnexedDto,
  ) {
    return 'This action adds a new potentialCustomerMembershipAnnexed';
  }

  findAll() {
    return `This action returns all potentialCustomerMembershipAnnexed`;
  }

  findOne(id: number) {
    return `This action returns a #${id} potentialCustomerMembershipAnnexed`;
  }

  update(
    id: number,
    updatePotentialCustomerMembershipAnnexedDto: UpdatePotentialCustomerMembershipAnnexedDto,
  ) {
    return `This action updates a #${id} potentialCustomerMembershipAnnexed`;
  }

  remove(id: number) {
    return `This action removes a #${id} potentialCustomerMembershipAnnexed`;
  }
}
