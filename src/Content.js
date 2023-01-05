import React from 'react'
import PlayerList from './PlayerList'


const Content = ({players, handleDelete}) => {
 


  return (
 <main>
    {players.length ? ( 
   <PlayerList 
    players={players}
    handleDelete={handleDelete}/>
    ) : (
        <p style={{ marginTop: '0rem', marginLeft: '6.1rem', marginBot: '0.2rem'}}>Please add players.</p>
    
    )}
</main>
  )
}

export default Content