import "./RandomPokemon.css";

export default function RandomPokemon() {
  const pokeNum = Math.floor(Math.random() * 151) + 1;

  return (
    <div className="RandomPokemon">
      <h1>Pokemon #{pokeNum}</h1>
      <img
        src={`https://projectpokemon.org/home/docs/spriteindex_148/bdsp-pc-sprites-r/sprites/pokemon/other/official-artwork/{pokeNum}.png`}
      />
    </div>
  );
}
