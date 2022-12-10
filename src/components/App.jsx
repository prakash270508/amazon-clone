import React from 'react'
import Card from './Card'
import Carosel from './Carosel'
import Carosel2 from './Carosel2'
import Footer from './Footer'
import Navbar from './Navbar'

export default function App() {
  return (
    <div>
      <Navbar />
      <Carosel />
      <Card />
      <br />
      <Carosel2 />
      <br />
      <hr />
      <Footer />
    </div>
  )
}
