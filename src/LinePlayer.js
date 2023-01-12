import React from 'react'
import { FaTrashAlt } from 'react-icons/fa';
import PropTypes from 'prop-types'

const LinePlayer = ({players, handleDelete}) => {

  
  return (
    <li className="item">
      
        <h5 className="Seed">{players.playerSeedValue}</h5>
        <h5 className="PlayerName">{players.playerNameValue}</h5>
        {players.playerCharacterValue === "null" ? (
    <div className="CharacterPortraitEmpty"></div>
) : (
    <h5 className="CharacterPortrait"><img 
        src={`/${players.playerCharacterValue}.png`}
        alt="wat"
        width="30"
        height="30"/></h5>
)}
{/*         <h5 className="CharacterPortrait">
          <img 
            
            
            src={players.playerCharacterValue === null ? null : `http://localhost:3000/${players.playerCharacterValue}.png`}
            alt="wat"
            width="30"
            height="30"/> 
        </h5> */}
         
      < FaTrashAlt className="trashIcon"
          onClick={() => handleDelete(players.id)}
          role="button"
          tabIndex="0"
          aria-label={`Delete ${players.playerNameValue}`}
      />
    </li>
  )
}

LinePlayer.propTypes = {
  players : PropTypes.array,
  handleDelete : PropTypes.func,
}

export default LinePlayer