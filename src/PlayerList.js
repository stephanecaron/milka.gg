import React from 'react'
import LinePlayer from './LinePlayer'
import PropTypes from 'prop-types'

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

PlayerList.propTypes = {
  players : PropTypes.array,
  handleDelete : PropTypes.func,
}

export default PlayerList;