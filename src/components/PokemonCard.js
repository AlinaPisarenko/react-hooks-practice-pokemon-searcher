import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({ pokemon }) {
  const [back, setBack] = useState(false)

  return (
    <Card>
      <div>
        <div className="image">
          <img 
          src={!back ? pokemon.sprites.front : pokemon.sprites.back} 
          onClick={() => setBack(!back)}
          alt={pokemon.name} />
        </div>
        <div className="content">
          <div className="header">{pokemon.name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {pokemon.hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
