import '../styles/globals.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (<>
  <Head>
    <title>Angelo Smorlesi</title>
    <meta name="viewport" content="user-scalable=no, width=device-width, initial-scale=1" />
    <meta name='keywords' content='web, web developer,developer,front,back,front-end,back-end,frontend,backend,fullstack,full-stack,desarrollador,sitios web,web master, master' />
    <meta name='author' content='Angelo Smorlesi' />
    <meta name='description' content='A website where I show my developer work' />
    <meta name='copyright' content='Angelo Smorlesi' />
    <meta name='robots' content='index,follow, translate' />
    <link rel="icon" href="/favicon.ico" />
    <meta name="viewport" content="user-scalable=no, width=device-width, initial-scale=1" />
  </Head>
  
  <Component {...pageProps} />
  </>)
}

export default MyApp
