import { PartialType } from '@nestjs/swagger';
import { CreateAnnexedDto } from './create-annexed.dto';

export class UpdateAnnexedDto extends PartialType(CreateAnnexedDto) {}
