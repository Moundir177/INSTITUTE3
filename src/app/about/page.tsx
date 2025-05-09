'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { Button, Link, Tabs, Tab } from '@nextui-org/react'
import MainLayout from '@/components/layout/MainLayout'

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState<string>("mission")
  const [isVisible, setIsVisible] = useState(false)
  
  useEffect(() => {
    setIsVisible(true)
  }, [])
  
  const milestones = [
    {
      year: "2005",
      title: "Institute Founded",
      description: "Established with a vision to provide world-class education with British standards."
    },
    {
      year: "2010",
      title: "International Accreditation",
      description: "Received recognition from international educational bodies for our quality courses."
    },
    {
      year: "2015",
      title: "Digital Transformation",
      description: "Launched our first online courses, making education accessible globally."
    },
    {
      year: "2018",
      title: "Industry Partnerships",
      description: "Formed strategic partnerships with leading industry players for practical training."
    },
    {
      year: "2020",
      title: "Research Excellence",
      description: "Established our dedicated research center focusing on innovation and technology."
    },
    {
      year: "2023",
      title: "Global Campus Network",
      description: "Expanded our presence with satellite campuses in major cities worldwide."
    }
  ]
  
  const team = [
    {
      name: "Dr. Elizabeth Clarke",
      title: "Director & Founder",
      image: "https://i.pravatar.cc/300?img=1",
      bio: "With over 25 years in education, Dr. Clarke has pioneered innovative teaching methodologies."
    },
    {
      name: "Prof. James Bennett",
      title: "Academic Director",
      image: "https://i.pravatar.cc/300?img=8",
      bio: "An Oxford graduate with extensive experience in curriculum development and educational leadership."
    },
    {
      name: "Sarah Williams",
      title: "Student Success Manager",
      image: "https://i.pravatar.cc/300?img=5",
      bio: "Dedicated to ensuring every student receives the support they need to achieve their goals."
    },
    {
      name: "Michael Thompson",
      title: "Industry Relations Head",
      image: "https://i.pravatar.cc/300?img=3",
      bio: "Building bridges between academia and industry to create real-world opportunities for our students."
    }
  ]
  
  const stats = [
    { value: "15,000+", label: "Graduates Worldwide" },
    { value: "98%", label: "Employment Rate" },
    { value: "50+", label: "Courses Offered" },
    { value: "75+", label: "Countries Represented" }
  ]

  const handleTabChange = (key: React.Key) => {
    setActiveTab(key.toString())
  }

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-uk-blue/95 to-uk-blue/80"></div>
        <div className="absolute inset-0 bg-[url('/images/uk-pattern.svg')] opacity-20 animate-pulse-slow"></div>
        <div className="absolute -right-40 top-40 w-96 h-96 bg-uk-gold opacity-20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -left-40 bottom-20 w-96 h-96 bg-uk-red opacity-20 rounded-full blur-3xl" style={{animationDelay: "1s"}}></div>
        <div className="absolute right-10 bottom-10 w-64 h-64 bg-white opacity-10 rounded-full blur-2xl animate-pulse-slow" style={{animationDelay: "2s"}}></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="inline-block mb-6">
                <div className="glass px-5 py-2 rounded-full inline-flex items-center backdrop-blur-xl border border-white/20 shadow-xl">
                  <span className="w-3 h-3 rounded-full bg-uk-gold mr-3 animate-pulse"></span>
                  <span className="text-white/90 text-sm font-medium">Established 2005</span>
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-8 drop-shadow-sm">
                About <span className="text-uk-gold inline-block animate-float" style={{animationDelay: "0.5s"}}>UK Institute</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
                A legacy of excellence in education, empowering students to achieve their full potential on the global stage.
              </p>
              <div className="flex flex-wrap gap-5 justify-center">
                <Button 
                  as={Link}
                  href="#our-story" 
                  className="bg-uk-gold text-uk-blue hover:scale-105 transform transition-all duration-300 text-lg px-8 py-6 shadow-lg border border-uk-gold/20"
                  size="lg"
                >
                  Our Story
                </Button>
                <Button 
                  as={Link}
                  href="#team" 
                  className="bg-white/10 backdrop-blur-md text-white hover:bg-white/20 text-lg px-8 py-6 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300"
                  size="lg"
                >
                  Meet Our Team
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white dark:from-gray-900 to-transparent"></div>
      </section>
      
      {/* Stats Counter Section */}
      <section className="py-16 bg-white dark:bg-gray-900 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-uk-blue/30 to-transparent"></div>
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-uk-blue/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-uk-red/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group relative">
                <div className="uk-gradient-border p-[1px] rounded-2xl hover:shadow-xl transition-all duration-500 bg-white dark:bg-gray-900">
                  <div className="bg-white dark:bg-gray-900 rounded-2xl px-4 py-8 h-full group-hover:scale-[0.98] transition-transform duration-300">
                    <div className="w-12 h-1 mx-auto mb-4 bg-gradient-to-r from-uk-blue to-uk-red rounded-full transform group-hover:scale-150 transition-transform duration-500"></div>
                    <p className="text-4xl md:text-5xl font-bold mb-2 uk-gradient-text animate-float" style={{animationDelay: `${index * 0.2}s`}}>
                      {stat.value}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 font-medium">{stat.label}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section id="our-story" className="py-24 bg-gray-50 dark:bg-gray-800/50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-uk-blue/5 rounded-bl-full"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-uk-red/5 rounded-tr-full"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-uk-gold/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <div className="inline-block mb-2">
                <div className="bg-uk-blue/10 dark:bg-uk-blue/20 px-3 py-1 rounded-full text-uk-blue dark:text-white text-sm font-semibold">
                  Our Story
                </div>
              </div>
              <h2 className="text-4xl font-bold text-uk-blue dark:text-white mb-6 relative">
                Excellence in Education 
                <span className="block uk-gradient-text mt-1">Since 2005</span>
                <div className="absolute -left-6 -top-6 w-12 h-12 bg-uk-gold/20 rounded-full blur-xl animate-pulse-slow"></div>
              </h2>
              <div className="space-y-4 relative">
                <div className="absolute -left-4 top-0 bottom-0 w-px bg-gradient-to-b from-uk-blue via-uk-gold to-uk-red opacity-30"></div>
                <p className="text-gray-600 dark:text-gray-300 pl-6 border-l border-uk-blue/20 dark:border-white/10 relative">
                  <span className="absolute -left-1.5 top-0 w-3 h-3 bg-uk-blue rounded-full"></span>
                  UK Institute was founded in 2005 with a clear mission: to provide world-class education that combines British educational excellence with practical skills for the modern workplace.
                </p>
                <p className="text-gray-600 dark:text-gray-300 pl-6 border-l border-uk-gold/20 dark:border-white/10 relative">
                  <span className="absolute -left-1.5 top-0 w-3 h-3 bg-uk-gold rounded-full"></span>
                  What began as a small institute with just three courses and fifty students has grown into a respected educational institution offering over 50 courses to students from more than 75 countries.
                </p>
                <p className="text-gray-600 dark:text-gray-300 pl-6 border-l border-uk-red/20 dark:border-white/10 relative">
                  <span className="absolute -left-1.5 top-0 w-3 h-3 bg-uk-red rounded-full"></span>
                  Our journey has been guided by our commitment to innovation, quality, and student success. We have consistently evolved our teaching methodologies and curriculum to stay ahead of industry demands and technological advancements.
                </p>
              </div>
              <div className="mt-10">
                <Button 
                  as={Link}
                  href="/courses" 
                  className="bg-uk-blue text-white hover:bg-uk-red transition-all duration-300 px-8 py-6 shadow-lg group"
                  size="lg"
                  endContent={
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  }
                >
                  Explore Our Courses
                </Button>
              </div>
            </div>
            <div className="relative order-1 md:order-2">
              <div className="relative h-[450px] w-full rounded-3xl overflow-hidden shadow-2xl group">
                <div className="absolute inset-0 bg-gradient-to-br from-uk-blue/30 to-transparent z-10 group-hover:opacity-0 transition-opacity duration-500"></div>
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                <Image
                  src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1000"
                  alt="UK Institute Campus"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute bottom-4 left-4 right-4 glass p-4 rounded-xl z-20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 backdrop-blur-md border border-white/20">
                  <h4 className="text-white text-lg font-semibold mb-1">Our Main Campus</h4>
                  <p className="text-white/80 text-sm">Located in central London, our main campus features state-of-the-art facilities for an optimal learning environment.</p>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gradient-to-br from-uk-gold/30 to-uk-red/30 rounded-full blur-2xl animate-pulse-slow"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-br from-uk-blue/30 to-transparent rounded-full blur-2xl animate-pulse-slow" style={{animationDelay: "1.5s"}}></div>
              <div className="absolute -top-2 -right-2 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-xl">
                <div className="w-12 h-12 bg-uk-gold rounded-full flex items-center justify-center text-uk-blue font-bold">
                  18+
                </div>
              </div>
              <div className="absolute -bottom-2 -left-2 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-xl">
                <div className="w-12 h-12 bg-uk-blue rounded-full flex items-center justify-center text-white font-bold">
                  UK
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800/80">
        <div className="absolute inset-0 bg-[url('/images/uk-pattern.svg')] opacity-5"></div>
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-uk-blue/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-uk-gold/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16 relative">
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-uk-blue via-uk-gold to-uk-red"></div>
            <div className="inline-block mb-2">
              <div className="bg-uk-gold/10 dark:bg-uk-gold/20 px-4 py-1.5 rounded-full text-uk-gold dark:text-uk-gold/90 text-sm font-semibold border border-uk-gold/20 backdrop-blur-sm">
                Our Principles
              </div>
            </div>
            <h2 className="text-4xl font-bold text-uk-blue dark:text-white mb-4">
              Our Mission & <span className="uk-gradient-text">Values</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Guided by principles of excellence, innovation, and inclusivity, we strive to create a transformative educational experience.
            </p>
          </div>
          
          <div className="flex justify-center mb-12">
            <Tabs 
              selectedKey={activeTab} 
              onSelectionChange={handleTabChange}
              variant="underlined"
              classNames={{
                tab: "text-lg px-6 py-3",
                tabList: "gap-6",
                cursor: "bg-uk-gold",
                panel: "animate-[fadeIn_0.5s]"
              }}
            >
              <Tab key="mission" title={
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Our Mission</span>
                </div>
              }>
                <div className="mt-8 p-8 rounded-3xl bg-white dark:bg-gray-800 shadow-xl uk-card border border-uk-blue/10 dark:border-white/5 relative overflow-hidden transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                  <div className="absolute -right-16 -top-16 w-32 h-32 bg-uk-gold/20 rounded-full blur-2xl"></div>
                  <div className="absolute -left-16 -bottom-16 w-32 h-32 bg-uk-blue/20 rounded-full blur-2xl"></div>
                  
                  <div className="mb-8 w-20 h-20 mx-auto rounded-2xl bg-uk-blue/10 dark:bg-uk-blue/20 flex items-center justify-center relative">
                    <div className="absolute inset-0 bg-uk-blue/10 dark:bg-uk-blue/20 rounded-2xl animate-pulse-slow"></div>
                    <svg className="w-10 h-10 text-uk-blue dark:text-uk-gold relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-uk-blue dark:text-white text-center mb-6 uk-gradient-text inline-block">Empowering Future Leaders</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-center max-w-2xl mx-auto leading-relaxed text-lg">
                    Our mission is to provide accessible, high-quality education that empowers individuals to become leaders in their fields and make meaningful contributions to society. We strive to combine academic excellence with practical skills, fostering a global perspective and ethical awareness in all our students.
                  </p>
                  
                  <div className="mt-8 flex justify-center">
                    <div className="glass px-6 py-3 rounded-full text-uk-blue dark:text-white text-sm inline-flex items-center backdrop-blur-md border border-uk-blue/20 dark:border-white/10">
                      <span className="w-2 h-2 rounded-full bg-uk-gold mr-2"></span>
                      <span>Serving students from 75+ countries worldwide</span>
                    </div>
                  </div>
                </div>
              </Tab>
              <Tab key="values" title={
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <span>Core Values</span>
                </div>
              }>
                <div className="mt-8 grid md:grid-cols-3 gap-8">
                  <div className="glass bg-white/80 dark:bg-gray-800/50 p-8 rounded-3xl border border-white/30 dark:border-white/10 backdrop-blur-md uk-card relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-uk-blue/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="w-20 h-20 mb-8 rounded-2xl bg-uk-blue/10 dark:bg-uk-blue/20 flex items-center justify-center relative">
                      <div className="absolute inset-0 bg-uk-blue/5 rounded-2xl group-hover:animate-pulse-slow"></div>
                      <svg className="w-10 h-10 text-uk-blue dark:text-uk-gold relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-uk-blue dark:text-white mb-4 group-hover:uk-gradient-text transition-all duration-300">Excellence</h3>
                    <p className="text-gray-600 dark:text-gray-300 relative z-10">
                      We uphold the highest standards in education, combining academic rigor with practical application to ensure our students receive a truly exceptional learning experience.
                    </p>
                  </div>
                  
                  <div className="glass bg-white/80 dark:bg-gray-800/50 p-8 rounded-3xl border border-white/30 dark:border-white/10 backdrop-blur-md uk-card relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-uk-gold/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="w-20 h-20 mb-8 rounded-2xl bg-uk-gold/10 dark:bg-uk-gold/20 flex items-center justify-center relative">
                      <div className="absolute inset-0 bg-uk-gold/5 rounded-2xl group-hover:animate-pulse-slow"></div>
                      <svg className="w-10 h-10 text-uk-gold relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-uk-blue dark:text-white mb-4 group-hover:uk-gradient-text transition-all duration-300">Innovation</h3>
                    <p className="text-gray-600 dark:text-gray-300 relative z-10">
                      We embrace cutting-edge teaching methodologies and technologies, constantly evolving our approach to stay at the forefront of educational advancement.
                    </p>
                  </div>
                  
                  <div className="glass bg-white/80 dark:bg-gray-800/50 p-8 rounded-3xl border border-white/30 dark:border-white/10 backdrop-blur-md uk-card relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-uk-red/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="w-20 h-20 mb-8 rounded-2xl bg-uk-red/10 dark:bg-uk-red/20 flex items-center justify-center relative">
                      <div className="absolute inset-0 bg-uk-red/5 rounded-2xl group-hover:animate-pulse-slow"></div>
                      <svg className="w-10 h-10 text-uk-red dark:text-uk-red relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-uk-blue dark:text-white mb-4 group-hover:uk-gradient-text transition-all duration-300">Inclusivity</h3>
                    <p className="text-gray-600 dark:text-gray-300 relative z-10">
                      We celebrate diversity and create an inclusive environment where students from all backgrounds can thrive and reach their full potential.
                    </p>
                  </div>
                </div>
              </Tab>
              <Tab key="approach" title={
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  <span>Our Approach</span>
                </div>
              }>
                <div className="mt-8 p-8 rounded-3xl bg-white dark:bg-gray-800 shadow-xl uk-card border border-uk-blue/10 dark:border-white/5 relative overflow-hidden">
                  <div className="absolute top-0 right-0 h-32 w-32 bg-uk-gold/10 blur-2xl rounded-full"></div>
                  <div className="absolute bottom-0 left-0 h-32 w-32 bg-uk-blue/10 blur-2xl rounded-full"></div>
                  
                  <div className="grid md:grid-cols-2 gap-10 items-center relative">
                    <div className="relative z-10">
                      <div className="w-16 h-1 bg-gradient-to-r from-uk-blue to-uk-gold mb-6 rounded-full"></div>
                      <h3 className="text-2xl font-bold text-uk-blue dark:text-white mb-6">Student-Centered Learning</h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                        Our educational approach places students at the center of the learning experience. We combine traditional academic excellence with innovative teaching methods that adapt to diverse learning styles.
                      </p>
                      <ul className="space-y-4">
                        <li className="flex items-start gap-3">
                          <div className="w-6 h-6 rounded-full bg-uk-gold/20 flex items-center justify-center mt-0.5 flex-shrink-0">
                            <svg className="w-4 h-4 text-uk-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-gray-600 dark:text-gray-300">Small class sizes for personalized attention</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-6 h-6 rounded-full bg-uk-gold/20 flex items-center justify-center mt-0.5 flex-shrink-0">
                            <svg className="w-4 h-4 text-uk-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-gray-600 dark:text-gray-300">Project-based learning with real-world applications</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-6 h-6 rounded-full bg-uk-gold/20 flex items-center justify-center mt-0.5 flex-shrink-0">
                            <svg className="w-4 h-4 text-uk-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-gray-600 dark:text-gray-300">Industry partnerships for internships and placement</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-6 h-6 rounded-full bg-uk-gold/20 flex items-center justify-center mt-0.5 flex-shrink-0">
                            <svg className="w-4 h-4 text-uk-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-gray-600 dark:text-gray-300">Cutting-edge digital learning platforms</span>
                        </li>
                      </ul>
                      
                      <div className="mt-8">
                        <Button 
                          as={Link}
                          href="/services" 
                          className="bg-gradient-to-r from-uk-blue to-uk-blue/80 text-white hover:from-uk-blue/90 hover:to-uk-blue shadow-md px-6 py-2 rounded-full text-sm"
                          endContent={
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                          }
                        >
                          Learn more about our services
                        </Button>
                      </div>
                    </div>
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                      <div className="absolute inset-0 bg-gradient-to-t from-uk-blue/60 to-transparent z-10"></div>
                      <Image
                        src="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?q=80&w=1000"
                        alt="Student-centered learning"
                        width={600}
                        height={400}
                        className="object-cover h-full w-full"
                      />
                      <div className="absolute bottom-4 left-4 right-4 glass p-4 rounded-xl z-20 backdrop-blur-md border border-white/20">
                        <div className="flex items-center gap-3">
                          <div className="bg-white/20 p-2 rounded-full">
                            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="text-white text-sm font-semibold">Innovative Learning</h4>
                            <p className="text-white/70 text-xs">Our approach consistently evolves to match industry needs</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Tab>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Milestones Section */}
      <section className="py-24 bg-uk-blue relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/uk-pattern.svg')] opacity-5 animate-pulse-slow"></div>
        <div className="absolute -left-20 top-20 w-72 h-72 rounded-full bg-uk-gold opacity-10 blur-3xl"></div>
        <div className="absolute -right-20 bottom-20 w-72 h-72 rounded-full bg-uk-red opacity-10 blur-3xl"></div>
        <div className="absolute left-1/3 top-1/2 w-24 h-24 rounded-full border-4 border-white/10 opacity-20"></div>
        <div className="absolute right-1/4 top-1/3 w-16 h-16 rounded-full border-4 border-white/10 opacity-20"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-block mb-4">
              <div className="glass px-4 py-2 rounded-full text-white text-sm font-semibold border border-white/10 backdrop-blur-md">
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Our Journey
                </span>
              </div>
            </div>
            <h2 className="text-4xl font-bold text-white mb-6">
              Key <span className="text-uk-gold animate-float" style={{animationDelay: "0.5s", display: "inline-block"}}>Milestones</span>
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Charting our growth from a small institute to a leading global educational institution.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-uk-gold to-transparent mx-auto mt-8"></div>
          </div>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-uk-gold/50 via-white/30 to-uk-red/50"></div>
            
            {/* Timeline Items */}
            <div className="space-y-16">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex flex-col md:flex-row items-stretch ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`md:w-1/2 p-4 flex ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                    <div className={`relative p-8 rounded-xl backdrop-blur-md glass border border-white/10 max-w-md group hover:border-uk-gold/50 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(255,215,0,0.15)]`}>
                      <div className={`absolute ${index % 2 === 0 ? '-right-3' : '-left-3'} top-1/2 transform -translate-y-1/2 w-6 h-6 bg-white rounded-full border-2 border-uk-blue hidden md:flex items-center justify-center z-10`}>
                        <div className="w-2 h-2 bg-uk-gold rounded-full"></div>
                      </div>
                      <div className="absolute -right-3 -top-3 bg-uk-gold text-uk-blue rounded-full w-14 h-14 flex items-center justify-center font-bold shadow-lg flex-shrink-0">
                        <span className="text-xl">{milestone.year.slice(2)}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-uk-gold transition-colors duration-300">{milestone.title}</h3>
                      <p className="text-white/80 leading-relaxed">{milestone.description}</p>
                      <div className="w-1/2 h-0.5 bg-gradient-to-r from-uk-gold to-transparent mt-6"></div>
                    </div>
                  </div>
                  <div className="md:w-1/2 hidden md:block"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-24 bg-gray-50 dark:bg-gray-800/50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-uk-blue via-uk-gold to-uk-red"></div>
        <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-uk-blue/5 rounded-full blur-3xl"></div>
        <div className="absolute -top-32 -left-32 w-64 h-64 bg-uk-gold/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-block mb-2">
              <div className="bg-uk-blue/10 dark:bg-uk-blue/20 px-4 py-2 rounded-full text-uk-blue dark:text-white text-sm font-semibold border border-uk-blue/20 dark:border-white/10">
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  Our People
                </span>
              </div>
            </div>
            <h2 className="text-4xl font-bold text-uk-blue dark:text-white mb-4">
              Leadership <span className="uk-gradient-text">Team</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Meet the dedicated professionals guiding our institution toward excellence.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-uk-blue to-transparent mx-auto mt-8"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="group" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="relative rounded-2xl overflow-hidden aspect-[3/4] mb-6 uk-card shadow-xl">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10 opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                  <div className="absolute inset-0 group-hover:scale-110 transition-transform duration-700">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="absolute top-4 left-4 glass px-3 py-1 rounded-full text-xs font-semibold text-white border border-white/10 opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-y-2 group-hover:translate-y-0">
                    <span>{member.title}</span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-20 transform translate-y-1 group-hover:translate-y-0 transition-all duration-500">
                    <h3 className="text-2xl font-bold text-white mb-1">{member.name}</h3>
                    <p className="text-uk-gold dark:text-uk-gold/90 mb-3">{member.title}</p>
                    <div className="w-1/3 h-0.5 bg-gradient-to-r from-uk-gold to-transparent mb-4 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                    <p className="text-white/90 text-sm line-clamp-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">{member.bio}</p>
                  </div>
                  <div className="absolute top-0 right-0 w-20 h-20">
                    <div className="absolute top-0 right-0 w-0 h-0 border-t-[40px] border-r-[40px] border-t-uk-gold/80 border-r-uk-gold/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <div className="glass p-6 rounded-3xl bg-white/30 dark:bg-gray-800/30 inline-block backdrop-blur-md border border-white/20 dark:border-white/5 transform hover:scale-105 transition-all duration-300">
              <Button 
                as={Link}
                href="/contact" 
                className="bg-uk-blue text-white hover:bg-uk-red transition-all duration-300 px-8 py-6 shadow-lg group"
                size="lg"
                endContent={
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                  </svg>
                }
              >
                Get in Touch With Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800"></div>
        <div className="absolute inset-0 bg-[url('/images/uk-pattern.svg')] opacity-5"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-uk-red via-white to-uk-blue"></div>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-uk-blue via-uk-gold to-uk-red"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="glass bg-white/40 dark:bg-gray-800/40 rounded-3xl p-12 border border-white/30 dark:border-white/5 backdrop-blur-md shadow-2xl uk-card hover:shadow-[0_0_50px_rgba(0,36,125,0.15)] dark:hover:shadow-[0_0_50px_rgba(255,215,0,0.1)]">
              <div className="text-center">
                <div className="inline-block mb-4">
                  <div className="w-16 h-16 rounded-full bg-uk-gold/20 flex items-center justify-center mx-auto">
                    <svg className="w-8 h-8 text-uk-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-uk-blue dark:text-white mb-6">
                  Ready to Join Our Educational Journey?
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
                  Explore our programs and discover how UK Institute can help you achieve your academic and career goals.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Button 
                    as={Link}
                    href="/courses" 
                    className="bg-uk-gold text-uk-blue hover:scale-105 transform transition-all duration-300 text-lg px-10 py-7 shadow-lg group"
                    size="lg"
                    startContent={
                      <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    }
                  >
                    Browse Courses
                  </Button>
                  <Button 
                    as={Link}
                    href="/contact" 
                    className="bg-uk-blue text-white hover:bg-uk-red transition-all duration-300 text-lg px-10 py-7 shadow-md group border border-uk-blue/20"
                    size="lg"
                    startContent={
                      <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    }
                  >
                    Contact Us
                  </Button>
                </div>
                
                <div className="mt-12 flex items-center justify-center gap-8">
                  <div className="glass px-4 py-2 rounded-full text-sm text-gray-600 dark:text-gray-300 border border-white/20 dark:border-white/10 inline-flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    <span>Enrollment Open</span>
                  </div>
                  <div className="glass px-4 py-2 rounded-full text-sm text-gray-600 dark:text-gray-300 border border-white/20 dark:border-white/10 inline-flex items-center gap-2">
                    <svg className="w-4 h-4 text-uk-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>Next Intake: September 2023</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  )
} 