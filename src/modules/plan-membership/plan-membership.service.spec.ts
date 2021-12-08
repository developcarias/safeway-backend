import { Test, TestingModule } from '@nestjs/testing';
import { PlanMembershipService } from './plan-membership.service';

describe('PlanMembershipService', () => {
  let service: PlanMembershipService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PlanMembershipService],
    }).compile();

    service = module.get<PlanMembershipService>(PlanMembershipService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
