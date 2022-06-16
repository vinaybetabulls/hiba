import Typography from '@material-ui/core/Typography';
import React from 'react';
import { Box } from '@material-ui/core';
import useStyles from './Articles.styles';
import Button from '../../ui-components/Button/Button';
import Modal from '../../ui-components/Modal/Modal';
import TextField from '../../ui-components/TextField/TextField';

const Articles = () => {
  const classes = useStyles();
  const [articles, setArticles] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <Box className={classes.header}>
        <Typography variant="h5">Articles</Typography>
        <Button
          variant="primary"
          title="Create Article"
          onClick={() => setOpen(true)}
        />
      </Box>

      {!articles.length ? (
        <div className={classes.noResults}>
          <Typography paragraph>No Articles Found</Typography>
        </div>
      ) : (
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
          ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar
          elementum integer enim neque volutpat ac tincidunt. Ornare suspendisse
          sed nisi lacus sed viverra tellus. Purus sit amet volutpat consequat
          mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis
          risus sed vulputate odio. Morbi tincidunt ornare massa eget egestas
          purus viverra accumsan in. In hendrerit gravida rutrum quisque non
          tellus orci ac. Pellentesque nec nam aliquam sem et tortor. Habitant
          morbi tristique senectus et. Adipiscing elit duis tristique
          sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
          eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
          posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography>
      )}
      {open && (
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          keepMounted={true}
          // fullScreen={true}
          setOpen={() => setOpen(true)}
          maxWidth="md"
          // fullWidth={true}
          title="Article"
        >
          <div className={classes.container}>
            <TextField
              name="title"
              label="Article"
              placeholder="Enter title"
              fullWidth
              required
              // hideRequiredOptional
              disabled={false}
              inputProps={{ maxLength: 80 }}
            />
          </div>
          <div className={classes.container}>
            <TextField
              name="description"
              label="Description"
              placeholder="Enter description"
              fullWidth
              required
              multiline
              rows={4}
              // hideRequiredOptional
              disabled={false}
              inputProps={{ maxLength: 200 }}
            />
          </div>
          <div className={classes.container}>
            <label className={classes.label}>Upload</label>
            <div className={classes.imgContainer}>
              <div className={classes.imgUpload}>
                <input type="file" id="myFile" name="filename" />
              </div>
              <div className={classes.imgPlaceHolder}></div>
            </div>
          </div>
          <div className={classes.dialogActions}>
            <Button
              title="submit"
              variant="primary"
              onClick={() => setOpen(false)}
            />
          </div>
        </Modal>
      )}
    </>
  );
};

export default Articles;
