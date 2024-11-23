// eslint-disable-next-line @nx/enforce-module-boundaries
import {SpiceDomain} from "@spices/data-access/domain";
import { Spice } from '../model/spices.model';
import {Injectable} from "@angular/core";

@Injectable({providedIn: 'root'})
export class SpicesMapper {

  mapSpiceDomainToModel(spice: SpiceDomain): Spice {
    return {
      id: spice.id,
      name: spice.name,
      origin: spice.origin,
      flavorProfile: spice.flavorProfile,
    }
  }
}
