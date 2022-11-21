import React from 'react';

import styles from './CircularProgressBar.module.scss'

function CircularProgressBar({className, percentage, strokeWidth, isPercentageVisible}) {
  const sqSize = '256';
  const radius = (sqSize - strokeWidth) 
  const dashArray = radius * Math.PI;
  const viewBox = '0 0 256 256';
  const dashOffset = dashArray - dashArray * percentage / 100;
  return(
    <svg
      className={className}
      width={sqSize}
      height={sqSize}
      viewBox={viewBox}>
      <circle
        className={styles.circleBackground}
        cx={sqSize / 2}
        cy={sqSize / 2}
        r={radius /2}
        strokeWidth={`${strokeWidth}px`} />
      <circle
        className={styles.circleProgress}
        cx={sqSize / 2}
        cy={sqSize / 2}
        r={radius /2}
        strokeWidth={`${strokeWidth}px`}
        // Start progress marker at 12 O'Clock
        transform={`rotate(-90 ${sqSize / 2} ${sqSize / 2})`}
        style={{
          strokeDasharray: dashArray,
          strokeDashoffset: dashOffset
        }} />
      {isPercentageVisible && (
      <text
        className={styles.circleText}
        x="50%"
        y="50%"
        dy=".3em"
        textAnchor="middle">
        {`${percentage}%`}
      </text>
      )}
    </svg>
  )
}

export default CircularProgressBar;
