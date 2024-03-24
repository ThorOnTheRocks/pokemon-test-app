import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchAppBar from '../AppBar';
import { PokemonContext } from '../../../context/PokemonContext';
import { MOCKED_CONTEXT_VALUES } from '../../../mocks/PokemonContext.mock';

describe('SearchAppBar', () => {
  const setSearchTermMock = jest.fn();

  beforeEach(() => {
    render(
      <PokemonContext.Provider
        value={{
          ...MOCKED_CONTEXT_VALUES,
          setSearchTerm: setSearchTermMock,
        }}
      >
        <SearchAppBar />
      </PokemonContext.Provider>
    );
  });

  it('Should renders correctly', () => {
    expect(screen.getByText(/pokémons/i)).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText(/search…/i)
    ).toBeInTheDocument();
  });

  it('Should calls setSearchTerm with input value on change', async () => {
    const searchTermInput = screen.getByPlaceholderText(/search…/i);
    const testValue = 'pikachu';

    await userEvent.type(searchTermInput, testValue);

    expect(setSearchTermMock).toHaveBeenCalledWith(testValue);
  });
});
