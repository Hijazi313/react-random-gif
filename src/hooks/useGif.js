import {useState, useEffect} from 'react'
import axios from 'axios';


const API_KEY = process.env.REACT_APP_GIF_KEY;
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

export default function useGif() {
    const [gif, setGif] = useState('');
    
    useEffect( ()=>{
        (async ()=>{
            const data =  await (await axios.get(url)).data
            const imgSrc = data.data.images.downsized_large.url
            setGif(imgSrc)
            
         })()

    },[])
    return gif
}
