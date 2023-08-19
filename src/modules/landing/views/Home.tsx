import Header from '@/components/header'
import React from 'react'
import Carousel from '../components/Carousel'
import Service from '../components/Service'
import WhoWeAre from '../components/WhoWeAre'
import CoreValues from '../components/CoreValues'
import Reviews from '../components/Reviews'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div><Header/>
    <Carousel/>
    <Service queryNumber={5}/>
    <WhoWeAre/>
    <CoreValues/>
    <Reviews/>
    <Footer/>
    </div>
  )
}
