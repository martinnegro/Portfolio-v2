import React from 'react';
import Card from 'react-bootstrap/Card'
import CustomToggle from '../CustomToggle/CustomToggle';
import Link from 'next/link';
import Accordion from 'react-bootstrap/Accordion';
import { IconType } from 'react-icons';

interface CustomAccordionItemProps {
    sectionName: string,
    setActiveKey: React.Dispatch<React.SetStateAction<string>>,
    IconComponent: IconType
}

const CustomAccordionItem = ({ sectionName, setActiveKey, IconComponent }: CustomAccordionItemProps) => {
  return (
      <Card bsPrefix='customized-card'>
        <Link href={'#' + sectionName}>                
            <Card.Header bsPrefix='customized-card-header'>
                <CustomToggle eventKey={sectionName} setActiveKey={setActiveKey} children={<IconComponent />} />  
            </Card.Header>
        </Link>                
        <Accordion.Collapse eventKey={sectionName} bsPrefix='customized-accordion-collapse'>
            <Card.Body bsPrefix='customized-card-body'>{sectionName.toUpperCase()}</Card.Body>
        </Accordion.Collapse>
    </Card>
  )
}

export default CustomAccordionItem