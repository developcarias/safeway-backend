import { Test, TestingModule } from '@nestjs/testing';
import { AnnexedService } from './annexed.service';

describe('AnnexedService', () => {
  let service: AnnexedService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AnnexedService],
    }).compile();

    service = module.get<AnnexedService>(AnnexedService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
