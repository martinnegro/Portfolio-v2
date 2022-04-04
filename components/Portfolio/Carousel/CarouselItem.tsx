import Image from 'next/image'
import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

interface CarouselItemProps {
  siteData: {
    SITE_NAME: string,
    SITE_DESCRIPTION: string,
    SITE_IMAGE: string,
    SITE_LINK: string,
  },
}
const CarouselItem = React.forwardRef(({ siteData }: CarouselItemProps, ref: React.ForwardedRef<HTMLDivElement>) => {
  return (
    <Carousel.Item ref={ref}>
        <Image src={siteData.SITE_IMAGE} className="d-block w-100" layout='fill'/>
        <Carousel.Caption ref={ref}>
            <h2>{siteData.SITE_DESCRIPTION}</h2>
            <p>{siteData.SITE_DESCRIPTION}</p>
        </Carousel.Caption>
    </Carousel.Item>
  )
})

export default CarouselItem