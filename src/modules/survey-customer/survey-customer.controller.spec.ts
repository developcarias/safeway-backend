import { Test, TestingModule } from '@nestjs/testing';
import { SurveyCustomerController } from './survey-customer.controller';
import { SurveyCustomerService } from './survey-customer.service';

describe('SurveyCustomerController', () => {
  let controller: SurveyCustomerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SurveyCustomerController],
      providers: [SurveyCustomerService],
    }).compile();

    controller = module.get<SurveyCustomerController>(SurveyCustomerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
