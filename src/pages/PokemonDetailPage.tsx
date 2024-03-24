import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { PokemonContext } from '../context/PokemonContext';
import Loader from '../components/ui/Loader';
import PokemonDetails from '../components/PokemonDetails/PokemonDetails';

function PokemonDetailPage(): React.JSX.Element {
  const { id } = useParams<{ id: string | undefined }>();
  const { pokemonDetails, fetchPokemonDetails } =
    useContext(PokemonContext);

  useEffect(() => {
    if (id && !pokemonDetails[id]) {
      fetchPokemonDetails(id);
    }
  }, [id, pokemonDetails, fetchPokemonDetails]);

  const details = id ? pokemonDetails[id] : undefined;

  if (!details) {
    return <Loader />;
  }

  return (
    <div>
      <PokemonDetails {...details} />
    </div>
  );
}

export default PokemonDetailPage;
