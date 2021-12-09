import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BenefitRepository } from './benefit.repository';
import { CreateBenefitDto } from './dto/create-benefit.dto';
import { UpdateBenefitDto } from './dto/update-benefit.dto';

@Injectable()
export class BenefitService {
  constructor(
    @InjectRepository(BenefitRepository)
    private readonly _benefitRepository: BenefitRepository,
  ) {}

  create(createBenefitDto: CreateBenefitDto) {
    return 'This action adds a new benefit';
  }

  findAll() {
    return `This action returns all benefit`;
  }

  findOne(id: number) {
    return `This action returns a #${id} benefit`;
  }

  update(id: number, updateBenefitDto: UpdateBenefitDto) {
    return `This action updates a #${id} benefit`;
  }

  remove(id: number) {
    return `This action removes a #${id} benefit`;
  }
}
