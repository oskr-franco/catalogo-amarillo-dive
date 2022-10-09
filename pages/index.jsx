import Image from 'next/image';

import getFreelancers from './api/freelance';

import ServiceProviders from '../components/serviceProviders/ServiceProviders';

import styles from '../styles/Home.module.scss';

function Home({serviceProviders}) {
  return (
    <main className={styles.main} >
      <div className={styles.side} ></div>
      <ServiceProviders providers={serviceProviders}/>
      <div className={styles.side}></div>
    </main>
  )
}

export async function getServerSideProps() {
  const freelancers = await getFreelancers();
  return {
    props: {
        serviceProviders: freelancers,
      },
  }
}

export default Home;
