import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BeneficiaryRepository } from './beneficiary.repository';
import { CreateBeneficiaryDto } from './dto/create-beneficiary.dto';
import { UpdateBeneficiaryDto } from './dto/update-beneficiary.dto';

@Injectable()
export class BeneficiaryService {
  constructor(
    @InjectRepository(BeneficiaryRepository)
    private readonly _beneficiaryRepository: BeneficiaryRepository,
  ) {}

  create(createBeneficiaryDto: CreateBeneficiaryDto) {
    return 'This action adds a new beneficiary';
  }

  findAll() {
    return `This action returns all beneficiary`;
  }

  findOne(id: number) {
    return `This action returns a #${id} beneficiary`;
  }

  update(id: number, updateBeneficiaryDto: UpdateBeneficiaryDto) {
    return `This action updates a #${id} beneficiary`;
  }

  remove(id: number) {
    return `This action removes a #${id} beneficiary`;
  }
}
