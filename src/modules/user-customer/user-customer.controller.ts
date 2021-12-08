import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserCustomerService } from './user-customer.service';
import { CreateUserCustomerDto } from './dto/create-user-customer.dto';
import { UpdateUserCustomerDto } from './dto/update-user-customer.dto';

@Controller('user-customer')
export class UserCustomerController {
  constructor(private readonly userCustomerService: UserCustomerService) {}

  @Post()
  create(@Body() createUserCustomerDto: CreateUserCustomerDto) {
    return this.userCustomerService.create(createUserCustomerDto);
  }

  @Get()
  findAll() {
    return this.userCustomerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userCustomerService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserCustomerDto: UpdateUserCustomerDto) {
    return this.userCustomerService.update(+id, updateUserCustomerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userCustomerService.remove(+id);
  }
}
