import React, { useEffect, useState } from 'react';
import InstitutionForm from '../../ui-components/Institutions/Institutions';
import { InstitutionValues } from '../../common/props';
import { getInstitutions, saveInstitutions } from '../../services';
import PageHeader from '../../ui-components/PageHeader/PageHeader';
import Table from '../../ui-components/Table/Table';

const columns = [
  { title: 'Name', field: 'name' },
  { title: 'Url', field: 'url' },
  { title: 'Description', field: 'description' },
];

const Institutions = () => {
  const [open, setOpen] = React.useState(false);
  const [institutionsList, setInstitutions] = useState([]);
  const handleSaveInstitute = async (values: InstitutionValues) => {
    try {
      const response = await saveInstitutions(values);
      console.log({ response });
    } catch (error) {
      console.log({ error });
    }
  };

  useEffect(() => {
    const getPaginatedInstitutions = async () => {
      try {
        const response = await getInstitutions();
        console.log({ response });
        setInstitutions(response.data?.entityList);
      } catch (error) {}
    };
    getPaginatedInstitutions();
  }, []);
  return (
    <>
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
      />
      <Table data={institutionsList} columns={columns} title={'Institutions'} />
    </>
  );
};

export default Institutions;
