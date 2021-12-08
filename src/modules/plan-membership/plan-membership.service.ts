import { Injectable } from '@nestjs/common';
import { CreatePlanMembershipDto } from './dto/create-plan-membership.dto';
import { UpdatePlanMembershipDto } from './dto/update-plan-membership.dto';

@Injectable()
export class PlanMembershipService {
  create(createPlanMembershipDto: CreatePlanMembershipDto) {
    return 'This action adds a new planMembership';
  }

  findAll() {
    return `This action returns all planMembership`;
  }

  findOne(id: number) {
    return `This action returns a #${id} planMembership`;
  }

  update(id: number, updatePlanMembershipDto: UpdatePlanMembershipDto) {
    return `This action updates a #${id} planMembership`;
  }

  remove(id: number) {
    return `This action removes a #${id} planMembership`;
  }
}