import React from 'react'
import styles from './PortfolioCarousel.module.css';

interface AnchorTagProps {
    href: string
}

const AnchorTag: React.FC<AnchorTagProps> = ({ children, href }) => {
  return (
    <a
        href={href}
        className={styles.a}
        target="_blank"
        rel="noreferrer"
        style={{ display: 'flex', alignContent: 'center' }}
    >{ children }</a>
  )
}

export default AnchorTag