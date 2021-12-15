import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateMembershipAnnexedDto } from '../membership-annexed/dto/create-membership-annexed.dto';
import { MembershipAnnexedRepository } from '../membership-annexed/membership-annexed.repository';
import { PotentialCustomer } from '../potential-customer/entities/potential-customer.entity';
import { CreatePotentialCustomerMembershipAnnexedDto } from './dto/create-potential-customer-membership-annexed.dto';
import { UpdatePotentialCustomerMembershipAnnexedDto } from './dto/update-potential-customer-membership-annexed.dto';
import { PotentialCustomerMembershipAnnexed } from './entities/potential-customer-membership-annexed.entity';
import { PotentialCustomerMembershipAnnexedRepository } from './potential-customer-membership-annexed.repository';

@Injectable()
export class PotentialCustomerMembershipAnnexedService {
  constructor(
    @InjectRepository(MembershipAnnexedRepository)
    private readonly _membershipAnnexedRepository: MembershipAnnexedRepository,
    @InjectRepository(PotentialCustomerMembershipAnnexedRepository)
    private readonly _potentialCustomerMembershipAnnexedRepository: PotentialCustomerMembershipAnnexedRepository,
  ) {}

  create(
    createPotentialCustomerMembershipAnnexedDto: CreatePotentialCustomerMembershipAnnexedDto,
  ) {
    return 'This action adds a new potentialCustomerMembershipAnnexed';
  }

  async createWithCustomerAndAnnexedMemberships(
    potentialCustomer: PotentialCustomer,
    membershipAnnexes: CreateMembershipAnnexedDto[],
  ) {
    const potentialCustomerMembershipAnnexeds: PotentialCustomerMembershipAnnexed[] =
      [];
    for (const membershipAnnexed of membershipAnnexes) {
      const potentialCustomerMembershipAnnexed: PotentialCustomerMembershipAnnexed =
        new PotentialCustomerMembershipAnnexed();
      potentialCustomerMembershipAnnexed.potenntialCustomer = potentialCustomer;
      potentialCustomerMembershipAnnexed.membershipAnnexed =
        await this._membershipAnnexedRepository.findOne({
          id: membershipAnnexed.membership_annexed_id,
        });
      potentialCustomerMembershipAnnexeds.push(
        potentialCustomerMembershipAnnexed,
      );
    }
    return await this._potentialCustomerMembershipAnnexedRepository.save(
      potentialCustomerMembershipAnnexeds,
    );
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
