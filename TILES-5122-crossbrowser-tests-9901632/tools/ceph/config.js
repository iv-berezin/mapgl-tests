"use strict";
module.exports = {
    CEPH_ENDPOINT: process.env.CEPH_ENDPOINT || 's3.2gis.one',
    CEPH_ACCESS_KEY_ID: process.env.CEPH_ACCESS_KEY_ID || 'UNKNOWN',
    CEPH_SECRET_ACCESS_KEY: process.env.CEPH_SECRET_ACCESS_KEY || 'UNKNOWN',
    CEPH_BUCKET_NAME: process.env.CEPH_MAPGL_API_BUCKET_NAME || 'mapgl-api',
};
//# sourceMappingURL=config.js.map