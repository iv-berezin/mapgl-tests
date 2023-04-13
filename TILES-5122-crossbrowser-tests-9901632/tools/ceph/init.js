"use strict";
const tslib_1 = require("tslib");
/**
 * Создаем бакет, если его не было еще
 *
 * @param {AWS.S3} s3Client
 * @param {string} bucketName
 */
function init(s3Client, bucketName) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        let listBucketsResult;
        try {
            listBucketsResult = yield s3Client.listBuckets().promise();
        }
        catch (e) {
            console.error(e);
            process.exit(1);
        }
        if (!listBucketsResult ||
            !listBucketsResult.Buckets ||
            !listBucketsResult.Buckets.find((b) => b.Name === bucketName)) {
            try {
                yield s3Client
                    .createBucket({
                    Bucket: bucketName,
                    CreateBucketConfiguration: {
                        LocationConstraint: 'ru',
                    },
                })
                    .promise();
            }
            catch (e) {
                console.error(`Error bucket creation ${bucketName}`, e);
                process.exit(1);
            }
        }
    });
}
module.exports = {
    init,
};
//# sourceMappingURL=init.js.map