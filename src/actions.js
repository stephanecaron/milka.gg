import axios from 'axios'
axios.defaults.withCredentials=true; 
export async function getAllPlayers () { 
    return await axios.get("https://milkaggbackend-production.up.railway.app/getall")
} 

export async function sendNewPlayer (myNewPlayer) { 
    return await axios.post("https://milkaggbackend-production.up.railway.app/post", {data:myNewPlayer})
} 

export async function deletePlayer (playersid) { 
    return await axios.delete(`https://milkaggbackend-production.up.railway.app/delete?id=${playersid}`)
} 
