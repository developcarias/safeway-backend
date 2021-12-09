import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateMembershipAnnexedDto } from './dto/create-membership-annexed.dto';
import { UpdateMembershipAnnexedDto } from './dto/update-membership-annexed.dto';
import { MembershipAnnexedRepository } from './membership-annexed.repository';

@Injectable()
export class MembershipAnnexedService {
  constructor(
    @InjectRepository(MembershipAnnexedRepository)
    private readonly _membershipAnnexedRepositoryRepository: MembershipAnnexedRepository,
  ) {}

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
