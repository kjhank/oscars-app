import { Home, Nominations } from '@containers';
import { routerPaths, Theme } from '@utils';
import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter, Route, Routes,
} from 'react-router-dom';

import Layout from './App';

ReactDOM.render(
  <React.StrictMode>
    <Theme>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />} path={routerPaths.ROOT}>
            <Route element={<Home />} index />
            <Route element={<Nominations />} path={routerPaths.NOMINATIONS} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Theme>
  </React.StrictMode>,
  document.getElementById('root')
);
