import React from 'react'
import styles from './PortfolioCarousel.module.css'
import Image from 'next/image'

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
    <div className={styles.cardContainer}>
        <div className={styles.img}>
          <Image src={siteData.SITE_IMAGE} layout="fill" objectFit='cover'/>
        </div>
          <a href={siteData.SITE_LINK} className={styles.a}>
            <div className={styles.cardInfo}>
              <h3>{siteData.SITE_NAME}</h3>
              <p>{siteData.SITE_DESCRIPTION}</p>
            </div>
          </a>
    </div>
  )
}

export default CarouselCard