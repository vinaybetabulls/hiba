import React from 'react';
import Page from '../components/Page/Page';
import withRoute from '../components/AuthRouter';

const Institutions = () => {
  return <Page componentName="Institutions" />;
};

export default withRoute(Institutions);
