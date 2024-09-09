import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/about/About'
import Campus from './Components/Campus/Campus'
import Testimonials from './Components/Testimonials/Testimonials'
import Contect from './Components/Contect/Contect'
import Footer from './Components/Footer/Footer'
import VideoPlayer from './Components/VideoPlayer/VideoPlayer'

const App = () => {

  const [playState, setPlaystate] = useState(false);


  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle='Our Program' title='What we offer'/>        
        <Programs />
        <About setPlaystate={setPlaystate}/>
        <Title subTitle='Gallery' title='Campus Photos'/>  
        <Campus/>
        <Title subTitle='TESTIMONIALS' title='What Student Says'/>  
        <Testimonials/>
        <Title subTitle='Contacts Us' title='Get in Touch'/>  
        <Contect/>
        <Footer/>
      </div>
      <VideoPlayer playState={playState} setPlaystate={setPlaystate} />
    </div>
  )
}

export default App