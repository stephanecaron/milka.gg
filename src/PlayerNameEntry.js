import React from "react";
import { useRef } from "react";
import CharacterSelect from './CharacterSelect';
import PropTypes from 'prop-types'
/* import { useParams } from "react-router-dom"; */



const PlayerNameEntry = ({
  playerNameValue,
  setPlayerNameValue,
  handleSubmit,
/*   playerCharacterValue, */
  setPlayerCharacterValue,
  playerSeedValue,
  setPlayerSeedValue,
  realCharacterList,

}) => {
  const inputRef = useRef();

  const validateSeed = (seed) => {
    const seedNum = Number(seed);
    if (isNaN(seedNum)) {
      alert("Player seed must be a number between 1 and 100.");
      return "";
    }
    if (seedNum < 1 || seedNum > 100) {
      alert("Player seed must be a number between 1 and 100.");
      return "";
    }
    return seedNum;
  };

  return (
    <form className="AddForm" onSubmit={handleSubmit}>
      <div>
        <div>
          {/* <label className="QuestionText" htmlFor='PlayerName'>Player Name: </label> */}
          <input
            className="inputBox"
            autoFocus
            ref={inputRef}
            id="addPlayer"
            type="text"
            required
            placeholder="Add Player Name"
            value={playerNameValue}
            onChange={(e) => {
              setPlayerNameValue(e.target.value);
            }}
          />
        </div>

        <div>
          {/* <label className="QuestionText"  htmlFor='PlayerSeed'> Player Seed: </label> */}
          <input
            className="inputBox"
            type="text"
            required
            placeholder="Add # Seed"
            value={playerSeedValue}
            onChange={(e) => {
              const validatedSeed = validateSeed(e.target.value);
              setPlayerSeedValue(validatedSeed);
            }}
          />
        </div>

{/*         <div>
          <select
            className="DropDown"
            name="character"
            id="character"
            value={playerCharacterValue}
            onChange={(e) => {
              setPlayerCharacterValue(e.target.value);
            }}
          >
            <option value="">Select Character</option>
            <option value="axl">Axl Low</option>
            <option value="ky">Ky Kiske</option>
            <option value="johnny">Johnny Sfondi</option>
            <option value="elphelt">Elphelt</option>
          </select>
        </div> */}

        <div>
            <CharacterSelect
                realCharacterList={realCharacterList}
                setPlayerCharacterValue={setPlayerCharacterValue} />
        </div>
      </div>

      <button
        className="SubmitButton"
        type="submit"
        onClick={() => inputRef.current.focus()}
      >
        {" "}
        Add Player
      </button>
    </form>
  );
};

PlayerNameEntry.propTypes = {
  playerNameValue : PropTypes.string,
  setPlayerCharacterValue : PropTypes.func,
  setPlayerNameValue : PropTypes.func,
  handleSubmit : PropTypes.func,
  playerSeedValue : PropTypes.any,
  setPlayerSeedValue : PropTypes.func,
  realCharacterList : PropTypes.array,
  playerCharacterValue : PropTypes.string,
}

export default PlayerNameEntry;