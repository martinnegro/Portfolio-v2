import React from 'react'
import styles from './PortfolioCarousel.module.css'

interface CarouselItemProps {
    siteData: {
      SITE_NAME: string,
      SITE_DESCRIPTION: string,
      SITE_IMAGE: string,
      SITE_LINK: string,
    },
  }

const CarouselCard = (props: CarouselItemProps) => {
  const { siteData, ...restProps } = props;
  return (
    <div {...restProps} style={{ height: '100%' }}>
        <img className={styles.img} src={siteData.SITE_IMAGE}/>
        <div className={styles.info}>
          <h3>{siteData.SITE_NAME}</h3>
          <p>{siteData.SITE_DESCRIPTION}</p>
        </div>
    </div>
  )
}

export default CarouselCard