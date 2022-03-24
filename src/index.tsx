import React from 'react';
import { Routes } from './routes';
import { StoreProvider } from './store/StoreProvider';
import { ThemeProvider } from './theme';
import DefaultTheme from './theme/Default';

export const Root = () => {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <StoreProvider>
        <Routes />
      </StoreProvider>
    </ThemeProvider>
  );
};
