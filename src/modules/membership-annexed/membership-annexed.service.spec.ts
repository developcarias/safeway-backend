import { Test, TestingModule } from '@nestjs/testing';
import { MembershipAnnexedService } from './membership-annexed.service';

describe('MembershipAnnexedService', () => {
  let service: MembershipAnnexedService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MembershipAnnexedService],
    }).compile();

    service = module.get<MembershipAnnexedService>(MembershipAnnexedService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
