"use strict";
const schema = require('protocol-buffers-schema');
const compile = require('pbf/compile');
module.exports = function (sourceSchema) {
    return compile.raw(schema.parse(sourceSchema));
};
//# sourceMappingURL=protoLoader.js.map