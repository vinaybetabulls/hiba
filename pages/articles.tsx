import React from 'react';
import Page from '../components/Page/Page';
import withAuth from '../components/AuthRouter';

const Articles = () => {
  return <Page componentName="Articles" />;
};

export default withAuth(Articles);
