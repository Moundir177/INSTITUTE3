import React from 'react'
import MainLayout from '@/components/layout/MainLayout'

export default function PrivacyPolicyPage() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative py-20 bg-uk-blue">
        <div className="absolute inset-0 bg-[url('/images/uk-pattern.png')] opacity-10"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Privacy <span className="text-uk-gold">Policy</span>
            </h1>
            <p className="text-xl text-white/90 mb-8">
              How we collect, use, and protect your personal information
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-600 dark:text-gray-300">
                Last updated: {new Date().toLocaleDateString('en-GB', {day: 'numeric', month: 'long', year: 'numeric'})}
              </p>
              
              <h2 className="text-2xl font-bold text-uk-blue dark:text-white mt-10">1. Introduction</h2>
              <p className="text-gray-600 dark:text-gray-300">
                UK Institute ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or enroll in our educational programs.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mt-4">
                Please read this Privacy Policy carefully. By accessing or using our services, you acknowledge that you have read, understood, and agree to be bound by all the terms of this Privacy Policy. If you do not agree with our policies and practices, please do not use our services.
              </p>

              <h2 className="text-2xl font-bold text-uk-blue dark:text-white mt-10">2. Information We Collect</h2>
              <p className="text-gray-600 dark:text-gray-300">
                We collect several types of information from and about users of our services, including:
              </p>
              
              <h3 className="text-xl font-semibold text-uk-blue dark:text-white mt-6">2.1 Personal Information</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Personal Information is information that identifies you as an individual. We may collect the following personal information:
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                <li>Name, date of birth, and contact information (email address, phone number, postal address)</li>
                <li>Educational background, qualifications, and employment history</li>
                <li>Financial information for processing payments</li>
                <li>Identification documents (passport, national ID, etc.)</li>
                <li>Photographs, audio or video recordings (for verification or educational purposes)</li>
                <li>Emergency contact details</li>
              </ul>
              
              <h3 className="text-xl font-semibold text-uk-blue dark:text-white mt-6">2.2 Usage Data</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We may also collect information about how you access and use our services, including:
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                <li>IP address, browser type, and operating system</li>
                <li>Pages you view, links you click, and actions you take on our website</li>
                <li>Time spent on pages and other interaction information</li>
                <li>Course progress, assessment results, and completion rates</li>
                <li>Communication preferences and interactions with our staff</li>
              </ul>

              <h2 className="text-2xl font-bold text-uk-blue dark:text-white mt-10">3. How We Collect Information</h2>
              <p className="text-gray-600 dark:text-gray-300">
                We collect information in the following ways:
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                <li>Directly from you when you provide it to us (e.g., application forms, registration, course enrollment)</li>
                <li>Automatically when you use our website or learning management system</li>
                <li>From third parties (e.g., reference providers, partner institutions, qualification verification services)</li>
                <li>Through cookies and similar technologies</li>
              </ul>

              <h2 className="text-2xl font-bold text-uk-blue dark:text-white mt-10">4. How We Use Your Information</h2>
              <p className="text-gray-600 dark:text-gray-300">
                We use the information we collect for various purposes, including:
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                <li>Processing applications and enrollments</li>
                <li>Providing educational services and support</li>
                <li>Administering assessments and issuing certifications</li>
                <li>Processing payments and maintaining financial records</li>
                <li>Communicating with you about your courses, events, and services</li>
                <li>Improving our website, services, and educational offerings</li>
                <li>Analyzing usage patterns and effectiveness of our programs</li>
                <li>Complying with legal obligations</li>
                <li>Responding to inquiries, feedback, and support requests</li>
                <li>Protecting our rights, property, or safety, and that of our students and others</li>
              </ul>

              <h2 className="text-2xl font-bold text-uk-blue dark:text-white mt-10">5. Disclosure of Your Information</h2>
              <p className="text-gray-600 dark:text-gray-300">
                We may disclose your personal information to the following categories of recipients:
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                <li>Employees and contractors who need access to deliver our services</li>
                <li>Service providers acting as processors who perform services on our behalf</li>
                <li>Accreditation bodies, qualification authorities, and regulatory organizations</li>
                <li>Educational partners (with your consent) for program delivery or progression</li>
                <li>Government authorities or law enforcement if required by law</li>
                <li>In connection with a business transfer, merger, or acquisition</li>
              </ul>

              <h2 className="text-2xl font-bold text-uk-blue dark:text-white mt-10">6. Data Security</h2>
              <p className="text-gray-600 dark:text-gray-300">
                We have implemented appropriate technical and organizational measures to secure your personal information from accidental loss and unauthorized access, use, alteration, and disclosure. All information you provide to us is stored on secure servers with encrypted connections. Payment transactions are encrypted using SSL technology.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mt-4">
                Unfortunately, the transmission of information via the internet is not completely secure. Although we do our best to protect your personal information, we cannot guarantee the security of your personal information transmitted to our website. Any transmission of personal information is at your own risk.
              </p>

              <h2 className="text-2xl font-bold text-uk-blue dark:text-white mt-10">7. Cookies and Tracking Technologies</h2>
              <p className="text-gray-600 dark:text-gray-300">
                We use cookies and similar tracking technologies to track activity on our website and store certain information. Cookies are files with a small amount of data that may include an anonymous unique identifier. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our service.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mt-4">
                We use the following types of cookies:
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                <li>Essential cookies: necessary for the operation of our website</li>
                <li>Analytical/performance cookies: to recognize and count visitors and analyze how they use our website</li>
                <li>Functionality cookies: to recognize you when you return to our website</li>
                <li>Targeting cookies: to record your visit to our website, the pages you visit, and the links you follow</li>
              </ul>

              <h2 className="text-2xl font-bold text-uk-blue dark:text-white mt-10">8. Data Retention</h2>
              <p className="text-gray-600 dark:text-gray-300">
                We will retain your personal information only for as long as necessary to fulfill the purposes for which we collected it, including for the purposes of satisfying any legal, accounting, or reporting requirements. To determine the appropriate retention period, we consider the amount, nature, and sensitivity of the personal information, the potential risk of harm from unauthorized use or disclosure, the purposes for which we process it, and whether we can achieve those purposes through other means.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mt-4">
                In some circumstances, we may anonymize your personal information so that it can no longer be associated with you, in which case we may use such information without further notice to you.
              </p>

              <h2 className="text-2xl font-bold text-uk-blue dark:text-white mt-10">9. Your Legal Rights</h2>
              <p className="text-gray-600 dark:text-gray-300">
                Under certain circumstances, you have the following rights under data protection laws in relation to your personal information:
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                <li>The right to access your personal information</li>
                <li>The right to rectification of your personal information</li>
                <li>The right to erasure of your personal information</li>
                <li>The right to restrict processing of your personal information</li>
                <li>The right to data portability</li>
                <li>The right to object to processing of your personal information</li>
                <li>The right to withdraw consent where we rely on consent to process your personal information</li>
              </ul>
              <p className="text-gray-600 dark:text-gray-300 mt-4">
                To exercise any of these rights, please contact us using the details provided in section 12. We may need to request specific information from you to help us confirm your identity and ensure your right to access your personal information (or to exercise any of your other rights).
              </p>

              <h2 className="text-2xl font-bold text-uk-blue dark:text-white mt-10">10. International Transfers</h2>
              <p className="text-gray-600 dark:text-gray-300">
                We may transfer your personal information to countries outside the European Economic Area (EEA) in the course of providing our services. Whenever we transfer your personal information outside the EEA, we ensure a similar degree of protection is afforded to it by ensuring at least one of the following safeguards is implemented:
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                <li>Transfer to countries that have been deemed to provide an adequate level of protection by the European Commission</li>
                <li>Use of specific contracts approved by the European Commission</li>
                <li>Implementation of standard contractual clauses</li>
              </ul>
              <p className="text-gray-600 dark:text-gray-300 mt-4">
                Please contact us if you want further information on the specific mechanism used by us when transferring your personal information outside the EEA.
              </p>

              <h2 className="text-2xl font-bold text-uk-blue dark:text-white mt-10">11. Changes to Our Privacy Policy</h2>
              <p className="text-gray-600 dark:text-gray-300">
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
              </p>

              <h2 className="text-2xl font-bold text-uk-blue dark:text-white mt-10">12. Contact Information</h2>
              <p className="text-gray-600 dark:text-gray-300">
                If you have any questions about this Privacy Policy, please contact our Data Protection Officer:
              </p>
              <address className="text-gray-600 dark:text-gray-300 not-italic">
                Data Protection Officer<br />
                UK Institute<br />
                123 Oxford Street<br />
                London, W1D 2JB<br />
                United Kingdom<br />
                Email: privacy@ukinstitute.edu<br />
                Phone: +44 1234 567895
              </address>
              
              <p className="text-gray-600 dark:text-gray-300 mt-6">
                You have the right to make a complaint at any time to the Information Commissioner's Office (ICO), the UK supervisory authority for data protection issues (www.ico.org.uk). We would, however, appreciate the chance to deal with your concerns before you approach the ICO, so please contact us in the first instance.
              </p>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  )
} 