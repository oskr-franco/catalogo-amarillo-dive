import { getFreelancers } from './api/freelancer';

import ServiceProviders from '../components/serviceProviders/ServiceProviders';
import Filter from '../components/filter/Filter';

import styles from '../styles/Home.module.scss';

function Home({data}) {
  return (
    <>
    <Filter />
    <main className={styles.main} >
      <div className={styles.side} ></div>
      <ServiceProviders data={data}/>
      <div className={styles.side}></div>
    </main>
    </>
  )
}

export async function getServerSideProps() {
  const data = await getFreelancers();

  return {
    props: {
        data: data,
      },
  }
}

export default Home;
