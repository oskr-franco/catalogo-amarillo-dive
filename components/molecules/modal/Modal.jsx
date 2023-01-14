import React from 'react';
import cx from 'classnames';
import { FaRegTimesCircle } from "react-icons/fa";

import styles from './Modal.module.scss';

function Modal({ isOpen, onClose, children, className }) {
  //className={cx()
  return (
    <div className={cx(styles.container, {[styles.open]: isOpen},  className,)}>
      <div className={styles.modal}>
        <FaRegTimesCircle className={styles.closeBtn} onClick={onClose} />
        {children}
      </div>
    </div>
  )
}

export default Modal;