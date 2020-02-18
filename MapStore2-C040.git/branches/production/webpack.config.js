const path = require("path");
const extractThemesPlugin = require('./MapStore2/build/themes.js').extractThemesPlugin;

const config = require('./MapStore2/build/buildConfig')(
    {
        'MapStore2-C040': path.join(__dirname, "js", "app"),
        "embedded": path.join(__dirname, "js", "embedded"),
        "ms2-api": path.join(__dirname, "js", "api"),
        "llpp": path.join(__dirname, "js", "llpp")
    },
    {
        "themes/comge": path.join(__dirname, "assets", "themes", "comge", "theme.less")
    },
    {
        base: __dirname,
        dist: path.join(__dirname, "dist"),
        framework: path.join(__dirname, "MapStore2", "web", "client"),
        code: [path.join(__dirname, "js"), path.join(__dirname, "MapStore2", "web", "client")]
    },
    extractThemesPlugin,
    false,
    "/dist/",
    null,
    null,
    {
        '@mapstore': path.resolve(__dirname, 'MapStore2/web/client'),
        '@js': path.resolve(__dirname, 'js')
    },
    {
        '/rest/geostore': {
            target: "https://mappe.comune.genova.it/MapStore2/",
            secure: false,
            headers: {
                host: "mappe.comune.genova.it"
            }
        },
        '/MapStore2/proxy': {
            target: "https://mappe.comune.genova.it",
            secure: false,
            headers: {
                host: "mappe.comune.genova.it"
            }
        },
        '/pdf': {
            target: "https://mappe.comune.genova.it/MapStore2",
            secure: false,
            headers: {
                host: "mappe.comune.genova.it"
            }
        },
        '/MapStore2/pdf': {
            target: "https://mappe.comune.genova.it",
            secure: false,
            headers: {
                host: "mappe.comune.genova.it"
            }
        },
        '/geoserver/': {
            target: "https://mappe.comune.genova.it",
            secure: false,
            headers: {
                host: "mappe.comune.genova.it"
            }
        },
        '/geoserver-test/': {
            target: "https://mappe.comune.genova.it",
            secure: false,
            headers: {
                Host: "mappe.comune.genova.it"
            }
        },
        '/geonetwork': {
            target: "https://mappe.comune.genova.it",
            secure: false,
            headers: {
                host: "mappe.comune.genova.it"
            }
        },
        '/geofence': {
            target: "https://mappe.comune.genova.it",
            secure: false,
            headers: {
                host: "mappe.comune.genova.it"
            }
        }
    }
);


module.exports = config;
