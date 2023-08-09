import {useState, useEffect} from 'react'
import {SEARCH_DEFAULT} from '../api'

export const useImageFetch = () => {
    //declare state variable for image
    const [images,setImages] = useState('');
    const fetchImage = async endpoint => {
        try{
            //fetch image from unsplash api
            const result = await (await fetch(endpoint)).json();
            setImages(result.results[Math.floor(Math.random() * 10)].urls.regular);
        }catch(error){
            console.log(error);
        }
    }
    //fetch image on first render
    useEffect(()=>{
        fetchImage(`${SEARCH_DEFAULT}`);
    },[]);
    return [images,fetchImage];
}