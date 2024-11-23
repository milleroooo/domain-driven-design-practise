import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { BeverageService } from './beverage.service';
import { Beverage } from './bevarage.interface';

@Controller('beverages')
export class BeverageController {
  constructor(private readonly dairyService: BeverageService) {}

  @Get(':id')
  getDairy(@Param('id') id: string): Beverage {
    return this.dairyService.get(id);
  }

  @Get()
  findAllDairy(): Beverage[] {
    return this.dairyService.findAll();
  }

  @Post()
  createDairy(@Body() dairy: Beverage): Beverage {
    return this.dairyService.create(dairy);
  }

  @Put(':id')
  updateDairy(@Param('id') id: string, @Body() updateData: Partial<Beverage>): Beverage {
    return this.dairyService.update(id, updateData);
  }

  @Delete(':id')
  deleteDairy(@Param('id') id: string): Beverage {
    return this.dairyService.delete(id);
  }
}
