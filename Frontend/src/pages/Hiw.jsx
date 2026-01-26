import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import BentoGrid from '@/components/kokonutui/bento-grid'
import Footer from '@/components/Footer'
import {
  Navbar,
  NavBody,
  NavItems,
  NavbarLogo,
  NavbarButton,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
} from "@/components/ui/resizable-navbar"

const Hiw = ({ showNavbar = true }) => {


  return (
    <div className="relative min-h-screen bg-black">


      <div className={showNavbar ? "px-4 py-10" : ""}>
        <BentoGrid />
      </div>
      {showNavbar && <Footer />}
    </div>
  )
}

export default Hiw