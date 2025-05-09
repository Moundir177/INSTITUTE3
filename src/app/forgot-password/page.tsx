'use client'

import React, { useState } from 'react'
import { Button, Input, Link, Card, CardBody } from '@nextui-org/react'
import Image from 'next/image'
import MainLayout from '@/components/layout/MainLayout'

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle password reset request here
    console.log({ email })
    // In a real app, you would make an API call to request password reset
    setIsSubmitted(true)
  }

  return (
    <MainLayout>
      <div className="py-20 bg-gradient-to-b from-white to-uk-silver/20 dark:from-gray-900 dark:to-dark-uk-blue/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-md mx-auto">
            <Card className="py-4 shadow-xl border border-gray-200 dark:border-gray-700">
              <CardBody className="px-8 py-4">
                <div className="flex justify-center mb-6">
                  <div className="relative w-16 h-16">
                    <Image 
                      src="/uk-flag-shield.svg" 
                      alt="UK Institute"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                
                <h2 className="text-2xl font-bold text-center text-uk-blue dark:text-white mb-3">
                  Forgot Your Password?
                </h2>
                
                <p className="text-center text-gray-600 dark:text-gray-400 mb-6">
                  {isSubmitted 
                    ? "If your email is registered with us, you will receive password reset instructions shortly."
                    : "Enter your email address and we'll send you instructions to reset your password."}
                </p>
                
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <Input
                      type="email"
                      label="Email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      variant="bordered"
                      fullWidth
                      required
                      autoComplete="email"
                    />
                    
                    <Button 
                      type="submit" 
                      fullWidth
                      className="bg-uk-blue text-white dark:bg-dark-uk-blue dark:text-white hover:bg-uk-blue/90 dark:hover:bg-dark-uk-blue/90"
                    >
                      Reset Password
                    </Button>
                  </form>
                ) : (
                  <div className="text-center">
                    <div className="mb-6 mx-auto w-16 h-16 bg-green-100 dark:bg-green-800/30 rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    
                    <h3 className="text-lg font-semibold text-uk-blue dark:text-white mb-2">
                      Email Sent
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                      Check your inbox for further instructions. If you don't receive an email within a few minutes, check your spam folder.
                    </p>
                    
                    <Button 
                      onClick={() => setIsSubmitted(false)}
                      variant="flat"
                      color="primary"
                      className="mt-2"
                    >
                      Try Again
                    </Button>
                  </div>
                )}
                
                <div className="mt-6 text-center">
                  <Link href="/login" className="text-sm text-uk-blue dark:text-uk-gold hover:underline">
                    Return to Login
                  </Link>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </MainLayout>
  )
} 