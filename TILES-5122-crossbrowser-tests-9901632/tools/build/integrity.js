"use strict";
const crypto = require('crypto');
const fs = require('fs');
const hash = crypto.createHash('sha512');
hash.update(fs.readFileSync('dist/index.js'));
const digest = hash.digest().toString('base64');
const result = `sha512-${digest}`;
console.log('\n');
console.log('============================================');
console.log('Integrity hash for dist/index.js:\n');
console.log('\x1b[1m\x1b[33m%s\x1b[0m', result);
console.log('\n');
console.log('============================================');
console.log('\n');
fs.writeFileSync('dist/hash.txt', result);
//# sourceMappingURL=integrity.js.map