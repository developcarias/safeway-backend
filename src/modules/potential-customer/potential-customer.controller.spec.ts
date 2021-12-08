import { Test, TestingModule } from '@nestjs/testing';
import { PotentialCustomerController } from './potential-customer.controller';
import { PotentialCustomerService } from './potential-customer.service';

describe('PotentialCustomerController', () => {
  let controller: PotentialCustomerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PotentialCustomerController],
      providers: [PotentialCustomerService],
    }).compile();

    controller = module.get<PotentialCustomerController>(PotentialCustomerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
