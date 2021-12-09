import { Test, TestingModule } from '@nestjs/testing';
import { CustomerMembershipAnnexedController } from './customer-membership-annexed.controller';
import { CustomerMembershipAnnexedService } from './customer-membership-annexed.service';

describe('CustomerMembershipAnnexedController', () => {
  let controller: CustomerMembershipAnnexedController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CustomerMembershipAnnexedController],
      providers: [CustomerMembershipAnnexedService],
    }).compile();

    controller = module.get<CustomerMembershipAnnexedController>(
      CustomerMembershipAnnexedController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
