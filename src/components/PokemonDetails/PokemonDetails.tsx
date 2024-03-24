import { useState } from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Container,
  Grid,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { StyledChip } from './PokemonDetails.styled';

import type { PokemonDetailsProps } from './PokemonDetails.types';
import { Link } from 'react-router-dom';

function PokemonDetail({
  name,
  sprites,
  abilities,
  moves,
  forms,
}: PokemonDetailsProps) {
  const [pokemonMoves, setPokemonMoves] = useState(
    moves.sort((a, b) => b.move.url.localeCompare(a.move.url))
  );

  const handleRemoveMove = (moveToRemove: string) => {
    setPokemonMoves((prevMoves) =>
      prevMoves.filter((move) => move.move.name !== moveToRemove)
    );
  };

  return (
    <Container>
      <Grid container spacing={2} sx={{ mt: 5 }}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardMedia
              component="img"
              height="250"
              image={sprites.front_default || ''}
              alt={`Front view of ${name}`}
              sx={{
                objectFit: 'contain',
                backgroundColor: '#f0f0f0',
              }}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {name.toUpperCase()}
              </Typography>
            </CardContent>
          </Card>
          <Container style={{ marginTop: '20px' }}>
            <Link to={'/'}>Go back to Pokemon List</Link>
          </Container>
        </Grid>
        <Grid item xs={12} md={6}>
          <CardContent>
            <Typography variant="h6">Abilities</Typography>
            <div>
              {abilities.map((ability, index) => (
                <StyledChip
                  key={index}
                  label={ability.ability.name}
                  color="primary"
                />
              ))}
            </div>
            <Typography variant="h6" sx={{ mt: 2 }}>
              Moves
            </Typography>
            <div>
              {pokemonMoves.map((move, index) => (
                <StyledChip
                  key={index}
                  label={move.move.name}
                  color="secondary"
                  onDelete={() => handleRemoveMove(move.move.name)}
                  deleteIcon={<DeleteIcon />}
                />
              ))}
            </div>
            {forms && forms.length > 0 && (
              <>
                <Typography variant="h6" sx={{ mt: 2 }}>
                  Forms
                </Typography>
                {forms.map((form, index) => (
                  <Typography key={index} variant="body1">
                    {`${form.name.toUpperCase()}: Battle Only - ${
                      form.is_battle_only ? 'Yes' : 'No'
                    }`}
                  </Typography>
                ))}
              </>
            )}
          </CardContent>
        </Grid>
      </Grid>
    </Container>
  );
}

export default PokemonDetail;
