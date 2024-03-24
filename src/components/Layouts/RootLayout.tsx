import { Outlet } from 'react-router-dom';
import { PokemonProvider } from '../../context/PokemonContext';
import SearchAppBar from '../ui/AppBar';

type RootLayoutProps = {
  children?: React.ReactNode;
};

function RootLayout({
  children,
}: RootLayoutProps): React.JSX.Element {
  return (
    <PokemonProvider>
      <main>
        <SearchAppBar />
        <Outlet />
        {children}
      </main>
    </PokemonProvider>
  );
}

export default RootLayout;
