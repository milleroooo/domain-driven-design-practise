/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),
/* 2 */
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppModule = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const app_controller_1 = __webpack_require__(5);
const app_service_1 = __webpack_require__(6);
const vegetables_module_1 = __webpack_require__(7);
const fruits_module_1 = __webpack_require__(8);
const meats_module_1 = __webpack_require__(9);
const spices_module_1 = __webpack_require__(10);
const fruits_controller_1 = __webpack_require__(11);
const vegetables_controller_1 = __webpack_require__(13);
const meats_controller_1 = __webpack_require__(15);
const spices_controller_1 = __webpack_require__(17);
const fruits_service_1 = __webpack_require__(12);
const vegetables_service_1 = __webpack_require__(14);
const meats_service_1 = __webpack_require__(16);
const spices_service_1 = __webpack_require__(18);
const dairy_module_1 = __webpack_require__(19);
const dairy_controller_1 = __webpack_require__(20);
const dairy_service_1 = __webpack_require__(21);
const grains_module_1 = __webpack_require__(24);
const grains_controller_1 = __webpack_require__(25);
const grains_service_1 = __webpack_require__(26);
const beverage_controller_1 = __webpack_require__(28);
const beverage_service_1 = __webpack_require__(29);
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [
            vegetables_module_1.VegetablesModule,
            fruits_module_1.FruitsModule,
            meats_module_1.MeatsModule,
            spices_module_1.SpicesModule,
            dairy_module_1.DairyModule,
            grains_module_1.GrainsModule
        ],
        controllers: [
            app_controller_1.AppController,
            fruits_controller_1.FruitsController,
            vegetables_controller_1.VegetablesController,
            meats_controller_1.MeatsController,
            spices_controller_1.SpicesController,
            dairy_controller_1.DairyController,
            grains_controller_1.GrainsController,
            beverage_controller_1.BeverageController
        ],
        providers: [
            app_service_1.AppService,
            fruits_service_1.FruitsService,
            vegetables_service_1.VegetablesService,
            meats_service_1.MeatsService,
            spices_service_1.SpicesService,
            dairy_service_1.DairyService,
            grains_service_1.GrainsService,
            beverage_service_1.BeverageService
        ],
    })
], AppModule);


