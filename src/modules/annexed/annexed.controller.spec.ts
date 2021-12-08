import { Test, TestingModule } from '@nestjs/testing';
import { AnnexedController } from './annexed.controller';
import { AnnexedService } from './annexed.service';

describe('AnnexedController', () => {
  let controller: AnnexedController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AnnexedController],
      providers: [AnnexedService],
    }).compile();

    controller = module.get<AnnexedController>(AnnexedController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
