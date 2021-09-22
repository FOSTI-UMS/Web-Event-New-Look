/* eslint-disable react/prop-types */
import React from 'react';
import Router from 'next/router';
import Head from 'next/head';
import NProgress from 'nprogress';

import 'react-toastify/dist/ReactToastify.css';
import 'nprogress/nprogress.css';
import '../styles/tailwind.css';
import '../styles/globals.css';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout || React.Fragment;
  const Settings = Component.Settings || {};

  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/logo.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Head>

      <Layout {...Settings}>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
