'use client'

import React, { useState } from 'react'
import { 
  Card, 
  CardBody, 
  CardHeader, 
  Tabs, 
  Tab, 
  User, 
  Button, 
  Input, 
  Textarea,
  Avatar,
  Chip,
  Progress,
  Divider,
  Switch
} from '@nextui-org/react'
import Image from 'next/image'
import MainLayout from '@/components/layout/MainLayout'

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("personal")
  
  // Mock data
  const userData = {
    name: "John Smith",
    email: "john.smith@example.com",
    role: "Student",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    joinDate: "September 2022",
    phone: "+44 7911 123456",
    address: "123 Baker Street, London, UK",
    bio: "I'm a passionate learner interested in business management and digital marketing. Currently pursuing certification in Advanced Digital Marketing Strategies."
  }
  
  const enrolledCourses = [
    {
      id: 1,
      title: "Advanced Digital Marketing Strategies",
      instructor: "Dr. Emily Johnson",
      progress: 68,
      status: "In Progress",
      startDate: "15 Jan 2023",
      endDate: "30 Jun 2023",
      image: "/images/course-marketing.jpg"
    },
    {
      id: 2,
      title: "Business Leadership and Management",
      instructor: "Prof. Michael Williams",
      progress: 100,
      status: "Completed",
      startDate: "10 Sep 2022",
      endDate: "20 Dec 2022",
      image: "/images/course-business.jpg"
    },
    {
      id: 3,
      title: "Introduction to Data Analytics",
      instructor: "Dr. Sarah Thompson",
      progress: 25,
      status: "In Progress",
      startDate: "5 Mar 2023",
      endDate: "15 Aug 2023",
      image: "/images/course-data.jpg"
    }
  ]
  
  const certificates = [
    {
      id: 1,
      title: "Business Leadership and Management",
      issueDate: "20 Dec 2022",
      expiryDate: "N/A (Lifetime)",
      certNumber: "BLM-2022-JS-8754",
      downloadLink: "#"
    }
  ]
  
  const notifications = {
    emailUpdates: true,
    courseReminders: true,
    promotionalOffers: false,
    accountAlerts: true
  }
  
  return (
    <MainLayout>
      <div className="py-12 bg-gradient-to-b from-white to-uk-silver/20 dark:from-gray-900 dark:to-dark-uk-blue/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8">
              
              {/* Sidebar */}
              <div className="w-full md:w-1/3">
                <Card className="shadow-md">
                  <CardBody className="items-center p-6">
                    <Avatar 
                      src={userData.avatar} 
                      className="w-24 h-24 text-large mb-4"
                      isBordered
                      color="primary"
                    />
                    <h2 className="text-2xl font-bold text-uk-blue dark:text-white">{userData.name}</h2>
                    <p className="text-gray-500 dark:text-gray-400">{userData.email}</p>
                    <Chip color="primary" className="mt-2">{userData.role}</Chip>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Member since {userData.joinDate}</p>
                    
                    <Divider className="my-4" />
                    
                    <div className="w-full">
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">Profile Completeness</span>
                        <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">85%</span>
                      </div>
                      <Progress value={85} color="primary" className="h-2" />
                    </div>
                    
                    <Button 
                      className="mt-6 w-full bg-uk-blue text-white dark:bg-dark-uk-blue dark:text-white"
                    >
                      Edit Profile
                    </Button>
                  </CardBody>
                </Card>
                
                <Card className="shadow-md mt-6">
                  <CardHeader className="pb-0">
                    <h3 className="text-lg font-semibold text-uk-blue dark:text-white">Quick Stats</h3>
                  </CardHeader>
                  <CardBody>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                        <p className="text-2xl font-bold text-uk-blue dark:text-uk-gold">3</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Courses</p>
                      </div>
                      <div className="text-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                        <p className="text-2xl font-bold text-uk-blue dark:text-uk-gold">1</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Certificates</p>
                      </div>
                      <div className="text-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                        <p className="text-2xl font-bold text-uk-blue dark:text-uk-gold">12</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Assignments</p>
                      </div>
                      <div className="text-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                        <p className="text-2xl font-bold text-uk-blue dark:text-uk-gold">86%</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Avg. Score</p>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </div>
              
              {/* Main Content */}
              <div className="w-full md:w-2/3">
                <Card className="shadow-md">
                  <CardBody className="p-0">
                    <Tabs 
                      selectedKey={activeTab}
                      onSelectionChange={setActiveTab as any}
                      color="primary" 
                      variant="underlined"
                      classNames={{
                        tab: "text-uk-blue dark:text-white data-[selected=true]:text-uk-gold",
                        cursor: "bg-uk-gold",
                        tabList: "gap-6 w-full bg-white dark:bg-gray-800 px-4 relative rounded-none border-b border-divider"
                      }}
                    >
                      <Tab key="personal" title="Personal Info">
                        <div className="p-6">
                          <h3 className="text-xl font-semibold text-uk-blue dark:text-white mb-4">Personal Information</h3>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div>
                              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Full Name</label>
                              <Input 
                                value={userData.name} 
                                variant="bordered" 
                                isReadOnly
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email Address</label>
                              <Input 
                                value={userData.email} 
                                variant="bordered" 
                                isReadOnly
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Phone Number</label>
                              <Input 
                                value={userData.phone} 
                                variant="bordered" 
                                isReadOnly
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Address</label>
                              <Input 
                                value={userData.address} 
                                variant="bordered" 
                                isReadOnly
                              />
                            </div>
                          </div>
                          
                          <div className="mb-6">
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Bio</label>
                            <Textarea 
                              value={userData.bio} 
                              variant="bordered" 
                              isReadOnly
                              minRows={3}
                            />
                          </div>
                          
                          <div className="flex justify-end">
                            <Button 
                              className="bg-uk-blue text-white dark:bg-dark-uk-blue dark:text-white"
                            >
                              Edit Information
                            </Button>
                          </div>
                        </div>
                      </Tab>
                      
                      <Tab key="courses" title="My Courses">
                        <div className="p-6 space-y-6">
                          <h3 className="text-xl font-semibold text-uk-blue dark:text-white mb-4">Enrolled Courses</h3>
                          
                          {enrolledCourses.map((course) => (
                            <Card key={course.id} className="mb-4 shadow-sm hover:shadow-md transition-shadow duration-200">
                              <CardBody>
                                <div className="flex flex-col md:flex-row gap-4">
                                  <div className="relative w-full md:w-32 h-24 rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-700">
                                    {course.image ? (
                                      <Image
                                        src={course.image}
                                        alt={course.title}
                                        fill
                                        className="object-cover"
                                      />
                                    ) : (
                                      <div className="flex items-center justify-center h-full bg-gray-100 dark:bg-gray-700">
                                        <span className="text-gray-400">No Image</span>
                                      </div>
                                    )}
                                  </div>
                                  
                                  <div className="flex-1">
                                    <div className="flex flex-col md:flex-row justify-between">
                                      <div>
                                        <h4 className="text-lg font-semibold text-uk-blue dark:text-white">{course.title}</h4>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">Instructor: {course.instructor}</p>
                                      </div>
                                      <div className="mt-2 md:mt-0">
                                        <Chip 
                                          color={course.status === "Completed" ? "success" : "primary"}
                                          variant="flat"
                                        >
                                          {course.status}
                                        </Chip>
                                      </div>
                                    </div>
                                    
                                    <div className="mt-3">
                                      <div className="flex justify-between mb-1">
                                        <span className="text-xs font-semibold text-gray-700 dark:text-gray-300">Progress</span>
                                        <span className="text-xs font-semibold text-gray-700 dark:text-gray-300">{course.progress}%</span>
                                      </div>
                                      <Progress value={course.progress} color={course.status === "Completed" ? "success" : "primary"} className="h-2" />
                                    </div>
                                    
                                    <div className="flex flex-col md:flex-row justify-between mt-3">
                                      <p className="text-sm text-gray-500 dark:text-gray-400">
                                        Duration: {course.startDate} - {course.endDate}
                                      </p>
                                      <Button 
                                        size="sm" 
                                        className="mt-2 md:mt-0 bg-uk-blue text-white dark:bg-dark-uk-blue dark:text-white"
                                      >
                                        {course.status === "Completed" ? "View Certificate" : "Continue Learning"}
                                      </Button>
                                    </div>
                                  </div>
                                </div>
                              </CardBody>
                            </Card>
                          ))}
                        </div>
                      </Tab>
                      
                      <Tab key="certificates" title="Certificates">
                        <div className="p-6">
                          <h3 className="text-xl font-semibold text-uk-blue dark:text-white mb-4">My Certificates</h3>
                          
                          {certificates.length > 0 ? (
                            <div className="space-y-4">
                              {certificates.map((cert) => (
                                <Card key={cert.id} className="shadow-sm hover:shadow-md transition-shadow duration-200">
                                  <CardBody>
                                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                                      <div>
                                        <h4 className="text-lg font-semibold text-uk-blue dark:text-white">{cert.title}</h4>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">Certificate ID: {cert.certNumber}</p>
                                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                                          Issued: {cert.issueDate} | Expires: {cert.expiryDate}
                                        </p>
                                      </div>
                                      <div className="mt-3 md:mt-0 flex space-x-2">
                                        <Button 
                                          size="sm" 
                                          className="bg-uk-blue text-white dark:bg-dark-uk-blue dark:text-white"
                                          as="a"
                                          href={cert.downloadLink}
                                          target="_blank"
                                        >
                                          Download
                                        </Button>
                                        <Button 
                                          size="sm" 
                                          variant="bordered"
                                        >
                                          Verify
                                        </Button>
                                      </div>
                                    </div>
                                  </CardBody>
                                </Card>
                              ))}
                            </div>
                          ) : (
                            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 text-center">
                              <div className="mx-auto w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center mb-4">
                                <svg className="w-8 h-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                </svg>
                              </div>
                              <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">No Certificates Yet</h4>
                              <p className="text-gray-500 dark:text-gray-400 mb-4">
                                Complete a course to earn your first certificate
                              </p>
                              <Button 
                                className="bg-uk-blue text-white dark:bg-dark-uk-blue dark:text-white"
                              >
                                Browse Courses
                              </Button>
                            </div>
                          )}
                        </div>
                      </Tab>
                      
                      <Tab key="settings" title="Settings">
                        <div className="p-6">
                          <h3 className="text-xl font-semibold text-uk-blue dark:text-white mb-4">Account Settings</h3>
                          
                          <div className="mb-8">
                            <h4 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-3">Password</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <Input
                                label="Current Password"
                                type="password"
                                placeholder="Enter current password"
                                variant="bordered"
                              />
                              <div></div>
                              <Input
                                label="New Password"
                                type="password"
                                placeholder="Enter new password"
                                variant="bordered"
                              />
                              <Input
                                label="Confirm New Password"
                                type="password"
                                placeholder="Confirm new password"
                                variant="bordered"
                              />
                            </div>
                            <Button 
                              className="mt-4 bg-uk-blue text-white dark:bg-dark-uk-blue dark:text-white"
                            >
                              Update Password
                            </Button>
                          </div>
                          
                          <Divider className="my-6" />
                          
                          <div className="mb-8">
                            <h4 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-3">Notification Preferences</h4>
                            <div className="space-y-4">
                              <div className="flex justify-between items-center">
                                <div>
                                  <p className="text-gray-700 dark:text-gray-300 font-medium">Email Updates</p>
                                  <p className="text-sm text-gray-500 dark:text-gray-400">Receive emails about your account activity</p>
                                </div>
                                <Switch 
                                  isSelected={notifications.emailUpdates} 
                                  color="primary"
                                />
                              </div>
                              
                              <div className="flex justify-between items-center">
                                <div>
                                  <p className="text-gray-700 dark:text-gray-300 font-medium">Course Reminders</p>
                                  <p className="text-sm text-gray-500 dark:text-gray-400">Get notified about deadlines and new lessons</p>
                                </div>
                                <Switch 
                                  isSelected={notifications.courseReminders} 
                                  color="primary"
                                />
                              </div>
                              
                              <div className="flex justify-between items-center">
                                <div>
                                  <p className="text-gray-700 dark:text-gray-300 font-medium">Promotional Offers</p>
                                  <p className="text-sm text-gray-500 dark:text-gray-400">Receive emails about special offers and promotions</p>
                                </div>
                                <Switch 
                                  isSelected={notifications.promotionalOffers} 
                                  color="primary"
                                />
                              </div>
                              
                              <div className="flex justify-between items-center">
                                <div>
                                  <p className="text-gray-700 dark:text-gray-300 font-medium">Account Alerts</p>
                                  <p className="text-sm text-gray-500 dark:text-gray-400">Get notified about important account changes</p>
                                </div>
                                <Switch 
                                  isSelected={notifications.accountAlerts} 
                                  color="primary"
                                />
                              </div>
                            </div>
                            <Button 
                              className="mt-4 bg-uk-blue text-white dark:bg-dark-uk-blue dark:text-white"
                            >
                              Save Preferences
                            </Button>
                          </div>
                          
                          <Divider className="my-6" />
                          
                          <div>
                            <h4 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-3">Danger Zone</h4>
                            <Card className="bg-red-50 dark:bg-red-900/20 border-1 border-red-200 dark:border-red-800">
                              <CardBody>
                                <div className="flex flex-col md:flex-row justify-between md:items-center">
                                  <div>
                                    <h5 className="text-red-600 dark:text-red-400 font-medium">Delete Account</h5>
                                    <p className="text-sm text-red-500 dark:text-red-300 mt-1">
                                      Permanently delete your account and all associated data
                                    </p>
                                  </div>
                                  <Button 
                                    color="danger" 
                                    variant="flat"
                                    className="mt-3 md:mt-0"
                                  >
                                    Delete Account
                                  </Button>
                                </div>
                              </CardBody>
                            </Card>
                          </div>
                        </div>
                      </Tab>
                    </Tabs>
                  </CardBody>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  )
} 