import React from 'react';
import cx from 'classnames';

import CircularProgressBar from '../../atoms/circularProgressBar/CircularProgressBar';

import styles from './Rating.module.scss';

function Rating({ className, rate }) {
  const percentage = rate * 100 / 5 ;
  return (
    <div className={cx(styles.rating, className)} >
      <div>{rate}</div>
      <CircularProgressBar
        className={styles.circle}
        percentage={percentage}
        strokeWidth="35"
      />
    </div>
  )
}

export default Rating;