import axios from 'axios'
axios.defaults.withCredentials=true; 
export async function getAllPlayers () { 
    return await axios.get("http://localhost:8000/getall")
} 

export async function sendNewPlayer (myNewPlayer) { 
    return await axios.post("http://localhost:8000/post", {data:myNewPlayer})
} 

export async function deletePlayer (playersid) { 
    return await axios.delete(`http://localhost:8000/delete?id=${playersid}`)
} 
