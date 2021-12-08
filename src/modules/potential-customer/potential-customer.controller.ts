import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PotentialCustomerService } from './potential-customer.service';
import { CreatePotentialCustomerDto } from './dto/create-potential-customer.dto';
import { UpdatePotentialCustomerDto } from './dto/update-potential-customer.dto';

@Controller('potential-customer')
export class PotentialCustomerController {
  constructor(private readonly potentialCustomerService: PotentialCustomerService) {}

  @Post()
  create(@Body() createPotentialCustomerDto: CreatePotentialCustomerDto) {
    return this.potentialCustomerService.create(createPotentialCustomerDto);
  }

  @Get()
  findAll() {
    return this.potentialCustomerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.potentialCustomerService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePotentialCustomerDto: UpdatePotentialCustomerDto) {
    return this.potentialCustomerService.update(+id, updatePotentialCustomerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.potentialCustomerService.remove(+id);
  }
}
