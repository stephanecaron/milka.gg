import React from 'react'
import PropTypes from 'prop-types'

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

Footer.propTypes = {
  length : PropTypes.number,
  players : PropTypes.array,
  handleDelete : PropTypes.func,
}

export default Footer