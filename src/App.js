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

const characterListFetch = async () => {
  try {
    const getCharacterData = await getAllPlayers()
    return getCharacterData.data.characterList
  } catch(error) {}
}


function App() {

 const [players, setPlayers] = useState([])
 const [realCharacterList, setRealCharacterList] = useState([])
 
 useEffect(() => {
  const fetchData = async () => {
    const playerList=await RaphireThing();
    return playerList };
 

  fetchData().then((res)=> {
  setPlayers(res)
  })
},[])

useEffect (() => {
  const fetchCharacterData= async () => {
    const characterList = await characterListFetch()
    return characterList };

    fetchCharacterData().then((res) => {
      setRealCharacterList(res)
    })
},[])

console.log(characterListFetch())
console.log(characterList)

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
