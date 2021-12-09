import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateMembershipDto } from './dto/create-membership.dto';
import { UpdateMembershipDto } from './dto/update-membership.dto';
import { MembershipRepository } from './membership.repository';

@Injectable()
export class MembershipService {
  constructor(
    @InjectRepository(MembershipRepository)
    private readonly _membershipRepository: MembershipRepository,
  ) {}

  create(createMembershipDto: CreateMembershipDto) {
    return 'This action adds a new membership';
  }

  findAll() {
    return `This action returns all membership`;
  }

  findOne(id: number) {
    return `This action returns a #${id} membership`;
  }

  update(id: number, updateMembershipDto: UpdateMembershipDto) {
    return `This action updates a #${id} membership`;
  }

  remove(id: number) {
    return `This action removes a #${id} membership`;
  }
}
