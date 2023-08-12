import Header from '@/components/header'
import Footer from '@/modules/landing/components/Footer'
import React from 'react'

export default function BuyLayout({children}: {
    children: React.ReactNode
  }) {
  return (
    <div>
        <Header/>
        {children}
        <Footer/>
    </div>
  )
}
