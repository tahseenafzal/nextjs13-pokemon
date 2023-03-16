"use client";

import { store } from "@/store";
import { setStartupPokemon } from "@/store/searchSlice";
import { useRef } from "react";
import { Pokemon } from "@/types";

const Preloader = ({ pokemons }: { pokemons: Pokemon[] }) => {
  const loaded = useRef(false);
  if (!loaded.current) {
    store.dispatch(setStartupPokemon(pokemons));
    loaded.current = true;
  }
  return null;
};

export default Preloader;
