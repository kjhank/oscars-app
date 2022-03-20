import { Home, Nominations } from '@containers';
import { routerPaths, Theme } from '@utils';
import React from 'react';
import ReactDOM from 'react-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import {
  BrowserRouter, Route, Routes,
} from 'react-router-dom';

import Layout from './App';

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <Theme>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />} path={routerPaths.ROOT}>
              <Route element={<Home />} index />
              <Route element={<Nominations />} path={routerPaths.NOMINATIONS} />
            </Route>
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </Theme>
  </React.StrictMode>,
  document.getElementById('root')
);
