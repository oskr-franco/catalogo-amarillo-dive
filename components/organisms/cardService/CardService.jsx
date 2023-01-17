import React from 'react';
import cx from 'classnames';

import Pills from '../../atoms/pills/Pills';
import ImageFallback from '../../atoms/imageFallback/ImageFallback';
import Stars from '../../atoms/stars/Stars';
import Rating from '../../molecules/rating/Rating';
import Workdays from '../../molecules/workdays/Workdays';

import styles from './CardService.module.scss';

const LANGUAGES = {
  en: 'English',
  es: 'Spanish',
  fr: 'French',
}

function CardService({
  className,
  provider,
}) {
  const {
    first_name,
    last_name,
    location,
    certifications,
    languages,
    plus_service,
    work_insurance,
    legal_work_proof,
    rate,
    work_days,
    pictures,
  } = provider;

  const [picture] = pictures;
  const stringLanguages = languages.map((language)=> LANGUAGES[language.name]).join(', ')
  const additionalService = plus_service? plus_service : 'N/A';
  const insurance = !!work_insurance.lenght ? 'Yes' : 'No';
  const legalWorkProof = !!legal_work_proof.lenght ? 'Yes' : 'No';

  return (
    <div className={cx(styles.card, className)}>
      <ImageFallback
        className={styles.img}
        src={picture?.url}
        layout='intrinsic'
        alt='perfil'
        width='200'
        height='200'
        objectFit='cover'/>
      <div className={styles.primary}>
        <strong className={styles.name}>{first_name} {last_name}</strong>
        <address className={styles.address}>{location}</address>
        <Pills items={certifications} />
        <div className={styles.additional}><b>Languages:</b> {stringLanguages}</div>
        <div className={styles.additional}><b>Additional Services:</b> {additionalService}</div>
        <div className={styles.additional}><b>Insurance:</b> {insurance}</div>
        <div className={styles.additional}><b>Legal Work Proof:</b> {legalWorkProof}</div>
        <div className={styles.buttons}>
          <div className={styles.button}>E-MAIL</div>
          <div className={styles.button}>PHONE</div>
        </div>
      </div>
      <div className={styles.secondary}>
        {/* <Stars rating={rate} /> */}
        <Rating className={styles.rate} rate={rate}/>
        <Workdays className={styles.workdays} workdays={work_days} />
      </div>
    </div>
  );
}

export default React.memo(CardService);
