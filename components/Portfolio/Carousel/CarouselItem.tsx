import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import CarouselCard from './CarouselCard';
interface CarouselItemProps {
  siteData: {
    SITE_NAME: string,
    SITE_DESCRIPTION: string,
    SITE_IMAGE: string,
    SITE_LINK: string,
  },
}
const CarouselItem = React.forwardRef((props: CarouselItemProps, ref: React.ForwardedRef<HTMLDivElement>) => {
  const { siteData, ...restProps } = props;
  
  return (
    
        <CarouselCard siteData={siteData}/>
    
  )
})

export default CarouselItem