interface Localization {
  name: string;
  coordinate_x: number;
  coordinate_y: number;
  opening_time: string;
  closing_time: string;
}

export const fakeLocalizations: Localization[] = [
  {
    name: 'Location 1',
    coordinate_x: 60,
    coordinate_y: 15,
    opening_time: '08:00',
    closing_time: '18:00',
  },
  {
    name: 'Location 2',
    coordinate_x: 200,
    coordinate_y: 221,
    opening_time: '08:00',
    closing_time: '18:00',
  },
  {
    name: 'Location 3',
    coordinate_x: 20,
    coordinate_y: 20,
    opening_time: '08:00',
    closing_time: '18:00',
  },
  {
    name: 'Location 4',
    coordinate_x: 40,
    coordinate_y: 70,
    opening_time: '08:00',
    closing_time: '18:00',
  },
  {
    name: 'Location 5',
    coordinate_x: 50,
    coordinate_y: 50,
    opening_time: '18:00',
    closing_time: '22:00',
  },
];

export const prismaMock = {
  points_of_interest: {
    create: jest.fn().mockReturnValue(fakeLocalizations[0]),
    findMany: jest.fn().mockResolvedValue(fakeLocalizations),
    findUnique: jest.fn().mockResolvedValue(fakeLocalizations[0]),
    update: jest.fn().mockResolvedValue(fakeLocalizations[0]),
    delete: jest.fn(),
    count: jest.fn().mockResolvedValue(fakeLocalizations.length),
  },
};
