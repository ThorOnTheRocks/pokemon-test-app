import { createBrowserRouter } from 'react-router-dom';
import App from '../App';

import type { RoutesProps } from './routes.types';

const routes: RoutesProps[] = [
  {
    path: '/',
    element: <App />,
  },
];

export const router = createBrowserRouter(routes);
