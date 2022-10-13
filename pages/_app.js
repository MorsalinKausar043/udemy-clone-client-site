import { useEffect, useState } from 'react';
import '../styles/globals.css';
import Preloader from '../components/Preloader/Preloader';
import Layout from '../components/Layout/Layout';

function MyApp({ Component, pageProps }) {
  const [loader, setLoader] = useState(true);
  useEffect(() =>{setTimeout(() => window.addEventListener("load", setLoader(false)), 1000)},[]);
  if(loader){
    return (
      <>
        <Preloader />
      </>
    );
  }
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp
