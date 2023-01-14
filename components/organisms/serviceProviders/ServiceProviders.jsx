import React, { useState } from 'react';
import InfiniteScroll from "react-infinite-scroll-component";

import CardServiceSummary from '../../organisms/cardServiceSummary/CardServiceSummary';
import CardService from '../../organisms/cardService/CardService';
import Modal from '/components/molecules/modal/Modal';

import styles from './ServiceProviders.module.scss';

function ServiceProviders({ data }) {
  const { providers: serviceProviders, has_more, next_cursor } = data;
  const [providers, setProviders] = useState(serviceProviders);
  const [providerSelected, setProviderSelected] = useState();
  const [hasMore, setHasMore] = useState(has_more);
  const [nextCursor, setNextCursor] = useState(next_cursor);

  const [isModalOpen, setModal] = useState(false);
  const onClickHandler = () => {
    setModal((prev) => !prev);
  }

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
    setProviderSelected(provider);
    onClickHandler();
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
      <Modal onClose={onClickHandler} isOpen={isModalOpen} >
      { providerSelected && (
      <CardService 
        key={providerSelected.email} 
        provider={providerSelected}
        className={styles.detailedCard} />
      )}
      </Modal>
    </>
  )
}

export default React.memo(ServiceProviders);
