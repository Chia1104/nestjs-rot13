import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  ForbiddenException,
  Query,
} from '@nestjs/common';
import {
  ApiOperation,
  ApiResponse,
  ApiTags,
  ApiBearerAuth,
  ApiBody,
} from '@nestjs/swagger';
import { Rot13Service } from '../services';
import { Rto13Input } from '../dto/rto13.input';

@Controller('rot13')
@ApiTags('Rot13')
export class Rot13Controller {
  constructor(private readonly rot13Service: Rot13Service) {}

  @Get(':rto13')
  @ApiOperation({ summary: 'Rot13' })
  @ApiResponse({ status: 200, type: String })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiResponse({ status: 404, description: 'Not Found.' })
  async rot13(@Param('rto13') rto13: string) {
    const rot13String = this.rot13Service.rot13(rto13);
    if (!rot13String) throw new ForbiddenException('Invalid ROT13 string');
    return rot13String;
  }
}
