import { Module } from '@nestjs/common';
import { AnnexedService } from './annexed.service';
import { AnnexedController } from './annexed.controller';

@Module({
  controllers: [AnnexedController],
  providers: [AnnexedService]
})
export class AnnexedModule {}
