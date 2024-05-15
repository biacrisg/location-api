import { Module } from '@nestjs/common';
import { LocationModule } from './locations/location.module';
import { LocationInterestRepository } from './locations/location-interest.repository';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [LocationModule],
  controllers: [],
  providers: [LocationInterestRepository, PrismaService],
})
export class AppModule {}
