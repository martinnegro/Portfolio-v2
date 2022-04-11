import React, { useContext, useEffect, useRef, useState } from 'react'
import Accordion from 'react-bootstrap/Accordion'
import { MdPersonPin } from 'react-icons/md';
import { BsFolder } from 'react-icons/bs'
import { IoNewspaperSharp } from 'react-icons/io5';
import { AiOutlineMail } from 'react-icons/ai';

import CustomAccordionItem from './CustomAccordionItem/CustomAccordionItem';
import { ScrollPositionContext } from '../../../contexts/ScrollPositionContext';

import styles from '../Layout.module.css'


const NavBar = () => {
    const [ activeKey, setActiveKey ] = useState('home');
    
    const position = useContext(ScrollPositionContext);
    useEffect(() => {
            position < 0.65
            ? setActiveKey('home')
            : position < 1.65
            ? setActiveKey('resume')
            : position < 2.65
            ? setActiveKey('portfolio')
            : position < 3.65
            ? setActiveKey('contact')
            : setActiveKey('home');  
    },[position]);

    
            
    return (
        <Accordion as="nav" bsPrefix='customized-accordion' defaultActiveKey='home' activeKey={activeKey} >
            <CustomAccordionItem sectionName='home' setActiveKey={setActiveKey} IconComponent={MdPersonPin}/>
            <CustomAccordionItem sectionName='resume' setActiveKey={setActiveKey} IconComponent={IoNewspaperSharp}/>
            <CustomAccordionItem sectionName='portfolio' setActiveKey={setActiveKey} IconComponent={BsFolder}/>
            <CustomAccordionItem sectionName='contact' setActiveKey={setActiveKey} IconComponent={AiOutlineMail}/>
        </Accordion>
    )
}

export default NavBar