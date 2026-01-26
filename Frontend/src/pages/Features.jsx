import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import FeaturesSectionDemo from '@/components/features-section-demo-2'
import Footer from '@/components/Footer'

const Features = ({ showNavbar = true }) => {


  return (
    <div className="relative min-h-screen bg-black">


      <div className={showNavbar ? "px-4 py-20" : ""}>
        <FeaturesSectionDemo />
      </div>
      {showNavbar && <Footer />}
    </div>
  )
}

export default Features