/***/ }),
/* 4 */
/***/ ((module) => {

module.exports = require("tslib");

/***/ }),
/* 5 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppController = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const app_service_1 = __webpack_require__(6);
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    getData() {
        return this.appService.getData();
    }
};
exports.AppController = AppController;
tslib_1.__decorate([
    (0, common_1.Get)(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], AppController.prototype, "getData", null);
exports.AppController = AppController = tslib_1.__decorate([
    (0, common_1.Controller)(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof app_service_1.AppService !== "undefined" && app_service_1.AppService) === "function" ? _a : Object])
], AppController);


/***/ }),
/* 6 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppService = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
let AppService = class AppService {
    getData() {
        return { message: 'Hello API' };
    }
};
exports.AppService = AppService;
exports.AppService = AppService = tslib_1.__decorate([
    (0, common_1.Injectable)()
], AppService);


/***/ }),
/* 7 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.VegetablesModule = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
let VegetablesModule = class VegetablesModule {
};
exports.VegetablesModule = VegetablesModule;
exports.VegetablesModule = VegetablesModule = tslib_1.__decorate([
    (0, common_1.Module)({})
], VegetablesModule);


/***/ }),
/* 8 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FruitsModule = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
let FruitsModule = class FruitsModule {
};
exports.FruitsModule = FruitsModule;
exports.FruitsModule = FruitsModule = tslib_1.__decorate([
    (0, common_1.Module)({})
], FruitsModule);


/***/ }),
/* 9 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MeatsModule = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
let MeatsModule = class MeatsModule {
};
exports.MeatsModule = MeatsModule;
exports.MeatsModule = MeatsModule = tslib_1.__decorate([
    (0, common_1.Module)({})
], MeatsModule);


/***/ }),
/* 10 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SpicesModule = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
let SpicesModule = class SpicesModule {
};
exports.SpicesModule = SpicesModule;
exports.SpicesModule = SpicesModule = tslib_1.__decorate([
    (0, common_1.Module)({})
], SpicesModule);


/***/ }),
/* 11 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FruitsController = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const fruits_service_1 = __webpack_require__(12);
let FruitsController = class FruitsController {
    constructor(fruitsService) {
        this.fruitsService = fruitsService;
    }
    get(id) {
        return this.fruitsService.get(id);
    }
    findAll() {
        return this.fruitsService.findAll();
    }
    update(id, updateData) {
        return this.fruitsService.update(id, updateData);
    }
    delete(id) {
        return this.fruitsService.delete(id);
    }
};
exports.FruitsController = FruitsController;
tslib_1.__decorate([
    (0, common_1.Get)(':id'),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", void 0)
], FruitsController.prototype, "get", null);
tslib_1.__decorate([
    (0, common_1.Get)(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], FruitsController.prototype, "findAll", null);
tslib_1.__decorate([
    (0, common_1.Put)(':id'),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__param(1, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", void 0)
], FruitsController.prototype, "update", null);
tslib_1.__decorate([
    (0, common_1.Delete)(':id'),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", void 0)
], FruitsController.prototype, "delete", null);
exports.FruitsController = FruitsController = tslib_1.__decorate([
    (0, common_1.Controller)('fruits'),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof fruits_service_1.FruitsService !== "undefined" && fruits_service_1.FruitsService) === "function" ? _a : Object])
], FruitsController);


/***/ }),
/* 12 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FruitsService = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
let FruitsService = class FruitsService {
    constructor() {
        this.fruits = [
            { id: '1', name: 'Apple', color: 'Red', taste: 'Sweet' },
            { id: '2', name: 'Banana', color: 'Yellow', taste: 'Sweet' },
            { id: '3', name: 'Lemon', color: 'Yellow', taste: 'Sour' },
        ];
    }
    get(id) {
        return this.fruits.find(fruit => fruit.id === id);
    }
    findAll() {
        return this.fruits;
    }
    update(id, updateData) {
        const index = this.fruits.findIndex(fruit => fruit.id === id);
        if (index !== -1) {
            this.fruits[index] = { ...this.fruits[index], ...updateData };
            return this.fruits[index];
        }
        return null;
    }
    delete(id) {
        const index = this.fruits.findIndex(fruit => fruit.id === id);
        if (index !== -1) {
            return this.fruits.splice(index, 1);
        }
        return null;
    }
};
exports.FruitsService = FruitsService;
exports.FruitsService = FruitsService = tslib_1.__decorate([
    (0, common_1.Injectable)()
], FruitsService);


/***/ }),
/* 13 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.VegetablesController = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const vegetables_service_1 = __webpack_require__(14);
let VegetablesController = class VegetablesController {
    constructor(vegetablesService) {
        this.vegetablesService = vegetablesService;
    }
    get(id) {
        return this.vegetablesService.get(id);
    }
    findAll() {
        return this.vegetablesService.findAll();
    }
    update(id, updateData) {
        return this.vegetablesService.update(id, updateData);
    }
    delete(id) {
        return this.vegetablesService.delete(id);
    }
};
exports.VegetablesController = VegetablesController;
tslib_1.__decorate([
    (0, common_1.Get)(':id'),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", void 0)
], VegetablesController.prototype, "get", null);
tslib_1.__decorate([
    (0, common_1.Get)(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], VegetablesController.prototype, "findAll", null);
tslib_1.__decorate([
    (0, common_1.Put)(':id'),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__param(1, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", void 0)
], VegetablesController.prototype, "update", null);
tslib_1.__decorate([
    (0, common_1.Delete)(':id'),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", void 0)
], VegetablesController.prototype, "delete", null);
exports.VegetablesController = VegetablesController = tslib_1.__decorate([
    (0, common_1.Controller)('vegetables'),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof vegetables_service_1.VegetablesService !== "undefined" && vegetables_service_1.VegetablesService) === "function" ? _a : Object])
], VegetablesController);


/***/ }),
/* 14 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.VegetablesService = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
let VegetablesService = class VegetablesService {
    constructor() {
        this.vegetables = [
            { id: '1', name: 'Carrot', color: 'Orange', season: 'Winter' },
            { id: '2', name: 'Spinach', color: 'Green', season: 'Spring' },
            { id: '3', name: 'Potato', color: 'Brown', season: 'All' },
            { id: '4', name: 'Tomato', color: 'Red', season: 'Summer' },
            { id: '5', name: 'Broccoli', color: 'Green', season: 'Spring' },
            { id: '6', name: 'Spinach', color: 'Green', season: 'Spring' },
            { id: '7', name: 'Pumpkin', color: 'Orange', season: 'Autumn' },
            { id: '8', name: 'Beetroot', color: 'Red', season: 'Summer' },
        ];
    }
    get(id) {
        return this.vegetables.find(veg => veg.id === id);
    }
    findAll() {
        return this.vegetables;
    }
    update(id, updateData) {
        const index = this.vegetables.findIndex(veg => veg.id === id);
        if (index !== -1) {
            this.vegetables[index] = { ...this.vegetables[index], ...updateData };
            return this.vegetables[index];
        }
        return null;
    }
    delete(id) {
        const index = this.vegetables.findIndex(veg => veg.id === id);
        if (index !== -1) {
            return this.vegetables.splice(index, 1);
        }
        return null;
    }
};
exports.VegetablesService = VegetablesService;
exports.VegetablesService = VegetablesService = tslib_1.__decorate([
    (0, common_1.Injectable)()
], VegetablesService);


/***/ }),
/* 15 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MeatsController = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const meats_service_1 = __webpack_require__(16);
let MeatsController = class MeatsController {
    constructor(meatsService) {
        this.meatsService = meatsService;
    }
    get(id) {
        return this.meatsService.get(id);
    }
    findAll() {
        return this.meatsService.findAll();
    }
    update(id, updateData) {
        return this.meatsService.update(id, updateData);
    }
    delete(id) {
        return this.meatsService.delete(id);
    }
};
exports.MeatsController = MeatsController;
tslib_1.__decorate([
    (0, common_1.Get)(':id'),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", void 0)
], MeatsController.prototype, "get", null);
tslib_1.__decorate([
    (0, common_1.Get)(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], MeatsController.prototype, "findAll", null);
tslib_1.__decorate([
    (0, common_1.Put)(':id'),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__param(1, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", void 0)
], MeatsController.prototype, "update", null);
tslib_1.__decorate([
    (0, common_1.Delete)(':id'),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", void 0)
], MeatsController.prototype, "delete", null);
exports.MeatsController = MeatsController = tslib_1.__decorate([
    (0, common_1.Controller)('meats'),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof meats_service_1.MeatsService !== "undefined" && meats_service_1.MeatsService) === "function" ? _a : Object])
], MeatsController);


/***/ }),
/* 16 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MeatsService = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
let MeatsService = class MeatsService {
    constructor() {
        this.meats = [
            { id: '1', type: 'Beef', cut: 'Ribeye', origin: 'USA' },
            { id: '2', type: 'Chicken', cut: 'Breast', origin: 'Brazil' },
            { id: '3', type: 'Pork', cut: 'Loin', origin: 'Spain' },
        ];
    }
    get(id) {
        return this.meats.find(meat => meat.id === id);
    }
    findAll() {
        return this.meats;
    }
    update(id, updateData) {
        const index = this.meats.findIndex(meat => meat.id === id);
        if (index !== -1) {
            this.meats[index] = { ...this.meats[index], ...updateData };
            return this.meats[index];
        }
        return null;
    }
    delete(id) {
        const index = this.meats.findIndex(meat => meat.id === id);
        if (index !== -1) {
            return this.meats.splice(index, 1);
        }
        return null;
    }
};
exports.MeatsService = MeatsService;
exports.MeatsService = MeatsService = tslib_1.__decorate([
    (0, common_1.Injectable)()
], MeatsService);


/***/ }),
/* 17 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SpicesController = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const spices_service_1 = __webpack_require__(18);
let SpicesController = class SpicesController {
    constructor(spicesService) {
        this.spicesService = spicesService;
    }
    get(id) {
        return this.spicesService.get(id);
    }
    findAll() {
        return this.spicesService.findAll();
    }
    update(id, updateData) {
        return this.spicesService.update(id, updateData);
    }
    delete(id) {
        return this.spicesService.delete(id);
    }
};
exports.SpicesController = SpicesController;
tslib_1.__decorate([
    (0, common_1.Get)(':id'),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", void 0)
], SpicesController.prototype, "get", null);
tslib_1.__decorate([
    (0, common_1.Get)(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], SpicesController.prototype, "findAll", null);
tslib_1.__decorate([
    (0, common_1.Put)(':id'),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__param(1, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", void 0)
], SpicesController.prototype, "update", null);
tslib_1.__decorate([
    (0, common_1.Delete)(':id'),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", void 0)
], SpicesController.prototype, "delete", null);
exports.SpicesController = SpicesController = tslib_1.__decorate([
    (0, common_1.Controller)('spices'),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof spices_service_1.SpicesService !== "undefined" && spices_service_1.SpicesService) === "function" ? _a : Object])
], SpicesController);


/***/ }),
/* 18 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SpicesService = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
let SpicesService = class SpicesService {
    constructor() {
        this.spices = [
            { id: '1', name: 'Cinnamon', origin: 'Sri Lanka', flavorProfile: 'Sweet' },
            { id: '2', name: 'Pepper', origin: 'India', flavorProfile: 'Pungent' },
            { id: '3', name: 'Turmeric', origin: 'India', flavorProfile: 'Bitter' },
        ];
    }
    get(id) {
        return this.spices.find(spice => spice.id === id);
    }
    findAll() {
        return this.spices;
    }
    update(id, updateData) {
        const index = this.spices.findIndex(spice => spice.id === id);
        if (index !== -1) {
            this.spices[index] = { ...this.spices[index], ...updateData };
            return this.spices[index];
        }
        return null;
    }
    delete(id) {
        const index = this.spices.findIndex(spice => spice.id === id);
        if (index !== -1) {
            return this.spices.splice(index, 1);
        }
        return null;
    }
};
exports.SpicesService = SpicesService;
exports.SpicesService = SpicesService = tslib_1.__decorate([
    (0, common_1.Injectable)()
], SpicesService);


/***/ }),
/* 19 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DairyModule = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
let DairyModule = class DairyModule {
};
exports.DairyModule = DairyModule;
exports.DairyModule = DairyModule = tslib_1.__decorate([
    (0, common_1.Module)({})
], DairyModule);


/***/ }),
/* 20 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d, _e, _f, _g;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DairyController = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const dairy_service_1 = __webpack_require__(21);
const dairy_interface_1 = __webpack_require__(23);
let DairyController = class DairyController {
    constructor(dairyService) {
        this.dairyService = dairyService;
    }
    getDairy(id) {
        return this.dairyService.get(id);
    }
    findAllDairy() {
        return this.dairyService.findAll();
    }
    createDairy(dairy) {
        return this.dairyService.create(dairy);
    }
    updateDairy(id, updateData) {
        return this.dairyService.update(id, updateData);
    }
    deleteDairy(id) {
        return this.dairyService.delete(id);
    }
};
exports.DairyController = DairyController;
tslib_1.__decorate([
    (0, common_1.Get)(':id'),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", typeof (_b = typeof dairy_interface_1.Dairy !== "undefined" && dairy_interface_1.Dairy) === "function" ? _b : Object)
], DairyController.prototype, "getDairy", null);
tslib_1.__decorate([
    (0, common_1.Get)(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Array)
], DairyController.prototype, "findAllDairy", null);
tslib_1.__decorate([
    (0, common_1.Post)(),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_c = typeof dairy_interface_1.Dairy !== "undefined" && dairy_interface_1.Dairy) === "function" ? _c : Object]),
    tslib_1.__metadata("design:returntype", typeof (_d = typeof dairy_interface_1.Dairy !== "undefined" && dairy_interface_1.Dairy) === "function" ? _d : Object)
], DairyController.prototype, "createDairy", null);
tslib_1.__decorate([
    (0, common_1.Put)(':id'),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__param(1, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, typeof (_e = typeof Partial !== "undefined" && Partial) === "function" ? _e : Object]),
    tslib_1.__metadata("design:returntype", typeof (_f = typeof dairy_interface_1.Dairy !== "undefined" && dairy_interface_1.Dairy) === "function" ? _f : Object)
], DairyController.prototype, "updateDairy", null);
tslib_1.__decorate([
    (0, common_1.Delete)(':id'),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", typeof (_g = typeof dairy_interface_1.Dairy !== "undefined" && dairy_interface_1.Dairy) === "function" ? _g : Object)
], DairyController.prototype, "deleteDairy", null);
exports.DairyController = DairyController = tslib_1.__decorate([
    (0, common_1.Controller)('dairies'),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof dairy_service_1.DairyService !== "undefined" && dairy_service_1.DairyService) === "function" ? _a : Object])
], DairyController);


/***/ }),
/* 21 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DairyService = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const uuid_1 = __webpack_require__(22); // For generating unique IDs
let DairyService = class DairyService {
    constructor() {
        this.dairyItems = [
            { id: '1', name: 'Cheddar', type: 'Cheese', fatContent: 33 },
            { id: '2', name: 'Whole Milk', type: 'Milk', fatContent: 3.25 },
            { id: '3', name: 'Yogurt', type: 'Yogurt', fatContent: 4 },
        ];
    }
    get(id) {
        return this.dairyItems.find(item => item.id === id);
    }
    findAll() {
        return this.dairyItems;
    }
    create(dairy) {
        const newDairy = { ...dairy, id: (0, uuid_1.v4)() }; // Assign a new unique ID
        this.dairyItems.push(newDairy);
        return newDairy;
    }
    update(id, updateData) {
        const index = this.dairyItems.findIndex(item => item.id === id);
        if (index !== -1) {
            this.dairyItems[index] = { ...this.dairyItems[index], ...updateData };
            return this.dairyItems[index];
        }
        return null;
    }
    delete(id) {
        const index = this.dairyItems.findIndex(item => item.id === id);
        if (index !== -1) {
            return this.dairyItems.splice(index, 1)[0];
        }
        return null;
    }
};
exports.DairyService = DairyService;
exports.DairyService = DairyService = tslib_1.__decorate([
    (0, common_1.Injectable)()
], DairyService);


/***/ }),
/* 22 */
/***/ ((module) => {

module.exports = require("uuid");

/***/ }),
/* 23 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 24 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GrainsModule = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
let GrainsModule = class GrainsModule {
};
exports.GrainsModule = GrainsModule;
exports.GrainsModule = GrainsModule = tslib_1.__decorate([
    (0, common_1.Module)({})
], GrainsModule);


/***/ }),
/* 25 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d, _e, _f, _g;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GrainsController = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const grains_service_1 = __webpack_require__(26);
const grains_interface_1 = __webpack_require__(27);
let GrainsController = class GrainsController {
    constructor(grainsService) {
        this.grainsService = grainsService;
    }
    getGrain(id) {
        return this.grainsService.get(id);
    }
    findAllGrains() {
        return this.grainsService.findAll();
    }
    createGrain(grain) {
        return this.grainsService.create(grain);
    }
    updateGrain(id, updateData) {
        return this.grainsService.update(id, updateData);
    }
    deleteGrain(id) {
        return this.grainsService.delete(id);
    }
};
exports.GrainsController = GrainsController;
tslib_1.__decorate([
    (0, common_1.Get)(':id'),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", typeof (_b = typeof grains_interface_1.Grain !== "undefined" && grains_interface_1.Grain) === "function" ? _b : Object)
], GrainsController.prototype, "getGrain", null);
tslib_1.__decorate([
    (0, common_1.Get)(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Array)
], GrainsController.prototype, "findAllGrains", null);
tslib_1.__decorate([
    (0, common_1.Post)(),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_c = typeof grains_interface_1.Grain !== "undefined" && grains_interface_1.Grain) === "function" ? _c : Object]),
    tslib_1.__metadata("design:returntype", typeof (_d = typeof grains_interface_1.Grain !== "undefined" && grains_interface_1.Grain) === "function" ? _d : Object)
], GrainsController.prototype, "createGrain", null);
tslib_1.__decorate([
    (0, common_1.Put)(':id'),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__param(1, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, typeof (_e = typeof Partial !== "undefined" && Partial) === "function" ? _e : Object]),
    tslib_1.__metadata("design:returntype", typeof (_f = typeof grains_interface_1.Grain !== "undefined" && grains_interface_1.Grain) === "function" ? _f : Object)
], GrainsController.prototype, "updateGrain", null);
tslib_1.__decorate([
    (0, common_1.Delete)(':id'),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", typeof (_g = typeof grains_interface_1.Grain !== "undefined" && grains_interface_1.Grain) === "function" ? _g : Object)
], GrainsController.prototype, "deleteGrain", null);
exports.GrainsController = GrainsController = tslib_1.__decorate([
    (0, common_1.Controller)('grains'),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof grains_service_1.GrainsService !== "undefined" && grains_service_1.GrainsService) === "function" ? _a : Object])
], GrainsController);


/***/ }),
/* 26 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GrainsService = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const uuid_1 = __webpack_require__(22); // For generating unique IDs
let GrainsService = class GrainsService {
    constructor() {
        this.grains = [
            { id: '1', name: 'Rice', type: 'White', nutritionalValue: 'High in carbs' },
            { id: '2', name: 'Quinoa', type: 'Whole', nutritionalValue: 'High in protein' },
            { id: '3', name: 'Oats', type: 'Rolled', nutritionalValue: 'High in fiber' },
        ];
    }
    get(id) {
        return this.grains.find(grain => grain.id === id);
    }
    findAll() {
        return this.grains;
    }
    create(grain) {
        const newGrain = { ...grain, id: (0, uuid_1.v4)() }; // Assign a new unique ID
        this.grains.push(newGrain);
        return newGrain;
    }
    update(id, updateData) {
        const index = this.grains.findIndex(grain => grain.id === id);
        if (index !== -1) {
            this.grains[index] = { ...this.grains[index], ...updateData };
            return this.grains[index];
        }
        return null;
    }
    delete(id) {
        const index = this.grains.findIndex(grain => grain.id === id);
        if (index !== -1) {
            return this.grains.splice(index, 1)[0];
        }
        return null;
    }
};
exports.GrainsService = GrainsService;
exports.GrainsService = GrainsService = tslib_1.__decorate([
    (0, common_1.Injectable)()
], GrainsService);


/***/ }),
/* 27 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 28 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d, _e, _f, _g;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BeverageController = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const beverage_service_1 = __webpack_require__(29);
const bevarage_interface_1 = __webpack_require__(30);
let BeverageController = class BeverageController {
    constructor(dairyService) {
        this.dairyService = dairyService;
    }
    getDairy(id) {
        return this.dairyService.get(id);
    }
    findAllDairy() {
        return this.dairyService.findAll();
    }
    createDairy(dairy) {
        return this.dairyService.create(dairy);
    }
    updateDairy(id, updateData) {
        return this.dairyService.update(id, updateData);
    }
    deleteDairy(id) {
        return this.dairyService.delete(id);
    }
};
exports.BeverageController = BeverageController;
tslib_1.__decorate([
    (0, common_1.Get)(':id'),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", typeof (_b = typeof bevarage_interface_1.Beverage !== "undefined" && bevarage_interface_1.Beverage) === "function" ? _b : Object)
], BeverageController.prototype, "getDairy", null);
tslib_1.__decorate([
    (0, common_1.Get)(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Array)
], BeverageController.prototype, "findAllDairy", null);
tslib_1.__decorate([
    (0, common_1.Post)(),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_c = typeof bevarage_interface_1.Beverage !== "undefined" && bevarage_interface_1.Beverage) === "function" ? _c : Object]),
    tslib_1.__metadata("design:returntype", typeof (_d = typeof bevarage_interface_1.Beverage !== "undefined" && bevarage_interface_1.Beverage) === "function" ? _d : Object)
], BeverageController.prototype, "createDairy", null);
tslib_1.__decorate([
    (0, common_1.Put)(':id'),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__param(1, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, typeof (_e = typeof Partial !== "undefined" && Partial) === "function" ? _e : Object]),
    tslib_1.__metadata("design:returntype", typeof (_f = typeof bevarage_interface_1.Beverage !== "undefined" && bevarage_interface_1.Beverage) === "function" ? _f : Object)
], BeverageController.prototype, "updateDairy", null);
tslib_1.__decorate([
    (0, common_1.Delete)(':id'),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", typeof (_g = typeof bevarage_interface_1.Beverage !== "undefined" && bevarage_interface_1.Beverage) === "function" ? _g : Object)
], BeverageController.prototype, "deleteDairy", null);
exports.BeverageController = BeverageController = tslib_1.__decorate([
    (0, common_1.Controller)('beverages'),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof beverage_service_1.BeverageService !== "undefined" && beverage_service_1.BeverageService) === "function" ? _a : Object])
], BeverageController);


/***/ }),
/* 29 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BeverageService = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const uuid_1 = __webpack_require__(22);
let BeverageService = class BeverageService {
    constructor() {
        this.beverages = [
            {
                id: 'b1',
                name: 'Cola',
                type: 'Cold',
                volumeInLiters: 1.5,
                isCarbonated: true,
            },
            {
                id: 'b2',
                name: 'Green Tea',
                type: 'Hot',
                volumeInLiters: 0.3,
                isCarbonated: false,
            },
            {
                id: 'b3',
                name: 'Orange Juice',
                type: 'Cold',
                volumeInLiters: 1.0,
                isCarbonated: false,
            }
        ];
    }
    get(id) {
        return this.beverages.find(item => item.id === id);
    }
    findAll() {
        return this.beverages;
    }
    create(dairy) {
        const newDairy = { ...dairy, id: (0, uuid_1.v4)() }; // Assign a new unique ID
        this.beverages.push(newDairy);
        return newDairy;
    }
    update(id, updateData) {
        const index = this.beverages.findIndex(item => item.id === id);
        if (index !== -1) {
            this.beverages[index] = { ...this.beverages[index], ...updateData };
            return this.beverages[index];
        }
        return null;
    }
    delete(id) {
        const index = this.beverages.findIndex(item => item.id === id);
        if (index !== -1) {
            return this.beverages.splice(index, 1)[0];
        }
        return null;
    }
};
exports.BeverageService = BeverageService;
exports.BeverageService = BeverageService = tslib_1.__decorate([
    (0, common_1.Injectable)()
], BeverageService);


/***/ }),
/* 30 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it uses a non-standard name for the exports (exports).
(() => {
var exports = __webpack_exports__;

/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
const common_1 = __webpack_require__(1);
const core_1 = __webpack_require__(2);
const app_module_1 = __webpack_require__(3);
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, { cors: true });
    const globalPrefix = 'api';
    app.setGlobalPrefix(globalPrefix);
    const port = process.env.PORT || 3000;
    await app.listen(port);
    common_1.Logger.log(`🚀 Application is running on: http://localhost:${port}/${globalPrefix}`);
}
bootstrap();

})();

/******/ })()
;