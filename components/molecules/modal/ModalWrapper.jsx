import React, { useState ,useEffect } from 'react';
import useModal from '../../../hooks/useModal';

import Modal from './Modal';

function ModalWrapper() {
  const [isClientSide, setClientSide] = useState(false);
  const {modalState, closeModal} = useModal();
  const { isOpen, component: ModalBody, componentProps } = modalState;

  useEffect(()=> {
    setClientSide(true);
  }, [])

  if ( !isClientSide ) return null;

  return (
    <Modal onClose={closeModal} isOpen={isOpen} >
      { !!ModalBody && (
        <ModalBody {...componentProps} />
      )}
    </Modal>
  )

}

export default React.memo(ModalWrapper);