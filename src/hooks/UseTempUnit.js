import { useEffect, useState } from "react";


export const useTempUnit = () => {

    const [unitMode,setUnitMode] = useState(false); // false = C, true = F

    //toggle unit mode
    const toggleUnitMode = () => {
        setUnitMode(!unitMode);
        localStorage.setItem('unitMode',!unitMode); // save unit mode to local storage
    }
    
    useEffect(() => {
        //check if unit mode is saved in local storage
        //if not, save unit mode to local storage
        //else, set unit mode to the value in local storage
        if(JSON.parse(localStorage.getItem('unitMode')) === null){
            localStorage.setItem('unitMode',unitMode);
    } else{       
        setUnitMode(unitMode);
    } },[]);
    return [unitMode,toggleUnitMode];

}