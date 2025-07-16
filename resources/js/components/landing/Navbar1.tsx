"use client"

import * as React from "react"
import { useState, useEffect } from "react"
import { Link } from "@inertiajs/react"
import { getAllServices } from "@/data/services"

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeLink, setActiveLink] = useState("/")
  const [servicesHover, setServicesHover] = useState(false)
  const [touchStartY, setTouchStartY] = useState(0)
  const [hideNavbarElements, setHideNavbarElements] = useState(false)

  // Get services from our data file
  const services = getAllServices()

  // Check for splash screen and hide navbar elements initially
  useEffect(() => {
    const checkSplashScreen = () => {
      const splashShownInSession = sessionStorage.getItem('splashShownInSession')
      
      if (!splashShownInSession) {
        // If splash hasn't been shown, hide navbar elements
        setHideNavbarElements(true)
        
        // Listen for custom event when splash animation completes
        const handleSplashComplete = () => {
          setHideNavbarElements(false)
          window.removeEventListener('splashAnimationComplete', handleSplashComplete)
        }
        
        window.addEventListener('splashAnimationComplete', handleSplashComplete)
        
        // Fallback timer in case event doesn't fire (backup after 8 seconds)
        const fallbackTimer = setTimeout(() => {
          setHideNavbarElements(false)
          window.removeEventListener('splashAnimationComplete', handleSplashComplete)
        }, 8000)
        
        return () => {
          clearTimeout(fallbackTimer)
          window.removeEventListener('splashAnimationComplete', handleSplashComplete)
        }
      } else {
        // If splash was already shown, don't hide navbar elements
        setHideNavbarElements(false)
      }
    }

    checkSplashScreen()
  }, [])

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY

      if (currentScrollPos > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })

    // Set initial active link
    if (typeof window !== "undefined") {
      setActiveLink(window.location.pathname)
    }

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // Handle route changes and hash changes
  useEffect(() => {
    const handleLocationChange = () => {
      if (typeof window !== "undefined") {
        const currentPath = window.location.pathname
        setActiveLink(currentPath)
        
        // Debug logging to see if events are firing
        console.log('Navbar: Location changed to:', currentPath, window.location.hash)
      }
    }

    // Set initial state
    handleLocationChange()

    // Listen for both popstate (back/forward) and hashchange events
    window.addEventListener("popstate", handleLocationChange, { passive: true })
    window.addEventListener("hashchange", handleLocationChange, { passive: true })

    return () => {
      window.removeEventListener("popstate", handleLocationChange)
      window.removeEventListener("hashchange", handleLocationChange)
    }
  }, [])

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isMenuOpen) {
        const menu = document.querySelector(".mobile-menu")
        if (menu && !menu.contains(event.target as Node)) {
          closeMenu()
        }
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isMenuOpen])

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && isMenuOpen) {
        closeMenu()
      }
    }

    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [isMenuOpen])

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isMenuOpen])

  // Handle touch swipe gestures for mobile menu
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartY(e.touches[0].clientY)
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEndY = e.changedTouches[0].clientY
    const diff = touchStartY - touchEndY

    // Swipe up to close menu
    if (diff > 50 && isMenuOpen) {
      closeMenu()
    }
  }

  const isActive = (path: string) => {
    return activeLink === path ? "text-[#00A0E9]" : "text-gray-300 hover:text-white"
  }

  const openMenu = () => {
    setIsMenuOpen(true)
    setScrolled(true)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const toggleMenu = () => {
    if (isMenuOpen) {
      closeMenu()
    } else {
      openMenu()
    }
  }

  const handleNavClick = (href: string, e?: React.MouseEvent) => {
    // Debug logging
    console.log('Navbar: Clicked link:', href)
    
    // Close mobile menu if open
    if (isMenuOpen) {
      closeMenu()
    }
    
    // Update active link immediately for better UX
    if (href.startsWith('/#')) {
      setActiveLink('/')
    } else {
      setActiveLink(href.split('#')[0])
    }
    
    // For hash links on the same page, handle manually to prevent issues
    if (href.startsWith('/#') && window.location.pathname === '/') {
      e?.preventDefault()
      const targetId = href.substring(2) // Remove '/#'
      const element = document.getElementById(targetId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
        window.history.pushState(null, '', href)
      }
    }
    
    // Small delay to ensure the click event completes
    setTimeout(() => {
      console.log('Navbar: Navigation should be   ing')
    }, 100)
  }

  return (
    <div className="navbar-wrapper relative">
      <nav
        className={`fixed top-0 left-0 right-0 z-50 py-3`}
        style={{
          background: "transparent",
          backdropFilter: "none",
          WebkitBackdropFilter: "none",
          boxShadow: "none",
        }}
      >
        <div className="w-full mx-auto">
          <div className="container mx-auto flex justify-between items-center">
            {/* Logo - Always visible */}
            <div className="flex items-center px-4 sm:px-8">
              <Link href="/" className="flex-shrink-0 flex items-center group">
                <img
                  className="h-6 w-auto filter drop-shadow-[0_0_5px_rgba(0,160,233,0.5)] transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(0,160,233,0.7)]"
                  src="/png/2.png"
                  alt="ARMA"
                  style={{ opacity: hideNavbarElements ? 0 : 1, transition: 'opacity 0.5s ease' }}
                />
                <span className="ml-2 text-xl font-bold text-white drop-shadow-[0_0_5px_rgba(0,160,233,0.5)] transition-all duration-300 group-hover:text-[#00A0E9] group-hover:drop-shadow-[0_0_8px_rgba(0,160,233,0.7)]">
                  ARMA
                </span>
              </Link>
            </div>

            {/* Hamburger menu button - Always visible */}
            <div className="flex items-center px-4 sm:px-6" style={{ opacity: hideNavbarElements ? 0 : 1, transition: 'opacity 0.5s ease' }}>
              <button
                onClick={toggleMenu}
                className={`inline-flex items-center justify-center p-3 rounded-full text-white focus:outline-none transition-all duration-300 active:bg-gray-800 active:scale-95
                  ${isMenuOpen ? 'animate-hamburger-open' : 'animate-hamburger-close'}`}
                aria-expanded={isMenuOpen}
                style={{
                  minWidth: "44px",
                  minHeight: "44px",
                  touchAction: "manipulation",
                }}
              >
                <span className="sr-only">Open menu</span>
                <svg
                  className={`h-6 w-6 transition-transform duration-300 ${isMenuOpen ? 'rotate-90 scale-110' : 'rotate-0 scale-100'}`}
                  stroke="currentColor" fill="none" viewBox="0 0 24 24"
                  style={{ transition: 'transform 0.4s cubic-bezier(0.4,0,0.2,1)' }}
                >
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu overlay */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 bg-black/70 z-40"
            onClick={closeMenu}
            style={{ backdropFilter: "blur(3px)" }}
          ></div>
        )}

        {/* Slide-in menu (always used) */}
        <div
          className={`mobile-menu fixed right-0 top-0 h-screen z-50 w-80
            ${isMenuOpen ? "animate-slide-in" : "animate-slide-out"}`}
          style={{
            background: "linear-gradient(to right, #000000 5%, #3E3E3E 100%)",
            borderLeft: "1px solid #1d3843",
            transform: isMenuOpen ? "translateX(0)" : "translateX(100%)",
            transition: 'transform 0.5s cubic-bezier(0.4,0,0.2,1)',
            boxShadow: isMenuOpen ? '0 0 32px 0 rgba(0,0,0,0.25)' : 'none',
            opacity: isMenuOpen ? 1 : 0.7,
          }}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Close button for menu */}
          <button
            onClick={closeMenu}
            className="absolute top-4 right-4 p-3 rounded-full text-white hover:text-[#00A0E9] focus:outline-none transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(0,160,233,0.6)] active:bg-gray-800 active:scale-95"
            style={{
              minWidth: "44px",
              minHeight: "44px",
              touchAction: "manipulation",
            }}
          >
            <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="h-full overflow-y-auto pt-20 pb-10 px-6 space-y-2">
            <div className={`flex flex-col gap-2 ${isMenuOpen ? 'animate-nav-fade-in' : ''}`} style={{transition: 'opacity 0.5s 0.1s'}}>
              <Link
                href="/"
                className={`menu-item block px-4 py-4 rounded-md text-lg font-medium uppercase tracking-wider ${isActive("/")} transition-all duration-300 ${
                  activeLink === "/"
                    ? "border-l-4 border-[#00A0E9] bg-black/30 drop-shadow-[0_0_8px_rgba(0,160,233,0.6)]"
                    : "border-l-4 border-[#1d3843] hover:border-[#00A0E9] hover:drop-shadow-[0_0_5px_rgba(0,160,233,0.4)] active:bg-black/20"
                }`}
                onClick={() => handleNavClick("/")}
                style={{ touchAction: "manipulation" }}
              >
                Home
              </Link>
              <Link
                href="/about?court=arma-litigation"
                className={`menu-item block px-4 py-4 rounded-md text-lg font-medium uppercase tracking-wider ${isActive("/about")} transition-all duration-300 ${
                  activeLink === "/about"
                    ? "border-l-4 border-[#00A0E9] bg-black/30 drop-shadow-[0_0_8px_rgba(0,160,233,0.6)]"
                    : "border-l-4 border-[#1d3843] hover:border-[#00A0E9] hover:drop-shadow-[0_0_5px_rgba(0,160,233,0.4)] active:bg-black/20"
                }`}
                onClick={() => handleNavClick("/about")}
                style={{ touchAction: "manipulation" }}
              >
                About
              </Link>
              <Link
                href="/team"
                className={`menu-item block px-4 py-4 rounded-md text-lg font-medium uppercase tracking-wider ${isActive("/team")} transition-all duration-300 ${
                  activeLink === "/team"
                    ? "border-l-4 border-[#00A0E9] bg-black/30 drop-shadow-[0_0_8px_rgba(0,160,233,0.6)]"
                    : "border-l-4 border-[#1d3843] hover:border-[#00A0E9] hover:drop-shadow-[0_0_5px_rgba(0,160,233,0.4)] active:bg-black/20"
                }`}
                onClick={() => handleNavClick("/team")}
                style={{ touchAction: "manipulation" }}
              >
                Team
              </Link>

              <Link
                href="/services"
                className={`menu-item block px-4 py-4 rounded-md text-lg font-medium uppercase tracking-wider ${isActive("/services")} transition-all duration-300 ${
                  activeLink === "/services"
                    ? "border-l-4 border-[#00A0E9] bg-black/30 drop-shadow-[0_0_8px_rgba(0,160,233,0.6)]"
                    : "border-l-4 border-[#1d3843] hover:border-[#00A0E9] hover:drop-shadow-[0_0_5px_rgba(0,160,233,0.4)] active:bg-black/20"
                }`}
                onClick={() => handleNavClick("/services")}
                style={{ touchAction: "manipulation" }}
              >
                Services
              </Link>

              <Link
                href="/#cases-section"
                className={`menu-item block px-4 py-4 rounded-md text-lg font-medium uppercase tracking-wider ${isActive("/#cases-section")} transition-all duration-300 ${
                  activeLink === "/#cases-section"
                    ? "border-l-4 border-[#00A0E9] bg-black/30 drop-shadow-[0_0_8px_rgba(0,160,233,0.6)]"
                    : "border-l-4 border-[#1d3843] hover:border-[#00A0E9] hover:drop-shadow-[0_0_5px_rgba(0,160,233,0.4)] active:bg-black/20"
                }`}
                onClick={() => handleNavClick("/#cases-section")}
                style={{ touchAction: "manipulation" }}
              >
                Cases
              </Link>

              <div className="my-2 border-t border-[#1d3843]"></div>

              <Link
                href="/careers"
                className={`menu-item block px-4 py-4 rounded-md text-lg font-medium uppercase tracking-wider ${isActive("/careers")} transition-all duration-300 bg-[#00A0E9]/80 text-white font-semibold shadow-md hover:bg-[#0085C3]`}
                onClick={() => handleNavClick("/careers")}
                style={{ touchAction: "manipulation" }}
              >
                Careers <span className="ml-1 inline-block bg-white/20 text-xs px-2 py-0.5 rounded-full align-middle">New</span>
              </Link>
              <Link
                href="/training-contracts"
                className={`menu-item block px-4 py-4 rounded-md text-lg font-medium uppercase tracking-wider ${isActive("/training-contracts")} transition-all duration-300 border border-[#00A0E9] text-[#00A0E9] hover:bg-[#00A0E9]/20 font-semibold`}
                onClick={() => handleNavClick("/training-contracts")}
                style={{ touchAction: "manipulation" }}
              >
                Training Contracts
              </Link>
              <div className="my-2 border-t border-[#1d3843]"></div>

              <Link
                href="/#contact-section"
                className={`menu-item block px-6 py-4 rounded-md text-center text-lg font-medium uppercase tracking-wider ${
                  isActive("/#contact-section") ? "bg-[#0085C3]" : "bg-[#00A0E9]"
                } text-white hover:bg-[#0085C3] transition-all duration-300 shadow-md hover:shadow-[0_0_12px_rgba(0,160,233,0.8)] hover:scale-105 active:scale-95`}
                onClick={() => handleNavClick("/#contact-section")}
                style={{ touchAction: "manipulation" }}
              >
                Contact Us
              </Link>
            </div>

            {/* Social Media Icons - Enhanced for touch */}
            <div className="flex justify-center space-x-8 pt-8 mt-8 border-t border-[#1d3843]">
              <a
                href="#"
                className="social-icon p-3 rounded-full text-white hover:text-[#00A0E9] transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(0,160,233,0.7)] hover:bg-black/30 active:scale-95"
                style={{ touchAction: "manipulation" }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="#"
                className="social-icon p-3 rounded-full text-white hover:text-[#00A0E9] transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(0,160,233,0.7)] hover:bg-black/30 active:scale-95"
                style={{ touchAction: "manipulation" }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="#"
                className="social-icon p-3 rounded-full text-white hover:text-[#00A0E9] transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(0,160,233,0.7)] hover:bg-black/30 active:scale-95"
                style={{ touchAction: "manipulation" }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zM12 16c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Special Tablet/iPad breakpoint styles */}
      <style>{`
        @media (min-width: 768px) and (max-width: 1023px) {
          .mobile-menu {
            width: 350px;
          }

          .menu-item {
            margin-bottom: 6px;
          }
        }
      `}</style>

      <div
        className="navbar-spacer w-full relative"
        style={{
          height: "64px",
          background: "transparent",
        }}
      ></div>

      <style>{`
        .animate-hamburger-open {
          animation: hamburgerOpen 0.4s cubic-bezier(0.4,0,0.2,1);
        }
        .animate-hamburger-close {
          animation: hamburgerClose 0.4s cubic-bezier(0.4,0,0.2,1);
        }
        @keyframes hamburgerOpen {
          0% { transform: scale(1) rotate(0deg); background: transparent; }
          60% { transform: scale(1.2) rotate(15deg); background: #23272a44; }
          100% { transform: scale(1.1) rotate(90deg); background: #23272a88; }
        }
        @keyframes hamburgerClose {
          0% { transform: scale(1.1) rotate(90deg); background: #23272a88; }
          60% { transform: scale(1.2) rotate(15deg); background: #23272a44; }
          100% { transform: scale(1) rotate(0deg); background: transparent; }
        }
        .animate-slide-in {
          animation: slideInSidebar 0.5s cubic-bezier(0.4,0,0.2,1);
        }
        .animate-slide-out {
          animation: slideOutSidebar 0.5s cubic-bezier(0.4,0,0.2,1);
        }
        @keyframes slideInSidebar {
          0% { transform: translateX(100%); opacity: 0; }
          60% { transform: translateX(-10px); opacity: 1; }
          100% { transform: translateX(0); opacity: 1; }
        }
        @keyframes slideOutSidebar {
          0% { transform: translateX(0); opacity: 1; }
          100% { transform: translateX(100%); opacity: 0; }
        }
        .animate-nav-fade-in > * {
          opacity: 0;
          animation: navFadeIn 0.5s ease forwards;
        }
        .animate-nav-fade-in > *:nth-child(1) { animation-delay: 0.1s; }
        .animate-nav-fade-in > *:nth-child(2) { animation-delay: 0.18s; }
        .animate-nav-fade-in > *:nth-child(3) { animation-delay: 0.26s; }
        .animate-nav-fade-in > *:nth-child(4) { animation-delay: 0.34s; }
        .animate-nav-fade-in > *:nth-child(5) { animation-delay: 0.42s; }
        .animate-nav-fade-in > *:nth-child(6) { animation-delay: 0.50s; }
        @keyframes navFadeIn {
          0% { opacity: 0; transform: translateY(24px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  )
}

export default Navbar