'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { 
  Card, 
  CardBody, 
  Button, 
  Tabs, 
  Tab, 
  Accordion, 
  AccordionItem, 
  Divider,
  Chip,
  Avatar,
  Progress
} from '@nextui-org/react'
import MainLayout from '@/components/layout/MainLayout'

// Mock data for individual course
const getCourseData = (id: string) => {
  return {
    id,
    title: "Advanced Digital Marketing Strategies",
    shortDescription: "Master the latest digital marketing techniques, tools, and strategies to drive business growth.",
    fullDescription: "This comprehensive course equips you with advanced digital marketing skills needed to excel in today's competitive landscape. Learn how to create integrated digital marketing campaigns, leverage analytics for data-driven decisions, and optimize your digital presence across multiple platforms.",
    image: "/uk-flag-shield.svg",
    price: 1499,
    duration: "6 months",
    level: "Advanced",
    startDate: "15 Jan 2023",
    language: "English",
    certificate: true,
    accredited: true,
    rating: 4.8,
    reviewCount: 247,
    students: 1845,
    prerequisites: ["Basic understanding of marketing principles", "Familiarity with social media platforms", "Some experience with digital marketing"],
    outcomes: [
      "Create comprehensive digital marketing strategies",
      "Implement advanced SEO and SEM techniques",
      "Analyze campaign performance through various metrics",
      "Develop content marketing strategies that drive engagement",
      "Execute social media campaigns across multiple platforms",
      "Utilize marketing automation tools effectively"
    ],
    instructor: {
      name: "Dr. Emily Johnson",
      title: "Senior Digital Marketing Strategist",
      bio: "Dr. Emily Johnson has over 15 years of experience in digital marketing. She has worked with Fortune 500 companies and startups alike, helping them develop and implement successful digital marketing strategies. She holds a Ph.D. in Marketing from Oxford University.",
      avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d"
    },
    modules: [
      {
        title: "Module 1: Digital Marketing Fundamentals",
        lessons: [
          "Introduction to Digital Marketing Ecosystem",
          "Understanding the Customer Journey",
          "Creating Digital Marketing Objectives",
          "Key Performance Indicators and Metrics"
        ]
      },
      {
        title: "Module 2: Search Engine Optimization",
        lessons: [
          "Advanced On-Page SEO Techniques",
          "Technical SEO Auditing",
          "Link Building Strategies",
          "International SEO Considerations"
        ]
      },
      {
        title: "Module 3: Paid Advertising Strategies",
        lessons: [
          "PPC Campaign Management",
          "Advanced Google Ads Techniques",
          "Social Media Advertising",
          "Retargeting and Remarketing Campaigns"
        ]
      },
      {
        title: "Module 4: Content Marketing",
        lessons: [
          "Content Strategy Development",
          "Creating Compelling Content",
          "Content Distribution Channels",
          "Measuring Content Performance"
        ]
      },
      {
        title: "Module 5: Social Media Marketing",
        lessons: [
          "Social Media Strategy Development",
          "Advanced Techniques for Major Platforms",
          "Community Management",
          "Influencer Marketing"
        ]
      },
      {
        title: "Module 6: Analytics and Reporting",
        lessons: [
          "Setting Up Analytics Systems",
          "Data Interpretation and Analysis",
          "Creating Actionable Reports",
          "Optimization Based on Analytics"
        ]
      }
    ],
    reviews: [
      {
        name: "Alexandra Thompson",
        rating: 5,
        date: "12 Jun 2023",
        comment: "Comprehensive and up-to-date content. The instructor is extremely knowledgeable and provides practical examples throughout the course."
      },
      {
        name: "Michael Williams",
        rating: 4,
        date: "28 May 2023",
        comment: "Very informative course with great resources. The assignments were challenging but helped me apply what I learned. Would recommend for anyone looking to advance their digital marketing skills."
      },
      {
        name: "Sophia Chen",
        rating: 5,
        date: "15 Apr 2023",
        comment: "This course has transformed my approach to digital marketing. The in-depth coverage of analytics and SEO was particularly valuable for my role."
      }
    ]
  }
}

