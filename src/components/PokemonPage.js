import React, { useEffect, useState } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [allPokemon, setAllPokemon] = useState([])
  const [search, setSearch] = useState('')

  // fetching data and setting it to allPokemon state
  useEffect(() => {
  fetch('http://localhost:3001/pokemon')
  .then(res => res.json())
  .then(data => setAllPokemon(data))
  }, [])

  const handleAddPokemon = (newPokemon) => {
    //posting new pokemon to DB
    fetch('http://localhost:3001/pokemon', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newPokemon)
    })
    .then(res => res.json())
    //updating the state to add new pokemon to the DOM
    .then(newPoke => setAllPokemon([...allPokemon, newPoke]))
  }

  // filter creates a new copy of an array and filters objects that satisfy a condition
  const filteredPokemon = allPokemon.filter(pokemon => pokemon.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm handleAddPokemon={handleAddPokemon}/>
      <br />
      <Search search={search} setSearch={setSearch} />
      <br />
      {/* make sure to pass filtered array */}
      <PokemonCollection allPokemon={filteredPokemon} />
    </Container>
  );
}

export default PokemonPage;
