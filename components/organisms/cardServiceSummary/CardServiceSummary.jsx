import React from 'react';
import cx from 'classnames';

import ImageFallback from '../../atoms/imageFallback/ImageFallback';
import Rating from '../../molecules/rating/Rating';
import Pills from '../../atoms/pills/Pills';

import styles from './CardServiceSummary.module.scss';

function CardServiceSummary({ provider, onClickCard, className }) {
  const {
    first_name,
    last_name,
    location,
    certifications,
    pictures,
    rate,
  } = provider;
  const [picture] = pictures;

  function onContactHandler(e) {
    e.stopPropagation();
    alert(`${first_name}, onContactHandler`);
  }

  function onClickCardHandler() {
    onClickCard(provider);
  }

  return (
    <div className={cx(styles.card, className)} onClick={onClickCardHandler} >
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
        <button className={styles.button} onClick={onContactHandler} >CONTACT</button>
      </div>
    </div>
  );
}

export default React.memo(CardServiceSummary);
