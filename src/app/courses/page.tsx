'use client'

import React, { useState } from 'react'
import { 
  Card, 
  CardBody, 
  Input, 
  Button, 
  Select, 
  SelectItem, 
  Pagination,
  Chip,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem
} from '@nextui-org/react'
import Image from 'next/image'
import Link from 'next/link'
import MainLayout from '@/components/layout/MainLayout'

// Mock course data
const courses = [
  {
    id: "1",
    title: "Advanced Digital Marketing Strategies",
    instructor: "Dr. Emily Johnson",
    image: "/images/course-marketing.jpg",
    price: 1499,
    rating: 4.8,
    reviewCount: 247,
    level: "Advanced",
    duration: "6 months",
    category: "Marketing",
    featured: true
  },
  {
    id: "2",
    title: "Business Leadership and Management",
    instructor: "Prof. Michael Williams",
    image: "/images/course-business.jpg",
    price: 1299,
    rating: 4.7,
    reviewCount: 189,
    level: "Intermediate",
    duration: "4 months",
    category: "Business",
    featured: true
  },
  {
    id: "3",
    title: "Introduction to Data Analytics",
    instructor: "Dr. Sarah Thompson",
    image: "/images/course-data.jpg",
    price: 999,
    rating: 4.5,
    reviewCount: 156,
    level: "Beginner",
    duration: "3 months",
    category: "Data Science",
    featured: false
  },
  {
    id: "4",
    title: "Strategic Financial Management",
    instructor: "Prof. Robert Chen",
    image: "/images/course-finance.jpg",
    price: 1399,
    rating: 4.9,
    reviewCount: 213,
    level: "Advanced",
    duration: "5 months",
    category: "Finance",
    featured: true
  },
  {
    id: "5",
    title: "Project Management Professional (PMP)",
    instructor: "Dr. Lisa Crawford",
    image: "/images/course-project.jpg",
    price: 1599,
    rating: 4.8,
    reviewCount: 275,
    level: "Intermediate",
    duration: "6 months",
    category: "Management",
    featured: false
  },
  {
    id: "6",
    title: "Human Resource Management Essentials",
    instructor: "Prof. Amanda Jenkins",
    image: "/images/course-hr.jpg",
    price: 899,
    rating: 4.6,
    reviewCount: 142,
    level: "Beginner",
    duration: "3 months",
    category: "HR",
    featured: false
  },
  {
    id: "7",
    title: "Supply Chain Management and Logistics",
    instructor: "Dr. Thomas Wilson",
    image: "/images/course-supply.jpg",
    price: 1199,
    rating: 4.7,
    reviewCount: 168,
    level: "Intermediate",
    duration: "4 months",
    category: "Operations",
    featured: false
  },
  {
    id: "8",
    title: "Corporate Sustainability and ESG",
    instructor: "Prof. Elena Rodriguez",
    image: "/images/course-sustainability.jpg",
    price: 1299,
    rating: 4.8,
    reviewCount: 157,
    level: "Advanced",
    duration: "4 months",
    category: "Business",
    featured: true
  },
]

const categories = [
  { label: "All Categories", value: "all" },
  { label: "Business", value: "Business" },
  { label: "Marketing", value: "Marketing" },
  { label: "Finance", value: "Finance" },
  { label: "Data Science", value: "Data Science" },
  { label: "Management", value: "Management" },
  { label: "HR", value: "HR" },
  { label: "Operations", value: "Operations" },
]

const levels = [
  { label: "All Levels", value: "all" },
  { label: "Beginner", value: "Beginner" },
  { label: "Intermediate", value: "Intermediate" },
  { label: "Advanced", value: "Advanced" },
]

const durations = [
  { label: "Any Duration", value: "all" },
  { label: "1-3 months", value: "short" },
  { label: "4-6 months", value: "medium" },
  { label: "Over 6 months", value: "long" },
]

