import { ReactNode } from 'react';

export type RoutesProps = {
  path: string;
  element: ReactNode;
  errorElement?: ReactNode;
  children?: RoutesProps[];
};
