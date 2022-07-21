import { Test, TestingModule } from '@nestjs/testing';
import { Rot13Controller } from './rot13.controller';

describe('Rot13Controller', () => {
  let controller: Rot13Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Rot13Controller],
    }).compile();

    controller = module.get<Rot13Controller>(Rot13Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
