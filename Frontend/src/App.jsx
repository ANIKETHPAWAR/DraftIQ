import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Features from './pages/Features'
import Hiw from './pages/Hiw'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

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
function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const navItems = [
    { name: "Features", link: "/features" },
    { name: "How It Works", link: "/how-it-works" },
    { name: "Pricing", link: "#" },
    { name: "FAQ", link: "#" },
  ]
  return (
    <div>
      <Navbar>
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <NavbarButton href="#" variant="primary">
            Get Started
          </NavbarButton>
        </NavBody>
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={mobileMenuOpen}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            />
          </MobileNavHeader>
          <MobileNavMenu
            isOpen={mobileMenuOpen}
            onClose={() => setMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <Link
                key={idx}
                to={item.link}
                className="text-white font-semibold"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <NavbarButton href="#" variant="primary">
              Get Started
            </NavbarButton>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/how-it-works" element={<Hiw />} />
      </Routes>
    </div>
  )
}

export default App
