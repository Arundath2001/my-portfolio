import React from 'react';
import Modal from 'react-modal';

const MessageModal = ({ isOpen, closeModal, message }) => {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={closeModal}
            className="Modal"
            overlayClassName="Overlay"
        >
            <div className="ModalContent">
                <h2>{message}</h2>
            </div>
        </Modal>
    );
};

export default MessageModal;
