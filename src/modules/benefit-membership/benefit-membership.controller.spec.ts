import { Test, TestingModule } from '@nestjs/testing';
import { BenefitMembershipController } from './benefit-membership.controller';
import { BenefitMembershipService } from './benefit-membership.service';

describe('BenefitMembershipController', () => {
  let controller: BenefitMembershipController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BenefitMembershipController],
      providers: [BenefitMembershipService],
    }).compile();

    controller = module.get<BenefitMembershipController>(BenefitMembershipController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
