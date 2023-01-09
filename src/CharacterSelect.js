import React from 'react'

function CharacterSelect({realCharacterList, setPlayerCharacterValue}) {
  const handleChange = (e) => {
    setPlayerCharacterValue(e.target.value);
  };

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

export default CharacterSelect;