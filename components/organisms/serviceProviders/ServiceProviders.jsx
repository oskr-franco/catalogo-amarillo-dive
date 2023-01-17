import React, { useState } from 'react';
import InfiniteScroll from "react-infinite-scroll-component";
import useModal from '../../../hooks/useModal';

import CardServiceSummary from '../../organisms/cardServiceSummary/CardServiceSummary';
import CardService from '/components/organisms/cardService/CardService';

import styles from './ServiceProviders.module.scss';

function ServiceProviders({ data }) {
  const { providers: serviceProviders, has_more, next_cursor } = data;
  const [providers, setProviders] = useState(serviceProviders);
  const {openModal} =  useModal();
  const [hasMore, setHasMore] = useState(has_more);
  const [nextCursor, setNextCursor] = useState(next_cursor);

  const getMorePost = async () => {
    const res = await fetch(
      `/api/freelancer?nextCursor=${nextCursor}`
    );
    const json = await res.json();
    const { providers: newProviders, has_more: newHasMore, next_cursor: newNextCursor} = json;
    setProviders((providers) => [...providers, ...newProviders]);
    setHasMore(newHasMore);
    setNextCursor(newNextCursor);
  };

  const onClickCardHandler = (provider) => {
    const component = CardService;
    const componentProps = {
      key: provider.email,
      provider: provider,
      className: styles.detailedCard
    };

    openModal({component, componentProps})
  }

  return(
    <>
      <div className={styles.container}>
        <InfiniteScroll
          className={styles.infiniteScroll}
          dataLength={providers.length}
          next={getMorePost}
          hasMore={hasMore}
          loader={<h3> Loading...</h3>}
        >
          { providers.map(provider => (
            <CardServiceSummary
              key={provider.email}
              provider={provider}
              onClickCard={onClickCardHandler}
            />
          ))}
        </InfiniteScroll>
      </div>
    </>
  )
}

export default React.memo(ServiceProviders);
