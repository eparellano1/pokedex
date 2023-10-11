import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [pokemon, setPokemon] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3000/').then(response => {
      setPokemon(response.data);
    });
  }, []);

  const filteredPokemon = pokemon.filter(values => {
    //console.log(String(values.name.english).includes(searchQuery))
    return String(values.name.english).toLowerCase().includes(searchQuery.toLowerCase()) && String(values.type).includes(filterType); 
  });

  const renderPokemonGrid = () => {
    return filteredPokemon.map(values => {
      return (
        <div className="pokemon-card" key={values.id}>
          <img src={`../images/` + values.id.toString().padStart(3, '0') + `.png`} alt={values.name} />
          <p>{values.id.toString().padStart(3, '0')}</p>
          <h3>{values.name.english}</h3>
          <p>Type: {values.type.length > 1 ? values.type.join(', ') : values.type.join(', ')}</p>
        </div>
      );
    });
  };

  return (
    <div className="App">
      <h1>Pokédex</h1>
      
      <input type="search" 
        className="search-bar"
        placeholder="Search for a Pokemon"
        value={searchQuery}
        onChange={event => setSearchQuery(event.target.value)}
      />

      <select className="search-filter"
        value={filterType}
        onChange={event => setFilterType(event.target.value)}
      >
        <option value="">All</option>
        <option value="Normal">Normal</option>
        <option value="Fire">Fire</option>
        <option value="Water">Water</option>
        <option value="Grass">Grass</option>
        <option value="Electric">Electric</option>
        <option value="Ice">Ice</option>
        <option value="Fighting">Fighting</option>
        <option value="Poison">Poison</option>
        <option value="Ground">Ground</option>
        <option value="Flying">Flying</option>
        <option value="Psychic">Psychic</option>
        <option value="Bug">Bug</option>
        <option value="Rock">Rock</option>
        <option value="Ghost">Ghost</option>
        <option value="Dragon">Dragon</option>
        <option value="Dark">Dark</option>
        <option value="Steel">Steel</option>
        <option value="Fairy">Fairy</option>
      </select>

      <div className="pokemon-grid">
        {renderPokemonGrid()}
      </div>
    </div>
  );
};

export default App;