import axios, { AxiosError } from 'axios';
import { ArticleValues, InstitutionValues } from '../common/props';
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

export const saveArticle = async (values: ArticleValues): Promise<any> => {
  try {
    return await axios.post(
      `${hostURL}/admin/article`,
      { ...values },
      getHeaders(),
    );
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 401 || error.response?.status === 403) {
        throw new Error('Please login');
      }
    }
    throw new Error('There was a problem in saving article. Please try again.');
  }
};

export const getEntityDataForTable = async (
  entity: string,
  pageSize: number,
  page: number,
): Promise<any> => {
  try {
    return await axios.post(
      `${hostURL}/admin/get${entity}ForDataTable?page=${page}&pageSize=${pageSize}&sort=name:desc&sort=description:asc`,
      {},
      getHeaders(),
    );
  } catch (error) {
    throw new Error(
      `There was a problem in fetching the ${entity}. Please try again.`,
    );
  }
};

export const deleteEntityById = async (
  entity: string,
  id: string,
): Promise<any> => {
  try {
    console.log({ url: `${hostURL}/admin/delete${entity}ById?id=${id}` });
    return await axios.delete(
      `${hostURL}/admin/delete${entity}ById?id=${id}`,
      getHeaders(),
    );
  } catch (error) {
    throw new Error(
      `There was a problem in deleting the ${entity}. Please try again.`,
    );
  }
};

export const uploadImages = async (files: any): Promise<any> => {
  try {
    const headerValue = getHeaders();
    const headers = {
      ...headerValue['headers'],
      // contentType: 'multipart/form-data',
    };

    return await axios.post(`${hostURL}/admin/uploadArticleImages`, files, {
      headers,
    });
  } catch (error) {
    throw new Error(
      `There was a problem in uploading the uploading image(s). Please try again.`,
    );
  }
};
