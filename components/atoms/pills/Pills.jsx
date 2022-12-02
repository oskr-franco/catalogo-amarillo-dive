import React from 'react'
import cx from 'classnames';

import styles from './Pills.module.scss';

function Pills({className, items}){
  return (
    <div className={cx(styles.pills, className)}>
      {items.map((item)=> (<div className={styles.pill} key={item.id}>{item.name}</div>))}
    </div>
  );
}

export default Pills;