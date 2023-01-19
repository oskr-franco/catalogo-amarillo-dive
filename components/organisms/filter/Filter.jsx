import React from 'react';
import cx from 'classnames';

import styles from './Filter.module.scss';
import { FaAngleDown, FaAngleRight } from "react-icons/fa";

function Filter() {
  const searchPlaceHolder = "EX: Carperter; sky Diver; Electrisian; Locksmith";
  const resultNumber = 500;
  return (
    <div className={styles.filter}>
      <div className={cx(styles.row, styles.textboxContainer)}>
        <input className={styles.textbox} type="search" placeholder={searchPlaceHolder}></input>
      </div>
      <div className={cx(styles.row, styles.secondRow, styles.center)}>
      <div className={styles.center}>Results <FaAngleRight /> {resultNumber}</div>
      <div className={styles.center}>Filter <FaAngleDown /></div>
      </div>
    </div>
  )
}

export default Filter;
