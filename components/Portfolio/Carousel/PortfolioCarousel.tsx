import React, { createRef, useContext, useRef } from 'react'
import { Carousel } from 'react-responsive-carousel'
import { LangContext, LangContextValues } from '../../../contexts/LangContext/LangContext'
import CarouselCard from './CarouselCard'
import CarouselItem from './CarouselItem'   
import styles from './PortfolioCarousel.module.css'


const PortfolioCarousel = () => {
    const { text } = useContext(LangContext) as LangContextValues;
    return (
        <Carousel className={styles.container} showThumbs={false} showIndicators={false}>
            {
                text?.PORTFOLIO_SITES.map((site) => <CarouselCard key={site.SITE_LINK} siteData={site}/>)
            }
        </Carousel>
    )
}

export default PortfolioCarousel