import React from 'react'
import PropTypes from 'prop-types';

function CharacterSelect({realCharacterList, setPlayerCharacterValue}) {
  const handleChange = (e) => {
    setPlayerCharacterValue(e.target.value);
  };
  console.log(realCharacterList)
  const options = realCharacterList.map(({characterDisplayValue, characterNameValue, characterID}) => (
    <option key={characterID} value={characterNameValue}>{characterDisplayValue}</option>
    ));
    return (
      <div>
        <select className='DropDown'
        onChange={handleChange}>
          {options}
        </select>
      </div>
    );
}

CharacterSelect.propTypes = {
  realCharacterList : PropTypes.array,
  setPlayerCharacterValue : PropTypes.string,
}

export default CharacterSelect;