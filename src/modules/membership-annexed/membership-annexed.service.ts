import { Injectable } from '@nestjs/common';
import { CreateMembershipAnnexedDto } from './dto/create-membership-annexed.dto';
import { UpdateMembershipAnnexedDto } from './dto/update-membership-annexed.dto';

@Injectable()
export class MembershipAnnexedService {
  create(createMembershipAnnexedDto: CreateMembershipAnnexedDto) {
    return 'This action adds a new membershipAnnexed';
  }

  findAll() {
    return `This action returns all membershipAnnexed`;
  }

  findOne(id: number) {
    return `This action returns a #${id} membershipAnnexed`;
  }

  update(id: number, updateMembershipAnnexedDto: UpdateMembershipAnnexedDto) {
    return `This action updates a #${id} membershipAnnexed`;
  }

  remove(id: number) {
    return `This action removes a #${id} membershipAnnexed`;
  }
}
