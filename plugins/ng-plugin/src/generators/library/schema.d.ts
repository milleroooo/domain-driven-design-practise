export interface GenerateAngularLibraryGeneratorSchema {
  name: string;
  domain: Domain;
  type: Type;
}

export type Domain =
    'fruits' | 'meats' | 'shared'
  | 'spices' | 'vegetables' | 'dairies' | 'grains';
export type Type =
  'ui' | 'data-access' | 'feature' | 'util' | 'all';
