import React from 'react';
import cx from 'classnames';

import styles from './Card.module.scss';

function Card({
  className,
  children,
}) {
  return (
    <div className={cx(styles.card, className)}>
      {children}
    </div>
  )
}

export default React.memo(Card);