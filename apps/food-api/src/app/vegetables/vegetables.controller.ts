import { Controller, Get, Param, Put, Delete, Body } from '@nestjs/common';
import { VegetablesService } from './vegetables.service';

@Controller('vegetables')
export class VegetablesController {
  constructor(private readonly vegetablesService: VegetablesService) {}

  @Get(':id')
  get(@Param('id') id: string) {
    return this.vegetablesService.get(id);
  }

  @Get()
  findAll() {
    return this.vegetablesService.findAll();
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateData: any) {
    return this.vegetablesService.update(id, updateData);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.vegetablesService.delete(id);
  }
}
