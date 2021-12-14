import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PotentialCustomerMembershipAnnexedService } from './potential-customer-membership-annexed.service';
import { CreatePotentialCustomerMembershipAnnexedDto } from './dto/create-potential-customer-membership-annexed.dto';
import { UpdatePotentialCustomerMembershipAnnexedDto } from './dto/update-potential-customer-membership-annexed.dto';

@Controller('potential-customer-membership-annexed')
export class PotentialCustomerMembershipAnnexedController {
  constructor(
    private readonly potentialCustomerMembershipAnnexedService: PotentialCustomerMembershipAnnexedService,
  ) {}

  @Post()
  create(
    @Body()
    createPotentialCustomerMembershipAnnexedDto: CreatePotentialCustomerMembershipAnnexedDto,
  ) {
    return this.potentialCustomerMembershipAnnexedService.create(
      createPotentialCustomerMembershipAnnexedDto,
    );
  }

  @Get()
  findAll() {
    return this.potentialCustomerMembershipAnnexedService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.potentialCustomerMembershipAnnexedService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body()
    updatePotentialCustomerMembershipAnnexedDto: UpdatePotentialCustomerMembershipAnnexedDto,
  ) {
    return this.potentialCustomerMembershipAnnexedService.update(
      +id,
      updatePotentialCustomerMembershipAnnexedDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.potentialCustomerMembershipAnnexedService.remove(+id);
  }
}
