"use strict";
const fs = require('fs');
const zlib = require('zlib');
function bytesToKiB(bytes) {
    const kib = bytes / 1024;
    if (kib < 10) {
        return kib.toFixed(1);
    }
    return Math.round(kib);
}
function showSize(path) {
    const data = fs.readFileSync(path);
    const size = bytesToKiB(data.byteLength);
    const gzipMaxSize = bytesToKiB(zlib.gzipSync(data, {
        level: zlib.constants.Z_BEST_SPEED,
    }).byteLength);
    const gzipMinSize = bytesToKiB(zlib.gzipSync(data, {
        level: zlib.constants.Z_BEST_COMPRESSION,
    }).byteLength);
    const brotliMaxSize = bytesToKiB(zlib.brotliCompressSync(data, {
        params: {
            [zlib.constants.BROTLI_PARAM_QUALITY]: zlib.constants.BROTLI_MIN_QUALITY,
        },
    }).byteLength);
    const brotliMinSize = bytesToKiB(zlib.brotliCompressSync(data, {
        params: {
            [zlib.constants.BROTLI_PARAM_QUALITY]: zlib.constants.BROTLI_MAX_QUALITY,
        },
    }).byteLength);
    console.log(`File ${path}`);
    console.log(`Size: ${size} KiB`);
    console.log(`Gzip size: [${gzipMinSize} - ${gzipMaxSize}] KiB`);
    console.log(`Brotli size: [${brotliMinSize} - ${brotliMaxSize}] KiB`);
    console.log('--------------------------');
}
console.log('--------------------------');
showSize('dist/index.js');
//# sourceMappingURL=distSize.js.map