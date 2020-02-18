const React = require('react');
require('./item.less');

const AddressesItem = ({item}) => {

    return !!item.pagination ? (
        <span className="smallItem">
            <span>{item.pagination}</span>
        </span>
    ) : (
        <span className="smallItem">
            <em>{item.DESVIA + " " + item.TESTO}</em><br/>
            <strong>{item.CODICE_CONTROLLO}</strong>
        </span>
    );
};

module.exports = AddressesItem;
