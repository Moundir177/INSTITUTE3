import React from 'react'
import MainLayout from '@/components/layout/MainLayout'

export default function TermsPage() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative py-20 bg-uk-blue">
        <div className="absolute inset-0 bg-[url('/images/uk-pattern.png')] opacity-10"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Terms of <span className="text-uk-gold">Service</span>
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Please read these terms carefully before using our services
            </p>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-600 dark:text-gray-300">
                Last updated: {new Date().toLocaleDateString('en-GB', {day: 'numeric', month: 'long', year: 'numeric'})}
              </p>
              
              <h2 className="text-2xl font-bold text-uk-blue dark:text-white mt-10">1. Introduction</h2>
              <p className="text-gray-600 dark:text-gray-300">
                Welcome to UK Institute. These Terms of Service ("Terms") govern your use of our website, services, and educational programs. By accessing our website, enrolling in our courses, or using any of our services, you agree to be bound by these Terms. If you disagree with any part of these terms, you may not access our services.
              </p>

              <h2 className="text-2xl font-bold text-uk-blue dark:text-white mt-10">2. Definitions</h2>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                <li>"UK Institute," "We," "Us," or "Our" refers to UK Institute, its affiliates, partners, and representatives.</li>
                <li>"You" or "Your" refers to the individual or entity accessing or using our services.</li>
                <li>"Services" refers to all educational programs, courses, resources, and support provided by UK Institute.</li>
                <li>"Website" refers to any web-based platforms operated by UK Institute, including but not limited to ukinstitute.edu.</li>
                <li>"Content" refers to all materials, information, and resources provided through our services, including text, images, videos, and documents.</li>
              </ul>

              <h2 className="text-2xl font-bold text-uk-blue dark:text-white mt-10">3. Services and Enrollment</h2>
              <p className="text-gray-600 dark:text-gray-300">
                UK Institute offers various educational programs and services as described on our website. We reserve the right to modify or discontinue any service without prior notice. Enrollment in our courses is subject to availability, payment of applicable fees, and meeting entry requirements. Acceptance into a program is at our sole discretion.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mt-4">
                Upon enrollment, you will receive access to course materials, resources, and support as specified in your course description. The duration of access will vary depending on the course or program you have enrolled in.
              </p>

              <h2 className="text-2xl font-bold text-uk-blue dark:text-white mt-10">4. User Accounts</h2>
              <p className="text-gray-600 dark:text-gray-300">
                When you create an account with us, you must provide accurate, complete, and current information. You are responsible for safeguarding your account credentials and for all activities that occur under your account. You must notify us immediately of any unauthorized use of your account or any other security breach.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mt-4">
                We reserve the right to disable any user account at any time if, in our opinion, you have failed to comply with these Terms or if we suspect unauthorized or fraudulent use of your account.
              </p>

              <h2 className="text-2xl font-bold text-uk-blue dark:text-white mt-10">5. Intellectual Property</h2>
              <p className="text-gray-600 dark:text-gray-300">
                All content provided through our services, including but not limited to course materials, videos, images, text, and documents, is the property of UK Institute or its content suppliers and is protected by copyright, trademark, and other intellectual property laws.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mt-4">
                You may access and use the content solely for your personal, non-commercial educational purposes. You may not reproduce, distribute, modify, display, prepare derivative works based on, or otherwise use any content without our prior written permission.
              </p>

              <h2 className="text-2xl font-bold text-uk-blue dark:text-white mt-10">6. Payment and Refunds</h2>
              <p className="text-gray-600 dark:text-gray-300">
                Payment for our services must be made in full or in accordance with the payment plan specified at the time of enrollment. All fees are subject to change, but changes will not affect fees for services already paid for.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mt-4">
                Refunds are available as follows:
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                <li>Full refund if withdrawal is requested at least 30 days before the course start date.</li>
                <li>Partial refund (50% of the total fee) if withdrawal is requested between 29 days and 14 days before the course start date.</li>
                <li>Partial refund (25% of the total fee) if withdrawal is requested up to 14 days after the course begins.</li>
                <li>No refund is available after 14 days from the course start date.</li>
              </ul>
              <p className="text-gray-600 dark:text-gray-300 mt-4">
                Refund requests must be submitted in writing to finance@ukinstitute.edu. All refunds are subject to a processing fee of £50.
              </p>

              <h2 className="text-2xl font-bold text-uk-blue dark:text-white mt-10">7. Student Conduct</h2>
              <p className="text-gray-600 dark:text-gray-300">
                Students are expected to conduct themselves in a professional and respectful manner at all times. Harassment, discrimination, or disruptive behavior toward other students, faculty, or staff will not be tolerated. Academic integrity is paramount, and any form of cheating, plagiarism, or other academic misconduct may result in dismissal from the program without refund.
              </p>

              <h2 className="text-2xl font-bold text-uk-blue dark:text-white mt-10">8. Limitation of Liability</h2>
              <p className="text-gray-600 dark:text-gray-300">
                To the maximum extent permitted by law, UK Institute shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, use, or other intangible losses, resulting from:
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                <li>Your use or inability to use our services;</li>
                <li>Any changes to our services or temporary or permanent cessation of our services;</li>
                <li>Unauthorized access to or alteration of your transmissions or data;</li>
                <li>Statements or conduct of any third party regarding our services;</li>
                <li>Any other matter relating to our services.</li>
              </ul>

              <h2 className="text-2xl font-bold text-uk-blue dark:text-white mt-10">9. Privacy Policy</h2>
              <p className="text-gray-600 dark:text-gray-300">
                Your privacy is important to us. Our Privacy Policy, which is incorporated into these Terms, explains how we collect, use, and disclose information about you. By using our services, you consent to the processing of your information as described in our Privacy Policy.
              </p>

              <h2 className="text-2xl font-bold text-uk-blue dark:text-white mt-10">10. Changes to Terms</h2>
              <p className="text-gray-600 dark:text-gray-300">
                We may revise these Terms at any time by updating this page. You are expected to check this page periodically to take notice of any changes, as they are binding on you. By continuing to use our services after such revisions, you agree to be bound by the revised terms.
              </p>

              <h2 className="text-2xl font-bold text-uk-blue dark:text-white mt-10">11. Governing Law</h2>
              <p className="text-gray-600 dark:text-gray-300">
                These Terms shall be governed by and construed in accordance with the laws of the United Kingdom, without regard to its conflict of law provisions. Any legal action or proceeding arising out of or relating to these Terms shall be brought exclusively in the courts of the United Kingdom.
              </p>

              <h2 className="text-2xl font-bold text-uk-blue dark:text-white mt-10">12. Contact Information</h2>
              <p className="text-gray-600 dark:text-gray-300">
                If you have any questions about these Terms, please contact us at:
              </p>
              <address className="text-gray-600 dark:text-gray-300 not-italic">
                UK Institute<br />
                123 Oxford Street<br />
                London, W1D 2JB<br />
                United Kingdom<br />
                Email: legal@ukinstitute.edu<br />
                Phone: +44 1234 567890
              </address>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  )
} 