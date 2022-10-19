import React from 'react';
import cx from 'classnames';

import Card from '../card/Card';
import ImageFallback from '../imageFallback/ImageFallback';
import Stars from '../stars/Stars'

import styles from './CardService.module.scss';

function CardService({
  className,
  provider,
}) {
  const { first_name, last_name, email, phone, rate, pictures } = provider;
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
      <div className={styles.text}>
        <strong>{first_name}</strong>
        <div>{last_name}</div>
        <div>{email}</div>
        <div>{phone}</div>
        <Stars rating={rate} />
      </div>
    </Card>
  )
}

export default React.memo(CardService);
