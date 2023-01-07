import './index.css';
import PlayerNameEntry from './PlayerNameEntry';
import { useState, useEffect } from 'react';
import Footer from './Footer';
import Content from './Content';
import { getAllPlayers, sendNewPlayer, deletePlayer } from './actions';

const RaphireThing = async () => {
  try {
  const getAllData=await getAllPlayers()
    return getAllData.data.playerList
  } catch(error){}
}


function App() {

 const [players, setPlayers] = useState([])
 
 useEffect(() => {
  const fetchData = async () => {
    const playerList=await RaphireThing();
    return playerList  };

  fetchData().then((res)=> {
  setPlayers(res)
  })
},[])


  const setAndSavePlayers = (myNewPlayer) => {
/*     localStorage.setItem('playerList', JSON.stringify(players)); */
  }
  
  const addPlayer = async() => {
    const myNewPlayer = {playerNameValue, playerCharacterValue, playerSeedValue};
    const updatedPlayer = await sendNewPlayer(JSON.stringify(myNewPlayer));
    setPlayers(updatedPlayer.data.playerList)
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

  const handleDelete = async(id) => {
    const updatedPlayer = await deletePlayer(id);
    setPlayers(updatedPlayer.data.playerList)
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
