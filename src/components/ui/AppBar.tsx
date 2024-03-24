import { useContext } from 'react';
import { PokemonContext } from '../../context/PokemonContext';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import SearchIcon from '@mui/icons-material/Search';
import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from './AppBar.styled';

export default function SearchAppBar(): React.JSX.Element {
  const { setSearchTerm } = useContext(PokemonContext);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              color: 'common.white',
              textShadow:
                '1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue',
              fontWeight: 'bold',
            }}
          >
            Pokémons
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
