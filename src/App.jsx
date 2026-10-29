
import './App.css'
import pokemons from './data/pokemon'
import PokemonCard from './components/PokemonCard'
import { useState } from 'react'

function App() {

 // Remember which type the user selects
  const [selectedType, setSelectedType] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')

 // Get all the unique types from the dataset
const types = [
  'All',
  ...new Set(pokemons.map((item) => item.type)),
]

 // Show all Pokémon or only those of the selected type
const filteredPokemons = pokemons.filter((pokemon) => {
  const matchesSearch = pokemon.name
    .toLowerCase()
    .includes(searchTerm.toLowerCase())

  const matchesType =
    selectedType === 'All' || pokemon.type.includes(selectedType)

  return matchesSearch && matchesType
})

  return (
    <main>
      {/* 1. Page header */}
      <header className="page-header">
        <div className="pokeball-animation">
    <img
      className="page-pokeball"
      src="/vite-project/pokeball.svg"
      alt=""
    />
  </div>
        <h1>Pokémon Card Collection</h1>
        <p>Discover your favorite Pokémon.</p>
      </header>

      {/* Search bar */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Search Pokémon..."
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
      </div>

      {/* 2. Filter buttons go between the header and grid */}
      <div className="type-filters">
        {types.map((type) => (
          <button
            key={type}
            className={selectedType === type ? 'active' : ''}
            onClick={() => setSelectedType(type)}
          >
            {type}
          </button>
        ))}
      </div>

{/* 3. Display the filtered Pokémon cards */}
      <section className="pokemon-grid">
  {filteredPokemons.length > 0 ? (
    filteredPokemons.map((item) => (
      <PokemonCard key={item.id} pokemon={item} />
    ))
  ) : (
    <p className="no-results">
      No Pokémon found. Try another search!
    </p>
  )}
</section>
    </main>
  )
}

export default App
