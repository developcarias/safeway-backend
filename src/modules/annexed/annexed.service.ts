import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AnnexedRepository } from './annexed.repository';
import { CreateAnnexedDto } from './dto/create-annexed.dto';
import { UpdateAnnexedDto } from './dto/update-annexed.dto';

@Injectable()
export class AnnexedService {
  constructor(
    @InjectRepository(AnnexedRepository)
    private readonly _annexedRepository: AnnexedRepository,
  ) {}

  create(createAnnexedDto: CreateAnnexedDto) {
    return 'This action adds a new annexed';
  }

  findAll() {
    return `This action returns all annexed`;
  }

  findOne(id: number) {
    return `This action returns a #${id} annexed`;
  }

  update(id: number, updateAnnexedDto: UpdateAnnexedDto) {
    return `This action updates a #${id} annexed`;
  }

  remove(id: number) {
    return `This action removes a #${id} annexed`;
  }
}
