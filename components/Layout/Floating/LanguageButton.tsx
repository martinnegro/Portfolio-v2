import React, { useContext } from 'react'
import { LangContext, LangContextValues } from '../../../contexts/LangContext/LangContext'

import Button from 'react-bootstrap/Button'

const LanguageButton = () => {
  const { text, changeLang } = useContext(LangContext) as LangContextValues;

  return (
    <Button
      variant='outline-light'
      onClick={() => changeLang()}
    >
        { text?.LANG_BUTTON }
    </Button>
  )
}

export default LanguageButton