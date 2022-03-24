import React, { useEffect, useState } from 'react'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import CustomToggle from './CustomToggle/CustomToggle'
import { MdPersonPin } from 'react-icons/md';
import { BsFolder } from 'react-icons/bs'
import { IoNewspaperSharp } from 'react-icons/io5';
import { AiOutlineMail } from 'react-icons/ai';

import './Layout.module.css'
import Link from 'next/link';

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
        window.addEventListener('scroll',throttle(eventCallback,1000))
    },[]);

    return (
        <Accordion as="nav" bsPrefix='customized-accordion' defaultActiveKey='home' activeKey={activeKey}>
            <Card bsPrefix='customized-card'>
                <Link href='#home'>                
                    <Card.Header bsPrefix='customized-card-header'>
                        <CustomToggle eventKey="home" setActiveKey={setActiveKey} children={<MdPersonPin/>} />  
                    </Card.Header>
                </Link>                
                <Accordion.Collapse eventKey="home" bsPrefix='customized-accordion-collapse'>
                    <Card.Body bsPrefix='customized-card-body'>Home</Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card bsPrefix='customized-card'>
                <Link href='#portfolio'>
                    <Card.Header bsPrefix='customized-card-header'>
                        <CustomToggle eventKey="portfolio" setActiveKey={setActiveKey} children={<BsFolder />} />  
                    </Card.Header>
                </Link>         
                <Accordion.Collapse eventKey="portfolio" bsPrefix='customized-accordion-collapse'>
                    <Card.Body bsPrefix='customized-card-body'>Portfolio</Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card bsPrefix='customized-card'> 
                <Link href='#resume'>
                    <Card.Header bsPrefix='customized-card-header'>
                        <CustomToggle eventKey="resume" setActiveKey={setActiveKey} children={<IoNewspaperSharp/>} />  
                    </Card.Header>
                </Link>
                <Accordion.Collapse eventKey="resume" bsPrefix='customized-accordion-collapse'>
                    <Card.Body bsPrefix='customized-card-body'>Resume</Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card bsPrefix='customized-card'>
                <Link href='#contact'>                
                    <Card.Header bsPrefix='customized-card-header' >
                        <CustomToggle eventKey="contact" setActiveKey={setActiveKey} children={<AiOutlineMail/>} />  
                    </Card.Header>
                </Link>
                <Accordion.Collapse eventKey="contact" bsPrefix='customized-accordion-collapse'>
                    <Card.Body bsPrefix='customized-card-body'>Contact</Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
    )
}

export default NavBar