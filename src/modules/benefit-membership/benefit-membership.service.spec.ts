import { Test, TestingModule } from '@nestjs/testing';
import { BenefitMembershipService } from './benefit-membership.service';

describe('BenefitMembershipService', () => {
  let service: BenefitMembershipService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BenefitMembershipService],
    }).compile();

    service = module.get<BenefitMembershipService>(BenefitMembershipService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
