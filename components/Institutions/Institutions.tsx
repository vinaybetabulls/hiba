import React from 'react';
import InstitutionForm from '../../ui-components/Institutions/Institutions';
import { InstitutionValues } from '../../common/props';
import { saveInstitutions } from '../../services';
import PageHeader from '../../ui-components/PageHeader/PageHeader';

const Institutions = () => {
  const [open, setOpen] = React.useState(false);
  const handleSaveInstitute = async (values: InstitutionValues) => {
    try {
      const response = await saveInstitutions(values);
      console.log({ response });
    } catch (error) {
      console.log({ error });
    }
  };
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
    </>
  );
};

export default Institutions;
