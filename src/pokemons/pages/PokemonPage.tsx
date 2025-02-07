import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from '../hooks/hooks'
import { getPokemons } from "../../store/slices/thunks";

export const PokemonPage = () => {

  const dispatch = useAppDispatch()
  const { pokemons, isLoading, page } = useAppSelector(state => state.pokemons);

  useEffect(() => {
    dispatch(getPokemons());
  }, [dispatch])

  return (
    <>
      <h1>PokemonApp</h1>
      <hr />
      <span>Loading: {isLoading ? 'True' : 'False'}</span>
      <ul>
        {
          pokemons.map(({ name }) => (
            <li key={name}> {name}</li>
          ))
        }
      </ul>
      <button
        disabled={isLoading}
        onClick={() => dispatch(getPokemons(page))}>
        Next
      </button>
    </>
  );
};
