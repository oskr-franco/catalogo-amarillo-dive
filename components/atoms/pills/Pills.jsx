import React from 'react'

import styles from './Pills.module.scss';

function Pills({items}){
  return (
    <div className={styles.pills}>
      {items.map((item)=> (<div className={styles.pill} key={item.id}>{item.name}</div>))}
    </div>
  );
}

export default Pills;