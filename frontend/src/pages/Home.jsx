import React from 'react'
import Slider from '../components/Home Components/Slider'
import Title from '../components/Title'
import About from '../components/Home Components/About'
import ImportantNews from '../components/Home Components/ImportantNews'

function Home() {
  return (
    <div>
      <Slider />
      <About />
      <ImportantNews />
    </div>
  )
}

export default Home