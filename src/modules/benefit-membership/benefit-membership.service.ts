import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BenefitMembershipRepository } from './benefit-membership.repository';
import { CreateBenefitMembershipDto } from './dto/create-benefit-membership.dto';
import { UpdateBenefitMembershipDto } from './dto/update-benefit-membership.dto';

@Injectable()
export class BenefitMembershipService {
  constructor(
    @InjectRepository(BenefitMembershipRepository)
    private readonly _benefitMembershipRepository: BenefitMembershipRepository,
  ) {}

  create(createBenefitMembershipDto: CreateBenefitMembershipDto) {
    return 'This action adds a new benefitMembership';
  }

  findAll() {
    return `This action returns all benefitMembership`;
  }

  findOne(id: number) {
    return `This action returns a #${id} benefitMembership`;
  }

  update(id: number, updateBenefitMembershipDto: UpdateBenefitMembershipDto) {
    return `This action updates a #${id} benefitMembership`;
  }

  remove(id: number) {
    return `This action removes a #${id} benefitMembership`;
  }
}
