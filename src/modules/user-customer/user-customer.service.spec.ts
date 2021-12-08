import { Test, TestingModule } from '@nestjs/testing';
import { UserCustomerService } from './user-customer.service';

describe('UserCustomerService', () => {
  let service: UserCustomerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserCustomerService],
    }).compile();

    service = module.get<UserCustomerService>(UserCustomerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
