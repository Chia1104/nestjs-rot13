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

  it('should return "SERR PBQR PNZC" for "FREE CODE CAMP"', () => {
    expect(service.rot13('FREE CODE CAMP')).toBe('SERR PBQR PNZC');
  });

  it('should return "SERR-[]dBsdf PNZC" for "FREE-[]qOfqs CAMP"', () => {
    expect(service.rot13('FREE-[]qOfqs CAMP')).toBe('SERR-[]dBsdf PNZC');
  });

  it('should return "AzHnn[=]]zna" for "NmUaa[=]]man"', () => {
    expect(service.rot13('NmUaa[=]]man')).toBe('AzHnn[=]]zna');
  });
});
