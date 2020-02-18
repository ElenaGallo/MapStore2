/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */
const React = require('react');

const MapViewer = require('./MapViewer');


const MapViewerPage = React.createClass({
    propTypes: {
        mode: React.PropTypes.string,
        params: React.PropTypes.object,
        loadMapConfig: React.PropTypes.func,
        reset: React.PropTypes.func,
        plugins: React.PropTypes.object,
        location: React.PropTypes.object
    },
    render() {
        return (<MapViewer
            {...this.props}
            mode="embedded"
            />);
    }
});

module.exports = MapViewerPage;
