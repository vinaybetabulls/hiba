import React from 'react';
import { HandleSubmit, LoginValues } from '../../utils/common';
import useStyles from './Login.styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Box } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import LoginForm from './LoginForm';

type Props = {
  handleSubmit: HandleSubmit<LoginValues>;
};

const Login = ({ handleSubmit }: Props) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Box className={classes.header}>
          <Typography variant="h4">Login</Typography>
          <LoginForm handleSubmit={handleSubmit} />
        </Box>
      </CardContent>
    </Card>
  );
};

export default Login;
