import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CustomerRepository } from '../customer/customer.repository';
import { Customer } from '../customer/entities/customer.entity';
import { BeneficiaryRepository } from './beneficiary.repository';
import { CreateBeneficiaryDto } from './dto/create-beneficiary.dto';
import { UpdateBeneficiaryDto } from './dto/update-beneficiary.dto';
import { Beneficiary } from './entities/beneficiary.entity';

@Injectable()
export class BeneficiaryService {
  constructor(
    @InjectRepository(BeneficiaryRepository)
    private readonly _beneficiaryRepository: BeneficiaryRepository,
  ) {}

  create(createBeneficiaryDto: CreateBeneficiaryDto) {
    return 'This action adds a new beneficiary';
  }

  async createAllWithCustomer(
    createBeneficiaryDtos: CreateBeneficiaryDto[],
    customer: Customer,
  ) {
    const beneficiariesEntity: Beneficiary[] = [];
    for (const createBeneficiaryDto of createBeneficiaryDtos) {
      const beneficiaryEntity = new Beneficiary();
      beneficiaryEntity.customer = customer;
      beneficiaryEntity.identify = createBeneficiaryDto.identification;
      beneficiaryEntity.typeIdentify = createBeneficiaryDto.identification_type;
      beneficiaryEntity.firstName = createBeneficiaryDto.first_name;
      beneficiaryEntity.lastName = createBeneficiaryDto.last_name;
      beneficiaryEntity.birthDate = createBeneficiaryDto.birth_date;
      beneficiaryEntity.age = createBeneficiaryDto.age;
      beneficiaryEntity.gender = createBeneficiaryDto.gender;
      beneficiaryEntity.placeOfBirth = createBeneficiaryDto.place_of_birth;
      beneficiaryEntity.height = createBeneficiaryDto.height;
      beneficiaryEntity.weight = createBeneficiaryDto.weight;
      beneficiariesEntity.push(beneficiaryEntity);
    }
    return await this._beneficiaryRepository.save(beneficiariesEntity);
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
