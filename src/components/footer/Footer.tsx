'use client'

import React from 'react'
import { Link, Divider } from '@nextui-org/react'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* Background with pattern and gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-uk-blue/90 to-uk-blue dark:from-dark-uk-blue/90 dark:to-dark-uk-blue z-0"></div>
      <div className="absolute inset-0 bg-[url('/images/uk-pattern.svg')] opacity-5 z-0"></div>
      <div className="absolute bottom-0 w-full h-1 bg-gradient-to-r from-uk-red via-uk-gold to-uk-blue"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">
          {/* About */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="relative w-14 h-14 drop-shadow-md">
                <div className="absolute -inset-1 bg-gradient-to-r from-uk-gold to-uk-red/70 rounded-full blur-sm opacity-70"></div>
                <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white/50">
                  <Image 
                    src="/uk-flag-shield.svg" 
                    alt="UK Institute"
                    fill
                    className="object-contain p-1"
                  />
                </div>
              </div>
              <div>
                <h2 className="font-bold text-2xl text-white leading-none">UK <span className="text-uk-gold">Institute</span></h2>
                <p className="text-xs text-white/70">Excellence in Education</p>
              </div>
            </div>
            
            <p className="text-gray-300 text-sm">
              Providing world-class education and certifications since 1988. Our mission is to empower students with knowledge and skills for a successful global career.
            </p>
            
            <div className="flex space-x-5">
              <Link href="#" className="flex items-center justify-center w-10 h-10 rounded-full glass text-white hover:text-uk-gold transition-colors duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
                </svg>
              </Link>
              <Link href="#" className="flex items-center justify-center w-10 h-10 rounded-full glass text-white hover:text-uk-gold transition-colors duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </Link>
              <Link href="#" className="flex items-center justify-center w-10 h-10 rounded-full glass text-white hover:text-uk-gold transition-colors duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
                </svg>
              </Link>
              <Link href="#" className="flex items-center justify-center w-10 h-10 rounded-full glass text-white hover:text-uk-gold transition-colors duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </Link>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-5">
            <h3 className="text-white font-semibold text-lg relative inline-block pb-2">
              Quick Links
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-uk-gold"></span>
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-300 hover:text-uk-gold transition-colors duration-200 flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-uk-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-uk-gold transition-colors duration-200 flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-uk-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/courses" className="text-gray-300 hover:text-uk-gold transition-colors duration-200 flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-uk-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Courses
                </Link>
              </li>
              <li>
                <Link href="/certificate" className="text-gray-300 hover:text-uk-gold transition-colors duration-200 flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-uk-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Certification
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-uk-gold transition-colors duration-200 flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-uk-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Policies */}
          <div className="space-y-5">
            <h3 className="text-white font-semibold text-lg relative inline-block pb-2">
              Policies
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-uk-gold"></span>
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/privacy-policy" className="text-gray-300 hover:text-uk-gold transition-colors duration-200 flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-uk-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/refund-policy" className="text-gray-300 hover:text-uk-gold transition-colors duration-200 flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-uk-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-300 hover:text-uk-gold transition-colors duration-200 flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-uk-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-300 hover:text-uk-gold transition-colors duration-200 flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-uk-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-5">
            <h3 className="text-white font-semibold text-lg relative inline-block pb-2">
              Contact Us
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-uk-gold"></span>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-full glass flex items-center justify-center">
                  <svg className="h-5 w-5 text-uk-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span className="text-gray-300 text-sm">123 Oxford Street<br/>London, W1D 2JB<br/>United Kingdom</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-full glass flex items-center justify-center">
                  <svg className="h-5 w-5 text-uk-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <span className="text-gray-300 text-sm">+44 1234 567890</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-full glass flex items-center justify-center">
                  <svg className="h-5 w-5 text-uk-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-gray-300 text-sm">admissions@ukinstitute.edu</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} UK Institute. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <div className="inline-flex rounded-md shadow-sm glass px-1.5 py-1">
                <a href="#" className="text-gray-300 hover:text-white text-xs px-3 py-1.5">
                  Site Map
                </a>
                <Divider orientation="vertical" className="mx-0.5 bg-white/10 h-6 my-auto" />
                <a href="#" className="text-gray-300 hover:text-white text-xs px-3 py-1.5">
                  Accessibility
                </a>
                <Divider orientation="vertical" className="mx-0.5 bg-white/10 h-6 my-auto" />
                <a href="#" className="text-gray-300 hover:text-white text-xs px-3 py-1.5">
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 