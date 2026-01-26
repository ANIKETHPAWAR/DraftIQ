import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { Sparkles } from 'lucide-react'
import { HoverBorderGradient } from '@/components/ui/hover-border-gradient'
import AI_Prompt from '@/components/kokonutui/ai-prompt'
import Features from './Features'
import Hiw from './Hiw'
import Footer from '@/components/Footer'
const Home = () => {




  return (
    <div className="relative min-h-screen bg-black">

      {/* Content to enable scrolling */}
      <div className="px-4 py-10">
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

          <div className="pt-8 text-sm text-muted-foreground text-center mb-10">Trusted by 10,000+ content creators worldwide</div>
          <div className='flex justify-center mb-10'>

            <AI_Prompt />
          </div>


        </div>
      </div>

      <Features showNavbar={false} />

      <Hiw showNavbar={false} />

      <Footer />
    </div>
  )
}

export default Home