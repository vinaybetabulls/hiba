import React from 'react';
import Button from '../Button/Button';
import useStyles from './DeleteConfirmation.styles';

export type Props = {
  name: string;
  type: string;
  handleRemoveItem: () => void;
  handleCancel: () => void;
};
const DeleteConfirmation = (props: Props) => {
  const { name, type, handleRemoveItem, handleCancel } = props;
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <h3 className={classes.title}>Remove {type}</h3>
      <p className={classes.itemText}>
        Are you sure you want to remove {name} from your {type}?
      </p>
      <p className={classes.confirmationText}>This action cannot be undone.</p>
      <div className={classes.buttonContainer}>
        <Button
          className={classes.button}
          variant="secondary"
          title={`Yes - remove this ${type}`}
          fullWidth
          thinOnMobile
          onClick={handleRemoveItem}
        />
        <Button
          className={classes.button}
          variant="tertiary"
          title="No - do not delete"
          fullWidth
          thinOnMobile
          onClick={handleCancel}
        />
      </div>
    </div>
  );
};

export default DeleteConfirmation;
