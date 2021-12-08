import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AnnexedService } from './annexed.service';
import { CreateAnnexedDto } from './dto/create-annexed.dto';
import { UpdateAnnexedDto } from './dto/update-annexed.dto';

@Controller('annexed')
export class AnnexedController {
  constructor(private readonly annexedService: AnnexedService) {}

  @Post()
  create(@Body() createAnnexedDto: CreateAnnexedDto) {
    return this.annexedService.create(createAnnexedDto);
  }

  @Get()
  findAll() {
    return this.annexedService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.annexedService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAnnexedDto: UpdateAnnexedDto) {
    return this.annexedService.update(+id, updateAnnexedDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.annexedService.remove(+id);
  }
}
