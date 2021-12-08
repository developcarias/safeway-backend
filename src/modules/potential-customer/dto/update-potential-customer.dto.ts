import { PartialType } from '@nestjs/swagger';
import { CreatePotentialCustomerDto } from './create-potential-customer.dto';

export class UpdatePotentialCustomerDto extends PartialType(CreatePotentialCustomerDto) {}
