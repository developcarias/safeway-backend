import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Customer } from '../customer/entities/customer.entity';
import { CreateInvoiceDto } from './dto/create-invoice.dto';
import { UpdateInvoiceDto } from './dto/update-invoice.dto';
import { Invoice } from './entities/invoice.entity';
import { InvoiceRepository } from './invoice.repository';

@Injectable()
export class InvoiceService {
  constructor(
    @InjectRepository(InvoiceRepository)
    private readonly _invoiceRepository: InvoiceRepository,
  ) {}

  create(createInvoiceDto: CreateInvoiceDto) {
    return 'This action adds a new invoice';
  }

  createWithCustomer(createInvoiceDto: CreateInvoiceDto, customer: Customer) {
    const invoice: Invoice = new Invoice();
    invoice.customer = customer;
    invoice.isCustomer = createInvoiceDto.is_customer;
    invoice.businessName = createInvoiceDto.business_name;
    invoice.ruc = createInvoiceDto.ruc;
    invoice.email = createInvoiceDto.email;
    invoice.phone = createInvoiceDto.phone;
    invoice.address = createInvoiceDto.address;
    return this._invoiceRepository.save(invoice);
  }

  findAll() {
    return `This action returns all invoice`;
  }

  findOne(id: number) {
    return `This action returns a #${id} invoice`;
  }

  update(id: number, updateInvoiceDto: UpdateInvoiceDto) {
    return `This action updates a #${id} invoice`;
  }

  remove(id: number) {
    return `This action removes a #${id} invoice`;
  }
}
