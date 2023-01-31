import React, { createRef, useEffect, useState } from 'react';
import InstitutionForm, {
  InstituteProps,
} from '../../ui-components/Institutions/Institutions';
import { InstitutionValues } from '../../common/props';
import {
  deleteEntityById,
  getEntityDataForTable,
  saveInstitutions,
} from '../../services';
import PageHeader from '../../ui-components/PageHeader/PageHeader';
import Table, { ResponseDataType } from '../../ui-components/Table/Table';
import SnackbarUi from '../../ui-components/Snackbar/Snackbar';
import { instituteInitialValues } from '../../common/data';

const columns = [
  { title: 'Name', field: 'name' },
  { title: 'Url', field: 'url' },
  { title: 'Description', field: 'description' },
];

const Institutions = () => {
  const [open, setOpen] = useState(false);
  const tableRef = createRef<any>();
  const [isSaved, setIsSaved] = useState(false);
  const [editInstituteDetails, setEditInstituteDetails] = useState<any>(
    instituteInitialValues,
  );

  const handleSaveInstitute = async (values: InstitutionValues) => {
    try {
      const response = await saveInstitutions(values);
      tableRef.current?.onQueryChange();
      setOpen(false);
      setIsSaved(true);
    } catch (error) {
      console.log({ error });
    }
  };
  const getPaginatedInstitutions = async (
    pageSize: number,
    page: number,
  ): Promise<ResponseDataType> => {
    try {
      const response = await getEntityDataForTable('Institute', pageSize, page);
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
      const response = await deleteEntityById('Institute', removeItemId);
      console.log({ response });
      tableRef.current?.onQueryChange();
      return;
    } catch (error) {
      throw error;
    }
  };

  const setInitialValuesForEditInstitute = (instituteData: InstituteProps) => {
    setEditInstituteDetails(instituteData);
    setOpen(true);
  };

  console.log({ editInstituteDetails });

  return (
    <>
      <SnackbarUi
        message={'Institution saved successfully'}
        type="success"
        open={isSaved}
        handleClose={() => {}}
      />
      <PageHeader
        title="Institutions"
        buttonTitle="Create Institution"
        setOpen={() => setOpen(true)}
        buttonVariant="secondary"
      />
      <InstitutionForm
        open={open}
        setOpen={setOpen}
        handleSaveInstitute={handleSaveInstitute}
        {...editInstituteDetails}
      />
      <Table
        columns={columns}
        title={'Institutions'}
        exportButton
        getData={getPaginatedInstitutions}
        tableRef={tableRef}
        handleRemoveItem={handleRemoveItem}
        setEditEntityValues={setInitialValuesForEditInstitute}
      />
    </>
  );
};

export default Institutions;
