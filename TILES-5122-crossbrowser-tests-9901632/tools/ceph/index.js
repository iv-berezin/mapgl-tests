"use strict";
// ts-check
const tslib_1 = require("tslib");
const AWS = require('aws-sdk');
const config = require('./config');
const init = require('./init').init;
const s3Client = new AWS.S3({
    endpoint: `http://${config.CEPH_ENDPOINT}`,
    accessKeyId: config.CEPH_ACCESS_KEY_ID,
    secretAccessKey: config.CEPH_SECRET_ACCESS_KEY,
});
const BUCKET_NAME = config.CEPH_BUCKET_NAME;
function createClient() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        try {
            yield init(s3Client, BUCKET_NAME);
        }
        catch (e) {
            console.error(e);
            throw e;
        }
        return cephClientAPI(s3Client);
    });
}
/**
 *
 @param {AWS.S3} s3Client
 */
function cephClientAPI(s3Client) {
    return {
        /**
         * @param {Object} params
         * @param {string} params.name
         * @param {*} params.body
         * @returns {Promise}
         */
        addFile: ({ name, body }) => {
            const payload = {
                ACL: 'public-read',
                Body: body,
                Bucket: BUCKET_NAME,
                Key: name,
            };
            return s3Client.putObject(payload).promise();
        },
        /**
         * @param {string} name
         *
         * @returns {Promise}
         */
        getFile: (name) => {
            const payload = {
                Bucket: BUCKET_NAME,
                Key: name,
            };
            return s3Client.getObject(payload).promise();
        },
        /**
         * @returns {Promise}
         */
        listVersions: () => {
            return s3Client
                .listObjects({
                Bucket: BUCKET_NAME,
                Prefix: 'v',
                Delimiter: '/',
            })
                .promise();
        },
        /**
         * @param {String} version
         *
         * @returns {Promise}
         */
        listVersionFiles: (version) => {
            return s3Client
                .listObjects({
                Bucket: BUCKET_NAME,
                Prefix: version,
                Delimiter: `${version}/`,
            })
                .promise();
        },
        /**
         * @param {Object} params
         * @param {string} params.name
         */
        deleteFile: ({ name }) => s3Client
            .deleteObject({
            Bucket: BUCKET_NAME,
            Key: name,
        })
            .promise(),
    };
}
module.exports = {
    cephClientAPI,
    createClient,
};
//# sourceMappingURL=index.js.map