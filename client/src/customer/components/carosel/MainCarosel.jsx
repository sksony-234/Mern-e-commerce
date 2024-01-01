import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import MainCarosalData from './MainCarosalData';


const MainCarosel = () => {
    const items = MainCarosalData.map((item, index) => <img className='cursor-pointer' key={index} src={item.image} alt="" />)
  return (
      <AliceCarousel
          mouseTracking
          items={items}
          disableButtonsControls
          autoPlay
          autoPlayInterval={2000}
          infinite
      />
  )
}

export default MainCarosel