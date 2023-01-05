import './index.css';
import PlayerNameEntry from './PlayerNameEntry';
import { useState } from 'react';
import Footer from './Footer';
import Content from './Content';
function App() {

  let playerList = []
  if (localStorage.getItem('playerList')) {
    playerList = JSON.parse(localStorage.getItem('playerList'))
  }

  const [players, setPlayers] = useState(playerList)

/*   const [newPlayer, setNewPlayer] = useState ('') */
/*   const [search, setSearch] = useState('') */

  const setAndSavePlayers = (newPlayers) => {
    setPlayers(newPlayers);
    localStorage.setItem('playerList', JSON.stringify(newPlayers));
  }
  
  const addPlayer = () => {
    const id = players.length ? players[players.length -1].id +1 : 1;
    const myNewPlayer = {id, playerNameValue, playerCharacterValue, playerSeedValue};
    const listPlayers = [...players, myNewPlayer];
    setAndSavePlayers(listPlayers);
  }

/*   const addCharacter = () => {
    const id = players.length ? players[players.length -1].id +1 : 1;
    const myNewPlayer = {id, playerCharacterValue};
    const listPlayers = [...players, myNewPlayer];
    setAndSavePlayers(listPlayers);
  } */

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!playerNameValue) return;
    addPlayer(/* playerNameValue, playerCharacterValue */)
    setPlayerNameValue('');
    setPlayerSeedValue('');
    setPlayerCharacterValue('null');
  }

  const handleDelete = (id) => {
    const listPlayers = players.filter((players) => players.id !== id);
    setAndSavePlayers(listPlayers);
  }

  const [playerNameValue, setPlayerNameValue] = useState('')
  const [playerCharacterValue, setPlayerCharacterValue] = useState ('null')
  const [playerSeedValue, setPlayerSeedValue] = useState('')
 
  return (
    <div className="App">
      <PlayerNameEntry
        playerNameValue={playerNameValue}
        playerCharacterValue={playerCharacterValue}
        playerSeedValue={playerSeedValue}
        setPlayerCharacterValue={setPlayerCharacterValue}
        setPlayerNameValue={setPlayerNameValue}
        setPlayerSeedValue={setPlayerSeedValue}
        handleSubmit={handleSubmit}
      />
      <Content
      players={players}
      handleDelete={handleDelete}
      />
      <Footer length={players.length}
      players={players} 
      handleDelete={handleDelete}
        />
</div>
);
}

export default App;
