import { Injectable } from '@nestjs/common';

@Injectable()
export class Rot13Repository {
  rot13(str: string): string {
    return str.replace(/[a-z]/gi, (c) => {
      return String.fromCharCode(
        c.charCodeAt(0) + (c.toUpperCase() < 'N' ? 13 : -13),
      );
    });
  }
}
