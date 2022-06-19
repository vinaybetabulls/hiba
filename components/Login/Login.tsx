import { Box } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import useStyles from './Login.styles';
import LoginForm from '../../ui-components/Login/Login';
import { LoginValues } from '../../utils/common';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { useRouter } from 'next/router';

const Login = () => {
  const classes = useStyles();
  const router = useRouter();
  const handleSubmit = async (values: LoginValues) => {
    console.log({ values });
    router.push('/articles');
  };
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
