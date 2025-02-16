import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/Card'
import Crausol from '../components/Crausol'

export default function Home() {
  return (
    <div>
        <Navbar/>
        <div>
          <Crausol/>
        </div>
       <div className='m-3'>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
       </div>
        <Footer/>
    </div>
  )
}
