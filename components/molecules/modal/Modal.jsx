import React from 'react';
import cx from 'classnames';
import { FaRegTimesCircle } from "react-icons/fa";

import styles from './Modal.module.scss';

function Modal({ isOpen, onClose, children, className }) {
  return (
    <div className={cx(styles.container, {[styles.open]: isOpen},  className,)}>
      <div className={styles.modal}>
        {isOpen && <FaRegTimesCircle className={styles.closeBtn} onClick={onClose} />}
        {children}
      </div>
    </div>
  )
}

export default Modal;