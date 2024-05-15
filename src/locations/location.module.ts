import { Module } from '@nestjs/common';
import { LocationInterestController } from './location-interest.controller';
import { LocationInterestService } from './location-interest.service';
import { LocationInterestRepository } from './location-interest.repository';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [LocationInterestController],
  providers: [
    LocationInterestService,
    LocationInterestRepository,
    PrismaService,
  ],
})
export class LocationModule {}
