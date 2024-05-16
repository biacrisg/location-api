interface Location {
  id: number;
  name: string;
  coordinate_x: number;
  coordinate_y: number;
  opening_time: string;
  closing_time: string;
}

export const fakeLocalizationsDb: Location[] = [
  {
    id: 1,
    name: 'Location 1',
    coordinate_x: 60,
    coordinate_y: 15,
    opening_time: '08:00',
    closing_time: '18:00',
  },
  {
    id: 2,
    name: 'Location 2',
    coordinate_x: 200,
    coordinate_y: 221,
    opening_time: '08:00',
    closing_time: '18:00',
  },
  {
    id: 3,
    name: 'Location 3',
    coordinate_x: 20,
    coordinate_y: 20,
    opening_time: '08:00',
    closing_time: '18:00',
  },
  {
    id: 4,
    name: 'Location 4',
    coordinate_x: 40,
    coordinate_y: 70,
    opening_time: '08:00',
    closing_time: '18:00',
  },
  {
    id: 5,
    name: 'Location 5',
    coordinate_x: 50,
    coordinate_y: 50,
    opening_time: '18:00',
    closing_time: '22:00',
  },
];

export const fakeResponseLocationsByProximity = [
  {
    id: 2,
    name: 'Location 2',
    coordinate_x: 200,
    coordinate_y: 221,
    opening_time: '08:00',
    closing_time: '18:00',
    distance: 45,
    status: 'Aberto',
  },
  {
    id: 4,
    name: 'Location 4',
    coordinate_x: 40,
    coordinate_y: 70,
    opening_time: '08:00',
    closing_time: '18:00',
    distance: 239,
    status: 'Aberto',
  },
  {
    id: 5,
    name: 'Location 5',
    coordinate_x: 50,
    coordinate_y: 50,
    opening_time: '18:00',
    closing_time: '22:00',
    distance: 242,
    status: 'Fechado',
  },
  {
    id: 1,
    name: 'Location 1',
    coordinate_x: 60,
    coordinate_y: 15,
    opening_time: '08:00',
    closing_time: '18:00',
    distance: 258,
    status: 'Aberto',
  },
  {
    id: 3,
    name: 'Location 3',
    coordinate_x: 20,
    coordinate_y: 20,
    opening_time: '08:00',
    closing_time: '18:00',
    distance: 284,
    status: 'Aberto',
  },
];

export const fakeResponseLocationsByTime = [
  {
    id: 5,
    name: 'Location 5',
    coordinate_x: 50,
    coordinate_y: 50,
    opening_time: '18:00',
    closing_time: '22:00',
    distance: 14,
    status: 'Aberto',
  },
  {
    id: 3,
    name: 'Location 3',
    coordinate_x: 20,
    coordinate_y: 20,
    opening_time: '08:00',
    closing_time: '18:00',
    distance: 28,
    status: 'Fechado',
  },
  {
    id: 4,
    name: 'Location 4',
    coordinate_x: 40,
    coordinate_y: 70,
    opening_time: '08:00',
    closing_time: '18:00',
    distance: 30,
    status: 'Fechado',
  },
  {
    id: 1,
    name: 'Location 1',
    coordinate_x: 60,
    coordinate_y: 15,
    opening_time: '08:00',
    closing_time: '18:00',
    distance: 32,
    status: 'Fechado',
  },
  {
    id: 2,
    name: 'Location 2',
    coordinate_x: 200,
    coordinate_y: 221,
    opening_time: '08:00',
    closing_time: '18:00',
    distance: 242,
    status: 'Fechado',
  },
];

export const prismaMock = {
  points_of_interest: {
    create: jest.fn().mockReturnValue(fakeLocalizationsDb[0]),
    findMany: jest.fn().mockResolvedValue(fakeLocalizationsDb),
    count: jest.fn().mockResolvedValue(fakeLocalizationsDb.length),
  },
};
