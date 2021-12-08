import { Test, TestingModule } from '@nestjs/testing';
import { CustomerBeneficiaryController } from './customer-beneficiary.controller';
import { CustomerBeneficiaryService } from './customer-beneficiary.service';

describe('CustomerBeneficiaryController', () => {
  let controller: CustomerBeneficiaryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CustomerBeneficiaryController],
      providers: [CustomerBeneficiaryService],
    }).compile();

    controller = module.get<CustomerBeneficiaryController>(CustomerBeneficiaryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
