import { Test, TestingModule } from '@nestjs/testing';
import { Rot13Service } from './rot13.service';

describe('Rot13Service', () => {
  let service: Rot13Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Rot13Service],
    }).compile();

    service = module.get<Rot13Service>(Rot13Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
