import React from 'react';
import ArticlesForm from '../../ui-components/Articles/Articles';
import { ArticleValues } from '../../utils/common';
import PageHeader from '../../ui-components/PageHeader/PageHeader';

const Articles = () => {
  const [open, setOpen] = React.useState(false);
  const handleSaveArticles = async (values: ArticleValues) => {
    // setOpen(false);
    console.log({ values });
  };
  return (
    <>
      <PageHeader
        title="Articles"
        buttonTitle="Create Article"
        buttonVariant="primary"
        setOpen={() => setOpen(true)}
      />
      <ArticlesForm
        open={open}
        setOpen={setOpen}
        handleSaveArticles={handleSaveArticles}
      />
    </>
  );
};

export default Articles;
