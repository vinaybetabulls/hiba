import axios, { AxiosError } from 'axios';
import { InstitutionValues } from '../common/props';
import { LoginValues } from '../utils/common';

const hostURL =
  typeof window === undefined
    ? process.env.NEXT_PUBLIC_HOST_URL
    : process.env.HOST_URL;
const getHeaders = () => {
  const jwt = localStorage.getItem('accessToken');
  if (!jwt) throw new Error('Please login');
  return {
    headers: {
      authorization: `Bearer ${jwt}`,
    },
  };
};
export const login = async (values: LoginValues): Promise<any> => {
  try {
    return await axios.post(`${hostURL}/login`, { ...values });
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 401 || error.response?.status === 403) {
        throw new Error(
          'We were unable to change your password. Please check your current password.',
        );
      }
    }
    throw new Error('There was a problem signing in. Please try again.');
  }
};

export const saveInstitutions = async (
  values: InstitutionValues,
): Promise<any> => {
  try {
    return await axios.post(
      `${hostURL}/admin/institute`,
      { ...values },
      getHeaders(),
    );
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 401 || error.response?.status === 403) {
        throw new Error('Please login');
      }
    }
    throw new Error(
      'There was a problem in saving institutions. Please try again.',
    );
  }
};

export const getInstitutions = async (): Promise<any> => {
  try {
    return await axios.post(
      `${hostURL}/admin/getInstituteForDataTable?page=1&pageSize=5&sort=name:desc&sort=description:asc`,
      {},
      getHeaders(),
    );
  } catch (error) {
    throw new Error(
      'There was a problem in fetching the institutions. Please try again.',
    );
  }
};
