import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { DairyService } from './dairy.service';
import { Dairy } from './dairy.interface';

@Controller('dairies')
export class DairyController {
  constructor(private readonly dairyService: DairyService) {}

  @Get(':id')
  getDairy(@Param('id') id: string): Dairy {
    return this.dairyService.get(id);
  }

  @Get()
  findAllDairy(): Dairy[] {
    return this.dairyService.findAll();
  }

  @Post()
  createDairy(@Body() dairy: Dairy): Dairy {
    return this.dairyService.create(dairy);
  }

  @Put(':id')
  updateDairy(@Param('id') id: string, @Body() updateData: Partial<Dairy>): Dairy {
    return this.dairyService.update(id, updateData);
  }

  @Delete(':id')
  deleteDairy(@Param('id') id: string): Dairy {
    return this.dairyService.delete(id);
  }
}
