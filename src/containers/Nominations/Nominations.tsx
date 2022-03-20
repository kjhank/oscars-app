import { routerPaths } from '@utils';
import React from 'react';
import { Link } from 'react-router-dom';

export const Nominations:React.FC = () => (
  <div>
    This is the nominations page
    {' '}
    <Link to={routerPaths.ROOT}>Go home</Link>
  </div>
);
