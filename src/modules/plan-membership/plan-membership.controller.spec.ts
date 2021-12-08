import { Test, TestingModule } from '@nestjs/testing';
import { PlanMembershipController } from './plan-membership.controller';
import { PlanMembershipService } from './plan-membership.service';

describe('PlanMembershipController', () => {
  let controller: PlanMembershipController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PlanMembershipController],
      providers: [PlanMembershipService],
    }).compile();

    controller = module.get<PlanMembershipController>(PlanMembershipController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
