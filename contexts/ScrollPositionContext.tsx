import React, { useState, useEffect } from "react";

export const ScrollPositionContext = React.createContext(0)

const throttle =  (callbackFn: Function, limit:number) => {
    let wait = false;                  
    return function () {              
        if (!wait) {                  
            callbackFn();           
            wait = true;               
            setTimeout(function () {   
                wait = false;          
            }, limit);
        }
    }
}

export const ScrollPositionProvider: React.FC<React.ReactNode> = ({ children }) => {
    const [ position, setPosition ] = useState(0);

    useEffect(() => {
        const eventCallback = (event: Event) => {
            const vh = Math.max(document.documentElement.scrollHeight || 0, window.innerHeight || 0) / 4
            const place = ( window.scrollY + 10 )/ vh;
            setPosition(place)
        }
        window.addEventListener('scroll',throttle(eventCallback,50))
    },[]);


    return (
        <ScrollPositionContext.Provider value={position}>
            { children }
        </ScrollPositionContext.Provider>
    )
}