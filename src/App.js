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



  
  const addPlayer = async() => {
    const myNewPlayer = {playerNameValue, playerCharacterValue, playerSeedValue};
    const updatedPlayer = await sendNewPlayer(JSON.stringify(myNewPlayer));
    setPlayers(updatedPlayer.data.playerList)
  }



  const handleSubmit = (e) => {
    e.preventDefault();
    if (!playerNameValue) return;
    addPlayer()
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
