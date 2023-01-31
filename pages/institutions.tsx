import React from 'react';
import Page from '../components/Page/Page';
import withRoute from '../components/AuthRouter';
import Head from 'next/head';

const Institutions = () => {
  return (
    <>
      <Head>
        <title>Hiba-Admin | Institutions</title>
      </Head>
      <Page componentName="Institutions" />
    </>
  );
};

export default withRoute(Institutions);
