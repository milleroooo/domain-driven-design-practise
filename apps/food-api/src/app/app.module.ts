import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VegetablesModule } from './vegetables/vegetables.module';
import { FruitsModule } from './fruits/fruits.module';
import { MeatsModule } from './meats/meats.module';
import { SpicesModule } from './spices/spices.module';
import { FruitsController } from './fruits/fruits.controller';
import { VegetablesController } from './vegetables/vegetables.controller';
import { MeatsController } from './meats/meats.controller';
import { SpicesController } from './spices/spices.controller';
import { FruitsService } from './fruits/fruits.service';
import { VegetablesService } from './vegetables/vegetables.service';
import { MeatsService } from './meats/meats.service';
import { SpicesService } from './spices/spices.service';
import { DairyModule } from './dairy/dairy.module';
import { DairyController } from './dairy/dairy.controller';
import { DairyService } from './dairy/dairy.service';
import { GrainsModule } from './grains/grains.module';
import { GrainsController } from './grains/grains.controller';
import { GrainsService } from './grains/grains.service';
import { BeverageController } from './beverage/beverage.controller';
import { BeverageService } from './beverage/beverage.service';

@Module({
  imports: [
    VegetablesModule,
    FruitsModule,
    MeatsModule,
    SpicesModule,
    DairyModule,
    GrainsModule
  ],
  controllers: [
    AppController,
    FruitsController,
    VegetablesController,
    MeatsController,
    SpicesController,
    DairyController,
    GrainsController,
    BeverageController
  ],
  providers: [
    AppService,
    FruitsService,
    VegetablesService,
    MeatsService,
    SpicesService,
    DairyService,
    GrainsService,
    BeverageService
  ],
})
export class AppModule {}
