import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";

import { PokemonApp } from "./PokemonApp";
import "./styles.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <PokemonApp />
    </BrowserRouter>
  </StrictMode>
);
