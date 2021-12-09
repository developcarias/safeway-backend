import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PlanMembershipService } from './plan-membership.service';
import { CreatePlanMembershipDto } from './dto/create-plan-membership.dto';
import { UpdatePlanMembershipDto } from './dto/update-plan-membership.dto';

@Controller('plan-membership')
export class PlanMembershipController {
  constructor(private readonly planMembershipService: PlanMembershipService) {}

  @Post()
  create(@Body() createPlanMembershipDto: CreatePlanMembershipDto) {
    return this.planMembershipService.create(createPlanMembershipDto);
  }

  @Get()
  findAll() {
    return this.planMembershipService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.planMembershipService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePlanMembershipDto: UpdatePlanMembershipDto,
  ) {
    return this.planMembershipService.update(+id, updatePlanMembershipDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.planMembershipService.remove(+id);
  }
}
