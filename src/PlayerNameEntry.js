import React from "react";
import { useRef } from "react";

const PlayerNameEntry = ({
  playerNameValue,
  setPlayerNameValue,
  handleSubmit,
  playerCharacterValue,
  setPlayerCharacterValue,
  playerSeedValue,
  setPlayerSeedValue,
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

        <div>
          {/* <label className="QuestionText" htmlFor='PlayerCharacter'>Character: </label> */}
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

export default PlayerNameEntry;