import React from 'react';
import cx from 'classnames';

import styles from './Workday.module.scss';

function Workday({isActive, value}) {
  return (
    <div className={styles.workday}>
      <div className={cx(styles.pill,{[styles.disabled]: !isActive})}>{value}</div>
      {/* {isActive && (
        <div>
          <>
          <div>8a</div>
          <div>-</div>
          <div>4p</div>
          </>
        </div>
      )} */}
    </div>
  )
}

export default Workday;