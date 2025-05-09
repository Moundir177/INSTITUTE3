import React from 'react'
import Image from 'next/image'
import { Button, Link, Card, CardBody, CardFooter } from '@nextui-org/react'
import MainLayout from '@/components/layout/MainLayout'

export default function CertificatePage() {
  const certificationTypes = [
    {
      title: "Course Completion Certificates",
      description: "Awarded upon successful completion of any course at UK Institute. These certificates confirm your achievement in mastering the course content and passing all required assessments.",
      features: [
        "Digital and physical certificate options",
        "Includes course name, duration, and grade",
        "Signed by course instructor and institute director",
        "Unique verification code for authenticity"
      ],
      icon: (
        <svg className="w-12 h-12 text-uk-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "Professional Diplomas",
      description: "Comprehensive certification for completing a series of related courses that together form a specialization or field of expertise. These diplomas represent significant expertise in a specific area.",
      features: [
        "Recognized by industry partners",
        "Detailed transcript of completed modules",
        "Professional development hours logged",
        "Priority access to related advanced courses"
      ],
      icon: (
        <svg className="w-12 h-12 text-uk-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      title: "Academic Degrees",
      description: "Our bachelor's and master's degree programs are fully accredited and recognized internationally. These prestigious qualifications represent a comprehensive education in your chosen field.",
      features: [
        "Internationally accredited qualifications",
        "Comprehensive academic transcript",
        "Alumni membership and benefits",
        "Pathway to further academic studies"
      ],
      icon: (
        <svg className="w-12 h-12 text-uk-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
        </svg>
      )
    },
    {
      title: "Industry Certifications",
      description: "We offer preparation and testing for recognized industry certifications across various sectors. These certifications are highly valued by employers and validate specific technical skills.",
      features: [
        "Preparation courses for major certifications",
        "Testing facilities on campus",
        "Exam fee discounts for students",
        "Certification renewal support"
      ],
      icon: (
        <svg className="w-12 h-12 text-uk-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    }
  ];

  const verificationSteps = [
    {
      title: "Find Your Certificate ID",
      description: "Locate the unique Certificate ID on your certificate. This alphanumeric code is typically found in the bottom corner of the document."
    },
    {
      title: "Enter ID on Verification Portal",
      description: "Visit our secure verification portal and enter your Certificate ID in the search field."
    },
    {
      title: "View Authentication Results",
      description: "The system will display the certificate details including the recipient's name, course, date issued, and validation status."
    },
    {
      title: "Download Verification Report",
      description: "If needed, download an official verification report for your records or to share with employers."
    }
  ];

  const faqs = [
    {
      question: "How long does it take to receive my certificate after course completion?",
      answer: "Digital certificates are typically issued within 2-3 business days after course completion and final grade submission. Physical certificates, if requested, are sent within 2 weeks to your registered address."
    },
    {
      question: "Are your certifications recognized internationally?",
      answer: "Yes, all UK Institute certificates and degrees are internationally recognized and accredited by relevant educational authorities. Our qualifications are valued by employers and educational institutions worldwide."
    },
    {
      question: "What should I do if I lose my certificate?",
      answer: "You can request a replacement certificate through our Student Services portal. Digital certificates can be reissued immediately, while physical certificates will be reprinted and sent to your address for a small administrative fee."
    },
    {
      question: "Can employers verify the authenticity of my certificate?",
      answer: "Yes, employers can verify the authenticity of your certificate using our online verification system. They simply need to enter the unique Certificate ID on our verification portal to confirm its validity."
    },
    {
      question: "Do certificates expire?",
      answer: "Academic certificates such as degrees and diplomas do not expire. However, some professional and industry certifications may require renewal or continuing education to maintain their validity, depending on industry standards."
    }
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative py-20 bg-uk-blue">
        <div className="absolute inset-0 bg-[url('/images/uk-pattern.png')] opacity-10"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="text-uk-gold">Certificates</span>
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Internationally recognized certifications that validate your skills and knowledge.
            </p>
          </div>
        </div>
      </section>

      {/* Certification Types Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-uk-blue mb-4">Types of Certifications</h2>
            <p className="text-xl text-gray-600">
              We offer a range of certifications to recognize your achievements and validate your expertise.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {certificationTypes.map((cert, index) => (
              <Card key={index} className="border border-gray-200 shadow-md hover:shadow-xl transition-shadow">
                <CardBody className="p-6">
                  <div className="flex items-start mb-6">
                    <div className="flex-shrink-0 mr-4">
                      {cert.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-uk-blue mb-2">{cert.title}</h3>
                      <p className="text-gray-600 text-sm">{cert.description}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-2 mt-4">
                    {cert.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start">
                        <svg className="w-5 h-5 text-uk-gold mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardBody>
                <CardFooter className="border-t border-gray-100 bg-gray-50 px-6 py-3">
                  <Button
                    as={Link}
                    href="/courses"
                    color="primary"
                    variant="flat"
                    className="w-full bg-uk-blue/10 text-uk-blue hover:bg-uk-blue hover:text-white"
                  >
                    Related Courses
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certificate Sample Section */}
      <section className="py-20 bg-gradient-to-b from-white to-uk-silver/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-uk-blue mb-6">Sample Certificate</h2>
              <p className="text-gray-600 mb-6">
                Our certificates are designed with a professional and elegant aesthetic, featuring:
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-uk-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-gray-700">Official UK Institute seal and branding</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-uk-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-gray-700">Detailed course or program information</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-uk-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-gray-700">Security features to prevent counterfeiting</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-uk-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-gray-700">Signatures of institute officials</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-uk-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-gray-700">Unique verification code</p>
                  </div>
                </div>
              </div>
              
              <Button
                as={Link}
                href="/contact"
                color="primary"
                className="mt-8 bg-uk-blue text-white hover:bg-uk-gold hover:text-uk-blue"
              >
                Verify a Certificate
              </Button>
            </div>
            
            <div className="relative rounded-xl overflow-hidden shadow-xl border-8 border-white">
              <div className="absolute inset-0 bg-[url('/images/certificate-bg.jpg')] bg-cover opacity-10"></div>
              <div className="p-8 relative">
                <div className="flex justify-between mb-8">
                  <div className="relative w-20 h-20">
                    <div className="absolute inset-0 bg-uk-blue/10 rounded-full"></div>
                  </div>
                  <div className="text-right">
                    <h3 className="text-lg font-bold text-uk-blue">UK Institute</h3>
                    <p className="text-sm text-gray-600">Excellence in Education</p>
                  </div>
                </div>
                
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-uk-blue uppercase mb-2">Certificate of Completion</h2>
                  <p className="text-gray-600">This certifies that</p>
                  <p className="text-xl font-semibold text-uk-gold my-4">John Smith</p>
                  <p className="text-gray-600">has successfully completed the course</p>
                  <p className="text-lg font-semibold text-uk-blue my-4">Advanced Business Management</p>
                  <p className="text-gray-600 text-sm">with a grade of Excellence</p>
                </div>
                
                <div className="flex justify-between mt-12 pt-8 border-t border-gray-200">
                  <div className="text-center">
                    <div className="h-px w-32 bg-uk-blue/30 mb-2"></div>
                    <p className="text-sm text-gray-600">Course Director</p>
                  </div>
                  <div className="text-center">
                    <div className="h-px w-32 bg-uk-blue/30 mb-2"></div>
                    <p className="text-sm text-gray-600">Institute Director</p>
                  </div>
                </div>
                
                <div className="absolute bottom-4 right-4">
                  <p className="text-xs text-gray-500">Certificate ID: UKI-2023-78945612</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Verification Process Section */}
      <section className="py-20 bg-uk-blue">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Certificate Verification</h2>
            <p className="text-xl text-white/80">
              Our secure verification system ensures the authenticity of all certificates issued by UK Institute.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {verificationSteps.map((step, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-uk-gold text-uk-blue text-xl font-bold mb-4 mx-auto">
                  {index + 1}
                </div>
                <h3 className="text-lg font-semibold text-uk-blue mb-3 text-center">{step.title}</h3>
                <p className="text-gray-600 text-center text-sm">{step.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button
              as={Link}
              href="/contact"
              color="primary"
              size="lg"
              className="bg-uk-gold text-uk-blue hover:bg-white hover:text-uk-blue"
            >
              Go to Verification Portal
            </Button>
          </div>
        </div>
      </section>

      {/* Accreditation Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-uk-blue mb-4">Our Accreditations</h2>
            <p className="text-xl text-gray-600">
              UK Institute is accredited by leading educational bodies, ensuring our certificates meet the highest standards.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center justify-center p-6 border border-gray-200 rounded-xl bg-white hover:shadow-md transition-shadow">
              <div className="w-24 h-24 bg-uk-blue/5 rounded-full flex items-center justify-center mb-4">
                <span className="text-uk-blue font-bold text-lg">QAA</span>
              </div>
              <p className="text-gray-600 text-center text-sm">Quality Assurance Agency for Higher Education</p>
            </div>
            
            <div className="flex flex-col items-center justify-center p-6 border border-gray-200 rounded-xl bg-white hover:shadow-md transition-shadow">
              <div className="w-24 h-24 bg-uk-blue/5 rounded-full flex items-center justify-center mb-4">
                <span className="text-uk-blue font-bold text-lg">BAC</span>
              </div>
              <p className="text-gray-600 text-center text-sm">British Accreditation Council</p>
            </div>
            
            <div className="flex flex-col items-center justify-center p-6 border border-gray-200 rounded-xl bg-white hover:shadow-md transition-shadow">
              <div className="w-24 h-24 bg-uk-blue/5 rounded-full flex items-center justify-center mb-4">
                <span className="text-uk-blue font-bold text-lg">ASIC</span>
              </div>
              <p className="text-gray-600 text-center text-sm">Accreditation Service for International Colleges</p>
            </div>
            
            <div className="flex flex-col items-center justify-center p-6 border border-gray-200 rounded-xl bg-white hover:shadow-md transition-shadow">
              <div className="w-24 h-24 bg-uk-blue/5 rounded-full flex items-center justify-center mb-4">
                <span className="text-uk-blue font-bold text-lg">OfS</span>
              </div>
              <p className="text-gray-600 text-center text-sm">Office for Students</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-b from-white to-uk-silver/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-uk-blue mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">
              Find answers to common questions about our certificates.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-lg font-semibold text-uk-blue mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-uk-blue via-uk-silver/30 to-uk-red">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Start Your Journey to Certification
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Enroll in one of our courses today and take the first step toward earning a prestigious UK Institute certificate.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              as={Link}
              href="/courses"
              color="primary"
              size="lg"
              className="bg-uk-gold text-uk-blue hover:bg-white hover:text-uk-blue text-lg font-semibold"
            >
              Browse Courses
            </Button>
            <Button
              as={Link}
              href="/contact"
              variant="bordered"
              size="lg"
              className="text-white border-white hover:bg-white/10 text-lg font-semibold"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </MainLayout>
  )
} 