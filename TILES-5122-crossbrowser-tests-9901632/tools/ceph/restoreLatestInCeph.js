"use strict";
const tslib_1 = require("tslib");
const { createClient } = require('.');
const versionToRestore = process.env.MAPGL_API_VERSION_TO_RESTORE || '';
if (versionToRestore === '') {
    console.log('MAPGL_API_VERSION_TO_RESTORE is not passed! Skip restoring in S3');
    process.exit(0);
}
if (!/v\d+\.\d+\.\d+/.test(versionToRestore)) {
    console.error(`MAPGL_API_VERSION_TO_RESTORE ${versionToRestore} is not correct!`);
    process.exit(1);
}
function main() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        try {
            const s3Client = yield createClient();
            // Скачиваем версию, которую необходимо разместить в latest
            const files = yield s3Client
                .listVersionFiles(versionToRestore)
                .then((data) => (data.Contents || []).map((item) => item.Key));
            if (!files.length) {
                console.log(`There is no any files in ${versionToRestore} version.`);
                process.exit(1);
            }
            for (const fileName of files) {
                const fileSources = yield s3Client.getFile(fileName);
                // Загружаем версию в v1
                // По сути, обновляем latest
                yield s3Client.addFile({
                    name: `v1/sdk.js`,
                    body: fileSources.Body,
                });
            }
        }
        catch (error) {
            console.log(error);
            process.exit(1);
        }
    });
}
main();
//# sourceMappingURL=restoreLatestInCeph.js.map