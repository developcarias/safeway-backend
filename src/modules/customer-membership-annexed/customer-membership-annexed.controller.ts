import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CustomerMembershipAnnexedService } from './customer-membership-annexed.service';
import { CreateCustomerMembershipAnnexedDto } from './dto/create-customer-membership-annexed.dto';
import { UpdateCustomerMembershipAnnexedDto } from './dto/update-customer-membership-annexed.dto';

@Controller('customer-membership-annexed')
export class CustomerMembershipAnnexedController {
  constructor(
    private readonly customerMembershipAnnexedService: CustomerMembershipAnnexedService,
  ) {}

  @Post()
  create(
    @Body()
    createCustomerMembershipAnnexedDto: CreateCustomerMembershipAnnexedDto,
  ) {
    return this.customerMembershipAnnexedService.create(
      createCustomerMembershipAnnexedDto,
    );
  }

  @Get()
  findAll() {
    return this.customerMembershipAnnexedService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.customerMembershipAnnexedService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body()
    updateCustomerMembershipAnnexedDto: UpdateCustomerMembershipAnnexedDto,
  ) {
    return this.customerMembershipAnnexedService.update(
      +id,
      updateCustomerMembershipAnnexedDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.customerMembershipAnnexedService.remove(+id);
  }
}
