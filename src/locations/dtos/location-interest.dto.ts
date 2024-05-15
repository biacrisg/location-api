export class LocationInterestDto {
  name: string;
  coordinate_x: number;
  coordinate_y: number;
  opening_time?: string;
  closing_time?: string;
}

export class LocationInterestByProximityDto {
  coordinate_x?: number;
  coordinate_y?: number;
  time?: string;
}
