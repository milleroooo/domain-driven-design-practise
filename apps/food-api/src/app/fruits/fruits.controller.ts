import { Controller, Get, Param, Put, Delete, Body } from '@nestjs/common';
import { FruitsService } from './fruits.service';

@Controller('fruits')
export class FruitsController {
  constructor(private readonly fruitsService: FruitsService) {}

  @Get(':id')
  get(@Param('id') id: string) {
    return this.fruitsService.get(id);
  }

  @Get()
  findAll() {
    return this.fruitsService.findAll();
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateData: any) {
    return this.fruitsService.update(id, updateData);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.fruitsService.delete(id);
  }
}
