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
    @InjectRepository(CustomerRepository)
    private readonly _customerRepository: CustomerRepository,
  ) {}

  create(createBeneficiaryDto: CreateBeneficiaryDto) {
    return 'This action adds a new beneficiary';
  }

  createAllWithCustomer(
    createBeneficiaryDtos: CreateBeneficiaryDto[],
    customer: Customer,
  ) {
    let beneficiariesEntity: Beneficiary[];
    createBeneficiaryDtos.forEach(
      (createBeneficiaryDto: CreateBeneficiaryDto) => {
        const beneficiaryEntity = new Beneficiary();
        beneficiaryEntity.customer = customer;
        beneficiaryEntity.identify = createBeneficiaryDto.indentification;
        beneficiaryEntity.typeIdentify =
          createBeneficiaryDto.idetificaction_type;
        beneficiaryEntity.typeIdentify = createBeneficiaryDto.first_name;
        beneficiaryEntity.lastName = createBeneficiaryDto.last_name;
        beneficiaryEntity.birthDate = createBeneficiaryDto.birth_date;
        beneficiaryEntity.age = createBeneficiaryDto.age;
        beneficiaryEntity.gender = createBeneficiaryDto.gender;
        beneficiaryEntity.placeOfBirth = createBeneficiaryDto.place_of_bith;
        beneficiaryEntity.height = createBeneficiaryDto.height;
        beneficiaryEntity.weight = createBeneficiaryDto.weight;
        beneficiariesEntity.push(beneficiaryEntity);
      },
    );
    return this._beneficiaryRepository.save(beneficiariesEntity);
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
