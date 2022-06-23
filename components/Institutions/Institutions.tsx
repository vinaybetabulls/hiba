import { Box } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import Button from '../../ui-components/Button/Button';
import useStyles from './Insitituions.styles';

import InstitutionForm from '../../ui-components/Institutions/Institutions';
import { InstitutionValues } from '../../common/props';
import { saveInstitutions } from '../../services';

const Institutions = () => {
  const classes = useStyles();
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
      <Box className={classes.header}>
        <Typography variant="h5">Institutions</Typography>
        <Button
          variant="secondary"
          title="Create Instituion"
          onClick={() => setOpen(true)}
        />
      </Box>
      <Typography paragraph>
        Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
        ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar elementum
        integer enim neque volutpat ac tincidunt. Ornare suspendisse sed nisi
        lacus sed viverra tellus. Purus sit amet volutpat consequat mauris.
        Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed
        vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra
        accumsan in. In hendrerit gravida rutrum quisque non tellus orci ac.
        Pellentesque nec nam aliquam sem et tortor. Habitant morbi tristique
        senectus et. Adipiscing elit duis tristique sollicitudin nibh sit.
        Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra
        maecenas accumsan lacus vel facilisis. Nulla posuere sollicitudin
        aliquam ultrices sagittis orci a.
      </Typography>

      <InstitutionForm
        open={open}
        setOpen={setOpen}
        handleSaveInstitute={handleSaveInstitute}
      />
    </>
  );
};

export default Institutions;
