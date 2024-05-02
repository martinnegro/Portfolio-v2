import React from 'react'
import styles from './PortfolioCarousel.module.css'
import Image from 'next/image'
import { BiLinkExternal } from 'react-icons/bi';
import GitHubLogo from '../../../public/GithubLogo.svg'
import AnchorTag from './AnchorTag';

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
            <AnchorTag href={siteData.SITE_LINK} >
              <h3 style={{ margin: '0' }}>
                  {siteData.SITE_NAME}
              </h3>
              <BiLinkExternal style={{ fontSize: '1.5rem', display:'flex',verticalAlign:'center' }}/>
            </AnchorTag>
            {
              siteData.SITE_GITHUB &&
              <AnchorTag href={siteData.SITE_GITHUB} >
                <GitHubLogo style={{ height: '1.3rem', marginBottom: '2px' }}/>
              </AnchorTag>
            }
          </div>
          <p className={styles.siteDescription}>{siteData.SITE_DESCRIPTION}</p>
        </div>
    </div>
  )
}

export default CarouselCard