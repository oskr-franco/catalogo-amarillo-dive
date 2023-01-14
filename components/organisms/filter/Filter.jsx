import React from 'react';
import cx from 'classnames';

import styles from './Filter.module.scss';

function Filter() {
  const searchPlaceHolder = "EX: Carperter; sky Diver; Electrisian; Locksmith";
  return (
    <div className={styles.filter}>
      <div className={cx(styles.row, styles.textboxContainer)}>
        <input className={styles.textbox} type="search" placeholder={searchPlaceHolder}></input>
      </div>
      <div className={styles.row}>
        Results: 500
      </div>
    </div>
  )
}

export default Filter;
