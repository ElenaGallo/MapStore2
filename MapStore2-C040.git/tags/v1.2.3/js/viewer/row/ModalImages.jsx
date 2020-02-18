/**
 * Copyright 2017, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React, { PropTypes } from 'react';
const Modal = require('../../../MapStore2/web/client/components/misc/Modal');
const {Button} = require('react-bootstrap');

const ModalImages = (props) => {
    return (
        <div>
            <Modal
                {...props.modalOptions}
                id="geocollect-images-modal"
                onHide={() => props.onClickThumbnail(false, "")}
                show={props.showModal}
                bsSize="large"
                style={{overflowY: "auto"}}
                container={document.getElementById("body")}>
                <Modal.Header closeButton>
                    <Modal.Title>{props.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body >
                    <div style={{textAlign: "center"}}>
                        <a target="_blank" href={props.imgSrc}> <img src={props.imgSrc} style={{width: "90%"}}/></a>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button bsSize="small" style={{"float": "right"}} bsStyle="primary" onClick={() => props.onClickThumbnail(false, "")}>{props.closeButtonText}</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

ModalImages.propTypes = {
    title: PropTypes.string.isRequired,
    modalOptions: PropTypes.object.isRequired,
    showModal: PropTypes.bool.isRequired,
    onClickThumbnail: PropTypes.func.isRequired,
    imgSrc: PropTypes.string.isRequired,
    closeButtonText: PropTypes.object.isRequired
};

ModalImages.defaultProps = {
    modalOptions: {}
};

module.exports = ModalImages;
