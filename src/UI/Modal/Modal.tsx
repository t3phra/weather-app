import React, { memo, ReactNode } from 'react';

import Loader from '../Loader/Loader';
import { Backdrop, ModalWindow } from './Modal.style';

interface ModalProps {
  show: boolean
  onCloseModal: () => void
  isLoading: boolean
  children: ReactNode | ReactNode[]
}

const Modal: React.FC<ModalProps> = ({
  show, onCloseModal, isLoading, children,
}) => (show ? (
  <>
    <Backdrop onClick={onCloseModal} />
    <ModalWindow>
      { isLoading ? <Loader /> : children}
    </ModalWindow>
  </>
) : null
);

export default memo(Modal);
