"use strict";
/**
 * Подтирает ассеты после билда для es6 или юнитов
 */
const fs = require('fs-extra');
const glob = require('glob');
glob('src/jakarta/symbols/shaders/code/*.js', function (err, found) {
    for (const fn of found) {
        fs.unlinkSync(fn);
    }
});
console.log('- Shaders');
glob('src/jakarta/utils/pbfSchemes/*.js', function (err, found) {
    for (const fn of found) {
        fs.unlinkSync(fn);
    }
});
console.log('- Protobuf');
//# sourceMappingURL=clearAfterLoaders.js.map