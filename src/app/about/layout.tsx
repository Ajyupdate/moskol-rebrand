'use client'
import Header from '@/components/header'
import Footer from '@/modules/landing/components/Footer'
import React from 'react'

function ABoutLayout({children} : {
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

export default ABoutLayout