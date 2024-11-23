import { Controller, Get, Param, Put, Delete, Body } from '@nestjs/common';
import { SpicesService } from './spices.service';

@Controller('spices')
export class SpicesController {
  constructor(private readonly spicesService: SpicesService) {}

  @Get(':id')
  get(@Param('id') id: string) {
    return this.spicesService.get(id);
  }

  @Get()
  findAll() {
    return this.spicesService.findAll();
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateData: any) {
    return this.spicesService.update(id, updateData);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.spicesService.delete(id);
  }
}
