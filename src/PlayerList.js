import React from 'react'
import LinePlayer from './LinePlayer'

const PlayerList = ({players, handleDelete}) => {
  // Sort players in ascending order based on playerSeedValue
  players.sort((a, b) => a.playerSeedValue - b.playerSeedValue);

  return (
    <>
      <ul className="Content">
        {players.map((players) => (
          <LinePlayer
            key={players.id}
            players={players}
            handleDelete={handleDelete}
          />
        ))}
      </ul>
    </>
  );
};

export default PlayerList;