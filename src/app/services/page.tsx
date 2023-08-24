import PrivateRoute, { PrivateRouteForClient } from '@/components/PrivateRoute'
import Header from '@/components/header'
import Footer from '@/modules/landing/components/Footer'
import Services from '@/modules/services/Services'
import React from 'react'

export default function ServicePage() {
  return (
    <div>
     
     {/* <PrivateRouteForClient> */}
      <Services/>
     {/* </PrivateRouteForClient> */}
      
      
      </div>
  )
}
