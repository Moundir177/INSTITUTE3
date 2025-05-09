'use client'

import React, { useState } from 'react'
import { 
  Card, 
  CardBody, 
  Input, 
  Button, 
  Textarea,
  Select,
  SelectItem,
  Checkbox
} from '@nextui-org/react'
import MainLayout from '@/components/layout/MainLayout'

export default function ContactPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [inquiry, setInquiry] = useState("general")
  const [message, setMessage] = useState("")
  const [consent, setConsent] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      // Reset form
      setName("")
      setEmail("")
      setPhone("")
      setInquiry("general")
      setMessage("")
      setConsent(false)
      
      // You would typically show a success message here
      alert("Thank you for your inquiry. We will get back to you shortly.")
    }, 1500)
  }
  
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative py-20 bg-uk-blue">
        <div className="absolute inset-0 bg-[url('/images/uk-pattern.png')] opacity-10"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Contact <span className="text-uk-gold">Us</span>
            </h1>
            <p className="text-xl text-white/90 mb-8">
              We're here to help with any questions about our courses or programs
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-2xl font-bold text-uk-blue dark:text-white mb-6">Send Us a Message</h2>
                
                <Card className="shadow-md">
                  <CardBody className="p-6">
                    <form onSubmit={handleSubmit}>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <Input
                            label="Full Name"
                            placeholder="Enter your full name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            variant="bordered"
                            isRequired
                            classNames={{
                              label: "text-gray-600 dark:text-gray-400",
                            }}
                          />
                        </div>
                        <div>
                          <Input
                            label="Email Address"
                            placeholder="Enter your email address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            variant="bordered"
                            isRequired
                            type="email"
                            classNames={{
                              label: "text-gray-600 dark:text-gray-400",
                            }}
                          />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <Input
                            label="Phone Number"
                            placeholder="Enter your phone number"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            variant="bordered"
                            classNames={{
                              label: "text-gray-600 dark:text-gray-400",
                            }}
                          />
                        </div>
                        <div>
                          <Select
                            label="Type of Inquiry"
                            placeholder="Select an inquiry type"
                            selectedKeys={[inquiry]}
                            onChange={(e) => setInquiry(e.target.value)}
                            variant="bordered"
                            isRequired
                            classNames={{
                              label: "text-gray-600 dark:text-gray-400",
                            }}
                          >
                            <SelectItem key="general" value="general">General Inquiry</SelectItem>
                            <SelectItem key="course" value="course">Course Information</SelectItem>
                            <SelectItem key="enrollment" value="enrollment">Enrollment Process</SelectItem>
                            <SelectItem key="fees" value="fees">Fees and Funding</SelectItem>
                            <SelectItem key="other" value="other">Other</SelectItem>
                          </Select>
                        </div>
                      </div>
                      
                      <div className="mb-6">
                        <Textarea
                          label="Message"
                          placeholder="Please provide details about your inquiry"
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          variant="bordered"
                          isRequired
                          minRows={4}
                          classNames={{
                            label: "text-gray-600 dark:text-gray-400",
                          }}
                        />
                      </div>
                      
                      <div className="mb-6">
                        <Checkbox
                          isSelected={consent}
                          onValueChange={setConsent}
                          color="primary"
                        >
                          <span className="text-sm text-gray-600 dark:text-gray-400">
                            I agree to the <a href="/privacy-policy" className="text-uk-blue dark:text-uk-gold underline">Privacy Policy</a> and consent to being contacted regarding my inquiry.
                          </span>
                        </Checkbox>
                      </div>
                      
                      <Button
                        type="submit"
                        className="w-full sm:w-auto bg-uk-blue text-white dark:bg-dark-uk-blue dark:text-white"
                        size="lg"
                        isLoading={isSubmitting}
                        isDisabled={!consent || isSubmitting}
                      >
                        {isSubmitting ? "Submitting..." : "Submit Inquiry"}
                      </Button>
                    </form>
                  </CardBody>
                </Card>
              </div>
              
              {/* Contact Information */}
              <div>
                <h2 className="text-2xl font-bold text-uk-blue dark:text-white mb-6">Contact Information</h2>
                
                <div className="space-y-8">
                  <Card className="shadow-md">
                    <CardBody className="p-6">
                      <div className="flex items-start">
                        <div className="mr-4 text-uk-gold dark:text-uk-gold">
                          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-uk-blue dark:text-white mb-2">Main Campus</h3>
                          <p className="text-gray-600 dark:text-gray-300">
                            123 Education Street<br />
                            London, SW1 1AA<br />
                            United Kingdom
                          </p>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                  
                  <Card className="shadow-md">
                    <CardBody className="p-6">
                      <div className="flex items-start">
                        <div className="mr-4 text-uk-gold dark:text-uk-gold">
                          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-uk-blue dark:text-white mb-2">Phone</h3>
                          <p className="text-gray-600 dark:text-gray-300 mb-2">
                            Main: +44 1234 567890<br />
                            Admissions: +44 1234 567891<br />
                            Student Support: +44 1234 567892
                          </p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            Monday-Friday: 9am-5pm GMT
                          </p>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                  
                  <Card className="shadow-md">
                    <CardBody className="p-6">
                      <div className="flex items-start">
                        <div className="mr-4 text-uk-gold dark:text-uk-gold">
                          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-uk-blue dark:text-white mb-2">Email</h3>
                          <p className="text-gray-600 dark:text-gray-300">
                            General Inquiries: info@ukinstitute.edu<br />
                            Admissions: admissions@ukinstitute.edu<br />
                            Student Support: support@ukinstitute.edu
                          </p>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                  
                  <Card className="shadow-md">
                    <CardBody className="p-6">
                      <div className="flex items-start">
                        <div className="mr-4 text-uk-gold dark:text-uk-gold">
                          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-uk-blue dark:text-white mb-2">Office Hours</h3>
                          <p className="text-gray-600 dark:text-gray-300">
                            Monday-Friday: 9am-5pm GMT<br />
                            Saturday: 10am-2pm GMT<br />
                            Sunday: Closed
                          </p>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-uk-blue dark:text-white mb-8 text-center">Find Us</h2>
            
            <div className="rounded-xl overflow-hidden shadow-lg h-[400px] relative">
              {/* This would be replaced with an actual map component in a real implementation */}
              <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                <p className="text-gray-500 dark:text-gray-400">
                  Interactive map would be displayed here
                </p>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <h3 className="text-lg font-semibold text-uk-blue dark:text-white mb-2">Getting Here</h3>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Our campus is conveniently located near public transportation. The nearest tube station is Oxford Circus (5-minute walk), and several bus routes stop nearby. Limited parking is available for visitors with prior arrangement.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-uk-blue dark:text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Find quick answers to common inquiries
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <Card className="shadow-md mb-6">
              <CardBody className="p-6">
                <h3 className="text-lg font-semibold text-uk-blue dark:text-white mb-2">How quickly will you respond to my inquiry?</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We aim to respond to all inquiries within 24-48 hours during business days. For urgent matters, we recommend calling our main phone line directly.
                </p>
              </CardBody>
            </Card>
            
            <Card className="shadow-md mb-6">
              <CardBody className="p-6">
                <h3 className="text-lg font-semibold text-uk-blue dark:text-white mb-2">Can I schedule a campus tour?</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Yes, we offer campus tours for prospective students. Please contact our admissions office at admissions@ukinstitute.edu or call +44 1234 567891 to schedule a tour.
                </p>
              </CardBody>
            </Card>
            
            <Card className="shadow-md mb-6">
              <CardBody className="p-6">
                <h3 className="text-lg font-semibold text-uk-blue dark:text-white mb-2">How can I speak with an academic advisor?</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  You can request an appointment with an academic advisor through our online booking system or by calling our student support line. Our advisors are available for in-person, phone, or video consultations.
                </p>
              </CardBody>
            </Card>
            
            <Card className="shadow-md">
              <CardBody className="p-6">
                <h3 className="text-lg font-semibold text-uk-blue dark:text-white mb-2">Is there parking available on campus?</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Limited parking is available for visitors with prior arrangement. Please contact us at least 24 hours in advance to reserve a parking space. We encourage the use of public transportation whenever possible.
                </p>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-uk-blue">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Take the Next Step?</h2>
            <p className="text-xl text-white/80 mb-8">
              Download our course prospectus or schedule a consultation with our advisors
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-uk-gold text-uk-blue hover:bg-uk-gold/90 text-lg px-8"
              >
                Download Prospectus
              </Button>
              <Button 
                size="lg" 
                variant="bordered" 
                className="border-white text-white hover:bg-white/10 text-lg px-8"
              >
                Book a Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  )
} 