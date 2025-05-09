'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { Button, Link, Card, CardBody, CardFooter } from '@nextui-org/react'
import MainLayout from '@/components/layout/MainLayout'

export default function ServicesPage() {
  const [isVisible, setIsVisible] = useState(false)
  
  useEffect(() => {
    setIsVisible(true)
  }, [])
  
  const mainServices = [
    {
      title: "Academic Programs",
      description: "Comprehensive educational programs designed to meet international standards and industry demands.",
      icon: (
        <svg className="w-16 h-16 text-uk-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998a12.078 12.078 0 01.665-6.479L12 14z" />
        </svg>
      ),
      color: "from-uk-blue to-uk-blue/70",
      delay: 0.1
    },
    {
      title: "Career Guidance",
      description: "Personalized career counseling and placement services to help students launch successful careers.",
      icon: (
        <svg className="w-16 h-16 text-uk-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      color: "from-uk-gold to-uk-gold/70",
      delay: 0.3
    },
    {
      title: "Research Support",
      description: "State-of-the-art facilities and expert guidance for students undertaking research projects.",
      icon: (
        <svg className="w-16 h-16 text-uk-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
      color: "from-uk-red to-uk-red/70",
      delay: 0.5
    }
  ];

  const detailedServices = [
    {
      title: "Educational Consulting",
      description: "Our expert consultants provide personalized advice to help students choose the right courses and career paths based on their interests, abilities, and goals.",
      features: [
        "One-on-one consultation sessions",
        "Aptitude and interest assessments",
        "Course selection guidance",
        "Career path planning"
      ],
      image: "/images/consulting.jpg",
      color: "bg-uk-blue"
    },
    {
      title: "Professional Development",
      description: "Enhance your skills and stay updated with the latest industry trends through our professional development workshops, seminars, and short courses.",
      features: [
        "Industry expert-led workshops",
        "Professional certification programs",
        "Skill enhancement training",
        "Networking opportunities"
      ],
      image: "/images/development.jpg",
      color: "bg-uk-gold"
    },
    {
      title: "International Exchange",
      description: "Broaden your horizons through our international exchange programs that provide opportunities to study abroad at our partner institutions around the world.",
      features: [
        "Study abroad opportunities",
        "Cultural immersion experiences",
        "Global networking connections",
        "International certification"
      ],
      image: "/images/exchange.jpg",
      color: "bg-uk-red"
    },
    {
      title: "Student Support Services",
      description: "We provide comprehensive support services to ensure our students have the resources they need to succeed academically and personally.",
      features: [
        "Academic advising and tutoring",
        "Mental health and wellness support",
        "Accommodation assistance",
        "Financial guidance and scholarships"
      ],
      image: "/images/support.jpg",
      color: "bg-uk-blue"
    },
    {
      title: "Corporate Training",
      description: "Customized training programs for businesses looking to upskill their workforce with the latest knowledge and practical skills in various fields.",
      features: [
        "Customized corporate training programs",
        "Leadership development",
        "Team building workshops",
        "Industry-specific skill training"
      ],
      image: "/images/corporate.jpg",
      color: "bg-uk-gold"
    },
    {
      title: "Virtual Learning Environment",
      description: "Access world-class education from anywhere with our comprehensive virtual learning platform, featuring interactive courses and real-time support.",
      features: [
        "24/7 access to course materials",
        "Interactive virtual classrooms",
        "Real-time instructor feedback",
        "Collaborative online projects"
      ],
      image: "/images/virtual.jpg",
      color: "bg-uk-red"
    }
  ];

  const testimonials = [
    {
      quote: "The career guidance services at UK Institute were instrumental in helping me secure my dream job in finance. The personalized counseling and interview preparation made all the difference.",
      name: "David Chen",
      position: "Financial Analyst",
      company: "London Investment Group"
    },
    {
      quote: "As a business owner, I can confidently say that the corporate training provided by UK Institute has significantly improved our team's performance and productivity.",
      name: "Sophia Williams",
      position: "CEO",
      company: "Innovate Solutions Ltd"
    }
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-gradient-to-br from-uk-blue to-uk-blue/90">
        <div className="absolute inset-0 bg-[url('/images/uk-pattern.svg')] opacity-10 animate-pulse-slow"></div>
        <div className="absolute -left-40 bottom-0 w-96 h-96 bg-uk-gold opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute -right-40 top-0 w-96 h-96 bg-uk-red opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute right-10 top-32 w-20 h-20 border-4 border-uk-gold/20 rounded-full opacity-40"></div>
        <div className="absolute left-10 bottom-32 w-32 h-32 border-4 border-white/10 rounded-full opacity-20"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
          <div className={`max-w-4xl mx-auto transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="flex flex-col items-center text-center">
              <div className="inline-block mb-6">
                <div className="glass px-5 py-2 rounded-full inline-flex items-center backdrop-blur-xl border border-white/20 shadow-xl">
                  <span className="w-3 h-3 rounded-full bg-uk-gold mr-3 animate-pulse"></span>
                  <span className="text-white/90 text-sm font-medium">Premier Educational Services</span>
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 drop-shadow-md relative">
                Our <span className="text-uk-gold inline-block animate-float" style={{animationDelay: "0.5s"}}>Services</span>
                <div className="absolute -top-6 -right-6 w-12 h-12 bg-uk-gold/20 rounded-full blur-xl animate-pulse-slow"></div>
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-3xl mb-12 leading-relaxed">
                Comprehensive support for your educational journey from enrollment to graduation and beyond.
              </p>
              
              <div className="flex flex-wrap gap-5 justify-center">
                <Button 
                  as={Link}
                  href="#main-services" 
                  className="bg-uk-gold text-uk-blue hover:scale-105 transform transition-all duration-300 text-lg px-8 py-6 shadow-lg border border-uk-gold/20"
                  size="lg"
                >
                  Explore Services
                </Button>
                <Button 
                  as={Link}
                  href="/contact" 
                  className="bg-white/10 backdrop-blur-md text-white hover:bg-white/20 text-lg px-8 py-6 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300"
                  size="lg"
                >
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white dark:from-gray-900 to-transparent"></div>
      </section>

      {/* Main Services Section */}
      <section id="main-services" className="py-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-uk-blue/30 to-transparent"></div>
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-uk-blue/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-uk-red/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-block mb-4">
              <div className="bg-uk-blue/10 dark:bg-uk-blue/20 px-4 py-2 rounded-full text-uk-blue dark:text-white text-sm font-semibold border border-uk-blue/20 dark:border-white/10">
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Excellence in Education
                </span>
              </div>
            </div>
            <h2 className="text-4xl font-bold text-uk-blue dark:text-white mb-4">
              Our Core <span className="uk-gradient-text">Services</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Our primary focus areas designed to support every aspect of your educational journey.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-uk-blue to-transparent mx-auto mt-8"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10">
            {mainServices.map((service, index) => (
              <div 
                key={index} 
                className="uk-card relative rounded-2xl overflow-hidden transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl group"
                style={{
                  transitionDelay: `${service.delay}s`,
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900"></div>
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${service.color}"></div>
                <div className="relative p-8 h-full flex flex-col z-10">
                  <div className="p-4 rounded-2xl bg-white dark:bg-gray-800 shadow-xl mb-6 self-start group-hover:bg-uk-gold/10 transition-colors duration-300">
                    <div className="text-uk-gold group-hover:text-uk-gold transition-colors duration-300">
                      {service.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-uk-blue dark:text-white mb-4 group-hover:text-white transition-colors duration-300">{service.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 group-hover:text-white/90 transition-colors duration-300">{service.description}</p>
                  <div className="mt-auto">
                    <Button
                      as={Link}
                      href={`/services#${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                      className="bg-white/80 dark:bg-gray-700 text-uk-blue dark:text-white group-hover:bg-white group-hover:text-uk-blue px-6 py-2 rounded-full text-sm transition-all duration-300 border border-uk-blue/10 dark:border-white/10"
                      endContent={
                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      }
                    >
                      Learn More
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Services Section */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-b from-white via-gray-50 to-white dark:from-gray-900 dark:via-gray-800/50 dark:to-gray-900">
        <div className="absolute inset-0 bg-[url('/images/uk-pattern.svg')] opacity-5"></div>
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-uk-blue/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-uk-gold/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16 relative">
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-uk-blue via-uk-gold to-uk-red"></div>
            <div className="inline-block mb-4">
              <div className="bg-uk-gold/10 dark:bg-uk-gold/20 px-4 py-2 rounded-full text-uk-gold dark:text-uk-gold/90 text-sm font-semibold border border-uk-gold/20 backdrop-blur-sm">
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  Comprehensive Support
                </span>
              </div>
            </div>
            <h2 className="text-4xl font-bold text-uk-blue dark:text-white mb-4">
              Specialized <span className="uk-gradient-text">Services</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Explore our full range of specialized services designed to enhance your educational experience.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {detailedServices.map((service, index) => (
              <Card
                key={index}
                id={service.title.toLowerCase().replace(/\s+/g, '-')}
                className="border-none shadow-xl overflow-hidden group"
                isHoverable
              >
                <CardBody className="p-0 overflow-hidden">
                  <div className="relative h-52 w-full overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10"></div>
                    <Image
                      src={service.image || "https://images.unsplash.com/photo-1491975474562-1f4e30bc9468?q=80&w=500"}
                      alt={service.title}
                      fill
                      className="object-cover transform transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                      <h3 className="text-2xl font-bold text-white mb-1">{service.title}</h3>
                      <div className="w-1/3 h-0.5 bg-gradient-to-r from-uk-gold to-transparent mb-2"></div>
                    </div>
                  </div>
                  
                  <div className={`p-6 border-t-4 ${service.color}`}>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">{service.description}</p>
                    <div className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start">
                          <div className="w-6 h-6 rounded-full bg-uk-gold/20 flex items-center justify-center mt-0.5 flex-shrink-0">
                            <svg className="w-4 h-4 text-uk-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-gray-700 dark:text-gray-300 ml-3">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardBody>
                <CardFooter className="border-t border-gray-100 dark:border-gray-700 px-6 py-4 bg-gray-50 dark:bg-gray-800">
                  <Button
                    as={Link}
                    href="/contact"
                    className="bg-gradient-to-r from-uk-blue to-uk-blue/80 text-white hover:from-uk-blue/90 hover:to-uk-blue w-full shadow-md group"
                    endContent={
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    }
                  >
                    Learn More
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 relative overflow-hidden bg-white dark:bg-gray-900">
        <div className="absolute -top-24 -left-24 w-48 h-48 bg-uk-blue/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-uk-red/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-block mb-4">
              <div className="bg-uk-blue/10 dark:bg-uk-blue/20 px-4 py-2 rounded-full text-uk-blue dark:text-white text-sm font-semibold border border-uk-blue/20 dark:border-white/10">
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                  Our Approach
                </span>
              </div>
            </div>
            <h2 className="text-4xl font-bold text-uk-blue dark:text-white mb-4">
              Structured <span className="uk-gradient-text">Process</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              A streamlined approach to ensuring you receive the best possible support at every step.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-uk-blue to-transparent mx-auto mt-8"></div>
          </div>
          
          <div className="relative">
            <div className="hidden lg:block absolute top-28 left-0 right-0 h-1 bg-gradient-to-r from-uk-blue via-uk-gold to-uk-red"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
              <div className="relative z-10 group">
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-100 dark:border-gray-700 relative uk-card hover:border-uk-blue/30 dark:hover:border-uk-blue/30">
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-uk-blue to-uk-blue/80 text-white flex items-center justify-center text-2xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">1</div>
                  </div>
                  <h3 className="text-xl font-semibold text-uk-blue dark:text-white mt-4 mb-4 text-center">Initial Consultation</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-center">We listen to your needs and goals to understand how we can best support you.</p>
                  
                  <div className="mt-6 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-1 bg-gradient-to-r from-uk-blue via-uk-gold to-uk-red rounded-full"></div>
                  </div>
                </div>
                <div className="hidden lg:block absolute -right-3 top-28 transform translate-x-full z-20">
                  <svg className="w-6 h-6 text-uk-gold animate-float" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
              
              <div className="relative z-10 group">
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-100 dark:border-gray-700 relative uk-card hover:border-uk-gold/30 dark:hover:border-uk-gold/30">
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-uk-gold to-uk-gold/80 text-uk-blue flex items-center justify-center text-2xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">2</div>
                  </div>
                  <h3 className="text-xl font-semibold text-uk-blue dark:text-white mt-4 mb-4 text-center">Personalized Plan</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-center">Our experts create a tailored plan that aligns with your specific requirements.</p>
                  
                  <div className="mt-6 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-1 bg-gradient-to-r from-uk-blue via-uk-gold to-uk-red rounded-full"></div>
                  </div>
                </div>
                <div className="hidden lg:block absolute -right-3 top-28 transform translate-x-full z-20">
                  <svg className="w-6 h-6 text-uk-gold animate-float" style={{ animationDelay: "0.2s" }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
              
              <div className="relative z-10 group">
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-100 dark:border-gray-700 relative uk-card hover:border-uk-blue/30 dark:hover:border-uk-blue/30">
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-uk-blue to-uk-blue/80 text-white flex items-center justify-center text-2xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">3</div>
                  </div>
                  <h3 className="text-xl font-semibold text-uk-blue dark:text-white mt-4 mb-4 text-center">Implementation</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-center">We deliver the services with a focus on quality, efficiency, and excellence.</p>
                  
                  <div className="mt-6 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-1 bg-gradient-to-r from-uk-blue via-uk-gold to-uk-red rounded-full"></div>
                  </div>
                </div>
                <div className="hidden lg:block absolute -right-3 top-28 transform translate-x-full z-20">
                  <svg className="w-6 h-6 text-uk-gold animate-float" style={{ animationDelay: "0.4s" }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
              
              <div className="relative z-10 group">
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-100 dark:border-gray-700 relative uk-card hover:border-uk-gold/30 dark:hover:border-uk-gold/30">
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-uk-gold to-uk-gold/80 text-uk-blue flex items-center justify-center text-2xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">4</div>
                  </div>
                  <h3 className="text-xl font-semibold text-uk-blue dark:text-white mt-4 mb-4 text-center">Ongoing Support</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-center">We provide continuous assistance and adjustments to ensure your success.</p>
                  
                  <div className="mt-6 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-1 bg-gradient-to-r from-uk-blue via-uk-gold to-uk-red rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 relative overflow-hidden bg-uk-blue">
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                  Success Stories
                </span>
              </div>
            </div>
            <h2 className="text-4xl font-bold text-white mb-4">
              Client <span className="text-uk-gold animate-float" style={{animationDelay: "0.5s", display: "inline-block"}}>Testimonials</span>
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Hear what our clients say about our services and support.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-uk-gold to-transparent mx-auto mt-8"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="glass backdrop-blur-md bg-white/10 dark:bg-gray-800/10 p-8 rounded-2xl border border-white/10 shadow-2xl relative group hover:border-uk-gold/30 transition-all duration-300 transform hover:-translate-y-1">
                <div className="absolute top-6 left-6 text-6xl text-uk-gold/20 leading-none font-serif">
                  "
                </div>
                <div className="relative z-10">
                  <p className="text-white/90 italic mb-8 leading-relaxed text-lg">{testimonial.quote}</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-uk-gold to-uk-red/70 flex items-center justify-center text-white font-bold text-xl shadow-lg">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div className="ml-4">
                      <p className="font-semibold text-white">{testimonial.name}</p>
                      <p className="text-white/70 text-sm">{testimonial.position}, {testimonial.company}</p>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-6 right-6 text-6xl text-uk-gold/20 leading-none font-serif">
                  "
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800/80">
        <div className="absolute inset-0 bg-[url('/images/uk-pattern.svg')] opacity-5"></div>
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-uk-blue/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-uk-gold/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16 relative">
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-uk-blue via-uk-gold to-uk-red"></div>
            <div className="inline-block mb-4">
              <div className="bg-uk-blue/10 dark:bg-uk-blue/20 px-4 py-2 rounded-full text-uk-blue dark:text-white text-sm font-semibold border border-uk-blue/20 dark:border-white/10">
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Common Questions
                </span>
              </div>
            </div>
            <h2 className="text-4xl font-bold text-uk-blue dark:text-white mb-4">
              Frequently Asked <span className="uk-gradient-text">Questions</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Find answers to common questions about our services.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 hover:border-uk-blue/30 dark:hover:border-uk-blue/30 transition-all duration-300 hover:shadow-2xl uk-card group">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-uk-blue/10 dark:bg-uk-blue/20 flex-shrink-0 flex items-center justify-center mt-1">
                  <svg className="w-6 h-6 text-uk-blue dark:text-uk-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-uk-blue dark:text-white mb-3 group-hover:uk-gradient-text transition-all duration-300">How can I access student support services?</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    You can access our student support services by visiting our Student Services Center on campus during operating hours, or through our online portal available 24/7. For urgent matters, we also offer a dedicated helpline that connects you directly with our support team.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 hover:border-uk-gold/30 dark:hover:border-uk-gold/30 transition-all duration-300 hover:shadow-2xl uk-card group">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-uk-gold/10 dark:bg-uk-gold/20 flex-shrink-0 flex items-center justify-center mt-1">
                  <svg className="w-6 h-6 text-uk-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-uk-blue dark:text-white mb-3 group-hover:uk-gradient-text transition-all duration-300">Are career guidance services available to alumni?</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Yes, all UK Institute alumni have lifetime access to our career guidance services, including job placement assistance, resume reviews, and interview preparation. We're committed to supporting your career journey even after graduation, helping you navigate job changes and career advancement.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 hover:border-uk-red/30 dark:hover:border-uk-red/30 transition-all duration-300 hover:shadow-2xl uk-card group">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-uk-red/10 dark:bg-uk-red/20 flex-shrink-0 flex items-center justify-center mt-1">
                  <svg className="w-6 h-6 text-uk-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-uk-blue dark:text-white mb-3 group-hover:uk-gradient-text transition-all duration-300">How do I apply for the international exchange program?</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Applications for our international exchange programs open twice a year. To apply, you need to complete the online application form, provide academic transcripts, and submit a statement of purpose. Successful applicants will be invited for an interview before final selection for placement at one of our partner institutions worldwide.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 hover:border-uk-blue/30 dark:hover:border-uk-blue/30 transition-all duration-300 hover:shadow-2xl uk-card group">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-uk-blue/10 dark:bg-uk-blue/20 flex-shrink-0 flex items-center justify-center mt-1">
                  <svg className="w-6 h-6 text-uk-blue dark:text-uk-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-uk-blue dark:text-white mb-3 group-hover:uk-gradient-text transition-all duration-300">Can businesses customize corporate training programs?</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Absolutely! Our corporate training programs are fully customizable to meet the specific needs of your organization. Our team works closely with you to identify your requirements and design training programs that address your unique challenges and goals, ensuring maximum relevance and impact for your staff.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-uk-blue via-uk-blue/90 to-uk-blue"></div>
        <div className="absolute inset-0 bg-[url('/images/uk-pattern.svg')] opacity-10 animate-pulse-slow"></div>
        <div className="absolute -left-40 bottom-0 w-96 h-96 bg-uk-gold opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute -right-40 top-0 w-96 h-96 bg-uk-red opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute right-10 top-32 w-20 h-20 border-4 border-uk-gold/20 rounded-full opacity-40"></div>
        <div className="absolute left-10 bottom-32 w-32 h-32 border-4 border-white/10 rounded-full opacity-20"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="glass backdrop-blur-xl bg-white/10 rounded-3xl p-10 border border-white/20 shadow-2xl uk-card hover:shadow-[0_0_50px_rgba(0,36,125,0.3)] transition-all duration-500">
              <div className="text-center">
                <div className="inline-block mb-6">
                  <div className="glass px-5 py-2 rounded-full inline-flex items-center backdrop-blur-xl border border-white/20 shadow-lg">
                    <span className="w-3 h-3 rounded-full bg-uk-gold mr-3 animate-pulse"></span>
                    <span className="text-white/90 text-sm font-medium">Get Started Today</span>
                  </div>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 drop-shadow-md">
                  Ready to Experience Our <span className="text-uk-gold animate-float" style={{animationDelay: "0.5s", display: "inline-block"}}>Services?</span>
                </h2>
                <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
                  Contact us today to discuss how we can support your educational and professional goals. Our team is ready to help you achieve success.
                </p>
                
                <div className="flex flex-wrap justify-center gap-6">
                  <Button 
                    as={Link}
                    href="/contact" 
                    className="bg-uk-gold text-uk-blue hover:scale-105 transform transition-all duration-300 text-lg px-10 py-6 shadow-lg border border-uk-gold/20 group"
                    size="lg"
                    startContent={
                      <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    }
                  >
                    Get in Touch
                  </Button>
                  <Button 
                    as={Link}
                    href="/courses" 
                    className="bg-white/10 backdrop-blur-md text-white hover:bg-white/20 text-lg px-10 py-6 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 group"
                    size="lg"
                    startContent={
                      <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    }
                  >
                    Explore Courses
                  </Button>
                </div>
                
                <div className="mt-10 flex flex-wrap items-center justify-center gap-8">
                  <div className="glass px-5 py-3 rounded-full text-sm text-white/90 border border-white/10 inline-flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    <span>24/7 Support Available</span>
                  </div>
                  <div className="glass px-5 py-3 rounded-full text-sm text-white/90 border border-white/10 inline-flex items-center gap-2">
                    <svg className="w-4 h-4 text-uk-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    <span>Secure Communications</span>
                  </div>
                  <div className="glass px-5 py-3 rounded-full text-sm text-white/90 border border-white/10 inline-flex items-center gap-2">
                    <svg className="w-4 h-4 text-uk-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <span>Quality Guarantee</span>
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