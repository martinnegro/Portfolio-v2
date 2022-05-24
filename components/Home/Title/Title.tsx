import React, { useContext, useEffect, useState } from 'react'
import { ScrollPositionContext } from '../../../contexts/ScrollPositionContext'
import { Titleh1 } from '../../styled/index.scss'

const Title = () => {


  
  return (
    <>
      <Titleh1>
        <span>m</span><span>a</span><span>r</span><span>t</span><span>i</span><span>n</span>
      </Titleh1> 
      <Titleh1>
        <span>w</span><span>e</span><span>b</span><span>d</span><span>e</span><span>v</span>
      </Titleh1>
    </>
  )
}

export default Title