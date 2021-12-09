import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SurveyCustomerService } from './survey-customer.service';
import { CreateSurveyCustomerDto } from './dto/create-survey-customer.dto';
import { UpdateSurveyCustomerDto } from './dto/update-survey-customer.dto';

@Controller('survey-customer')
export class SurveyCustomerController {
  constructor(private readonly surveyCustomerService: SurveyCustomerService) {}

  @Post()
  create(@Body() createSurveyCustomerDto: CreateSurveyCustomerDto) {
    return this.surveyCustomerService.create(createSurveyCustomerDto);
  }

  @Get()
  findAll() {
    return this.surveyCustomerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.surveyCustomerService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateSurveyCustomerDto: UpdateSurveyCustomerDto,
  ) {
    return this.surveyCustomerService.update(+id, updateSurveyCustomerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.surveyCustomerService.remove(+id);
  }
}
