import { Route, Routes } from "react-router"
import { PokemonPage } from "../pokemons/pages/PokemonPage"
import { Navbar } from "../ui/components/Navbar"

export const AppRouter = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<PokemonPage />} />
      </Routes>
    </>
  )
}
