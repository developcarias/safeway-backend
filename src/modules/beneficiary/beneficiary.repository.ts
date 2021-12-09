import { EntityRepository, Repository } from 'typeorm';
import { Beneficiary } from './entities/beneficiary.entity';

@EntityRepository(Beneficiary)
export class BeneficiaryRepository extends Repository<Beneficiary> {}
