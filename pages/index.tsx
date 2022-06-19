import Head from 'next/head';
import React from 'react';
import dynamic from 'next/dynamic';

const Index = (props: any) => {
  const Login = dynamic(() => import('../components/Login'), {
    ssr: false,
  });
  return (
    <>
      <Head>
        <title>Hib | Login</title>
      </Head>
      <Login />
    </>
  );
};

export default Index;
