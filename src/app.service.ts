import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  entryPoint(): string {
    return 'ROT13';
  }
}
