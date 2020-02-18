/*
 * Copyright 2017, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */
const React = require('react');

require('../../MapStore2/web/client/product/assets/css/viewer.css');

const {connect} = require('react-redux');
const ConfigUtils = require('../../MapStore2/web/client/utils/ConfigUtils');
const {loadMapConfig} = require('../../MapStore2/web/client/actions/config');
const {resetControls} = require('../../MapStore2/web/client/actions/controls');
const {startFeatureLoader, updateFeatureLoader} = require('../actions/featureloader');

const MapViewer = require('../containers/FeatureViewer');

const MapViewerPage = React.createClass({
    propTypes: {
        mode: React.PropTypes.string,
        params: React.PropTypes.object,
        onMount: React.PropTypes.func,
        onUpdate: React.PropTypes.func,
        reset: React.PropTypes.func,
        plugins: React.PropTypes.object
    },
    getDefaultProps() {
        return {
            mode: 'featureviewer',
            onMount: () => {},
            onUpdate: () => {}
        };
    },
    componentWillMount() {
        this.props.onMount(ConfigUtils.getConfigProp("wmsURL"), this.props.params, "config.json");
        if (!ConfigUtils.getDefaults().ignoreMobileCss) {
            if (this.props.mode === 'mobile') {
                require('../../MapStore2/web/client/product/assets/css/mobile.css');
            }
        }
    },
    componentDidUpdate(prevProps) {
        if (this.props.params !== prevProps.params) {
            this.props.onUpdate(prevProps, this.props.params, ConfigUtils.getConfigProp("wmsURL"));
        }
    },
    render() {
        return (<MapViewer
            mode={this.props.mode}
            plugins={this.props.plugins}
            />);
    }
});

module.exports = connect(() => ({
}),
{
    loadMapConfig,
    onMount: startFeatureLoader,
    onUpdate: updateFeatureLoader,
    reset: resetControls
})(MapViewerPage);
