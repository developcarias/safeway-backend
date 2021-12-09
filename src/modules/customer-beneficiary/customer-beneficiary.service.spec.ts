import { Test, TestingModule } from '@nestjs/testing';
import { CustomerBeneficiaryService } from './customer-beneficiary.service';

describe('CustomerBeneficiaryService', () => {
  let service: CustomerBeneficiaryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CustomerBeneficiaryService],
    }).compile();

    service = module.get<CustomerBeneficiaryService>(
      CustomerBeneficiaryService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
