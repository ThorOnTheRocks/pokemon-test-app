import PokemonTable from '../components/PokemonTable/PokemonTable';

function HomePage(): React.JSX.Element {
  return (
    <section style={{ margin: '40px', textAlign: 'center' }}>
      <h1 style={{ margin: '40px', textAlign: 'center' }}>
        Pokemon List
      </h1>
      <PokemonTable />
    </section>
  );
}

export default HomePage;
