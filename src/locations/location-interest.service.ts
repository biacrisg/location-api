import { Injectable } from '@nestjs/common';
import {
  LocationInterestByProximityDto,
  LocationInterestDto,
} from './dtos/location-interest.dto';
import { LocationInterestRepository } from './location-interest.repository';
import { WithPaginationParams } from '../shared/pagination';

@Injectable()
export class LocationInterestService {
  constructor(private repository: LocationInterestRepository) {}

  createInterestPoint(dto: LocationInterestDto) {
    return this.repository.create(dto);
  }

  getAllInterestPoints(page = 1, pageSize = 10) {
    const offset = (page - 1) * pageSize;
    return Promise.all([
      this.repository.findAll(pageSize, offset),
      this.repository.getTotalCount(),
    ]).then(([data, totalCount]) => ({
      data,
      totalCount,
      hasNextPage: totalCount > offset + pageSize,
    }));
  }

  getAllInterestPointsByProximity(
    params: WithPaginationParams<LocationInterestByProximityDto>,
  ) {
    const { coordinate_x, coordinate_y, time, page = 1,
      pageSize = 10, } = params;

    const offset = (page - 1) * pageSize;
  
    const [hours, minutes] = time.split(':').map(Number);
  
    return this.repository.findAll(pageSize, offset).then((allPoints) => {
      const hour = new Date().setHours(hours, minutes);
      return allPoints
        .map((point) => {
          const pointDistance = Math.round(
            Math.hypot(
              point.coordinate_x - coordinate_x,
              point.coordinate_y - coordinate_y,
            ),
          );
  
          const [openingHours, openingMinutes] = point.opening_time.split(':').map(Number);
          const [closingHours, closingMinutes] = point.closing_time.split(':').map(Number);
  
          const openingTime = new Date().setHours(openingHours, openingMinutes);
          const closingTime = new Date().setHours(closingHours, closingMinutes);
  
          const isOpen = hour >= openingTime && hour <= closingTime;
  
          return {
            ...point,
            distance: pointDistance,
            status: isOpen ? 'Aberto' : 'Fechado',
          };
        })
        .sort((a, b) => a.distance - b.distance);
    });
  }
  
}
