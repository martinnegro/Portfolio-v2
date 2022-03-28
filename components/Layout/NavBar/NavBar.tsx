import React, { useEffect, useRef, useState } from 'react'
import Accordion from 'react-bootstrap/Accordion'
import { MdPersonPin } from 'react-icons/md';
import { BsFolder } from 'react-icons/bs'
import { IoNewspaperSharp } from 'react-icons/io5';
import { AiOutlineMail } from 'react-icons/ai';

import CustomAccordionItem from './CustomAccordionItem/CustomAccordionItem';
import '../Layout.module.css'

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


const NavBar = () => {
    const [ activeKey, setActiveKey ] = useState('home');

    useEffect(() => {
        const eventCallback = (event: Event) => {
            const vh = Math.max(document.documentElement.scrollHeight || 0, window.innerHeight || 0) / 4
            const place = ( window.scrollY + 10 )/ vh;
            place < 0.65
            ? setActiveKey('home')
            : place < 1.65
            ? setActiveKey('portfolio')
            : place < 2.65
            ? setActiveKey('resume')
            : place < 3.65
            ? setActiveKey('contact')
            : setActiveKey('home');  
        }
        window.addEventListener('scroll',throttle(eventCallback,50))
    },[]);


    return (
        <Accordion as="nav" bsPrefix='customized-accordion' defaultActiveKey='home' activeKey={activeKey}>
            <CustomAccordionItem sectionName='home' setActiveKey={setActiveKey} IconComponent={MdPersonPin}/>
            <CustomAccordionItem sectionName='portfolio' setActiveKey={setActiveKey} IconComponent={BsFolder}/>
            <CustomAccordionItem sectionName='resume' setActiveKey={setActiveKey} IconComponent={IoNewspaperSharp}/>
            <CustomAccordionItem sectionName='contact' setActiveKey={setActiveKey} IconComponent={AiOutlineMail}/>
        </Accordion>
    )
}

export default NavBar