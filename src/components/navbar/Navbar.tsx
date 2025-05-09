'use client'

import React from 'react'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Button, Link, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from '@nextui-org/react'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import ThemeSwitch from '../theme/ThemeSwitch'

export default function MainNavbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const pathname = usePathname()
  
  const menuItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Courses", href: "/courses" },
    { name: "Certificate", href: "/certificate" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <Navbar 
      maxWidth="xl" 
      isMenuOpen={isMenuOpen} 
      onMenuOpenChange={setIsMenuOpen}
      className="bg-gradient-to-r from-uk-blue/90 via-uk-blue/85 to-uk-red/90 backdrop-blur-md shadow-lg dark:from-dark-uk-blue/90 dark:via-dark-uk-blue/85 dark:to-dark-uk-red/90 border-b border-white/10"
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden text-white"
        />
        <NavbarBrand>
          <Link href="/" className="flex items-center gap-3">
            <div className="relative w-12 h-12 drop-shadow-lg">
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
              <p className="font-bold text-inherit text-white text-2xl leading-none">UK <span className="text-uk-gold drop-shadow-md dark:text-dark-uk-gold">Institute</span></p>
              <p className="text-xs text-white/70 font-medium">Excellence in Education</p>
            </div>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {menuItems.map((item) => (
          <NavbarItem key={item.name} isActive={pathname === item.href}>
            <Link 
              color="foreground" 
              href={item.href}
              className={`text-lg font-medium relative px-2 py-1 transition-all duration-300 ${
                pathname === item.href 
                  ? 'text-uk-gold dark:text-dark-uk-gold'
                  : 'text-white hover:text-uk-gold dark:hover:text-dark-uk-gold'
              }`}
            >
              {pathname === item.href && (
                <span className="absolute inset-0 bg-white/10 rounded-lg -z-10"></span>
              )}
              {item.name}
              {pathname === item.href && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-0.5 bg-uk-gold dark:bg-dark-uk-gold"></span>
              )}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      
      <NavbarContent justify="end">
        <NavbarItem>
          <ThemeSwitch />
        </NavbarItem>
        <NavbarItem>
          <Button 
            as={Link} 
            href="/login" 
            variant="flat"
            className="bg-white/10 backdrop-blur-sm text-white border border-white/20 hover:bg-white/20 font-medium"
            startContent={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
              </svg>
            }
          >
            Login
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button 
            as={Link} 
            href="/register"
            className="bg-uk-gold/90 text-uk-blue hover:bg-uk-gold font-medium shadow-md dark:bg-dark-uk-gold/90 dark:text-dark-uk-blue dark:hover:bg-dark-uk-gold"
            startContent={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
              </svg>
            }
          >
            Register
          </Button>
        </NavbarItem>
      </NavbarContent>
      
      <NavbarMenu className="bg-uk-blue/95 backdrop-blur-md dark:bg-dark-uk-blue/95 pt-6 border-t border-white/10">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={index}>
            <Link
              color={pathname === item.href ? "warning" : "foreground"}
              className={`w-full flex items-center gap-2 py-2 text-white hover:text-uk-gold dark:hover:text-dark-uk-gold text-lg ${
                pathname === item.href ? 'text-uk-gold dark:text-dark-uk-gold font-medium' : ''
              }`}
              href={item.href}
              size="lg"
            >
              {pathname === item.href && (
                <span className="w-1 h-6 bg-uk-gold dark:bg-dark-uk-gold rounded-full"></span>
              )}
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
        <NavbarMenuItem className="mt-8 border-t border-white/10 pt-4">
          <Link
            color="foreground"
            className="w-full flex items-center gap-2 text-white hover:text-uk-gold dark:hover:text-dark-uk-gold text-lg"
            href="/login"
            size="lg"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
            </svg>
            Login
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            color="foreground"
            className="w-full flex items-center gap-2 text-white hover:text-uk-gold dark:hover:text-dark-uk-gold text-lg"
            href="/register"
            size="lg"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
            </svg>
            Register
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  )
} 