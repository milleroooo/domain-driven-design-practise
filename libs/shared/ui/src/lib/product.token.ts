import { InjectionToken } from '@angular/core';
import { ProductBridge } from './product.interface';

export const PRODUCT_TOKEN = new InjectionToken<ProductBridge>('Product Card');
