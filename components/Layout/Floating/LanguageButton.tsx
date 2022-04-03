import React, { useContext } from 'react'
import { LangContext, LangContextValues } from '../../../contexts/LangContext/LangContext'

interface LanguageButtonProps {
    style: string
}

const LanguageButton = ({ style }: LanguageButtonProps) => {
  const { text, changeLang } = useContext(LangContext) as LangContextValues;

  return (
    <button 
      className={style}
      onClick={() => changeLang()}
    >
        { text?.LANG_BUTTON }
    </button>
  )
}

export default LanguageButton