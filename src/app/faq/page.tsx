'use client'

import React from 'react'
import { Accordion, AccordionItem, Card, CardBody, Button, Link, Input } from '@nextui-org/react'
import MainLayout from '@/components/layout/MainLayout'

export default function FAQPage() {
  // FAQ categories and questions
  const faqCategories = [
    {
      id: "admissions",
      title: "Admissions & Applications",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      questions: [
        {
          question: "What are the entry requirements for your courses?",
          answer: "Entry requirements vary depending on the course and level of study. Generally, undergraduate programs require completion of secondary education (A-levels, IB, or equivalent) with specific grade requirements. Postgraduate programs typically require a bachelor's degree with a minimum 2:2 classification or international equivalent. Some courses may have additional requirements such as work experience, portfolios, or entrance exams. Please check the specific course page or contact our admissions team for detailed requirements."
        },
        {
          question: "How do I apply for a course?",
          answer: "You can apply for our courses directly through our website. Navigate to the course you're interested in and click the 'Apply Now' button. You'll need to create an account, complete the application form, and upload required documents (transcripts, certificates, personal statement, etc.). For some courses, you may need to apply through UCAS. International students may have additional requirements. Once submitted, our admissions team will review your application and contact you with the decision."
        },
        {
          question: "What documents do I need to provide with my application?",
          answer: "Required documents typically include: academic transcripts and certificates, personal statement, CV/resume, proof of English language proficiency (for non-native speakers), copy of passport or ID, references/recommendation letters, and portfolio (for relevant creative courses). Some courses may require additional documents. All documents should be provided in English or accompanied by certified translations."
        },
        {
          question: "When is the application deadline?",
          answer: "Application deadlines vary by course and intake period. For most courses starting in September, we recommend applying by the end of June for domestic students and by the end of May for international students requiring visas. Some popular courses may close applications earlier once all places are filled. Some courses offer multiple start dates throughout the year. Please check the specific course page for exact deadlines or contact our admissions team."
        },
        {
          question: "Do you offer scholarships or financial aid?",
          answer: "Yes, we offer various scholarships and financial aid options for eligible students. These include merit-based scholarships, need-based grants, early application discounts, and alumni discounts. International students may be eligible for specific international scholarships. Government funding and student loans may also be available for eligible students. Visit our Scholarships & Funding page or contact our finance team for detailed information on available options and application procedures."
        }
      ]
    },
    {
      id: "courses",
      title: "Courses & Programs",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      questions: [
        {
          question: "What types of courses do you offer?",
          answer: "We offer a diverse range of courses across various disciplines including Business & Management, Finance, Marketing, Data Science & Technology, Healthcare, Creative Arts, and more. Our programs range from short professional certificates to undergraduate degrees (Bachelor's) and postgraduate qualifications (Master's). We deliver our courses through multiple formats: full-time, part-time, online, and blended learning options to accommodate different learning preferences and schedules."
        },
        {
          question: "How long are your courses?",
          answer: "Course duration varies depending on the type and level of study. Short professional certificates typically range from 1-6 months. Undergraduate degrees (Bachelor's) are usually 3-4 years full-time or 4-6 years part-time. Postgraduate qualifications (Master's) typically take 1 year full-time or 2 years part-time. Some courses offer accelerated options or flexible study paths. Please check specific course pages for exact duration information."
        },
        {
          question: "Are your courses accredited?",
          answer: "Yes, all our degree programs are accredited by relevant UK educational authorities and professional bodies. Many of our professional courses carry industry-recognized accreditations from relevant professional organizations such as CMI (Chartered Management Institute), ACCA (Association of Chartered Certified Accountants), CIM (Chartered Institute of Marketing), and others. These accreditations ensure our courses meet high-quality standards and are recognized by employers globally."
        },
        {
          question: "Do you offer online or distance learning options?",
          answer: "Yes, we offer a range of online and distance learning options. Many of our courses are available in fully online formats with live virtual classrooms, interactive learning materials, and dedicated online tutor support. We also offer blended learning options that combine online study with some in-person workshops or intensive sessions. Our digital learning platform provides access to course materials, recorded lectures, assessment submission, and communication tools to ensure a comprehensive learning experience."
        },
        {
          question: "Can I transfer credits from previous studies?",
          answer: "Yes, we recognize prior learning and offer credit transfer options. If you've completed relevant higher education courses at another accredited institution, you may be eligible to transfer credits toward your program with us. The number of transferable credits depends on the relevance and equivalency to our curriculum. To apply for credit transfer, you'll need to provide official transcripts and course descriptions. Our admissions team will evaluate these and determine eligible transfers. Contact us for a personalized assessment."
        }
      ]
    },
    {
      id: "fees",
      title: "Fees & Funding",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      questions: [
        {
          question: "How much are the tuition fees?",
          answer: "Tuition fees vary depending on the course, level of study, and your student status (UK/EU or international). For undergraduate programs, UK/EU students typically pay between £9,250-£12,500 per year, while international students pay £14,000-£18,000 per year. For postgraduate programs, fees range from £11,000-£15,000 for UK/EU students and £16,000-£22,000 for international students. Professional certificates and short courses range from £900-£3,500. Please check specific course pages for exact fee information."
        },
        {
          question: "What payment options are available?",
          answer: "We offer several payment options for tuition fees. You can pay in full before the course starts (some courses offer early payment discounts). Alternatively, you can pay in installments (typically 2-3 payments spread across the academic year) with a small administration fee. We accept payments via credit/debit card, bank transfer, or online payment systems. For eligible UK/EU students, government loans may be available. International students are typically required to pay a deposit to secure their place and obtain visa documentation."
        },
        {
          question: "Are there any additional costs besides tuition?",
          answer: "Yes, there may be additional costs to consider beyond tuition fees. These can include: registration/enrollment fees, course materials and textbooks, specialized equipment or software (particularly for technical or creative courses), field trips or study tours (some may be optional), examination fees for external certifications, and living expenses (accommodation, food, transportation, etc.). We strive to be transparent about all costs - each course page includes an 'Additional Costs' section with specific details."
        },
        {
          question: "What scholarships and bursaries do you offer?",
          answer: "We offer various scholarships and bursaries to help support students. Merit-based academic scholarships reward exceptional academic achievement and range from 10-50% of tuition fees. Need-based bursaries are available for students demonstrating financial need. We also offer specific scholarships for international students, women in STEM fields, and students from underrepresented backgrounds. Early application scholarships and alumni discounts are also available. Visit our Scholarships page for details on eligibility criteria and application processes."
        },
        {
          question: "What is your refund policy?",
          answer: "Our refund policy allows for full refunds (minus administration fee) if withdrawal is requested more than 30 days before the course start date. Withdrawals 15-30 days before start date receive 75% refund, 7-14 days receive 50%, and 0-7 days receive 25%. Once a course has started, refunds are calculated on a pro-rata basis for the first 14 days, after which no refund is available. Special circumstances like serious illness may be considered on a case-by-case basis. Please refer to our detailed Refund Policy page for complete information."
        }
      ]
    },
    {
      id: "international",
      title: "International Students",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      questions: [
        {
          question: "Do I need a visa to study in the UK?",
          answer: "Most international students from outside the UK/EU will need a Student Visa (previously Tier 4) to study in the UK for courses longer than 6 months. EU/EEA students who began their studies after January 1, 2021, will also need to apply for a Student Visa. Short courses under 6 months may be eligible for a Short-term Study Visa. Once you've received an unconditional offer and paid your deposit, we'll issue a Confirmation of Acceptance for Studies (CAS) which you'll need for your visa application. Our International Student Support team can provide guidance throughout the visa application process."
        },
        {
          question: "What English language requirements do you have?",
          answer: "For most courses, international students whose first language is not English must demonstrate English language proficiency. We accept several English language qualifications, including IELTS Academic (typically 6.0-6.5 overall with no component below 5.5), TOEFL iBT (typically 80-90), PTE Academic (typically 55-60), and Cambridge English Advanced/Proficiency. The exact requirements vary by course and level of study. If you don't meet the requirements, we offer pre-sessional English courses that can help you reach the required level before your main course begins."
        },
        {
          question: "Do you provide accommodation for international students?",
          answer: "Yes, we prioritize accommodation for international students. We offer various options including on-campus residence halls and partnerships with trusted private accommodation providers nearby. Our on-campus accommodations include single and shared rooms with shared or en-suite bathrooms, communal kitchens, and social spaces. All university accommodations include utilities, internet, and basic contents insurance. Our Accommodation Office can also assist with finding private rentals if preferred. We recommend applying for accommodation as early as possible after accepting your offer."
        },
        {
          question: "What support services are available for international students?",
          answer: "We offer comprehensive support services for international students, including: dedicated international student advisors, airport pickup service (pre-booked for certain arrival dates), orientation program specifically for international students, visa and immigration advice, language support services, cultural adaptation programs and social events, academic skills support tailored to international learners, and career services with knowledge of international employment regulations. We also have country-specific student societies that can help you connect with students from your home country."
        },
        {
          question: "Can I work while studying in the UK?",
          answer: "Student Visa holders can usually work part-time during term time (up to 20 hours per week) and full-time during official vacation periods. Exact permissions depend on your course level and type. PhD students may have different arrangements. Work restrictions are stated on your biometric residence permit. The UK also offers a Graduate Route visa allowing eligible students to stay and work for 2 years after completing their course (3 years for PhD graduates). Our Career Services can help you find suitable part-time work and understand your working rights."
        }
      ]
    },
    {
      id: "student-life",
      title: "Student Life & Support",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      questions: [
        {
          question: "What student support services do you offer?",
          answer: "We offer a comprehensive range of student support services including: academic advisors and tutors for academic guidance, wellbeing and counseling services for mental health support, disability support services for students with additional needs, financial advisory services, career guidance and job placement assistance, IT help desk for technical issues, learning resource centers with study skills workshops, student union with welfare officers, and chaplaincy/multi-faith support. Our Student Services Hub provides a central point for accessing these services, with both in-person and online support options available."
        },
        {
          question: "Do you offer accommodation for students?",
          answer: "Yes, we offer various accommodation options for students. First-year students are typically guaranteed university accommodation if they apply by the deadline. Options include university-managed residence halls (with single/shared rooms and en-suite/shared bathrooms), university-owned houses and flats, and partnership accommodations with approved private providers. All university accommodations include utilities, internet, and basic contents insurance. Our Accommodation Office can also assist with finding private rentals. Prices range from £120-£250 per week depending on location and facilities."
        },
        {
          question: "What facilities are available on campus?",
          answer: "Our campus features comprehensive facilities including: modern lecture theaters and classrooms, subject-specific labs and workshops, extensive library with physical and digital resources, 24-hour study spaces, computer labs with specialist software, student union building with socializing spaces, cafes, restaurants and food outlets, sports center with gym, fitness classes and sports courts, wellness center, prayer and reflection rooms, outdoor spaces and gardens, on-campus accommodation, and secure bike storage. All buildings have Wi-Fi access, and many facilities are accessible 24/7 with student ID."
        },
        {
          question: "Are there clubs and societies for students?",
          answer: "Yes, we have a vibrant student community with over 100 clubs and societies catering to diverse interests. These include academic and professional societies related to specific subjects, cultural and international societies representing different countries and cultures, sports clubs ranging from mainstream to niche activities, creative arts groups including music, drama and art, volunteering and community action groups, gaming and special interest clubs, and religious and spiritual groups. All are student-led with staff advisors. Students can also start new societies if their interests aren't represented."
        },
        {
          question: "What career services do you provide?",
          answer: "Our Career Development Service offers comprehensive support including: one-on-one career counseling and coaching, CV/resume and cover letter reviews, interview preparation and practice, career assessment tools, job and internship listings through our online portal, employer events, career fairs and networking opportunities, industry-specific workshops and seminars, graduate scheme application support, entrepreneurship advice for startups, and placement year/industry experience facilitation. These services are available to current students and graduates up to three years after completion."
        }
      ]
    },
    {
      id: "online-learning",
      title: "Online Learning",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      questions: [
        {
          question: "How do online courses work?",
          answer: "Our online courses are delivered through our digital learning platform, which provides a structured learning experience. Courses typically include a mix of: pre-recorded video lectures and presentations, live interactive webinars and Q&A sessions, reading materials and digital resources, discussion forums for peer interaction, practical assignments and projects, quizzes and assessments for progress monitoring, and virtual group work opportunities. Most courses follow a weekly structure with clear deadlines, but many materials are accessible anytime to accommodate different time zones and schedules. Regular interaction with tutors and peers is encouraged through various communication channels."
        },
        {
          question: "What technical requirements do I need for online learning?",
          answer: "To participate effectively in our online courses, you'll need: a reliable computer (desktop or laptop) running an up-to-date operating system, stable internet connection (minimum 5Mbps, wired connection recommended for live sessions), updated web browser (Chrome, Firefox, Safari, or Edge), webcam and microphone for interactive sessions, speakers or headphones, and enough storage space or external drive for course materials. Some courses may require specific software (we often provide free student licenses for essential programs). A smartphone or tablet is useful for the mobile version of our learning platform but shouldn't be your primary device for study."
        },
        {
          question: "How do assessments work for online courses?",
          answer: "Assessments in online courses take various forms depending on the subject and level. These typically include: written assignments submitted through our plagiarism-detection platform, online quizzes and tests (both timed and untimed), project work with digital submissions, video presentations or demonstrations, participation in discussion forums and collaborative activities, virtual group projects and presentations, and sometimes proctored online examinations using secure software. Some courses may require occasional in-person assessments or proctored exams at approved test centers. All assessment information, including deadlines and grading criteria, is provided at the beginning of each course."
        },
        {
          question: "Will I get the same support as on-campus students?",
          answer: "Yes, online students receive comprehensive support equivalent to on-campus students, adapted for distance learning. This includes: dedicated online tutors and academic advisors accessible via video calls, email, and messaging, technical support helpdesk with extended hours, online learning skills workshops, access to all digital library resources and databases, virtual writing and math support services, online career counseling and resources, digital wellbeing and counseling services, and membership in online student communities. Response times for inquiries are typically within 24-48 hours, and many services offer extended hours to accommodate different time zones."
        },
        {
          question: "Are online qualifications recognized the same as on-campus ones?",
          answer: "Yes, our online qualifications hold the same academic value and recognition as their on-campus equivalents. The degree certificates do not differentiate between study modes. All our online programs undergo the same rigorous quality assurance processes and accreditation requirements as campus-based programs. They are recognized by employers, professional bodies, and other educational institutions worldwide. Many of our online programs also carry specific industry accreditations. The skills developed through online learning—including digital literacy, time management, and self-motivation—are highly valued by employers in today's increasingly remote work environment."
        }
      ]
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
              Frequently Asked <span className="text-uk-gold">Questions</span>
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Find answers to common questions about our courses, admissions, and student life
            </p>
            <div className="max-w-xl mx-auto">
              <Input
                placeholder="Search for answers..."
                size="lg"
                startContent={
                  <svg className="w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                }
                className="w-full"
                classNames={{
                  input: "bg-white"
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {faqCategories.map((category) => (
                <a 
                  key={category.id} 
                  href={`#${category.id}`}
                  className="block"
                >
                  <Card className="h-full shadow-sm hover:shadow-md transition-shadow duration-300">
                    <CardBody className="p-4 text-center">
                      <div className="flex justify-center text-uk-gold mb-2">
                        {category.icon}
                      </div>
                      <h3 className="text-sm font-medium text-uk-blue dark:text-white">{category.title}</h3>
                    </CardBody>
                  </Card>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-16">
            {faqCategories.map((category) => (
              <div key={category.id} id={category.id} className="scroll-mt-24">
                <div className="flex items-center gap-3 mb-6">
                  <div className="text-uk-gold dark:text-uk-gold">
                    {category.icon}
                  </div>
                  <h2 className="text-2xl font-bold text-uk-blue dark:text-white">{category.title}</h2>
                </div>
                
                <Accordion isCompact variant="bordered">
                  {category.questions.map((item, index) => (
                    <AccordionItem 
                      key={index} 
                      aria-label={item.question} 
                      title={item.question}
                      classNames={{
                        title: "text-uk-blue dark:text-white font-medium",
                        content: "text-gray-600 dark:text-gray-300"
                      }}
                    >
                      {item.answer}
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-uk-blue dark:text-white mb-4">
              Still Have Questions?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              If you couldn't find the answer you were looking for, our support team is here to help
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                as={Link}
                href="/contact"
                size="lg" 
                className="bg-uk-blue text-white dark:bg-dark-uk-blue dark:text-white"
              >
                Contact Support
              </Button>
              <Button 
                as={Link}
                href="/courses"
                size="lg" 
                variant="bordered"
                className="text-uk-blue border-uk-blue dark:text-white dark:border-white"
              >
                Browse Courses
              </Button>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  )
} 