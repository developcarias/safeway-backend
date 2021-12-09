import { Module } from '@nestjs/common';
import { AnnexedService } from './annexed.service';
import { AnnexedController } from './annexed.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AnnexedRepository } from './annexed.repository';

@Module({
  imports: [TypeOrmModule.forFeature([AnnexedRepository])],
  controllers: [AnnexedController],
  providers: [AnnexedService],
})
export class AnnexedModule {}