// Course Page Component
export default function CourseDetailPage({ params }: { params: { id: string } }) {
  const courseData = getCourseData(params.id)
  const [activeTab, setActiveTab] = useState("overview")
  
  return (
    <MainLayout>
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-uk-blue to-uk-blue/90 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="w-full md:w-2/3">
                <h1 className="text-3xl md:text-4xl font-bold mb-4">{courseData.title}</h1>
                <p className="text-xl text-white/90 mb-6">{courseData.shortDescription}</p>
                
                <div className="flex flex-wrap gap-3 mb-6">
                  <Chip color="primary" variant="flat" className="text-white bg-white/10">
                    {courseData.level} Level
                  </Chip>
                  <Chip color="primary" variant="flat" className="text-white bg-white/10">
                    {courseData.duration}
                  </Chip>
                  <Chip color="primary" variant="flat" className="text-white bg-white/10">
                    {courseData.language}
                  </Chip>
                  {courseData.certificate && (
                    <Chip color="warning" variant="flat" className="text-white bg-uk-gold/20">
                      Certificate Included
                    </Chip>
                  )}
                </div>
                
                <div className="flex items-center gap-2 mb-6">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg 
                        key={star} 
                        className={`w-5 h-5 ${star <= Math.floor(courseData.rating) ? "text-uk-gold" : "text-gray-300"}`} 
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-white">{courseData.rating} ({courseData.reviewCount} reviews)</span>
                  <span className="mx-2">|</span>
                  <span>{courseData.students} students enrolled</span>
                </div>
                
                <div className="flex items-center gap-4 mt-8">
                  <Avatar 
                    src={courseData.instructor.avatar} 
                    className="w-12 h-12" 
                    isBordered
                  />
                  <div>
                    <p className="font-medium">{courseData.instructor.name}</p>
                    <p className="text-sm text-white/70">{courseData.instructor.title}</p>
                  </div>
                </div>
              </div>
              
              <div className="w-full md:w-1/3">
                <Card className="shadow-xl">
                  <CardBody className="p-0">
                    <div className="relative w-full h-48 bg-gray-200 dark:bg-gray-700">
                      <Image 
                        src={courseData.image} 
                        alt={courseData.title}
                        fill
                        className="object-contain rounded-t-lg p-4"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-center mb-6">
                        <div className="text-3xl font-bold text-uk-blue">£{courseData.price}</div>
                      </div>
                      
                      <Button 
                        className="w-full mb-3 bg-uk-gold text-uk-blue hover:bg-uk-gold/90"
                        size="lg"
                      >
                        Enroll Now
                      </Button>
                      
                      <Button 
                        className="w-full mb-6" 
                        variant="bordered"
                        size="lg"
                      >
                        Add to Wishlist
                      </Button>
                      
                      <Divider className="my-4" />
                      
                      <div className="space-y-4">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Start Date</span>
                          <span className="font-medium">{courseData.startDate}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Duration</span>
                          <span className="font-medium">{courseData.duration}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Level</span>
                          <span className="font-medium">{courseData.level}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Language</span>
                          <span className="font-medium">{courseData.language}</span>
                        </div>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Course Content */}
      <div className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <Tabs 
              selectedKey={activeTab}
              onSelectionChange={setActiveTab as any}
              color="primary" 
              variant="underlined"
              classNames={{
                tab: "text-uk-blue dark:text-white data-[selected=true]:text-uk-gold",
                cursor: "bg-uk-gold",
                tabList: "gap-6 w-full relative rounded-none p-0 border-b border-divider"
              }}
            >
              <Tab key="overview" title="Overview">
                <div className="py-8">
                  <h2 className="text-2xl font-bold text-uk-blue dark:text-white mb-4">About This Course</h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-8">
                    {courseData.fullDescription}
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <div>
                      <h3 className="text-xl font-semibold text-uk-blue dark:text-white mb-4">What You'll Learn</h3>
                      <ul className="space-y-3">
                        {courseData.outcomes.map((outcome, index) => (
                          <li key={index} className="flex items-start">
                            <svg className="w-5 h-5 text-uk-gold mt-1 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-gray-600 dark:text-gray-300">{outcome}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold text-uk-blue dark:text-white mb-4">Prerequisites</h3>
                      <ul className="space-y-3">
                        {courseData.prerequisites.map((prerequisite, index) => (
                          <li key={index} className="flex items-start">
                            <svg className="w-5 h-5 text-uk-blue dark:text-gray-400 mt-1 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span className="text-gray-600 dark:text-gray-300">{prerequisite}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg mb-12">
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
                      <Avatar 
                        src={courseData.instructor.avatar} 
                        className="w-16 h-16" 
                        isBordered
                      />
                      <div>
                        <h3 className="text-xl font-semibold text-uk-blue dark:text-white">Your Instructor</h3>
                        <p className="font-medium text-gray-700 dark:text-gray-300">{courseData.instructor.name}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{courseData.instructor.title}</p>
                        <p className="text-gray-600 dark:text-gray-300">{courseData.instructor.bio}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Tab>
              
              <Tab key="curriculum" title="Curriculum">
                <div className="py-8">
                  <h2 className="text-2xl font-bold text-uk-blue dark:text-white mb-6">Course Curriculum</h2>
                  
                  <Accordion variant="bordered" className="mb-8">
                    {courseData.modules.map((module, index) => (
                      <AccordionItem 
                        key={index} 
                        aria-label={module.title} 
                        title={
                          <div className="flex justify-between w-full">
                            <div>{module.title}</div>
                            <div className="text-gray-500 dark:text-gray-400 text-sm">{module.lessons.length} lessons</div>
                          </div>
                        }
                        classNames={{
                          title: "text-uk-blue dark:text-white font-medium",
                          content: "text-gray-600 dark:text-gray-300"
                        }}
                      >
                        <ul className="space-y-3 py-2">
                          {module.lessons.map((lesson, lessonIndex) => (
                            <li key={lessonIndex} className="flex items-center justify-between p-2 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md">
                              <div className="flex items-center">
                                <svg className="w-5 h-5 text-uk-gold mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span>{lesson}</span>
                              </div>
                              <Chip size="sm" variant="flat" color="primary">Preview</Chip>
                            </li>
                          ))}
                        </ul>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </Tab>
              
              <Tab key="reviews" title="Reviews">
                <div className="py-8">
                  <div className="flex flex-col md:flex-row gap-8 mb-10">
                    <div className="w-full md:w-1/3 bg-gray-50 dark:bg-gray-800 p-6 rounded-lg text-center">
                      <div className="text-5xl font-bold text-uk-blue dark:text-white mb-2">{courseData.rating}</div>
                      <div className="flex justify-center mb-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <svg 
                            key={star} 
                            className={`w-5 h-5 ${star <= Math.floor(courseData.rating) ? "text-uk-gold" : "text-gray-300"}`} 
                            fill="currentColor" 
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <p className="text-gray-600 dark:text-gray-300">Based on {courseData.reviewCount} reviews</p>
                    </div>
                    
                    <div className="w-full md:w-2/3">
                      <h3 className="text-xl font-semibold text-uk-blue dark:text-white mb-4">Student Feedback</h3>
                      
                      <div className="space-y-6">
                        {courseData.reviews.map((review, index) => (
                          <div key={index} className="border-b border-gray-200 dark:border-gray-700 pb-6 last:border-0">
                            <div className="flex justify-between mb-2">
                              <div className="font-medium text-uk-blue dark:text-white">{review.name}</div>
                              <div className="text-sm text-gray-500 dark:text-gray-400">{review.date}</div>
                            </div>
                            <div className="flex mb-2">
                              {[1, 2, 3, 4, 5].map((star) => (
                                <svg 
                                  key={star} 
                                  className={`w-4 h-4 ${star <= review.rating ? "text-uk-gold" : "text-gray-300"}`} 
                                  fill="currentColor" 
                                  viewBox="0 0 20 20"
                                >
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                              ))}
                            </div>
                            <p className="text-gray-600 dark:text-gray-300">{review.comment}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="bg-uk-blue py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Advance Your Digital Marketing Skills?</h2>
            <p className="text-xl text-white/80 mb-8">Join {courseData.students}+ students who have already enrolled in this course.</p>
            <Button 
              size="lg" 
              className="bg-uk-gold text-uk-blue hover:bg-uk-gold/90 text-lg px-8"
            >
              Enroll Now for £{courseData.price}
            </Button>
          </div>
        </div>
      </div>
    </MainLayout>
  )
} 