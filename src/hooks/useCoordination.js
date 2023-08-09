import { useState } from "react";

export const useCoordination = () => {
    const [lat,setLat] = useState('');
    const [lon,setLon] = useState('');
    const[loadingLocation,setLoadingLocation] = useState(false);
    const findCoordinates =()=>{
        //if geolocation is supported by browser
        if(navigator.geolocation){
            setLoadingLocation(true);
            navigator.geolocation.getCurrentPosition((position)=>{
                setLat(position.coords.latitude);
                setLon(position.coords.longitude);
            },(error)=>{
                setLat('41.390205');
                setLon('2.154007');
                console.log(error);
            });
            setLoadingLocation(false);
        }else{
             console.log('Geolocation is not supported by this browser.');
        }
    }
    
    const updateLocation = (lat,lon) =>{
        setLat(lat);
        setLon(lon);
    }
    
    return [lat,lon,loadingLocation,findCoordinates,updateLocation];
};