import React from 'react';

import CircularProgressBar from '../../atoms/circularProgressBar/CircularProgressBar';

import styles from './Rating.module.scss';

function Rating({ rate}) {
  const percentage = rate * 100 / 5 ;
  return (
    <div className={styles.rating}>
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