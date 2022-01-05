import Head from 'next/head';
import Education from '../components/home/Education';
import Faculty from '../components/home/Faculty';
import Hero from '../components/home/Hero';
import Notice from '../components/home/Notice';
import Footer from '../components/layout/Footer';
import Header from '../components/layout/Header';

function Home() {
  return (
    <>
      <Head>
        <title>IUS - The International University of Scholers</title>
        <meta name='description' content='IUS' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header />
      <Hero />
      <Notice />
      <Education />
      <Faculty />
      <Footer />
    </>
  );
}

export default Home;
