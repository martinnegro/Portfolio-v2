import React, { createRef, useContext, useRef } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import { LangContext, LangContextValues } from '../../../contexts/LangContext/LangContext'
import CarouselItem from './CarouselItem'   
import styles from './PortfolioCarousel.module.css'


const PortfolioCarousel = () => {
    const { text } = useContext(LangContext) as LangContextValues;
    const ref = createRef<HTMLDivElement>()
    return (
        <Carousel className={styles.container}>
            {
                text?.PORTFOLIO_SITES.map(function(site){ return <CarouselItem ref={ref} key={site.SITE_LINK} siteData={site}/> })
            }
        </Carousel>
    )
}

export default PortfolioCarousel