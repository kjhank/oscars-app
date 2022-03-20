import { routerPaths } from '@utils';
import React from 'react';
import { Link } from 'react-router-dom';

export const Home:React.FC = () => (
  <div>
    This is home
    {' '}
    <Link to={routerPaths.NOMINATIONS}>Nominations</Link>
  </div>
);
