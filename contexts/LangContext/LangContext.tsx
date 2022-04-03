import React, { createContext, useEffect, useState } from "react";
import spanish from "./spanish.json";
import english from './english.json'

type langJSON = typeof spanish;

export interface LangContextValues {
    text: langJSON | null
    changeLang: Function
}

export const LangContext = createContext<LangContextValues | null>(null);

export const LangContextProvider: React.FC = ({ children }) => {
    const [ lang, setLang ] = useState<'es' | 'en'>('es');
    const [ text, setText ] = useState<langJSON | null>(null)
    
    const changeLang = () => {         
        setLang((state) => {
            if (state === 'es') return 'en';
            if (state === 'en') return 'es';
            else return 'es';
        })
    };

    useEffect(() => {
        const browserLang = navigator.languages[0].slice(0,2) || navigator.language.slice(0,2);
        setLang(browserLang === 'es' || browserLang === 'en' ? browserLang : 'en');
    },[])
    
    useEffect(() => {
        if (lang === 'es') setText(spanish);
        if (lang === 'en') setText(english)
    },[lang])

    return (
        <LangContext.Provider
            value={{
                text,
                changeLang
            }}
        >
            { children }
        </LangContext.Provider>
    )
};