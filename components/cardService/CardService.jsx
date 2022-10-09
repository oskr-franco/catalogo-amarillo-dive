import React from 'react';
import cx from 'classnames';

import Card from '../card/Card';
import Image from '../image/Image';

import styles from './CardService.module.scss';

function CardService({
  provider,
  className,
}) {
  const { first_name, last_name, email, phone, rate, pictures } = provider;
  const [picture] = pictures;
  const hasPicture = !!picture?.url;
  return (
    <Card className={cx(styles.card, className)}>
      {hasPicture && (
        <Image
          className={styles.img}
          src={picture.url}
          layout='intrinsic'
          alt='perfil'
          width='200'
          height='200'
          objectFit='cover'/>
      )}
      <div className={styles.text}>
        <strong>{first_name}</strong>
        <div>{last_name}</div>
        <div>{email}</div>
        <div>{phone}</div>
        <div>{rate}</div>
      </div>
    </Card>
  )
}

export default React.memo(CardService);
