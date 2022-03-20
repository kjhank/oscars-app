import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { ThemeProps } from './main.types';

export const mainTheme = {
  colors: {},
  fonts: {},
  styled,
  transitions: {},
};

export const Theme = ({ children }: ThemeProps) => (
  <ThemeProvider theme={mainTheme}>
    {children}
  </ThemeProvider>
);
