import Header from '@/components/header'
import React from 'react'
import Carousel from '../components/Carousel'
import CoreValues from '../components/CoreValues'
import Footer from '../components/Footer'
import Reviews from '../components/Reviews'
import Service from '../components/Service'
import WhoWeAre from '../components/WhoWeAre'

export default function Home() {
  return (
    <div><Header/>
    <Carousel/>
    <Service queryNumber={3}/>
    <WhoWeAre/>
    <CoreValues/>
    <Reviews/>
    <Footer/>
    </div>
  )
}
