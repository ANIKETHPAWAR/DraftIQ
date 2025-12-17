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
import {Sparkles } from 'lucide-react'
import FeaturesSectionDemo from '@/components/features-section-demo-2'
import { HoverBorderGradient } from '@/components/ui/hover-border-gradient'

const Home = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { name: "Home", link: "#" },
    { name: "About", link: "#" },
    { name: "Features", link: "#" },
    { name: "Contact", link: "#" },
  ]

  return (
    <div className="relative min-h-screen bg-black">
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
                className="text-white font-semibold"
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
        <div className="max-w-4xl mx-auto  ">
          <div className="flex items-center justify-center gap-2 px-4 py-2  bg-black border border-border rounded-lg mx-auto w-fit text-neutral-600 text-sm mb-6">
            <Sparkles className="w-5 h-5  text-blue-600" />
            <span className="text-neutral-600 font-medium text-sm">AI-Powered Content Creation</span>
          </div>
          <h1 className="text-3xl font-semibold text-center tracking-tight leading-tight mb-6 text-[#FEFAEF] ">Welcome to DraftIQ</h1>
          
          <p className="text-m text-neutral-400 mb-6 text-center">
              Transform your ideas into compelling articles in seconds. 
              Professional content creation powered by advanced AI.
            </p>
            <div className="flex justify-center mb-6">
              <HoverBorderGradient children='Start writing' className='text-center cursor-pointer' />
            </div>

            <div className="pt-8 text-sm text-muted-foreground text-center">Trusted by 10,000+ content creators worldwide</div>
         
            <FeaturesSectionDemo />
        </div>
      </div>
    </div>
  )
}

export default Home