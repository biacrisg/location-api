import { Controller, Post, Body, Get, Query } from '@nestjs/common';
import {
  LocationInterestDto,
  LocationInterestByProximityDto,
} from './dtos/location-interest.dto';
import { LocationInterestService } from './location-interest.service';
import { WithPaginationParams } from '../shared/pagination';

@Controller('/')
export class LocationInterestController {
  constructor(private service: LocationInterestService) {}

  @Post('create-point')
  createInterestPoint(@Body() dto: LocationInterestDto) {
    return this.service.createInterestPoint(dto);
  }

  @Get('all-interest-points')
  getAllInterestPoints() {
    return this.service.getAllInterestPoints();
  }

  @Get('interest-points-proximity')
  getAllInterestPointsByProximity(
    @Query() pagination: WithPaginationParams,
    @Body() params: LocationInterestByProximityDto,
  ) {
    return this.service.getAllInterestPointsByProximity({
      ...params,
      ...pagination,
    });
  }
}
