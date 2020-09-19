import React, { ReactNode } from 'react';

import Loader from '../Loader/Loader';
import { Backdrop, ModalWindow } from './Modal.style';

interface ModalProps {
  onCloseModal: () => void
  isLoading: boolean
  children: ReactNode | ReactNode[]
}

const Modal: React.FC<ModalProps> = ({ onCloseModal, isLoading, children }) => (
  <>
    <Backdrop onClick={onCloseModal} />
    <ModalWindow>
      { isLoading ? <Loader /> : children}
    </ModalWindow>
  </>
);

export default Modal;
