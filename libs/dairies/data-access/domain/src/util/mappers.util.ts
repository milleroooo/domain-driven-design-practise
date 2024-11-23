/**INTERNALS*/
import { DairyDomain } from '../entity/dairy.entity';

/**DAIRIES*/
import { Dairy } from '@dairies/util/model';

export function mapDomains(domains: DairyDomain[]): Dairy[] {
  return domains.map(mapDomain)
}

export function mapDomain(domain: DairyDomain): Dairy {
    return {
      ...domain
    }
}
