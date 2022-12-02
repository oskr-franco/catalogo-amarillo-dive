import React from 'react';
import cx from 'classnames';

import Card from '../../atoms/card/Card';
import ImageFallback from '../../atoms/imageFallback/ImageFallback';
import Rating from '../../molecules/rating/Rating';
import Pills from '../../atoms/pills/Pills';

import styles from './CardServiceSummary.module.scss';

function CardServiceSummary({className, provider}) {
  const {
    first_name,
    last_name,
    location,
    certifications,
    pictures,
    rate,
  } = provider;
  const [picture] = pictures;
  return (
    <Card className={cx(styles.card, className)}>
      <ImageFallback
        className={styles.img}
        src={picture?.url}
        layout='intrinsic'
        alt='perfil'
        width='200'
        height='200'
        objectFit='cover'/>
      <div className={styles.info}>
        <Rating className={styles.rate} rate={rate} />
        <strong>{first_name} {last_name}</strong>
        <address>{location}</address>
        <Pills className={styles.pills} items={certifications} />
        <button className={styles.button} onClick={()=>alert(first_name)} >CONTACT</button>
      </div>
    </Card>
  );
}

export default CardServiceSummary;
