import React from 'react';
import cx from 'classnames';

import ImageFallback from '../../atoms/imageFallback/ImageFallback';
import Rating from '../../molecules/rating/Rating';
import Pills from '../../atoms/pills/Pills';
import CardService from '/components/organisms/cardService/CardService';
import { withOpenModal } from '../../../hocs/withOpenModal';

import styles from './CardServiceSummary.module.scss';

function CardServiceSummary({ provider, openModal, className }) {
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
    const component = CardService;
    const componentProps = {
      key: provider.email,
      provider: provider,
      className: styles.detailedCard
    };

    openModal({component, componentProps})
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
        <strong className={styles.name}>{first_name} {last_name}</strong>
        <address className={styles.address}>{location}</address>
        <Pills className={styles.pills} items={certifications} />
        <button className={styles.button} onClick={onContactHandler} >CONTACT</button>
      </div>
    </div>
  );
}

export default withOpenModal(CardServiceSummary);
