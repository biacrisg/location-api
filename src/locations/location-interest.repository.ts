import { Injectable } from '@nestjs/common';
import { LocationInterestDto } from './dtos/location-interest.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class LocationInterestRepository {
  constructor(private prisma: PrismaService) {}

  async create(locationInterestDto: LocationInterestDto) {
    const { name, coordinate_x, coordinate_y, opening_time, closing_time } =
      locationInterestDto;
    return this.prisma.points_of_interest.create({
      data: { name, coordinate_x, coordinate_y, opening_time, closing_time },
    });
  }

  async findAll(pageSize?: number, offset?: number) {
    return this.prisma.points_of_interest.findMany({
      take: pageSize && Number(pageSize),
      skip: offset && Number(offset),
    });
  }

  async getTotalCount(): Promise<number> {
    return this.prisma.points_of_interest.count();
  }
}
