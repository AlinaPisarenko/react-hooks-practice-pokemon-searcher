import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({ pokemon }) {
  const [frontImg, setFrontImg] = useState(true)

  // destructuring pokemon object
  const { name, hp, sprites } = pokemon

  return (
    <Card onClick={() => setFrontImg(!frontImg)}>
      <div >
        <div className="image">
          {/* conditionally rendering front/back sprites */}
          <img 
          src={frontImg ? sprites.front : sprites.back} 
          alt={name} />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
