"use client"

import { useState, useCallback, useEffect, useRef } from "react"

// Custom hook for scroll-triggered animations
type ScrollAnimationOptions = {
  threshold?: number
  rootMargin?: string
}

const useScrollAnimation = (options: ScrollAnimationOptions = {}) => {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      {
        threshold: options.threshold || 0.15,
        rootMargin: options.rootMargin || '0px 0px -100px 0px',
      }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [options.threshold, options.rootMargin])

  return { ref, isVisible }
}

const Footer = () => {
  const [openSection, setOpenSection] = useState<string | null>(null)
  
  // Animation hooks
  const { ref: footerRef, isVisible: footerVisible } = useScrollAnimation()
  const { ref: dividerRef, isVisible: dividerVisible } = useScrollAnimation({ threshold: 0.2 })
  const { ref: logoRef, isVisible: logoVisible } = useScrollAnimation({ threshold: 0.1 })
  const { ref: contactRef, isVisible: contactVisible } = useScrollAnimation({ threshold: 0.3 })
  const { ref: linksRef, isVisible: linksVisible } = useScrollAnimation({ threshold: 0.4 })
  const { ref: socialsRef, isVisible: socialsVisible } = useScrollAnimation({ threshold: 0.5 })
  const { ref: copyrightRef, isVisible: copyrightVisible } = useScrollAnimation({ threshold: 0.6 })
  
  const toggleSection = useCallback((section: string) => {
    setOpenSection(openSection === section ? null : section)
  }, [openSection])

  const socialLinks = [
    {
      name: "Twitter",
      href: "#",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ),
    },
    {
      name: "Facebook", 
      href: "#",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: "#", 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      href: "#",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
    },
  ]

  const companyLinks = [
    { href: "#", label: "About" },
    { href: "#", label: "Services" },
    { href: "#", label: "Works" },
    { href: "#", label: "Careers" },
  ]

  const helpLinks = [
    { href: "/Terms", label: "Terms of Business" },
    { href: "/Policy", label: "Cookie Policy" },
    { href: "/Charges", label: "Our Charges" },
    { href: "/privacy", label: "Privacy Statement" },
    { href: "/Use", label: "Terms of Use" },
  ]

  const currentYear = new Date().getFullYear()

  return (
    <footer 
      ref={footerRef}
      className="relative z-20"
      style={{ 
        background: "linear-gradient(to right, #000000 5%, #3E3E3E 100%)" 
      }}
    >
      <div className="pt-10 sm:pt-12 md:pt-16 pb-6 sm:pb-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Divider line */}
          <div 
            ref={dividerRef}
            className={`border-t border-gray-700 mb-8 sm:mb-10 md:mb-12 animate-on-scroll ${dividerVisible ? 'animate' : ''}`}
          >
            <div className="animate-fade-up stagger-1 w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
          </div>
          
          {/* Logo and company info */}
          <div className="flex flex-col lg:flex-row justify-between mb-8 sm:mb-10 md:mb-12 gap-6 sm:gap-8">
            <div 
              ref={logoRef}
              className={`mb-6 sm:mb-8 lg:mb-0 lg:max-w-md animate-on-scroll ${logoVisible ? 'animate' : ''}`}
            >
              <div className="flex items-center mb-3 sm:mb-4 animate-scale-in stagger-1">
                <img 
                  src="/png/al.png" 
                  alt="ARMA Logo" 
                  className="mr-1"
                />
                <div className="text-white font-bold text-xl sm:text-2xl">ARMA</div>
              </div>
              
              <p className="text-gray-400 text-sm mb-4 sm:mb-6 leading-relaxed animate-fade-up stagger-2">
                ARMA and ARMA Litigation are trading names of ARMA Litigation Limited, a limited 
                company registered in England and Wales with number 10614355. A list of the 
                Directors' names and their professional qualifications is available for inspection at the 
                above office. ARMA is regulated by the Solicitors Regulation Authority (ID No: 
                612983).
              </p>
              
              {/* Contact information - visible on mobile */}
              <div className="lg:hidden mb-6 animate-fade-up stagger-3">
                <p className="text-gray-300 text-sm mb-1.5">+44 (0) 113 242 4099</p>
                <p className="text-gray-300 text-sm mb-4">info@armalitigation.com</p>
              </div>
              
              {/* Social icons */}
              <div 
                ref={socialsRef}
                className={`flex space-x-5 sm:space-x-6 animate-on-scroll ${socialsVisible ? 'animate' : ''}`}
              >
                {socialLinks.map((social, index) => (
                  <a 
                    key={social.name}
                    href={social.href} 
                    aria-label={social.name} 
                    className={`text-[#00A0E9] hover:text-white transition-all duration-300 hover:scale-110 animate-scale-in`}
                    style={{ animationDelay: `${4 + index * 0.2}s` }}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
            
            {/* Contact information for desktop */}
            <div 
              ref={contactRef}
              className={`hidden lg:block lg:max-w-[200px] animate-on-scroll ${contactVisible ? 'animate' : ''}`}
            >
              <h4 className="text-white text-sm font-semibold mb-4 uppercase tracking-wider animate-fade-left stagger-1">Contact Us</h4>
              <p className="text-gray-300 text-sm mb-2 animate-fade-left stagger-2">+44 (0) 113 242 4099</p>
              <p className="text-gray-300 text-sm mb-4 animate-fade-left stagger-3">info@armalitigation.com</p>
              <p className="text-gray-400 text-sm animate-fade-left stagger-4">
                1 City Square<br />
                Leeds<br />
                LS1 2ES
              </p>
            </div>
            
            {/* Links sections - accordion on mobile, regular on desktop */}
            <div 
              ref={linksRef}
              className={`grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-8 animate-on-scroll ${linksVisible ? 'animate' : ''}`}
            >
              {/* Company Column */}
              <div className="border-b border-gray-700 md:border-0 py-2 md:py-0 animate-fade-left stagger-1">
                <div 
                  className="flex justify-between items-center md:block cursor-pointer md:cursor-default"
                  onClick={() => toggleSection('company')}
                >
                  <h4 className="text-white text-sm font-semibold mb-1 md:mb-4 uppercase tracking-wider">Company</h4>
                  <span className="md:hidden text-gray-400 transition-transform duration-300">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className={`h-4 w-4 transition-transform duration-300 ${openSection === 'company' ? 'transform rotate-180' : ''}`} 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </div>
                <ul className={`space-y-2 md:space-y-3 overflow-hidden transition-all duration-300 ease-in-out ${
                  openSection === 'company' ? 'max-h-40 py-2' : 'max-h-0 md:max-h-40'
                }`}>
                  {companyLinks.map((link, index) => (
                    <li key={link.label}>
                      <a 
                        href={link.href} 
                        className={`text-gray-400 text-sm block py-1 md:py-0 transition-all duration-300 hover:translate-x-1 hover:text-[#00A0E9] animate-fade-up`}
                        style={{ animationDelay: `${2 + index * 0.2}s` }}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Help Column */}
              <div className="border-b border-gray-700 md:border-0 py-2 md:py-0 animate-fade-left stagger-2">
                <div 
                  className="flex justify-between items-center md:block cursor-pointer md:cursor-default"
                  onClick={() => toggleSection('help')}
                >
                  <h4 className="text-white text-sm font-semibold mb-1 md:mb-4 uppercase tracking-wider">Help</h4>
                  <span className="md:hidden text-gray-400 transition-transform duration-300">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className={`h-4 w-4 transition-transform duration-300 ${openSection === 'help' ? 'transform rotate-180' : ''}`} 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </div>
                <ul className={`space-y-2 md:space-y-3 overflow-hidden transition-all duration-300 ease-in-out ${
                  openSection === 'help' ? 'max-h-40 py-2' : 'max-h-0 md:max-h-40'
                }`}>
                  {helpLinks.map((link, index) => (
                    <li key={link.label}>
                      <a 
                        href={link.href} 
                        className={`text-gray-400 text-sm block py-1 md:py-0 transition-all duration-300 hover:translate-x-1 hover:text-[#00A0E9] animate-fade-up`}
                        style={{ animationDelay: `${3 + index * 0.2}s` }}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div 
            ref={copyrightRef}
            className={`border-t border-gray-700 pt-4 sm:pt-6 animate-on-scroll ${copyrightVisible ? 'animate' : ''}`}
          >
            <div className="animate-fade-up stagger-1 w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-4 sm:mb-6"></div>
            <p className="text-gray-400 text-sm text-center animate-fade-up stagger-2">
              © {currentYear} ARMA Litigation Limited. All rights reserved.
            </p>
          </div>
        </div>
      </div>

      {/* CSS Animations - Same as your original code */}
      <style>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.8) translateY(30px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        @keyframes fadeLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        /* Animation classes with cinematic timing */
        .animate-fade-up {
          animation: fadeUp 2.0s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }

        .animate-scale-in {
          animation: scaleIn 1.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }

        .animate-fade-left {
          animation: fadeLeft 1.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }

        /* Cinematic stagger delays */
        .stagger-1 { animation-delay: 0.5s; }
        .stagger-2 { animation-delay: 1.2s; }
        .stagger-3 { animation-delay: 1.9s; }
        .stagger-4 { animation-delay: 2.6s; }
        .stagger-5 { animation-delay: 3.3s; }
        .stagger-6 { animation-delay: 4.0s; }
        .stagger-7 { animation-delay: 4.7s; }

        /* Initially hidden elements */
        .animate-on-scroll {
          opacity: 0;
        }

        .animate-on-scroll.animate {
          opacity: 1;
        }

        .animate-on-scroll.animate .animate-fade-up,
        .animate-on-scroll.animate .animate-scale-in,
        .animate-on-scroll.animate .animate-fade-left {
          opacity: 1;
        }

        /* Ensure child elements start hidden */
        .animate-on-scroll .animate-fade-up,
        .animate-on-scroll .animate-scale-in,
        .animate-on-scroll .animate-fade-left {
          opacity: 0;
        }

        /* Enhanced hover effects */
        .group:hover .group-hover\\:scale-110 {
          transform: scale(1.1);
        }

        .group:hover .group-hover\\:brightness-110 {
          filter: brightness(1.1);
        }

        /* Smooth transitions for all interactive elements */
        * {
          transition-property: transform, opacity, color, background-color, border-color, box-shadow, filter;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        }
      `}</style>
    </footer>
  )
}

export default Footer