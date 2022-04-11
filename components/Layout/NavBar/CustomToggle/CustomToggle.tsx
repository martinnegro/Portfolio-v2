import React from "react";
import { useAccordionButton } from "react-bootstrap";
import styles from './CustomToggle.module.css'

interface CustomToggleProps {
    children: JSX.Element,
    eventKey: string,
    setActiveKey: React.Dispatch<React.SetStateAction<string>>
}

const CustomToggle = ({ children, eventKey, setActiveKey }: CustomToggleProps) => {
    // Desactivado por que el eventKey lo maneja el scrolling
    // const handleToggle = useAccordionButton(eventKey,() => setActiveKey(eventKey))
    return (
        <button
            type="button"
            // onClick={handleToggle}
            className={styles.button}
            
        >
                {children}
        </button>
    )
}

export default CustomToggle