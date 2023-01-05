import React from 'react'

const Footer = ({length, players, handleDelete}) => {
  //  const today = new Date(); 


  return (
<footer>
    <p> 
    { length === 0 ? "No player registered" : 
      ( length === 1 ? `${length} player registered `  :
    `${length} players registered` )}
    {/* { length > 0 ? <button onClick={() => handleDelete(players)}>Delete All</button> : null } */}
       {/*   {length} list {length === 1 ? "item" : "items"}  */}</p>
       
</footer>
  )
}

export default Footer