import React from 'react'
import styles from './PortfolioCarousel.module.css'
import Image from 'next/image'
import { BiLinkExternal } from 'react-icons/bi';
import GitHubLogo from '../../../public/GithubLogo.svg'

interface CarouselItemProps {
    siteData: {
      SITE_NAME: string,
      SITE_DESCRIPTION: string,
      SITE_IMAGE: string,
      SITE_LINK: string,
      SITE_GITHUB: string
    },
  }

const CarouselCard = (props: CarouselItemProps) => {
  const { siteData, ...restProps } = props;
  return (
    <div className={styles.cardContainer}>
        <div className={styles.img}>
          <Image src={siteData.SITE_IMAGE} layout="fill" objectFit='cover'/>
        </div>
            <div className={styles.cardInfo}>
              <div className={styles.headerInfo}>
                <a 
                  href={siteData.SITE_LINK} 
                  className={styles.a}
                  target="_blank"
                >
                  <h3>
                      {siteData.SITE_NAME}
                  </h3>
                </a>  
                <a 
                  href={siteData.SITE_LINK} 
                  className={styles.a}
                  target="_blank"
                > 
                    <BiLinkExternal style={{ fontSize: '1.5rem' }}/>
                 </a> 
                 <a 
                 href={siteData.SITE_GITHUB} 
                 className={styles.a}
                 target="_blank"
                 >
                <GitHubLogo style={{ height: '1.5rem' }}/>
                </a>
              </div>
              <p>{siteData.SITE_DESCRIPTION}</p>
            </div>
    </div>
  )
}

export default CarouselCard