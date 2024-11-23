import { Controller, Get, Param, Put, Delete, Body } from '@nestjs/common';
import { MeatsService } from './meats.service';

@Controller('meats')
export class MeatsController {
  constructor(private readonly meatsService: MeatsService) {}

  @Get(':id')
  get(@Param('id') id: string) {
    return this.meatsService.get(id);
  }

  @Get()
  findAll() {
    return this.meatsService.findAll();
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateData: any) {
    return this.meatsService.update(id, updateData);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.meatsService.delete(id);
  }
}
