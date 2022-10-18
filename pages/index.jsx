import Image from 'next/image';

import getFreelancers from './api/[pageSize]';

import ServiceProviders from '../components/serviceProviders/ServiceProviders';

import styles from '../styles/Home.module.scss';

function Home({data}) {
  const { data: serviceProviders } = data;

  return (
    <main className={styles.main} >
      <div className={styles.side} ></div>
      <ServiceProviders providers={serviceProviders}/>
      <div className={styles.side}></div>
    </main>
  )
}

export async function getServerSideProps() {
  const query = { pageSize: 10};
  const req = {query: query};
  const data = await getFreelancers(req);
  return {
    props: {
        data: data,
      },
  }
}

export default Home;
