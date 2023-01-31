import React, { createRef, useState } from 'react';
import ArticlesForm from '../../ui-components/Articles/Articles';
import PageHeader from '../../ui-components/PageHeader/PageHeader';
import Table, { ResponseDataType } from '../../ui-components/Table/Table';
import {
  deleteEntityById,
  getEntityDataForTable,
  saveArticle,
  uploadImages,
} from '../../services';
import { ArticleValues } from '../../common/props';

const columns = [
  { title: 'Id', field: 'id' },
  { title: 'Title', field: 'Title' },
  { title: 'Description', field: 'description' },
];

const Articles = () => {
  const [open, setOpen] = React.useState(false);
  const tableRef = createRef<any>();
  const [isSaved, setIsSaved] = useState(false);
  const [editArticleDetails, setEditArticleDetails] = useState<any>();
  const handleSaveArticles = async (values: ArticleValues) => {
    try {
      const response = await saveArticle(values);
      tableRef.current?.onQueryChange();
      setOpen(false);
      setIsSaved(true);
    } catch (error) {}
  };
  const getPaginatedArticlesData = async (
    pageSize: number,
    page: number,
  ): Promise<ResponseDataType> => {
    try {
      const response = await getEntityDataForTable('Article', pageSize, page);
      const {
        entityList: data,
        currentPage,
        totalItems: totalCount,
      } = response.data;
      return { data, currentPage, totalCount };
    } catch (error) {
      throw error;
    }
  };
  const handleRemoveItem = async (removeItemId: string) => {
    tableRef.current?.onQueryChange();
    try {
      const response = await deleteEntityById('Article', removeItemId);
      console.log({ response });
      tableRef.current?.onQueryChange();
    } catch (error) {
      throw error;
    }
  };
  const setInitialValuesForEditInstitute = (articleData: any) => {
    setEditArticleDetails(articleData);
    setOpen(true);
  };

  const handleUploadImages = async (fileData: any) => {
    try {
      return await uploadImages(fileData);
    } catch (error) {
      throw error;
    }
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
        uploadImages={handleUploadImages}
      />
      <Table
        columns={columns}
        title={'Articles'}
        exportButton
        getData={getPaginatedArticlesData}
        tableRef={tableRef}
        handleRemoveItem={handleRemoveItem}
        setEditEntityValues={setInitialValuesForEditInstitute}
      />
    </>
  );
};

export default Articles;
