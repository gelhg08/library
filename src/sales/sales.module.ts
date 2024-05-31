import { Module } from '@nestjs/common';
import { SalesController } from './controller/sales.controller';
import { SalesService } from './services/sales.service';

@Module({
  controllers: [SalesController],
  providers: [SalesService],
})
export class SalesModule {}
