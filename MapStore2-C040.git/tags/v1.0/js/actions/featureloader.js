/**
 * Copyright 2017, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */
const STARTLOADING = "FEATURELOADER::STARTLOADING";
const UPDATE = "FEATURELOADER::UPDATE";
module.exports = {
    /**
     * start loading the features
     */
    startFeatureLoader: (wmsURL, params = {}, configURL) => ({
        type: STARTLOADING,
        wmsURL,
        layer: params.layer,
        cql_filter: params.cql_filter,
        configURL
    }),
    updateFeatureLoader: (oldParams = {}, params = {}, wmsURL) => ({
        type: UPDATE,
        layer: params.layer,
        cql_filter: params.cql_filter,
        oldParams,
        wmsURL
    }),
    STARTLOADING,
    UPDATE
};
