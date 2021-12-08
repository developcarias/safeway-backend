import { Test, TestingModule } from '@nestjs/testing';
import { PotentialCustomerService } from './potential-customer.service';

describe('PotentialCustomerService', () => {
  let service: PotentialCustomerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PotentialCustomerService],
    }).compile();

    service = module.get<PotentialCustomerService>(PotentialCustomerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