export default function CoursesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("all")
  const [levelFilter, setLevelFilter] = useState("all")
  const [durationFilter, setDurationFilter] = useState("all")
  const [sortOption, setSortOption] = useState("popularity")
  const [page, setPage] = useState(1)
  
  // Filter courses based on filters
  const filteredCourses = courses.filter(course => {
    // Search term filter
    if (searchTerm && !course.title.toLowerCase().includes(searchTerm.toLowerCase())) {
      return false
    }
    
    // Category filter
    if (categoryFilter !== "all" && course.category !== categoryFilter) {
      return false
    }
    
    // Level filter
    if (levelFilter !== "all" && course.level !== levelFilter) {
      return false
    }
    
    // Duration filter
    if (durationFilter !== "all") {
      const durationInMonths = parseInt(course.duration.split(" ")[0])
      if (durationFilter === "short" && durationInMonths > 3) return false
      if (durationFilter === "medium" && (durationInMonths < 4 || durationInMonths > 6)) return false
      if (durationFilter === "long" && durationInMonths <= 6) return false
    }
    
    return true
  })
  
  // Sort filtered courses
  const sortedCourses = [...filteredCourses].sort((a, b) => {
    switch (sortOption) {
      case "price-low":
        return a.price - b.price
      case "price-high":
        return b.price - a.price
      case "rating":
        return b.rating - a.rating
      default: // popularity - by review count
        return b.reviewCount - a.reviewCount
    }
  })
  
  // Pagination
  const coursesPerPage = 6
  const totalPages = Math.ceil(sortedCourses.length / coursesPerPage)
  const paginatedCourses = sortedCourses.slice(
    (page - 1) * coursesPerPage,
    page * coursesPerPage
  )
  
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative py-20 bg-uk-blue">
        <div className="absolute inset-0 bg-[url('/images/uk-pattern.png')] opacity-10"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="text-uk-gold">Courses</span>
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Discover professional courses designed to advance your career
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
              <Input
                placeholder="Search for courses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                startContent={
                  <svg className="w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                }
                className="w-full sm:w-72"
                classNames={{
                  input: "bg-white"
                }}
              />
              <Button 
                className="bg-uk-gold text-uk-blue font-medium"
              >
                Search
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Courses Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Filters Sidebar */}
              <div className="w-full lg:w-1/4">
                <Card className="sticky top-24 shadow-md mb-6">
                  <CardBody className="p-6">
                    <h3 className="text-xl font-semibold text-uk-blue dark:text-white mb-4">Filter Courses</h3>
                    
                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Category
                        </label>
                        <Select
                          placeholder="Select a category"
                          selectedKeys={[categoryFilter]}
                          onChange={(e) => setCategoryFilter(e.target.value)}
                          size="sm"
                          className="w-full"
                        >
                          {categories.map((category) => (
                            <SelectItem key={category.value} value={category.value}>
                              {category.label}
                            </SelectItem>
                          ))}
                        </Select>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Level
                        </label>
                        <Select
                          placeholder="Select a level"
                          selectedKeys={[levelFilter]}
                          onChange={(e) => setLevelFilter(e.target.value)}
                          size="sm"
                          className="w-full"
                        >
                          {levels.map((level) => (
                            <SelectItem key={level.value} value={level.value}>
                              {level.label}
                            </SelectItem>
                          ))}
                        </Select>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Duration
                        </label>
                        <Select
                          placeholder="Select a duration"
                          selectedKeys={[durationFilter]}
                          onChange={(e) => setDurationFilter(e.target.value)}
                          size="sm"
                          className="w-full"
                        >
                          {durations.map((duration) => (
                            <SelectItem key={duration.value} value={duration.value}>
                              {duration.label}
                            </SelectItem>
                          ))}
                        </Select>
                      </div>
                      
                      <Button 
                        className="w-full bg-uk-blue text-white dark:bg-dark-uk-blue dark:text-white"
                        onPress={() => {
                          setCategoryFilter("all")
                          setLevelFilter("all")
                          setDurationFilter("all")
                          setSearchTerm("")
                        }}
                      >
                        Reset Filters
                      </Button>
                    </div>
                  </CardBody>
                </Card>
              </div>
              
              {/* Course List */}
              <div className="w-full lg:w-3/4">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
                  <div>
                    <h2 className="text-2xl font-bold text-uk-blue dark:text-white">
                      {sortedCourses.length} {sortedCourses.length === 1 ? "Course" : "Courses"} Available
                    </h2>
                    {(searchTerm || categoryFilter !== "all" || levelFilter !== "all" || durationFilter !== "all") && (
                      <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                        Showing filtered results
                      </p>
                    )}
                  </div>
                  
                  <div className="mt-3 sm:mt-0">
                    <Dropdown>
                      <DropdownTrigger>
                        <Button 
                          variant="bordered" 
                          endContent={
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          }
                        >
                          Sort by: {sortOption === "popularity" ? "Popularity" : 
                            sortOption === "price-low" ? "Price: Low to High" :
                            sortOption === "price-high" ? "Price: High to Low" : "Rating"}
                        </Button>
                      </DropdownTrigger>
                      <DropdownMenu 
                        aria-label="Sort options"
                        onAction={(key) => setSortOption(key as string)}
                        selectedKeys={[sortOption]}
                        selectionMode="single"
                      >
                        <DropdownItem key="popularity">Popularity</DropdownItem>
                        <DropdownItem key="price-low">Price: Low to High</DropdownItem>
                        <DropdownItem key="price-high">Price: High to Low</DropdownItem>
                        <DropdownItem key="rating">Rating</DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                  </div>
                </div>
                
                {paginatedCourses.length > 0 ? (
                  <>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
                      {paginatedCourses.map((course) => (
                        <Link key={course.id} href={`/courses/${course.id}`} className="block h-full">
                          <Card className="h-full shadow-md hover:shadow-lg transition-shadow duration-300">
                            <CardBody className="p-0 flex flex-col">
                              <div className="relative w-full h-48 bg-gray-100 dark:bg-gray-700">
                                {course.image ? (
                                  <Image
                                    src={course.image}
                                    alt={course.title}
                                    fill
                                    className="object-cover rounded-t-lg"
                                  />
                                ) : (
                                  <div className="flex items-center justify-center h-full">
                                    <span className="text-gray-400">No Image</span>
                                  </div>
                                )}
                                {course.featured && (
                                  <div className="absolute top-3 left-3">
                                    <Chip color="warning" className="bg-uk-gold text-uk-blue">Featured</Chip>
                                  </div>
                                )}
                              </div>
                              
                              <div className="p-5 flex-1 flex flex-col">
                                <h3 className="text-lg font-semibold text-uk-blue dark:text-white mb-2 line-clamp-2">
                                  {course.title}
                                </h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                                  Instructor: {course.instructor}
                                </p>
                                
                                <div className="flex items-center mb-3">
                                  <div className="flex mr-1">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                      <svg 
                                        key={star} 
                                        className={`w-4 h-4 ${star <= Math.floor(course.rating) ? "text-uk-gold" : "text-gray-300"}`} 
                                        fill="currentColor" 
                                        viewBox="0 0 20 20"
                                      >
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                      </svg>
                                    ))}
                                  </div>
                                  <span className="text-sm text-gray-500 dark:text-gray-400">
                                    ({course.reviewCount})
                                  </span>
                                </div>
                                
                                <div className="flex gap-2 mb-4">
                                  <Chip size="sm" variant="flat" color="primary">
                                    {course.level}
                                  </Chip>
                                  <Chip size="sm" variant="flat" color="secondary">
                                    {course.duration}
                                  </Chip>
                                </div>
                                
                                <div className="mt-auto pt-3 border-t border-gray-100 dark:border-gray-700 flex justify-between items-center">
                                  <span className="text-xl font-bold text-uk-blue dark:text-white">
                                    £{course.price}
                                  </span>
                                  <Button 
                                    size="sm" 
                                    className="bg-uk-blue text-white dark:bg-dark-uk-blue dark:text-white"
                                  >
                                    View Details
                                  </Button>
                                </div>
                              </div>
                            </CardBody>
                          </Card>
                        </Link>
                      ))}
                    </div>
                    
                    {/* Pagination */}
                    {totalPages > 1 && (
                      <div className="flex justify-center mt-10">
                        <Pagination
                          total={totalPages}
                          initialPage={1}
                          page={page}
                          onChange={setPage}
                          color="primary"
                        />
                      </div>
                    )}
                  </>
                ) : (
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-12 text-center">
                    <div className="mx-auto w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center mb-4">
                      <svg className="w-8 h-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                    </div>
                    <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">No Courses Found</h4>
                    <p className="text-gray-500 dark:text-gray-400 mb-6">
                      We couldn't find any courses matching your criteria.
                    </p>
                    <Button 
                      className="bg-uk-blue text-white dark:bg-dark-uk-blue dark:text-white"
                      onPress={() => {
                        setCategoryFilter("all")
                        setLevelFilter("all")
                        setDurationFilter("all")
                        setSearchTerm("")
                      }}
                    >
                      Reset Filters
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call-to-Action Section */}
      <section className="py-16 bg-uk-blue">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Need Help Finding the Right Course?</h2>
            <p className="text-xl text-white/80 mb-8">
              Our academic advisors are here to guide you toward the best educational path for your career goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-uk-gold text-uk-blue hover:bg-uk-gold/90 text-lg px-8"
              >
                Book a Consultation
              </Button>
              <Button 
                size="lg" 
                variant="bordered" 
                className="border-white text-white hover:bg-white/10 text-lg px-8"
              >
                Download Prospectus
              </Button>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  )
} 