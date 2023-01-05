import React from 'react'
import LinePlayer from './LinePlayer'

const PlayerList = ({players, handleDelete}) => {



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