import { Test, TestingModule } from '@nestjs/testing';
import { SurveyCustomerService } from './survey-customer.service';

describe('SurveyCustomerService', () => {
  let service: SurveyCustomerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SurveyCustomerService],
    }).compile();

    service = module.get<SurveyCustomerService>(SurveyCustomerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
