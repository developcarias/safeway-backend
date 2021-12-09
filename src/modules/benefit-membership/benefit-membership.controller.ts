import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { BenefitMembershipService } from './benefit-membership.service';
import { CreateBenefitMembershipDto } from './dto/create-benefit-membership.dto';
import { UpdateBenefitMembershipDto } from './dto/update-benefit-membership.dto';

@Controller('benefit-membership')
export class BenefitMembershipController {
  constructor(
    private readonly benefitMembershipService: BenefitMembershipService,
  ) {}

  @Post()
  create(@Body() createBenefitMembershipDto: CreateBenefitMembershipDto) {
    return this.benefitMembershipService.create(createBenefitMembershipDto);
  }

  @Get()
  findAll() {
    return this.benefitMembershipService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.benefitMembershipService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateBenefitMembershipDto: UpdateBenefitMembershipDto,
  ) {
    return this.benefitMembershipService.update(
      +id,
      updateBenefitMembershipDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.benefitMembershipService.remove(+id);
  }
}
