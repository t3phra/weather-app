import React, { ReactNode } from 'react';

import { Backdrop, ModalWindow } from './Modal.style';

interface ModalProps {
  onCloseModal: () => void
  children: ReactNode | ReactNode[]
}

const Modal: React.FC<ModalProps> = ({ onCloseModal, children }) => (
  <>
    <Backdrop onClick={onCloseModal} />
    <ModalWindow>
      {children}
    </ModalWindow>
  </>
);

export default Modal;
