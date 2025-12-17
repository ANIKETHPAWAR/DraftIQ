import React, { useState } from 'react'
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

const Home = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { name: "Home", link: "#" },
    { name: "About", link: "#" },
    { name: "Features", link: "#" },
    { name: "Contact", link: "#" },
  ]

  return (
    <div className="relative min-h-screen">
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
              <a
                key={idx}
                href={item.link}
                className="text-neutral-600 dark:text-neutral-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <NavbarButton href="#" variant="primary">
              Get Started
            </NavbarButton>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>

      {/* Content to enable scrolling */}
      <div className="px-4 py-20">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-4xl font-bold text-center">Welcome to DraftIQ</h1>
          <h3 className="text-2xl font-semibold text-center">Write Better 
          </h3>
          <h3 className="text-2xl font-semibold text-center text-blue-200">Write faster 
          </h3>
          <p className="text-lg text-center text-gray-600">
            Scroll down to see the navbar animation
          </p>
          {Array.from({ length: 20 }).map((_, i) => (
            <div key={i} className="p-8 bg-gray-100 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">Section {i + 1}</h2>
              <p className="text-gray-700">
              transform your ideas into compelling articles in seconds. Professional content creation powered by advanced AI.
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home