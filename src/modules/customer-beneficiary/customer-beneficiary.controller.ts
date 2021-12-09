import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CustomerBeneficiaryService } from './customer-beneficiary.service';
import { CreateCustomerBeneficiaryDto } from './dto/create-customer-beneficiary.dto';
import { UpdateCustomerBeneficiaryDto } from './dto/update-customer-beneficiary.dto';

@Controller('customer-beneficiary')
export class CustomerBeneficiaryController {
  constructor(
    private readonly customerBeneficiaryService: CustomerBeneficiaryService,
  ) {}

  @Post()
  create(@Body() createCustomerBeneficiaryDto: CreateCustomerBeneficiaryDto) {
    return this.customerBeneficiaryService.create(createCustomerBeneficiaryDto);
  }

  @Get()
  findAll() {
    return this.customerBeneficiaryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.customerBeneficiaryService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCustomerBeneficiaryDto: UpdateCustomerBeneficiaryDto,
  ) {
    return this.customerBeneficiaryService.update(
      +id,
      updateCustomerBeneficiaryDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.customerBeneficiaryService.remove(+id);
  }
}
