import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreatePlanDto } from './dto/create-plan.dto';
import { UpdatePlanDto } from './dto/update-plan.dto';
import { Plan } from './entities/plan.entity';
import { PlanRepository } from './plan.repository';

@Injectable()
export class PlanService {
  constructor(
    @InjectRepository(PlanRepository)
    private readonly _planRepository: PlanRepository,
  ) {}

  create(createPlanDto: CreatePlanDto) {
    return 'This action adds a new plan';
  }

  async findAll() {
    return this._planRepository
      .find({
        relations: [
          'planMemberships',
          'planMemberships.membership',
          'planMemberships.membership.benefitMemberships',
          'planMemberships.membership.benefitMemberships.benefit',
          'planMemberships.membership.membershipAnnexeds',
          'planMemberships.membership.membershipAnnexeds.annexed',
        ],
      })
      .then((plans: Plan[]) => {
        return plans
          .map((plan: Plan) => {
            return {
              plan_id: plan.id,
              item: plan.item,
              name: plan.name,
              memberships: plan.planMemberships.map((planMembership) => {
                return {
                  membership_id: planMembership.membership.id,
                  item: planMembership.membership.item,
                  name: planMembership.membership.name,
                  priceUSD: planMembership.priceUsd,
                  benefits: planMembership.membership.benefitMemberships
                    .map((benefitMembership) => {
                      return {
                        benefit_id: benefitMembership.benefit.id,
                        item: benefitMembership.benefit.item,
                        name: benefitMembership.benefit.name,
                        description: benefitMembership.benefit.description,
                      };
                    })
                    .sort((a, b) => {
                      return a.item - b.item;
                    }),
                  annexes: planMembership.membership.membershipAnnexeds
                    .map((membershipAnnexed) => {
                      return {
                        annexed_id: membershipAnnexed.annexed.id,
                        item: membershipAnnexed.annexed.item,
                        name: membershipAnnexed.annexed.name,
                        description: membershipAnnexed.annexed.description,
                        priceUSD: membershipAnnexed.priceUsd,
                      };
                    })
                    .sort((a, b) => {
                      return a.item - b.item;
                    }),
                };
              }),
            };
          })
          .sort((a, b) => {
            return a.item - b.item;
          });
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        console.log('Finalizo');
      });
  }

  findOne(id: number) {
    return `This action returns a #${id} plan`;
  }

  update(id: number, updatePlanDto: UpdatePlanDto) {
    return `This action updates a #${id} plan`;
  }

  remove(id: number) {
    return `This action removes a #${id} plan`;
  }
}
