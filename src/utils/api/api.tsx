import { apiPaths } from '@utils';
import axios from 'axios';

import { LoginTypes } from './api.types';

const axiosConfig = {
  baseUrl: process.env.BACKEND_URL,
  headers: {
    'Content-type': 'application/json',
  },
};

const apiClient = axios.create(axiosConfig);

const login = async ({ username, password } : LoginTypes) => {
  const { data } = await apiClient.post<any>(apiPaths.LOGIN, {
    password,
    username,
  });

  return data;
};

export const API = {
  login,
};
