import { getFreelancers } from './api/freelancer';

import ServiceProviders from '../components/serviceProviders/ServiceProviders';

import styles from '../styles/Home.module.scss';

function Home({data}) {
  // const { data: serviceProviders } = data;

  return (
    <main className={styles.main} >
      <div className={styles.side} ></div>
      <ServiceProviders data={data}/>
      <div className={styles.side}></div>
    </main>
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
