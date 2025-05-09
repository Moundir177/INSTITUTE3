'use client'

import React, { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import Image from 'next/image'
import { Button, Link, Card, CardBody, Chip, Tabs, Tab } from '@nextui-org/react'
import MainLayout from '@/components/layout/MainLayout'

export default function CourseDetailPage() {
  const params = useParams()
  const slug = params.slug
  const [isVisible, setIsVisible] = useState(false)
  const [activeTab, setActiveTab] = useState("overview")
  
  useEffect(() => {
    setIsVisible(true)
  }, [])
  
  // This would typically come from an API call using the slug
  const courseData = {
    id: "advanced-digital-marketing",
    title: "Advanced Digital Marketing Strategies",
    subtitle: "Master the latest digital marketing techniques to drive business growth",
    level: "Advanced",
    duration: "6 months",
    schedule: "Part-time",
    price: 1499,
    startDate: "September 15, 2023",
    image: "/images/course-marketing.jpg",
    instructors: [
      {
        name: "Dr. Sarah Wilson",
        title: "Digital Marketing Director",
        image: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
        bio: "Former Head of Digital at Google with over 15 years of experience in digital marketing strategy."
      },
      {
        name: "James Thompson",
        title: "SEO Specialist",
        image: "https://i.pravatar.cc/150?u=a042581f4e29026705d",
        bio: "Consultant for Fortune 500 companies on search engine optimization and content strategy."
      }
    ],
    overview: "This comprehensive course will equip you with advanced skills in digital marketing strategy, analytics, and implementation. Learn cutting-edge techniques in SEO, content marketing, social media, email campaigns, and digital advertising to drive business growth.",
    details: "Our Advanced Digital Marketing Strategies course is designed for marketing professionals looking to enhance their skills and stay ahead in the rapidly evolving digital landscape. Through a combination of theoretical knowledge and practical applications, you'll learn how to develop and implement effective digital marketing strategies that deliver measurable results. The course covers the latest trends, tools, and techniques in digital marketing, with a focus on data-driven decision making and ROI optimization.",
    requirements: [
      "Basic understanding of digital marketing concepts",
      "Experience with social media platforms and digital campaigns",
      "Familiarity with marketing analytics tools",
      "A laptop with internet access for practical sessions"
    ],
    outcomes: [
      "Develop comprehensive digital marketing strategies aligned with business objectives",
      "Implement advanced SEO techniques to improve organic search visibility",
      "Create data-driven content marketing plans that resonate with target audiences",
      "Design and optimize paid digital campaigns across multiple platforms",
      "Analyze marketing data to measure performance and drive continuous improvement",
      "Apply conversion rate optimization techniques to increase ROI"
    ],
    modules: [
      {
        title: "Strategic Digital Marketing Planning",
        lessons: ["Digital Marketing Ecosystem", "Customer Journey Mapping", "Setting KPIs and Goals", "Resource Allocation"]
      },
      {
        title: "Advanced SEO Techniques",
        lessons: ["Technical SEO Auditing", "Content Strategy for Search", "Voice Search Optimization", "Local SEO Strategies"]
      },
      {
        title: "Data-Driven Marketing",
        lessons: ["Marketing Analytics Tools", "A/B Testing Methodologies", "Customer Segmentation", "Predictive Analytics"]
      },
      {
        title: "Social Media Mastery",
        lessons: ["Platform-Specific Strategies", "Paid Social Campaigns", "Influencer Marketing", "Community Management"]
      },
      {
        title: "Conversion Rate Optimization",
        lessons: ["Landing Page Psychology", "User Experience Design", "Funnel Optimization", "Personalization Strategies"]
      }
    ]
  }

  // Related courses data
  const relatedCourses = [
    {
      id: "social-media-marketing",
      title: "Social Media Marketing Masterclass",
      image: "/images/course-social.jpg",
      level: "Intermediate",
      duration: "3 months",
      price: 899
    },
    {
      id: "content-marketing",
      title: "Content Marketing Strategy",
      image: "/images/course-content.jpg",
      level: "Advanced",
      duration: "4 months",
      price: 1199
    },
    {
      id: "digital-analytics",
      title: "Digital Analytics & Measurement",
      image: "/images/course-analytics.jpg",
      level: "Advanced",
      duration: "5 months",
      price: 1299
    }
  ]

  const handleTabChange = (key) => {
    setActiveTab(key)
  }

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
            <div className="text-center mb-8">
              <div className="inline-block mb-6">
                <div className="glass px-5 py-2 rounded-full inline-flex items-center backdrop-blur-xl border border-white/20 shadow-xl">
                  <span className="w-3 h-3 rounded-full bg-uk-gold mr-3 animate-pulse"></span>
                  <span className="text-white/90 text-sm font-medium">{courseData.level} Level • {courseData.duration}</span>
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-md relative">
                {courseData.title}
                <div className="absolute -top-6 -right-6 w-12 h-12 bg-uk-gold/20 rounded-full blur-xl animate-pulse-slow"></div>
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-10 leading-relaxed">
                {courseData.subtitle}
              </p>
              
              <div className="flex flex-wrap gap-5 justify-center">
                <Button 
                  as={Link}
                  href="#course-details" 
                  className="bg-uk-gold text-uk-blue hover:scale-105 transform transition-all duration-300 text-lg px-8 py-6 shadow-lg border border-uk-gold/20"
                  size="lg"
                >
                  Course Details
                </Button>
                <Button 
                  as={Link}
                  href="#enroll-now" 
                  className="bg-white/10 backdrop-blur-md text-white hover:bg-white/20 text-lg px-8 py-6 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300"
                  size="lg"
                >
                  Enroll Now
                </Button>
              </div>
            </div>
            
            {/* Course Quick Info */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
              <div className="glass text-center p-4 rounded-xl backdrop-blur-md border border-white/10">
                <div className="text-white/70 text-sm mb-1">Duration</div>
                <div className="text-white font-semibold text-lg">{courseData.duration}</div>
              </div>
              <div className="glass text-center p-4 rounded-xl backdrop-blur-md border border-white/10">
                <div className="text-white/70 text-sm mb-1">Level</div>
                <div className="text-white font-semibold text-lg">{courseData.level}</div>
              </div>
              <div className="glass text-center p-4 rounded-xl backdrop-blur-md border border-white/10">
                <div className="text-white/70 text-sm mb-1">Schedule</div>
                <div className="text-white font-semibold text-lg">{courseData.schedule}</div>
              </div>
              <div className="glass text-center p-4 rounded-xl backdrop-blur-md border border-white/10">
                <div className="text-white/70 text-sm mb-1">Price</div>
                <div className="text-white font-semibold text-lg">£{courseData.price}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white dark:from-gray-900 to-transparent"></div>
      </section>

      {/* Course Overview Section */}
      <section id="course-details" className="py-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-uk-blue/30 to-transparent"></div>
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-uk-blue/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-uk-red/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-12">
              {/* Left Column - Course Information */}
              <div className="w-full lg:w-2/3">
                <div className="flex justify-center mb-8">
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
                    <Tab key="overview" title={
                      <div className="flex items-center gap-2">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <span>Overview</span>
                      </div>
                    }>
                      <div className="mt-8 space-y-6">
                        <div className="relative rounded-2xl overflow-hidden h-72 mb-8">
                          <Image
                            src={courseData.image || "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?q=80&w=1000"}
                            alt={courseData.title}
                            fill
                            className="object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-uk-blue/90 via-uk-blue/20 to-transparent"></div>
                          <div className="absolute bottom-4 left-4 right-4 glass p-4 rounded-xl backdrop-blur-md border border-white/20">
                            <div className="flex items-center gap-3">
                              <div className="bg-white/20 p-2 rounded-full">
                                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                </svg>
                              </div>
                              <div>
                                <h4 className="text-white text-sm font-semibold">Next Start Date</h4>
                                <p className="text-white/70 text-xs">{courseData.startDate}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
                          <h3 className="text-2xl font-bold text-uk-blue dark:text-white mb-4">Course Overview</h3>
                          <div className="w-16 h-1 bg-gradient-to-r from-uk-blue to-uk-gold rounded-full mb-6"></div>
                          <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">{courseData.overview}</p>
                          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{courseData.details}</p>
                        </div>
                        
                        <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
                          <h3 className="text-2xl font-bold text-uk-blue dark:text-white mb-4">What You'll Learn</h3>
                          <div className="w-16 h-1 bg-gradient-to-r from-uk-blue to-uk-gold rounded-full mb-6"></div>
                          <div className="grid md:grid-cols-2 gap-4">
                            {courseData.outcomes.map((outcome, index) => (
                              <div key={index} className="flex items-start gap-3">
                                <div className="w-6 h-6 rounded-full bg-uk-gold/20 flex items-center justify-center mt-0.5 flex-shrink-0">
                                  <svg className="w-4 h-4 text-uk-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                  </svg>
                                </div>
                                <span className="text-gray-600 dark:text-gray-300">{outcome}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
                          <h3 className="text-2xl font-bold text-uk-blue dark:text-white mb-4">Requirements</h3>
                          <div className="w-16 h-1 bg-gradient-to-r from-uk-red to-uk-blue rounded-full mb-6"></div>
                          <div className="space-y-3">
                            {courseData.requirements.map((req, index) => (
                              <div key={index} className="flex items-start gap-3">
                                <div className="w-6 h-6 rounded-full bg-uk-red/20 flex items-center justify-center mt-0.5 flex-shrink-0">
                                  <svg className="w-4 h-4 text-uk-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                  </svg>
                                </div>
                                <span className="text-gray-600 dark:text-gray-300">{req}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </Tab>
                    <Tab key="curriculum" title={
                      <div className="flex items-center gap-2">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                        <span>Curriculum</span>
                      </div>
                    }>
                      <div className="mt-8">
                        <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
                          <h3 className="text-2xl font-bold text-uk-blue dark:text-white mb-6">Course Modules</h3>
                          <div className="space-y-6">
                            {courseData.modules.map((module, index) => (
                              <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
                                <div className="bg-gray-50 dark:bg-gray-800/50 p-4 flex items-center justify-between">
                                  <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-uk-blue flex items-center justify-center text-white font-bold">
                                      {index + 1}
                                    </div>
                                    <h4 className="text-lg font-semibold text-uk-blue dark:text-white">{module.title}</h4>
                                  </div>
                                  <div className="text-sm text-gray-500 dark:text-gray-400">
                                    {module.lessons.length} lessons
                                  </div>
                                </div>
                                <div className="p-4 divide-y divide-gray-100 dark:divide-gray-700">
                                  {module.lessons.map((lesson, idx) => (
                                    <div key={idx} className="py-3 flex items-center gap-3">
                                      <svg className="w-5 h-5 text-uk-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                      </svg>
                                      <span className="text-gray-700 dark:text-gray-300">{lesson}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </Tab>
                    <Tab key="instructors" title={
                      <div className="flex items-center gap-2">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        <span>Instructors</span>
                      </div>
                    }>
                      <div className="mt-8">
                        <div className="grid md:grid-cols-2 gap-8">
                          {courseData.instructors.map((instructor, index) => (
                            <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 hover:border-uk-blue/30 dark:hover:border-uk-blue/30 transition-all duration-300 group">
                              <div className="flex items-start gap-4">
                                <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-uk-gold">
                                  <Image
                                    src={instructor.image}
                                    alt={instructor.name}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                                  />
                                </div>
                                <div>
                                  <h4 className="text-xl font-bold text-uk-blue dark:text-white group-hover:text-uk-gold transition-colors duration-300">{instructor.name}</h4>
                                  <p className="text-uk-gold text-sm mb-2">{instructor.title}</p>
                                  <p className="text-gray-600 dark:text-gray-300 text-sm">{instructor.bio}</p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </Tab>
                  </Tabs>
                </div>
              </div>
              
              {/* Right Column - Enrollment Card */}
              <div className="w-full lg:w-1/3 lg:mt-24">
                <div className="sticky top-24">
                  <div id="enroll-now" className="glass bg-white/95 dark:bg-gray-800/95 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 shadow-xl backdrop-blur-md hover:shadow-2xl transition-all duration-300">
                    <h3 className="text-2xl font-bold text-uk-blue dark:text-white mb-4">Enroll in This Course</h3>
                    <div className="space-y-4 mb-6">
                      <div className="flex justify-between items-center py-2 border-b border-gray-100 dark:border-gray-700">
                        <span className="text-gray-600 dark:text-gray-300">Course Fee</span>
                        <span className="text-uk-blue dark:text-white font-bold">£{courseData.price}</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-100 dark:border-gray-700">
                        <span className="text-gray-600 dark:text-gray-300">Duration</span>
                        <span className="text-uk-blue dark:text-white">{courseData.duration}</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-100 dark:border-gray-700">
                        <span className="text-gray-600 dark:text-gray-300">Start Date</span>
                        <span className="text-uk-blue dark:text-white">{courseData.startDate}</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-100 dark:border-gray-700">
                        <span className="text-gray-600 dark:text-gray-300">Schedule</span>
                        <span className="text-uk-blue dark:text-white">{courseData.schedule}</span>
                      </div>
                    </div>
                    
                    <Button 
                      as={Link}
                      href="/register" 
                      className="bg-uk-gold text-uk-blue hover:scale-105 transform transition-all duration-300 text-lg w-full py-6 shadow-lg border border-uk-gold/20 mb-4"
                      size="lg"
                    >
                      Enroll Now
                    </Button>
                    
                    <Button 
                      as={Link}
                      href="/contact" 
                      className="bg-uk-blue text-white hover:bg-uk-red transition-all duration-300 text-lg w-full py-6 border border-uk-blue/20"
                      size="lg"
                      variant="flat"
                    >
                      Request Information
                    </Button>
                    
                    <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-700/30 rounded-xl">
                      <div className="flex items-center gap-3 mb-3">
                        <svg className="w-5 h-5 text-uk-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-gray-700 dark:text-gray-300 font-medium">Course Includes</span>
                      </div>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                          <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>24 weeks of expert instruction</span>
                        </li>
                        <li className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                          <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Practical assignments & projects</span>
                        </li>
                        <li className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                          <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Lifetime access to course materials</span>
                        </li>
                        <li className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                          <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Industry-recognized certification</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Related Courses Section */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-b from-white via-gray-50 to-white dark:from-gray-900 dark:via-gray-800/50 dark:to-gray-900">
        <div className="absolute inset-0 bg-[url('/images/uk-pattern.svg')] opacity-5"></div>
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-uk-blue/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-uk-gold/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl mx-auto text-center mb-16 relative">
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-uk-blue via-uk-gold to-uk-red"></div>
              <div className="inline-block mb-4">
                <div className="bg-uk-gold/10 dark:bg-uk-gold/20 px-4 py-2 rounded-full text-uk-gold dark:text-uk-gold/90 text-sm font-semibold border border-uk-gold/20 backdrop-blur-sm">
                  <span className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                    Expand Your Knowledge
                  </span>
                </div>
              </div>
              <h2 className="text-4xl font-bold text-uk-blue dark:text-white mb-4">
                Related <span className="uk-gradient-text">Courses</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Explore these complementary courses to enhance your skills and knowledge
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {relatedCourses.map((course, index) => (
                <Link href={`/courses/${course.id}`} key={index} className="group">
                  <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                    <div className="relative h-48 w-full overflow-hidden">
                      <Image
                        src={course.image || "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?q=80&w=1000"}
                        alt={course.title}
                        fill
                        className="object-cover transform transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-uk-blue/80 via-uk-blue/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
                      <div className="absolute top-4 left-4 glass px-3 py-1 rounded-full text-xs font-semibold text-white border border-white/10">
                        <span>{course.level}</span>
                      </div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-lg font-bold text-white mb-1 line-clamp-2">{course.title}</h3>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2 text-white/80 text-sm">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>{course.duration}</span>
                          </div>
                          <div className="text-uk-gold font-semibold">£{course.price}</div>
                        </div>
                      </div>
                    </div>
                    <div className="p-6 text-center">
                      <Button 
                        className="bg-uk-blue text-white hover:bg-uk-red transition-all duration-300 w-full group-hover:shadow-lg"
                      >
                        View Details
                      </Button>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            
            <div className="flex justify-center mt-12">
              <Button 
                as={Link}
                href="/courses" 
                className="bg-gradient-to-r from-uk-blue to-uk-blue/80 text-white hover:from-uk-blue/90 hover:to-uk-blue px-8 py-2 rounded-full text-lg shadow-md"
                endContent={
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                }
              >
                Browse All Courses
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-uk-blue/30 to-transparent"></div>
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-uk-blue/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-uk-red/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
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
                Find answers to common questions about this course
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 hover:border-uk-blue/30 dark:hover:border-uk-blue/30 transition-all duration-300 hover:shadow-2xl uk-card group">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-uk-blue/10 dark:bg-uk-blue/20 flex-shrink-0 flex items-center justify-center mt-1">
                    <svg className="w-6 h-6 text-uk-blue dark:text-uk-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-uk-blue dark:text-white mb-3 group-hover:uk-gradient-text transition-all duration-300">Are there any prerequisites for this course?</h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      While there are no strict prerequisites, we recommend having basic knowledge of digital marketing concepts and some experience with social media platforms. Familiarity with analytics tools is helpful but not required, as we'll cover these topics in the course.
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
                    <h3 className="text-xl font-bold text-uk-blue dark:text-white mb-3 group-hover:uk-gradient-text transition-all duration-300">How much time should I allocate each week for this course?</h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      Students typically spend about 10-12 hours per week on this course, including lecture time, readings, and assignments. As it's a part-time course, it's designed to be flexible around work commitments, but consistent engagement throughout the week is recommended for the best learning experience.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 hover:border-uk-red/30 dark:hover:border-uk-red/30 transition-all duration-300 hover:shadow-2xl uk-card group">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-uk-red/10 dark:bg-uk-red/20 flex-shrink-0 flex items-center justify-center mt-1">
                    <svg className="w-6 h-6 text-uk-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-uk-blue dark:text-white mb-3 group-hover:uk-gradient-text transition-all duration-300">What kind of support will I receive during the course?</h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      Throughout the course, you'll have access to weekly live Q&A sessions with instructors, a dedicated teaching assistant for technical questions, and a private community forum where you can connect with fellow students. We also offer one-on-one office hours by appointment for personalized feedback on your projects.
                    </p>
                  </div>
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
                    <span className="text-white/90 text-sm font-medium">Limited Time Offer</span>
                  </div>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 drop-shadow-md">
                  Ready to Advance Your <span className="text-uk-gold animate-float" style={{animationDelay: "0.5s", display: "inline-block"}}>Career?</span>
                </h2>
                <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
                  Enroll today and get a 10% early bird discount. Places are limited for the upcoming cohort starting {courseData.startDate}.
                </p>
                
                <div className="flex flex-wrap justify-center gap-6">
                  <Button 
                    as={Link}
                    href="/register" 
                    className="bg-uk-gold text-uk-blue hover:scale-105 transform transition-all duration-300 text-lg px-10 py-6 shadow-lg border border-uk-gold/20 group"
                    size="lg"
                    startContent={
                      <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                      </svg>
                    }
                  >
                    Enroll Now
                  </Button>
                  <Button 
                    as={Link}
                    href="/contact" 
                    className="bg-white/10 backdrop-blur-md text-white hover:bg-white/20 text-lg px-10 py-6 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 group"
                    size="lg"
                    startContent={
                      <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    }
                  >
                    Speak to an Advisor
                  </Button>
                </div>
                
                <div className="mt-10 flex flex-wrap items-center justify-center gap-8">
                  <div className="glass px-5 py-3 rounded-full text-sm text-white/90 border border-white/10 inline-flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    <span>Spaces Available</span>
                  </div>
                  <div className="glass px-5 py-3 rounded-full text-sm text-white/90 border border-white/10 inline-flex items-center gap-2">
                    <svg className="w-4 h-4 text-uk-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    <span>Secure Checkout</span>
                  </div>
                  <div className="glass px-5 py-3 rounded-full text-sm text-white/90 border border-white/10 inline-flex items-center gap-2">
                    <svg className="w-4 h-4 text-uk-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <span>Satisfaction Guaranteed</span>
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