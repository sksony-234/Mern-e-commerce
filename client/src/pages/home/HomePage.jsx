import React from 'react'
import MainCarosel from '../../customer/components/carosel/MainCarosel'
import HomeSectionCarosel from '../../customer/components/homesectionCarosel/HomeSectionCarosel'
import mens_kurta from '../../customer/Data/mens/mens_kurta'

const HomePage = () => {
  return (
    <div>
        <MainCarosel />
        <div className="space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10">
          <HomeSectionCarosel data={mens_kurta} sectionName ="Mens Kurta"/>
          <HomeSectionCarosel data={mens_kurta} sectionName ="Mens Kurta"/>
          <HomeSectionCarosel data={mens_kurta} sectionName ="Mens Kurta"/>
          <HomeSectionCarosel data={mens_kurta} sectionName ="Mens Kurta"/>
          <HomeSectionCarosel data={mens_kurta} sectionName ="Mens Kurta"/>
        </div>
    </div>
  )
}

export default HomePage