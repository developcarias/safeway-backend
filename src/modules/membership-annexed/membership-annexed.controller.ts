import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MembershipAnnexedService } from './membership-annexed.service';
import { CreateMembershipAnnexedDto } from './dto/create-membership-annexed.dto';
import { UpdateMembershipAnnexedDto } from './dto/update-membership-annexed.dto';

@Controller('membership-annexed')
export class MembershipAnnexedController {
  constructor(private readonly membershipAnnexedService: MembershipAnnexedService) {}

  @Post()
  create(@Body() createMembershipAnnexedDto: CreateMembershipAnnexedDto) {
    return this.membershipAnnexedService.create(createMembershipAnnexedDto);
  }

  @Get()
  findAll() {
    return this.membershipAnnexedService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.membershipAnnexedService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMembershipAnnexedDto: UpdateMembershipAnnexedDto) {
    return this.membershipAnnexedService.update(+id, updateMembershipAnnexedDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.membershipAnnexedService.remove(+id);
  }
}
