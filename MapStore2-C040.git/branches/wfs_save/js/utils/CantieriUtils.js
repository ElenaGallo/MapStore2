const checkedStyle = {
    type: "Polygon",
    stroke: {
        color: 'blue',
        width: 1
    },
    fill: {
        color: [255, 255, 0, 1]
    }
};

module.exports = {

    featureToRow: (f) => ({
        id: f.properties.ID,
        checked: f.checked,
        name: f.properties.NOME_LIVELLO,
        key: f.properties.NOME_LIVELLO + "." + f.properties.ID
    }),
    isSameFeature: (f, f2) =>
        f.properties.ID === f2.properties.ID
        && f.properties.NOME_LIVELLO === f2.properties.NOME_LIVELLO,
    checkFeature: f =>
        ({
            ...f,
            checked: true,
            style: checkedStyle
        }),
    uncheckFeature: f => ({
            ...f,
            style: undefined,
            checked: false
    }),
    hoverFeature: f => ({
        ...f,
        style: f.checked ?
            {
                ...checkedStyle,
                stroke: {
                    color: "red",
                    width: 3
                }
        } : {
            stroke: {
                color: "red",
                width: 3
            }
        }
    })


};
