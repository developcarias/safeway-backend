import { Test, TestingModule } from '@nestjs/testing';
import { PotentialCustomerMembershipAnnexedService } from './potential-customer-membership-annexed.service';

describe('PotentialCustomerMembershipAnnexedService', () => {
  let service: PotentialCustomerMembershipAnnexedService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PotentialCustomerMembershipAnnexedService],
    }).compile();

    service = module.get<PotentialCustomerMembershipAnnexedService>(
      PotentialCustomerMembershipAnnexedService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
