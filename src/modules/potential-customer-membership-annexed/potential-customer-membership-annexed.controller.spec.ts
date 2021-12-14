import { Test, TestingModule } from '@nestjs/testing';
import { PotentialCustomerMembershipAnnexedController } from './potential-customer-membership-annexed.controller';
import { PotentialCustomerMembershipAnnexedService } from './potential-customer-membership-annexed.service';

describe('PotentialCustomerMembershipAnnexedController', () => {
  let controller: PotentialCustomerMembershipAnnexedController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PotentialCustomerMembershipAnnexedController],
      providers: [PotentialCustomerMembershipAnnexedService],
    }).compile();

    controller = module.get<PotentialCustomerMembershipAnnexedController>(
      PotentialCustomerMembershipAnnexedController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
