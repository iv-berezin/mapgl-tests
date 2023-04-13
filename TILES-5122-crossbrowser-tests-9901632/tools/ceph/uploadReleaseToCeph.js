"use strict";
const tslib_1 = require("tslib");
const { createClient } = require('.');
const { readFileSync, readdirSync } = require('fs');
const deployedVersion = process.env.MAPGL_API_VERSION_TO_DEPLOY || '';
if (deployedVersion === '') {
    console.log('MAPGL_API_VERSION_TO_DEPLOY is not passed! Skip upload to S3');
    process.exit(0);
}
if (!/v\d+\.\d+\.\d+/.test(deployedVersion)) {
    console.error(`MAPGL_API_VERSION_TO_DEPLOY ${deployedVersion} is not correct!`);
    process.exit(1);
}
function main() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const action = process.argv[2];
        console.log('process.argv: ', process.argv);
        if (!action) {
            console.error('Action is not passed!');
            return;
        }
        try {
            const s3Client = yield createClient();
            const sdkFileContent = readFileSync('dist/index.js');
            if (action === 'certain') {
                // Загружаем sdk.js в папку с новой версией
                yield s3Client.addFile({
                    name: `${deployedVersion}/sdk.js`,
                    body: sdkFileContent,
                });
                console.log(`Версия ${deployedVersion} загружена!`);
            }
            if (action === 'latest') {
                // Загружаем sdk.js в v1
                yield s3Client.addFile({
                    name: `v1/sdk.js`,
                    body: sdkFileContent,
                });
                console.log(`Latest-версия ${deployedVersion} загружена!`);
            }
        }
        catch (error) {
            console.log(error);
            process.exit(1);
        }
    });
}
main();
//# sourceMappingURL=uploadReleaseToCeph.js.map