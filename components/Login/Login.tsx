import React from 'react';
import LoginUI from '../../ui-components/Login/Login';
import { LoginValues } from '../../utils/common';
import { useRouter } from 'next/router';
import { login } from '../../services';

const Login = () => {
  const router = useRouter();
  const handleSubmit = async (values: LoginValues) => {
    try {
      const response = await login(values);
      if (response.data.jwt) {
        localStorage.setItem('accessToken', response.data.jwt);
        router.push('/articles');
      }
    } catch (error) {
      console.log({ error: JSON.stringify(error, null, 2) });
    }
  };
  return <LoginUI handleSubmit={handleSubmit} />;
};

export default Login;
