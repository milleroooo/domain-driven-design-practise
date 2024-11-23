/**NX*/
import { Tree } from '@nx/devkit';
/**INTERNALS*/
import { GenerateAngularLibraryGeneratorSchema } from './schema';
export declare const TYPES: string[];
export declare function generateAngularLibraryGenerator(tree: Tree, options: GenerateAngularLibraryGeneratorSchema): Promise<void>;
export default generateAngularLibraryGenerator;
