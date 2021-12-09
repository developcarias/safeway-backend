import { Test, TestingModule } from '@nestjs/testing';
import { MembershipAnnexedController } from './membership-annexed.controller';
import { MembershipAnnexedService } from './membership-annexed.service';

describe('MembershipAnnexedController', () => {
  let controller: MembershipAnnexedController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MembershipAnnexedController],
      providers: [MembershipAnnexedService],
    }).compile();

    controller = module.get<MembershipAnnexedController>(
      MembershipAnnexedController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
