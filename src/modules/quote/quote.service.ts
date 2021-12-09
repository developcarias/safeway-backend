import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateQuoteDto } from './dto/create-quote.dto';
import { UpdateQuoteDto } from './dto/update-quote.dto';
import { QuoteRepository } from './quote.repository';

@Injectable()
export class QuoteService {
  constructor(
    @InjectRepository(QuoteRepository)
    private readonly _quoteRepository: QuoteRepository,
  ) {}

  create(createQuoteDto: CreateQuoteDto) {
    return 'This action adds a new quote';
  }

  findAll() {
    return `This action returns all quote`;
  }

  findOne(id: number) {
    return `This action returns a #${id} quote`;
  }

  update(id: number, updateQuoteDto: UpdateQuoteDto) {
    return `This action updates a #${id} quote`;
  }

  remove(id: number) {
    return `This action removes a #${id} quote`;
  }
}
