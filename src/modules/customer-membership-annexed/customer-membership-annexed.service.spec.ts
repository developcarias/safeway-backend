import { Test, TestingModule } from '@nestjs/testing';
import { CustomerMembershipAnnexedService } from './customer-membership-annexed.service';

describe('CustomerMembershipAnnexedService', () => {
  let service: CustomerMembershipAnnexedService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CustomerMembershipAnnexedService],
    }).compile();

    service = module.get<CustomerMembershipAnnexedService>(CustomerMembershipAnnexedService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
