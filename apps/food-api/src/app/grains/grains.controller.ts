import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { GrainsService } from './grains.service';
import { Grain } from './grains.interface';

@Controller('grains')
export class GrainsController {
  constructor(private readonly grainsService: GrainsService) {}

  @Get(':id')
  getGrain(@Param('id') id: string): Grain {
    return this.grainsService.get(id);
  }

  @Get()
  findAllGrains(): Grain[] {
    return this.grainsService.findAll();
  }

  @Post()
  createGrain(@Body() grain: Grain): Grain {
    return this.grainsService.create(grain);
  }

  @Put(':id')
  updateGrain(@Param('id') id: string, @Body() updateData: Partial<Grain>): Grain {
    return this.grainsService.update(id, updateData);
  }

  @Delete(':id')
  deleteGrain(@Param('id') id: string): Grain {
    return this.grainsService.delete(id);
  }
}
