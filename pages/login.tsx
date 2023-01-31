import Head from 'next/head';
import React from 'react';
import Login from '../components/Login';

const Index = (props: any) => {
  console.log({ props });
  return (
    <>
      <Head>{props.title && <title>{props.title}</title>}</Head>
      <Login />
    </>
  );
};

export default Index;

export const getStaticProps = () => {
  return { title: 'Hiba-Admin | Login', noIndex: true };
};
