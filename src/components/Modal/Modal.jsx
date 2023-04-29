import React, {Component} from 'react';
import { Overlay, ModalWindow } from './Modal.styled'; 
import PropTypes from 'prop-types';



function Modal({ pictures }) {
    return (
        <Overlay>
            <Modal>
                <img src="" alt="" />
            </Modal>
        </Overlay>
    );
}

export default Modal;

Modal.propTypes = {
    pictures: PropTypes.array.isRequired,
};