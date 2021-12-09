import { EntityRepository, Repository } from 'typeorm';
import { Annexed } from './entities/annexed.entity';

@EntityRepository(Annexed)
export class AnnexedRepository extends Repository<Annexed> {}
