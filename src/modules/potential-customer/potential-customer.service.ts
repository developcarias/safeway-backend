import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateMembershipAnnexedDto } from '../membership-annexed/dto/create-membership-annexed.dto';
import { MembershipAnnexedRepository } from '../membership-annexed/membership-annexed.repository';
import { PlanMembershipRepository } from '../plan-membership/plan-membership.repository';
import { PotentialCustomerMembershipAnnexed } from '../potential-customer-membership-annexed/entities/potential-customer-membership-annexed.entity';
import { PotentialCustomerMembershipAnnexedRepository } from '../potential-customer-membership-annexed/potential-customer-membership-annexed.repository';
import { CreatePotentialCustomerDto } from './dto/create-potential-customer.dto';
import { UpdatePotentialCustomerDto } from './dto/update-potential-customer.dto';
import { PotentialCustomer } from './entities/potential-customer.entity';
import { PotentialCustomerRepository } from './potential-customer.repository';

@Injectable()
export class PotentialCustomerService {
  constructor(
    @InjectRepository(PotentialCustomerRepository)
    private readonly _potentialCustomerRepository: PotentialCustomerRepository,
    @InjectRepository(PlanMembershipRepository)
    private readonly _planMembershipRepository: PlanMembershipRepository,
    @InjectRepository(MembershipAnnexedRepository)
    private readonly _membershipAnnexedRepository: MembershipAnnexedRepository,
    @InjectRepository(PotentialCustomerMembershipAnnexedRepository)
    private readonly _potentialCustomerMembershipAnnexedRepository: PotentialCustomerMembershipAnnexedRepository,
  ) {}

  async create(createPotentialCustomerDto: CreatePotentialCustomerDto) {
    const portentialCustomerEntity: PotentialCustomer = new PotentialCustomer();
    portentialCustomerEntity.planMembership =
      await this._planMembershipRepository.findOne({
        id: createPotentialCustomerDto.plan_membership_id,
      });
    portentialCustomerEntity.firstName = createPotentialCustomerDto.first_name;
    portentialCustomerEntity.lastName = createPotentialCustomerDto.last_name;
    portentialCustomerEntity.phoneContact =
      createPotentialCustomerDto.cellphone;
    portentialCustomerEntity.email = createPotentialCustomerDto.email;
    portentialCustomerEntity.created = new Date();
    const portentialCustomerEntitySaved =
      await this._potentialCustomerRepository.save(portentialCustomerEntity);

    let potentialCustomerMembershipAnnexeds: PotentialCustomerMembershipAnnexed[];
    createPotentialCustomerDto.membership_annexed.forEach(
      async (membershipAnnexed: CreateMembershipAnnexedDto) => {
        const potentialCustomerMembershipAnnexed: PotentialCustomerMembershipAnnexed =
          new PotentialCustomerMembershipAnnexed();
        potentialCustomerMembershipAnnexed.potenntialCustomer =
          portentialCustomerEntitySaved;
        potentialCustomerMembershipAnnexed.membershipAnnexed =
          await this._membershipAnnexedRepository.findOne({
            id: membershipAnnexed.membership_annexed_id,
          });
        potentialCustomerMembershipAnnexeds.push(
          potentialCustomerMembershipAnnexed,
        );
      },
    );
    this._potentialCustomerMembershipAnnexedRepository.save(
      potentialCustomerMembershipAnnexeds,
    );

    return portentialCustomerEntitySaved;
  }

  findAll() {
    return `This action returns all potentialCustomer`;
  }

  findOne(id: number) {
    return `This action returns a #${id} potentialCustomer`;
  }

  update(id: number, updatePotentialCustomerDto: UpdatePotentialCustomerDto) {
    return `This action updates a #${id} potentialCustomer`;
  }

  remove(id: number) {
    return `This action removes a #${id} potentialCustomer`;
  }
}
