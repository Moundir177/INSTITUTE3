import React from 'react'
import MainLayout from '@/components/layout/MainLayout'
import { Card, CardBody, Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Accordion, AccordionItem } from '@nextui-org/react'

export default function RefundPolicyPage() {
  const refundTable = [
    {
      timeFrame: "More than 30 days before course start date",
      refundAmount: "100% of course fee",
      processingTime: "7-10 business days",
      adminFee: "None"
    },
    {
      timeFrame: "15-30 days before course start date",
      refundAmount: "75% of course fee",
      processingTime: "7-10 business days",
      adminFee: "£50"
    },
    {
      timeFrame: "7-14 days before course start date",
      refundAmount: "50% of course fee",
      processingTime: "7-10 business days",
      adminFee: "£50"
    },
    {
      timeFrame: "0-7 days before course start date",
      refundAmount: "25% of course fee",
      processingTime: "7-10 business days",
      adminFee: "£50"
    },
    {
      timeFrame: "After course has started (within 14 days)",
      refundAmount: "Pro-rata based on completed modules",
      processingTime: "10-14 business days",
      adminFee: "£75"
    },
    {
      timeFrame: "After 14 days of course start date",
      refundAmount: "No refund",
      processingTime: "N/A",
      adminFee: "N/A"
    }
  ]

  const faqs = [
    {
      question: "How do I request a refund?",
      answer: "To request a refund, log in to your student portal and navigate to the 'Payments & Refunds' section. Select the course for which you wish to request a refund and click on 'Request Refund'. Fill out the refund request form, providing the reason for your request. Alternatively, you can email finance@ukinstitute.edu with your student ID, course details, and reason for requesting a refund."
    },
    {
      question: "When will I receive my refund?",
      answer: "Refunds are typically processed within 7-14 business days from the approval of your refund request. The time it takes for the funds to appear in your account depends on your payment method and financial institution. Credit card refunds usually take 3-5 business days, while bank transfers may take 5-10 business days."
    },
    {
      question: "Can I get a refund for a course I haven't started yet?",
      answer: "Yes, if you cancel your enrollment before the course starts, you are eligible for a refund according to our refund schedule. The amount refunded depends on how far in advance of the start date you cancel, ranging from a full refund (more than 30 days before) to a partial refund (less than 30 days before)."
    },
    {
      question: "What if I need to withdraw for medical reasons?",
      answer: "In cases of serious illness or medical conditions that prevent you from continuing your studies, you may be eligible for a higher refund amount than our standard policy allows. Such requests are handled on a case-by-case basis and require supporting medical documentation. Please contact our Student Services team at studentservices@ukinstitute.edu for guidance."
    },
    {
      question: "Are there any courses that are non-refundable?",
      answer: "Some specialized short courses, workshops, and events marked as 'Non-refundable' do not qualify for refunds. Additionally, any course materials, textbooks, or digital resources that have been accessed or downloaded are non-refundable. These exceptions will be clearly indicated in the course description and terms at the time of enrollment."
    },
    {
      question: "Can I transfer my enrollment to another course instead of getting a refund?",
      answer: "Yes, as an alternative to a refund, you can request to transfer your enrollment to another eligible course of equal or lesser value. If the new course has a higher fee, you will need to pay the difference. Course transfers must be requested before the start date of the original course and are subject to availability and eligibility requirements."
    }
  ]

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative py-20 bg-uk-blue">
        <div className="absolute inset-0 bg-[url('/images/uk-pattern.png')] opacity-10"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Refund <span className="text-uk-gold">Policy</span>
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Our commitment to fair and transparent refund processes
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
              <p className="text-gray-600 dark:text-gray-300">
                Last updated: {new Date().toLocaleDateString('en-GB', {day: 'numeric', month: 'long', year: 'numeric'})}
              </p>
              
              <h2 className="text-2xl font-bold text-uk-blue dark:text-white mt-10">Refund Policy Overview</h2>
              <p className="text-gray-600 dark:text-gray-300">
                At UK Institute, we understand that circumstances may change after you've enrolled in a course. Our refund policy is designed to be fair and transparent, offering appropriate refund options based on when you request to withdraw from a course. This policy applies to all courses offered by UK Institute unless otherwise specified in the course description or terms.
              </p>
              
              <h2 className="text-2xl font-bold text-uk-blue dark:text-white mt-10">Refund Eligibility</h2>
              <p className="text-gray-600 dark:text-gray-300">
                Refunds are available under the following conditions:
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                <li>You formally withdraw from a course by submitting a refund request through your student portal or by contacting our finance department</li>
                <li>Your request falls within the eligible timeframes outlined in our refund schedule</li>
                <li>You have not violated any terms of our student code of conduct</li>
                <li>The course has not been marked as non-refundable in its description or terms</li>
              </ul>
            </div>
            
            {/* Refund Schedule Table */}
            <Card className="shadow-md mb-12">
              <CardBody>
                <h3 className="text-xl font-semibold text-uk-blue dark:text-white mb-4">Refund Schedule</h3>
                <Table 
                  aria-label="Refund schedule table"
                  classNames={{
                    wrapper: "shadow-none",
                    th: "bg-gray-50 dark:bg-gray-800 text-uk-blue dark:text-white",
                    td: "text-gray-700 dark:text-gray-300"
                  }}
                >
                  <TableHeader>
                    <TableColumn>TIMEFRAME</TableColumn>
                    <TableColumn>REFUND AMOUNT</TableColumn>
                    <TableColumn>PROCESSING TIME</TableColumn>
                    <TableColumn>ADMIN FEE</TableColumn>
                  </TableHeader>
                  <TableBody>
                    {refundTable.map((row, index) => (
                      <TableRow key={index}>
                        <TableCell>{row.timeFrame}</TableCell>
                        <TableCell>{row.refundAmount}</TableCell>
                        <TableCell>{row.processingTime}</TableCell>
                        <TableCell>{row.adminFee}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardBody>
            </Card>
            
            <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
              <h2 className="text-2xl font-bold text-uk-blue dark:text-white mt-10">Refund Process</h2>
              <p className="text-gray-600 dark:text-gray-300">
                To request a refund, follow these steps:
              </p>
              <ol className="list-decimal list-inside text-gray-600 dark:text-gray-300 space-y-2">
                <li>Log in to your student portal at student.ukinstitute.edu</li>
                <li>Navigate to "Payments & Refunds" section</li>
                <li>Select the course for which you wish to request a refund</li>
                <li>Click on "Request Refund" and complete the refund request form</li>
                <li>Submit your request along with any required documentation</li>
              </ol>
              <p className="text-gray-600 dark:text-gray-300 mt-4">
                Alternatively, you can email your refund request to finance@ukinstitute.edu, including your student ID, course details, and reason for requesting a refund.
              </p>
              
              <h2 className="text-2xl font-bold text-uk-blue dark:text-white mt-10">Payment Method for Refunds</h2>
              <p className="text-gray-600 dark:text-gray-300">
                Refunds will be issued using the same payment method used for the original payment:
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                <li>Credit/debit card payments will be refunded to the same card</li>
                <li>Bank transfers will be returned to the originating account</li>
                <li>Alternative refund methods may be arranged in exceptional circumstances</li>
              </ul>
              
              <h2 className="text-2xl font-bold text-uk-blue dark:text-white mt-10">Special Circumstances</h2>
              <p className="text-gray-600 dark:text-gray-300">
                We recognize that exceptional circumstances may arise that are beyond your control. In the following cases, you may be eligible for a higher refund amount or extended refund period:
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                <li><strong>Medical Reasons:</strong> Serious illness or medical conditions preventing continued participation (requires medical documentation)</li>
                <li><strong>Bereavement:</strong> Death of an immediate family member (requires appropriate documentation)</li>
                <li><strong>Course Cancellation:</strong> If UK Institute cancels a course, students will receive a full refund</li>
                <li><strong>Significant Course Changes:</strong> If we make substantial changes to course content, schedule, or delivery method after enrollment</li>
              </ul>
              <p className="text-gray-600 dark:text-gray-300 mt-4">
                Special circumstances are evaluated on a case-by-case basis. Please contact our Student Services team at studentservices@ukinstitute.edu to discuss your situation.
              </p>
              
              <h2 className="text-2xl font-bold text-uk-blue dark:text-white mt-10">Non-Refundable Items</h2>
              <p className="text-gray-600 dark:text-gray-300">
                The following items and fees are generally non-refundable:
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                <li>Application fees</li>
                <li>Course materials, textbooks, or digital resources that have been accessed or downloaded</li>
                <li>Courses specifically marked as "Non-refundable"</li>
                <li>Administrative fees associated with the refund process</li>
                <li>Courses from which a student has been dismissed due to academic dishonesty or violation of the student code of conduct</li>
              </ul>
            </div>
            
            {/* FAQs */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-uk-blue dark:text-white mb-6">Frequently Asked Questions</h2>
              
              <Accordion variant="bordered">
                {faqs.map((faq, index) => (
                  <AccordionItem 
                    key={index}
                    aria-label={faq.question}
                    title={faq.question}
                    classNames={{
                      title: "text-uk-blue dark:text-white font-medium",
                      content: "text-gray-600 dark:text-gray-300"
                    }}
                  >
                    {faq.answer}
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
            
            {/* Contact Info */}
            <div className="bg-gray-50 dark:bg-gray-800/50 p-8 rounded-xl border border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-bold text-uk-blue dark:text-white mb-4">
                Need Further Assistance?
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                If you have any questions about our refund policy or need help with a refund request, please contact our Finance Department:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <div className="mr-4 text-uk-gold dark:text-uk-gold">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-uk-blue dark:text-white mb-1">Email</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      finance@ukinstitute.edu
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 text-uk-gold dark:text-uk-gold">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-uk-blue dark:text-white mb-1">Phone</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      +44 1234 567893 (Monday-Friday, 9am-5pm GMT)
                    </p>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 mt-6">
                Our refund policy is subject to change. Any changes will be posted on this page with an updated "Last Updated" date. The policy in effect at the time of your enrollment will apply to your refund request.
              </p>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  )
} 