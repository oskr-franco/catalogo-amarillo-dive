import React from 'react';
import InfiniteScroll from "react-infinite-scroll-component";

import CardService from '../cardService/CardService';

import styles from './ServiceProviders.module.scss';

function ServiceProviders({ providers }) {
  return(
    <div className={styles.container}>
      { providers.map(provider => (
        <CardService key={provider} provider={provider} />
      ))}
    </div>
  )
}

export default React.memo(ServiceProviders);
