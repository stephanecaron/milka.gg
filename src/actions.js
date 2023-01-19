import axios from 'axios'
axios.defaults.withCredentials=true; 
export async function getAllPlayers () { 
    return await axios.get("http://localhost:8000/getall")
} 

export async function getAllCharacters () { 
    return await axios.get("http://localhost:8000/getcharacters")
} 

export async function sendNewPlayer (myNewPlayer) { 
    try {
        return await axios.post("http://localhost:8000/post", {myNewPlayer});
    } catch (error) {
        console.error(error);
    }
} 

export async function deletePlayer (playersid) { 
    return await axios.delete(`http://localhost:8000/delete?id=${playersid}`)
} 
