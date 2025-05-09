'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import MainLayout from '@/components/layout/MainLayout'
import { Button, Card, CardBody, Chip } from '@nextui-org/react'

export default function HomePage() {
  // Featured courses data
  const featuredCourses = [
    {
      id: "1",
      title: "Advanced Digital Marketing Strategies",
      image: "/images/course-marketing.jpg",
      level: "Advanced",
      duration: "6 months",
      price: 1499
    },
    {
      id: "4",
      title: "Strategic Financial Management",
      image: "/images/course-finance.jpg",
      level: "Advanced",
      duration: "5 months",
      price: 1399
    },
    {
      id: "8",
      title: "Corporate Sustainability and ESG",
      image: "/images/course-sustainability.jpg",
      level: "Advanced",
      duration: "4 months",
      price: 1299
    }
  ]

  // Testimonials data
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Marketing Director",
      company: "Global Innovations Ltd",
      image: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
      quote: "The Advanced Digital Marketing course transformed my approach to digital campaigns. The ROI on our marketing efforts has increased by 300% since implementing the strategies I learned.",
      course: "Advanced Digital Marketing Strategies"
    },
    {
      name: "David Chen",
      role: "Finance Manager",
      company: "PrimeHoldings Inc",
      image: "https://i.pravatar.cc/150?u=a042581f4e29026705d",
      quote: "As someone looking to advance in financial leadership, the Strategic Financial Management program provided exactly the skills I needed. Within six months of completing the course, I secured a promotion.",
      course: "Strategic Financial Management"
    },
    {
      name: "Amelia Patel",
      role: "Sustainability Consultant",
      company: "EcoFuture Solutions",
      image: "https://i.pravatar.cc/150?u=a042581f4e29026706d",
      quote: "The ESG program offers cutting-edge insights into sustainable business practices. The connections I made with industry leaders during the course have been invaluable for my consulting career.",
      course: "Corporate Sustainability and ESG"
    }
  ]

  // Key stats
  const stats = [
    { value: "98%", label: "Employment Rate" },
    { value: "15,000+", label: "Graduates" },
    { value: "250+", label: "Industry Partners" },
    { value: "35+", label: "Years of Excellence" }
  ]

  // Key features/benefits
  const features = [
    {
      title: "Industry-Relevant Curriculum",
      description: "Courses designed with input from industry leaders to ensure you learn skills employers actually need.",
      icon: (
        <svg className="w-10 h-10 text-uk-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      title: "Expert Instructors",
      description: "Learn from industry professionals and academics with extensive real-world experience in their fields.",
      icon: (
        <svg className="w-10 h-10 text-uk-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )
    },
    {
      title: "Flexible Learning Options",
      description: "Choose from full-time, part-time, and online study options to fit education around your lifestyle.",
      icon: (
        <svg className="w-10 h-10 text-uk-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Career Support",
      description: "Access to career counseling, job placement assistance, and networking opportunities with industry partners.",
      icon: (
        <svg className="w-10 h-10 text-uk-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    }
  ]

  // Academic programs
  const programs = [
    {
      title: "Professional Certificates",
      duration: "3-6 months",
      description: "Short, focused programs to build specific skills in your field",
      link: "/courses?level=certificate"
    },
    {
      title: "Undergraduate Degrees",
      duration: "3-4 years",
      description: "Comprehensive bachelor's degrees to establish your career foundation",
      link: "/courses?level=undergraduate"
    },
    {
      title: "Postgraduate Degrees",
      duration: "1-2 years",
      description: "Specialized master's programs to advance your expertise and career",
      link: "/courses?level=postgraduate"
    },
    {
      title: "Executive Education",
      duration: "2-12 weeks",
      description: "Tailored programs for professionals seeking leadership development",
      link: "/courses?level=executive"
    }
  ]

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[90vh] flex items-center bg-uk-blue">
        {/* Background elements */}
        <div className="absolute inset-0 bg-[url('/images/uk-pattern.svg')] opacity-20"></div>
        <div className="absolute -right-40 top-40 w-96 h-96 bg-uk-gold opacity-20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute -left-40 bottom-10 w-96 h-96 bg-uk-red opacity-20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white opacity-10 rounded-full blur-xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-white opacity-10 rounded-full blur-xl"></div>
        
        {/* Main content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-12 md:py-16">
          <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-16">
            <div className="w-full lg:w-1/2">
              <div className="mb-6 inline-block">
                <div className="glass px-4 py-2 rounded-full mb-6 inline-flex items-center">
                  <span className="w-2 h-2 rounded-full bg-uk-gold mr-2 animate-pulse"></span>
                  <span className="text-white/90 text-sm">Excellence in Education Since 1988</span>
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-none mb-6">
                Advance Your <span className="uk-gradient-text drop-shadow-sm">Career</span> with Expert-Led Education
              </h1>
              <p className="text-xl text-white/90 mb-8 max-w-xl">
                Industry-focused courses designed to give you the skills employers are looking for. 
                Study online or on campus in London.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  as={Link}
                  href="/courses"
                  size="lg" 
                  className="bg-uk-gold text-uk-blue hover:scale-105 transform transition-all duration-300 text-lg px-8 shadow-lg"
                >
                  Explore Courses
                </Button>
                <Button 
                  as={Link}
                  href="/contact"
                  size="lg" 
                  variant="flat" 
                  className="bg-white/10 backdrop-blur-md text-white hover:bg-white/20 text-lg px-8 border border-white/20"
                >
                  Request Information
                </Button>
              </div>
              
              {/* Stats Quick View */}
              <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
                {stats.map((stat, index) => (
                  <div key={index} className="glass-dark py-3 px-4 rounded-xl text-center">
                    <p className="text-2xl font-bold text-uk-gold mb-1">{stat.value}</p>
                    <p className="text-white/70 text-sm">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="w-full lg:w-1/2 flex justify-center">
              <div className="relative w-full max-w-md h-80 lg:h-[26rem] animate-float">
                {/* Decorative elements */}
                <div className="absolute inset-0 rounded-full blur-md bg-gradient-to-r from-uk-blue/40 via-uk-red/30 to-uk-gold/40"></div>
                <div className="absolute top-[5%] right-[5%] w-12 h-12 rounded-full bg-uk-gold/30 blur-md"></div>
                <div className="absolute bottom-[15%] left-[10%] w-16 h-16 rounded-full bg-uk-red/30 blur-md"></div>
                
                {/* Main image */}
                <div className="relative z-10 h-full w-full">
                  <Image
                    src="/uk-flag-shield.svg"
                    alt="UK Institute"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Removed as incorporated into hero */}

      {/* Featured Courses Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800"></div>
        <div className="absolute right-0 top-0 w-96 h-96 bg-uk-blue/10 rounded-full blur-3xl"></div>
        <div className="absolute left-0 bottom-0 w-80 h-80 bg-uk-red/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16 text-center">
              <div className="inline-block mb-2">
                <div className="bg-uk-blue/10 dark:bg-uk-blue/20 px-3 py-1 rounded-full text-uk-blue dark:text-white text-sm font-semibold">
                  Featured Courses
                </div>
              </div>
              <h2 className="text-4xl font-bold text-uk-blue dark:text-white mb-6">
                Discover Our Most Popular <span className="uk-gradient-text">Programs</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Our most sought-after programs designed to help you excel in today's competitive job market
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-10">
              {featuredCourses.map((course) => (
                <Link key={course.id} href={`/courses/${course.id}`} className="block h-full group">
                  <div className="uk-card h-full overflow-hidden relative rounded-2xl transition-all duration-300 bg-white dark:bg-gray-800 shadow-lg uk-gradient-border">
                    <div className="relative w-full h-56 overflow-hidden">
                      <Image
                        src={course.image}
                        alt={course.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
                      <div className="absolute top-4 left-4">
                        <div className="bg-uk-gold text-uk-blue text-xs font-bold px-3 py-1 rounded-full">
                          FEATURED
                        </div>
                      </div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex gap-2">
                          <div className="bg-white/20 backdrop-blur-md text-white text-xs px-3 py-1 rounded-full">
                            {course.level}
                          </div>
                          <div className="bg-white/20 backdrop-blur-md text-white text-xs px-3 py-1 rounded-full">
                            {course.duration}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-6 flex flex-col">
                      <h3 className="text-xl font-bold text-uk-blue dark:text-white mb-3 group-hover:text-uk-red dark:group-hover:text-uk-gold transition-colors">
                        {course.title}
                      </h3>
                      
                      <div className="mt-auto pt-4 border-t border-gray-100 dark:border-gray-700 flex justify-between items-center">
                        <span className="text-2xl font-bold text-uk-blue dark:text-white">
                          £{course.price}
                        </span>
                        <Button 
                          size="sm" 
                          className="bg-uk-blue text-white hover:bg-uk-red transition-colors dark:bg-uk-blue dark:text-white dark:hover:bg-uk-red"
                          endContent={
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          }
                        >
                          Details
                        </Button>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            
            <div className="text-center mt-16">
              <Button 
                as={Link}
                href="/courses"
                size="lg" 
                className="bg-uk-blue text-white hover:bg-uk-red transition-all duration-300 px-8 py-6 text-lg"
                endContent={
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                }
              >
                View All Courses
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/subtle-pattern.svg')] opacity-5"></div>
        <div className="absolute left-0 top-1/4 w-64 h-64 bg-uk-red/5 rounded-full blur-3xl"></div>
        <div className="absolute right-0 bottom-1/4 w-64 h-64 bg-uk-blue/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16 text-center">
              <div className="inline-block mb-2">
                <div className="bg-uk-red/10 dark:bg-uk-red/20 px-3 py-1 rounded-full text-uk-red dark:text-uk-red/90 text-sm font-semibold">
                  Academic Programs
                </div>
              </div>
              <h2 className="text-4xl font-bold text-uk-blue dark:text-white mb-6">
                Comprehensive <span className="uk-gradient-text">Education</span> Options
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Flexible learning pathways designed to suit your career goals and schedule
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {programs.map((program, index) => (
                <div key={index} className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-uk-blue/80 to-uk-red/80 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="uk-card h-full relative flex flex-col bg-white dark:bg-gray-800/80 p-6 rounded-2xl group-hover:scale-[1.02] transition-all duration-300">
                    <div className="w-12 h-12 mb-5 rounded-xl bg-uk-blue/10 dark:bg-uk-blue/20 flex items-center justify-center group-hover:bg-white/20 transition-colors duration-300">
                      {index === 0 ? (
                        <svg className="w-6 h-6 text-uk-blue group-hover:text-white transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      ) : index === 1 ? (
                        <svg className="w-6 h-6 text-uk-blue group-hover:text-white transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                      ) : index === 2 ? (
                        <svg className="w-6 h-6 text-uk-blue group-hover:text-white transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      ) : (
                        <svg className="w-6 h-6 text-uk-blue group-hover:text-white transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      )}
                    </div>
                    <h3 className="text-xl font-bold text-uk-blue dark:text-white mb-2 group-hover:text-white transition-colors duration-300">{program.title}</h3>
                    <div className="inline-block mb-3">
                      <span className="text-sm font-medium px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 group-hover:bg-white/20 group-hover:text-white transition-all duration-300">
                        {program.duration}
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 group-hover:text-white/90 transition-colors duration-300 mb-5">
                      {program.description}
                    </p>
                    <div className="mt-auto">
                      <Link 
                        href={program.link}
                        className="inline-flex items-center gap-1 text-uk-blue dark:text-uk-gold font-medium group-hover:text-white transition-colors duration-300"
                      >
                        Learn More
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features/Benefits Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-uk-blue/95 to-uk-blue/90"></div>
        <div className="absolute inset-0 bg-[url('/images/uk-pattern.svg')] opacity-5"></div>
        <div className="absolute top-0 w-full h-1 bg-gradient-to-r from-uk-gold via-uk-red to-uk-gold"></div>
        <div className="absolute bottom-0 w-full h-1 bg-gradient-to-r from-uk-gold via-uk-red to-uk-gold"></div>
        <div className="absolute -left-16 top-16 w-64 h-64 rounded-full bg-uk-blue opacity-60 blur-3xl"></div>
        <div className="absolute -right-16 bottom-16 w-64 h-64 rounded-full bg-uk-red opacity-30 blur-3xl"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block mb-2">
                <div className="glass px-3 py-1 rounded-full text-white text-sm font-semibold">
                  Why Choose Us
                </div>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Experience <span className="text-uk-gold">Excellence</span> in Education
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Our commitment to academic excellence ensures you receive the highest quality education to achieve your career goals
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="glass rounded-2xl p-8 backdrop-blur-sm border border-white/10 hover:border-uk-gold/30 transition-all duration-300 hover:translate-y-[-5px]"
                >
                  <div className="w-16 h-16 mb-6 rounded-xl bg-white/10 flex items-center justify-center">
                    <div className="w-10 h-10">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-white/80">{feature.description}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-16 flex justify-center">
              <Button 
                as={Link}
                href="/about" 
                className="bg-white/10 backdrop-blur-sm text-white border border-white/20 hover:bg-white/20 text-lg px-8 py-6 group"
                endContent={
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                }
              >
                Learn More About Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800"></div>
        <div className="absolute right-0 top-1/3 w-80 h-80 bg-uk-gold/5 rounded-full blur-3xl"></div>
        <div className="absolute left-0 bottom-1/3 w-80 h-80 bg-uk-blue/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block mb-2">
                <div className="bg-uk-blue/10 dark:bg-uk-blue/20 px-3 py-1 rounded-full text-uk-blue dark:text-white text-sm font-semibold">
                  Testimonials
                </div>
              </div>
              <h2 className="text-4xl font-bold text-uk-blue dark:text-white mb-6">
                What Our <span className="uk-gradient-text">Students</span> Say
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Hear from our graduates about how our courses have transformed their careers and lives
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-10">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="relative">
                  <div className="uk-card relative rounded-2xl p-8 bg-white dark:bg-gray-800 shadow-lg">
                    <div className="absolute top-4 right-4">
                      <svg className="w-8 h-8 text-uk-gold opacity-20" fill="currentColor" viewBox="0 0 32 32">
                        <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                      </svg>
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-300 italic mb-8 relative">"{testimonial.quote}"</p>
                    
                    <div className="flex items-center">
                      <div className="relative w-14 h-14 mr-4">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-uk-blue to-uk-red rounded-full opacity-30 blur-sm"></div>
                        <div className="relative rounded-full overflow-hidden h-full w-full border-2 border-white dark:border-gray-700">
                          <Image
                            src={testimonial.image}
                            alt={testimonial.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-bold text-uk-blue dark:text-white text-lg">{testimonial.name}</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">{testimonial.company}</p>
                      </div>
                    </div>
                    
                    <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                      <p className="text-sm">
                        <span className="text-gray-500 dark:text-gray-400">Course: </span>
                        <span className="text-uk-blue dark:text-uk-gold font-medium">{testimonial.course}</span>
                      </p>
                    </div>
                  </div>
                  <div className="absolute top-2 bottom-2 left-2 right-2 border-2 border-gray-100 dark:border-gray-700 rounded-2xl -z-10"></div>
                </div>
              ))}
            </div>
            
            <div className="mt-16 text-center">
              <Link href="/testimonials" className="text-uk-blue dark:text-uk-gold hover:text-uk-red dark:hover:text-uk-red font-medium inline-flex items-center gap-2 group">
                View More Success Stories
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-uk-blue via-uk-blue/90 to-uk-blue"></div>
        <div className="absolute inset-0 bg-[url('/images/uk-pattern.svg')] opacity-5"></div>
        <div className="absolute -right-10 top-10 w-72 h-72 rounded-full bg-uk-red opacity-10 blur-3xl"></div>
        <div className="absolute -left-10 bottom-10 w-72 h-72 rounded-full bg-uk-gold opacity-10 blur-3xl"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="uk-card p-10 rounded-3xl backdrop-blur-md bg-white/5 border border-white/10">
              <div className="text-center mb-10">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full glass flex items-center justify-center">
                  <svg className="w-10 h-10 text-uk-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Ready to Transform Your <span className="text-uk-gold">Career</span>?
                </h2>
                <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
                  Take the first step toward advancing your career with UK Institute's world-class educational programs
                </p>
                
                <div className="flex flex-col sm:flex-row gap-5 justify-center">
                  <Button 
                    as={Link}
                    href="/courses"
                    size="lg" 
                    className="bg-uk-gold text-uk-blue hover:scale-105 transform transition-all duration-300 text-lg px-8 py-7 shadow-lg font-semibold"
                    startContent={
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    }
                  >
                    Browse Courses
                  </Button>
                  <Button 
                    as={Link}
                    href="/contact"
                    size="lg" 
                    className="bg-white/10 backdrop-blur-sm text-white border border-white/20 hover:bg-white/20 text-lg px-8 py-7 font-semibold"
                    startContent={
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    }
                  >
                    Contact Us
                  </Button>
                </div>
                
                <p className="mt-8 text-white/70 text-sm">
                  Have questions? Call us at <span className="text-uk-gold">+44 1234 567890</span> or email <span className="text-uk-gold">admissions@ukinstitute.edu</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News/Blog Preview Section */}
      <section className="py-20 relative overflow-hidden bg-gray-50 dark:bg-gray-900/50">
        <div className="absolute inset-0 bg-[url('/images/subtle-pattern.svg')] opacity-5 dark:opacity-10"></div>
        <div className="absolute left-0 top-1/3 w-72 h-72 bg-uk-blue/5 rounded-full blur-3xl"></div>
        <div className="absolute right-0 bottom-1/4 w-72 h-72 bg-uk-red/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center mb-16">
              <div>
                <div className="inline-block mb-2">
                  <div className="bg-uk-red/10 dark:bg-uk-red/20 px-3 py-1 rounded-full text-uk-red dark:text-uk-red/90 text-sm font-semibold">
                    Latest Updates
                  </div>
                </div>
                <h2 className="text-4xl font-bold text-uk-blue dark:text-white mb-2">
                  News & <span className="uk-gradient-text">Events</span>
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-xl">
                  Stay updated with the latest happenings, events, and news at UK Institute
                </p>
              </div>
              <Link 
                href="/news"
                className="hidden md:flex items-center gap-2 px-5 py-3 text-uk-blue dark:text-uk-gold hover:text-uk-red dark:hover:text-uk-red transition-colors duration-300 bg-white dark:bg-gray-800 rounded-full shadow-md group"
              >
                View All News
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="group">
                <div className="uk-card overflow-hidden bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="relative h-56 overflow-hidden">
                    <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 animate-pulse"></div>
                    <div className="absolute top-4 left-4 z-10">
                      <div className="bg-uk-blue px-3 py-1 rounded-full text-white text-xs font-medium">
                        Event
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                      <p className="text-white text-sm font-medium flex items-center gap-2">
                        <svg className="w-4 h-4 text-uk-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        June 15, 2023
                      </p>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-uk-blue dark:text-white mb-3 group-hover:text-uk-red dark:group-hover:text-uk-gold transition-colors duration-300">
                      Annual Career Fair: Connect with Top Employers
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      Our flagship career event brings together over 50 leading companies looking to recruit talented graduates.
                    </p>
                    <Link 
                      href="/news/career-fair-2023"
                      className="inline-flex items-center gap-1 text-uk-blue dark:text-uk-gold font-medium group-hover:text-uk-red dark:group-hover:text-uk-red transition-colors duration-300"
                    >
                      Read More
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
              
              <div className="group">
                <div className="uk-card overflow-hidden bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="relative h-56 overflow-hidden">
                    <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 animate-pulse"></div>
                    <div className="absolute top-4 left-4 z-10">
                      <div className="bg-green-500 px-3 py-1 rounded-full text-white text-xs font-medium">
                        News
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                      <p className="text-white text-sm font-medium flex items-center gap-2">
                        <svg className="w-4 h-4 text-uk-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        May 28, 2023
                      </p>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-uk-blue dark:text-white mb-3 group-hover:text-uk-red dark:group-hover:text-uk-gold transition-colors duration-300">
                      New Partnership with Leading Tech Companies
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      UK Institute announces strategic partnerships with major technology firms to enhance student opportunities.
                    </p>
                    <Link 
                      href="/news/tech-partnership-2023"
                      className="inline-flex items-center gap-1 text-uk-blue dark:text-uk-gold font-medium group-hover:text-uk-red dark:group-hover:text-uk-red transition-colors duration-300"
                    >
                      Read More
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
              
              <div className="group">
                <div className="uk-card overflow-hidden bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="relative h-56 overflow-hidden">
                    <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 animate-pulse"></div>
                    <div className="absolute top-4 left-4 z-10">
                      <div className="bg-uk-gold px-3 py-1 rounded-full text-uk-blue text-xs font-medium">
                        Workshop
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                      <p className="text-white text-sm font-medium flex items-center gap-2">
                        <svg className="w-4 h-4 text-uk-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        June 5, 2023
                      </p>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-uk-blue dark:text-white mb-3 group-hover:text-uk-red dark:group-hover:text-uk-gold transition-colors duration-300">
                      Digital Marketing Masterclass: Latest Trends
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      Join our free workshop to learn about the latest digital marketing strategies from industry experts.
                    </p>
                    <Link 
                      href="/news/marketing-workshop-2023"
                      className="inline-flex items-center gap-1 text-uk-blue dark:text-uk-gold font-medium group-hover:text-uk-red dark:group-hover:text-uk-red transition-colors duration-300"
                    >
                      Read More
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-12 md:hidden text-center">
              <Link 
                href="/news"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-uk-blue text-white hover:bg-uk-red transition-colors duration-300 rounded-lg"
              >
                View All News
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  )
}
