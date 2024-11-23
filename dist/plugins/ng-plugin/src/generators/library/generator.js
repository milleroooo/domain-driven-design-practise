"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TYPES = void 0;
exports.generateAngularLibraryGenerator = generateAngularLibraryGenerator;
const tslib_1 = require("tslib");
const generators_1 = require("@nx/angular/generators");
exports.TYPES = ['ui', 'data-access', 'feature', 'util'];
function generateAngularLibraryGenerator(tree, options) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        if (options.type === 'all') {
            for (const type of exports.TYPES) {
                yield generateLibrary(tree, options, type);
            }
        }
        else {
            yield generateLibrary(tree, options, options.type);
        }
        const path = `libs/${options.domain}/${options.type}/${options.name}/src`;
        tree.delete(`${path}/lib/${options.name}`);
        tree.write(`${path}/index.ts`, '');
    });
}
exports.default = generateAngularLibraryGenerator;
function generateLibrary(tree, options, type) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield (0, generators_1.libraryGenerator)(tree, {
            name: options.name,
            simpleName: true,
            standalone: true,
            buildable: false,
            prefix: `${options.domain}-${type}`,
            style: 'scss',
            changeDetection: 'OnPush',
            directory: `libs/${options.domain}/${type}`,
            tags: `domain:${options.domain}, type:${type}`,
            importPath: `@${options.domain}/${type}/${options.name}`,
        });
    });
}
//# sourceMappingURL=generator.js.map