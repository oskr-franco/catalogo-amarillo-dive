import React from 'react';
import cx from 'classnames';

import Card from '../card/Card';
import ImageFallback from '../imageFallback/ImageFallback';
import Stars from '../stars/Stars'
import Workdays from '../workdays/Workdays'

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

  const stringLanguages = languages.map((language)=> LANGUAGES[language.name]).join(', ')
  const additionalService = plus_service? plus_service : 'N/A';
  const insurance = !!work_insurance.lenght ? 'Yes' : 'No';
  const legalWorkProof = !!legal_work_proof.lenght ? 'Yes' : 'No';
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
      <div className={styles.primary}>
        <strong>{first_name} {last_name}</strong>
        <address>{location}</address>
        <div className={styles.pills}>
          {certifications.map((cert)=> (<div className={styles.pill} key={cert.id}>{cert.name}</div>))}
        </div>
        <div>Languages: {stringLanguages}</div>
        <div>Additional Services: {additionalService}</div>
        <div>Insurance: {insurance}</div>
        <div>Legal Work Proof: {legalWorkProof}</div>
        <div className={styles.buttons}>
          <div className={styles.button}>E-MAIL</div>
          <div className={styles.button}>PHONE</div>
        </div>
      </div>
      <div className={styles.secondary}>
        <Stars rating={rate} />
        <Workdays className={styles.workdays} workdays={work_days} />
      </div>
    </Card>
  )
}

export default React.memo(CardService);
