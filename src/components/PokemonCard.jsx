
function PokemonCard({ pokemon }) {
  const spriteUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`

  return (
    <article className={`pokemon-card ${pokemon.type.toLowerCase()}`}>
      <img
        src={spriteUrl}
        alt={pokemon.name}
        loading="lazy"
      />

      <h2>{pokemon.name}</h2>
      <p className={`pokemon-type ${pokemon.type.toLowerCase()}`}>
  {pokemon.type}
</p>

      <div className="pokemon-stats">
        <p>
          <span>HP</span>
          <strong>{pokemon.hp}</strong>
        </p>

        <p>
          <span>Attack</span>
          <strong>{pokemon.attack}</strong>
        </p>
      </div>
    </article>
  )
}

export default PokemonCard
