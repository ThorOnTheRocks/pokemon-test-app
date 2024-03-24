import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import ErrorPage from '../pages/ErrorPage';
import PokemonDetailPage from '../pages/PokemonDetailPage';
import RootLayout from '../components/Layouts/RootLayout';

import type { RoutesProps } from './routes.types';

const routes: RoutesProps[] = [
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/pokemon/:id',
        element: <PokemonDetailPage />,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
