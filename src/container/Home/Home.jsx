import React from 'react'
import Services from '../../components/Services/Services'
import Slider from '../../components/Slider/Slider'
import TabmenuProducts from '../../components/TabmenuProducts/TabmenuProducts'

function Home() {
  return (
    <>
      <Slider />
      <Services />
      <TabmenuProducts />
    </>
  )
}

export default Home