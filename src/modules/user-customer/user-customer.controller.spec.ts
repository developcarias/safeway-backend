import { Test, TestingModule } from '@nestjs/testing';
import { UserCustomerController } from './user-customer.controller';
import { UserCustomerService } from './user-customer.service';

describe('UserCustomerController', () => {
  let controller: UserCustomerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserCustomerController],
      providers: [UserCustomerService],
    }).compile();

    controller = module.get<UserCustomerController>(UserCustomerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
