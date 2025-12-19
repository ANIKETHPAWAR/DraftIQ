import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import BentoGrid from '@/components/kokonutui/bento-grid'
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { name: "Features", link: "/features" },
    { name: "How It Works", link: "/how-it-works" },
    { name: "Pricing", link: "#" },
    { name: "FAQ", link: "#" },
  ]

  return (
    <div className="relative min-h-screen bg-black">
      {showNavbar && (
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
      )}

      <div className={showNavbar ? "px-4 py-20" : ""}>
        <BentoGrid />
      </div>
    </div>
  )
}

export default Hiw