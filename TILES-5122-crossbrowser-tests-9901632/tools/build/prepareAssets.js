"use strict";
/**
 * Собирает ассеты в целевую директорию, компилирует шейдеры и протобаф
 */
const fs = require('fs-extra');
const glob = require('glob');
const path = require('path');
const { execSync } = require('child_process');
const shadersLoader = require('../webpack-loaders/shadersLoader');
const protoLoader = require('../webpack-loaders/protoLoader');
const root = path.join(__dirname, '../..');
const dist = path.join(root, 'dist');
fs.copySync(path.join(root, 'demo', 'favicon.ico'), path.join(dist, 'favicon.ico'));
fs.copySync(path.join(root, 'demo', 'assets'), path.join(dist, 'assets'));
fs.copySync(path.join(root, 'demo', 'index.html'), path.join(dist, 'index.html'));
fs.copySync(path.join(root, 'demo', 'empty.html'), path.join(dist, 'empty.html'));
fs.copySync(path.join(root, 'demo', 'destroy.html'), path.join(dist, 'destroy.html'));
fs.copySync(path.join(root, 'demo', 'handler.html'), path.join(dist, 'handler.html'));
fs.copySync(path.join(root, 'demo', 'test', 'index.html'), path.join(dist, 'test.html'));
fs.copySync(path.join(root, 'test', 'index.html'), path.join(dist, 'test/index.html'));
fs.copySync(path.join(root, 'test', 'async.html'), path.join(dist, 'test/async.html'));
fs.copySync(path.join(root, 'test', 'assets'), path.join(dist, 'test/assets'));
fs.copySync(path.join(root, 'performance', 'index.html'), path.join(dist, 'perf', 'index.html'));
console.log('+ HTML');
if (process.argv.includes('runLoaders')) {
    function interact(fileName, f) {
        fs.writeFileSync(fileName + '.js', f(fs.readFileSync(fileName).toString()));
    }
    glob('src/jakarta/symbols/shaders/code/*.@(v|f|vf)sh', function (err, found) {
        for (const fn of found) {
            interact(fn, shadersLoader);
        }
    });
    console.log('+ Shaders');
    glob('src/jakarta/utils/pbfSchemes/*.proto', function (err, found) {
        for (const fn of found) {
            interact(fn, protoLoader);
        }
    });
    console.log('+ Protobuf');
}
//# sourceMappingURL=prepareAssets.js.map