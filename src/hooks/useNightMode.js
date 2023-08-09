import { useState, useEffect } from "react";


export const useNightMode = () => {
    //declare state variable for night mode
    let checktheme=window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

    const [nightMode,setNightMode] = useState(checktheme); // false = light, true = dark    

    //function to toggle night mode
    const toggleNightMode = () => {
        setNightMode(!nightMode);
        localStorage.setItem('theme',!nightMode);
    }

    useEffect(() => {
        if(localStorage.getItem('theme') === 'false'){
            setNightMode(false);
    } else if (localStorage.getItem('theme') === 'true'){
            setNightMode(true);
    }
    },[]);
    return [nightMode,toggleNightMode];

}