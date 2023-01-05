import React from 'react'
import { useRef } from 'react';

const PlayerNameEntry = ({
    playerNameValue, setPlayerNameValue, handleSubmit,
     playerCharacterValue, setPlayerCharacterValue,
     playerSeedValue, setPlayerSeedValue
    }) => {
const inputRef= useRef();

     return (



  <form className='AddForm' onSubmit={handleSubmit}>

    <label htmlFor='PlayerName'>Player Name: </label>
        <input
            autoFocus
            ref={inputRef}
            id='addPlayer'
            type='text'
            required
            placeholder='Add Player Name'
            value={playerNameValue}
            onChange={(e) => {
                setPlayerNameValue(e.target.value);            
                }
            }

        />
        <label htmlFor='PlayerCharacter'>Character: </label>
        <select name="character" id="character"
        value={ playerCharacterValue  }
            onChange={(e) => {
                setPlayerCharacterValue(e.target.value);
            }
            }   >
            <option value="axl">Axl Low</option>
            <option value="ky">Ky Kiske</option>
            <option value="johnny">Johnny Sfondi</option>
            <option value="elphelt">Elphelt</option>
        </select>

        <label htmlFor='PlayerSeed'> Player Seed: </label>
            <input
                type='text'
                required
                placeholder='Add a numerical seed'
                value={playerSeedValue}
                onChange={(e) => {
                    setPlayerSeedValue(e.target.value);

                }}/>
    
        <button className="SubmitButton"
           type='submit'
           onClick={() => inputRef.current.focus()}
        > Add Player</button>
            </form>

  )
}

export default PlayerNameEntry