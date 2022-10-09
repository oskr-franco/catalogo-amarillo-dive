import Image from 'next/image';

import getFreelancers from './api/freelance';

import ServiceProviders from '../components/serviceProviders/ServiceProviders';

import styles from '../styles/Home.module.scss';

function Home({serviceProviders}) {
  // const [provider] = freelancers;
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Catalogo Amarillo!</a>
        </h1>
        <ServiceProviders providers={serviceProviders}/>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
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
