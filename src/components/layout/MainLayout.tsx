'use client'

import React from 'react'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen relative">
      <div className="absolute inset-0 bg-gradient-to-b from-white to-uk-silver/30 dark:from-gray-900 dark:to-dark-uk-blue/40 z-0"></div>
      <div className="absolute inset-0 bg-[url('/images/subtle-pattern.svg')] opacity-5 z-0"></div>
      <Navbar />
      <main className="flex-grow relative z-10">
        {children}
      </main>
      <Footer />
    </div>
  )
} 