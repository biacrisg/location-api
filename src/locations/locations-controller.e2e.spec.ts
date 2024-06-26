import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { LocationInterestController } from './location-interest.controller';
import {
  fakeLocalizationsDb,
  fakeResponseLocationsByProximity,
  fakeResponseLocationsByTime,
  prismaMock,
} from '../../__tests__/locations/mocks';
import { LocationInterestService } from './location-interest.service';
import { LocationInterestRepository } from './location-interest.repository';
import { PrismaService } from '../prisma/prisma.service';

describe('Locations (e2e)', () => {
  let app: INestApplication;
  let controller: LocationInterestController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LocationInterestController],
      providers: [
        LocationInterestService,
        LocationInterestRepository,
        {
          provide: PrismaService,
          useValue: prismaMock,
        },
      ],
    }).compile();

    app = module.createNestApplication();
    await app.init();
    controller = module.get(LocationInterestController);
  });

  it('to be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should create a location interest', async () => {
    const response = await controller.createInterestPoint(
      fakeLocalizationsDb[0],
    );
    expect(response).toEqual(fakeLocalizationsDb[0]);
  });

  it('should get all location interests', async () => {
    const response = await controller.getAllInterestPoints();
    expect(response).toEqual({
      data: fakeLocalizationsDb,
      totalCount: fakeLocalizationsDb.length,
      hasNextPage: false,
    });
  });

  it('should get Location 2 by proximity', async () => {
    const response = await controller.getAllInterestPointsByProximity(
      {
        page: 1,
        pageSize: 10,
      },
      {
        coordinate_x: 240,
        coordinate_y: 200,
        time: '17:00',
      },
    );

    expect(response).toEqual(fakeResponseLocationsByProximity);
  });

  it('should get Location 5 by proximity and time', async () => {
    const response = await controller.getAllInterestPointsByProximity(
      {
        page: 1,
        pageSize: 10,
      },
      {
        coordinate_x: 40,
        coordinate_y: 40,
        time: '19:00',
      },
    );

    expect(response).toEqual(fakeResponseLocationsByTime);
  });
});
