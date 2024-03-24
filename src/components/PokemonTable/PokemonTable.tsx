import React, { ChangeEvent, useContext, useState } from 'react';
import { GridColDef } from '@mui/x-data-grid';
import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from '@mui/material';
import {
  StyledTableCell,
  StyledTableRow,
} from './PokemonTable.styled';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import { PokemonContext } from '../../context/PokemonContext';

const columns: GridColDef[] = [
  {
    field: 'name',
    headerName: 'Name',
    width: 130,
  },
  {
    field: 'url',
    headerName: 'Link',
    width: 200,
  },
];

function PokemonTable(): React.JSX.Element {
  const { pokemons, searchTerm } = useContext(PokemonContext);

  const [page, setPage] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);

  const filteredPokemons = pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const rows = filteredPokemons.map((pokemon) => ({
    id: crypto.randomUUID(),
    name: pokemon.name,
    url: pokemon.url,
  }));

  const rowsSorted = [...rows].sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0); // Reset to the first page
  };

  const displayedPokemons = rowsSorted.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return (
    <TableContainer
      component={Paper}
      style={{ margin: 'auto', width: '50vw' }}
    >
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <StyledTableCell key={column.headerName} align="right">
                {column.headerName}
              </StyledTableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {displayedPokemons.map((pokemon) => (
            <StyledTableRow key={pokemon.id}>
              <StyledTableCell component="th" scope="row">
                {pokemon.name.toUpperCase()}
              </StyledTableCell>
              <StyledTableCell>
                <Link to={`/pokemon/${pokemon.name}`}>
                  See pokemon
                </Link>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={filteredPokemons.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </TableContainer>
  );
}

export default PokemonTable;
