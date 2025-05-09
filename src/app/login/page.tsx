'use client'

import React, { useState } from 'react'
import { Button, Input, Link, Card, CardBody, Checkbox, Divider } from '@nextui-org/react'
import Image from 'next/image'
import MainLayout from '@/components/layout/MainLayout'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isVisible, setIsVisible] = useState(false)
  const [rememberMe, setRememberMe] = useState(false)

  const toggleVisibility = () => setIsVisible(!isVisible);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle login logic here
    console.log({ email, password, rememberMe })
    // In a real app, you would make an API call to authenticate
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
                
                <h2 className="text-2xl font-bold text-center text-uk-blue dark:text-white mb-6">
                  Sign in to your account
                </h2>
                
                <form onSubmit={handleLogin} className="space-y-6">
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
                  
                  <Input
                    label="Password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    variant="bordered"
                    fullWidth
                    required
                    autoComplete="current-password"
                    endContent={
                      <button
                        className="focus:outline-none" 
                        type="button" 
                        onClick={toggleVisibility}
                      >
                        {isVisible ? (
                          <svg className="w-5 h-5 text-uk-blue dark:text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                        ) : (
                          <svg className="w-5 h-5 text-uk-blue dark:text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                          </svg>
                        )}
                      </button>
                    }
                    type={isVisible ? "text" : "password"}
                  />
                  
                  <div className="flex items-center justify-between">
                    <Checkbox 
                      size="sm" 
                      isSelected={rememberMe}
                      onValueChange={setRememberMe}
                      color="primary"
                    >
                      <span className="text-sm text-gray-600 dark:text-gray-400">Remember me</span>
                    </Checkbox>
                    <Link href="/forgot-password" className="text-sm text-uk-blue dark:text-uk-gold hover:underline">
                      Forgot password?
                    </Link>
                  </div>
                  
                  <Button 
                    type="submit" 
                    fullWidth
                    className="bg-uk-blue text-white dark:bg-dark-uk-blue dark:text-white hover:bg-uk-blue/90 dark:hover:bg-dark-uk-blue/90"
                  >
                    Sign in
                  </Button>
                </form>
                
                <Divider className="my-6" />
                
                <div className="flex flex-col space-y-4">
                  <Button 
                    fullWidth
                    variant="bordered"
                    startContent={
                      <svg className="w-5 h-5" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                        />
                        <path
                          fill="currentColor"
                          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                        />
                        <path
                          fill="currentColor"
                          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                        />
                        <path
                          fill="currentColor"
                          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                        />
                        <path fill="none" d="M1 1h22v22H1z" />
                      </svg>
                    }
                  >
                    Sign in with Google
                  </Button>
                  
                  <Button 
                    fullWidth
                    variant="bordered"
                    startContent={
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0014.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z" />
                      </svg>
                    }
                  >
                    Sign in with Facebook
                  </Button>
                </div>
                
                <p className="mt-8 text-center text-sm text-gray-600 dark:text-gray-400">
                  Don't have an account?{" "}
                  <Link href="/register" className="text-uk-blue dark:text-uk-gold hover:underline">
                    Sign up
                  </Link>
                </p>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </MainLayout>
  )
} 