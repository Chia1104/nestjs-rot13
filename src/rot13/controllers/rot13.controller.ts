import { Controller, Post, Body, ForbiddenException } from '@nestjs/common';
import {
  ApiOperation,
  ApiResponse,
  ApiTags,
  ApiBearerAuth,
  ApiBody,
} from '@nestjs/swagger';
import { Rot13Service } from '../services';
import { Rto13Input } from '../dto/rto13.input';

@Controller('api/rot13')
@ApiTags('Rot13')
@ApiBearerAuth()
export class Rot13Controller {
  constructor(private readonly rot13Service: Rot13Service) {}

  @Post()
  @ApiOperation({ summary: 'Rot13' })
  @ApiResponse({ status: 200, type: String })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  @ApiBody({ type: Rto13Input })
  async rot13(@Body() _rto13: Rto13Input) {
    try {
      return this.rot13Service.rot13(_rto13.rto13_string);
    } catch (error) {
      throw new ForbiddenException(error.message);
    }
  }
}
