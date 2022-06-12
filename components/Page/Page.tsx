import React from 'react';
import { logo } from '../../common/data';
import Header from '../../ui-components/Header/Header';
import MainContent from '../../ui-components/MainContent/MainContent';

export type Props = {
  componentName: string;
};
const Page = ({ componentName }: Props) => {
  return (
    <>
      <Header logo={logo} title="Hiba" />
      <MainContent componentName={componentName} />
    </>
  );
};

export default Page;
