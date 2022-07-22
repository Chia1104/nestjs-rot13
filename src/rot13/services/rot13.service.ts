import { Injectable } from '@nestjs/common';
import { Rot13Repository } from '../repositories';

@Injectable()
export class Rot13Service {
  constructor(private readonly rot13Repository: Rot13Repository) {}

  public rot13(str: string): { roted13: string } {
    const roted = this.rot13Repository.rot13(str);
    return {
      roted13: roted,
    };
  }
}
