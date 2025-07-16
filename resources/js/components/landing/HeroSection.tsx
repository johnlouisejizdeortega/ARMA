"use client"

import { useEffect, useRef, useState, useCallback } from "react"
import { gsap } from "gsap"

const HeroSection = () => {
  // Add state to track if splash has been shown
  const [showSplash, setShowSplash] = useState<boolean>(false)
  const [currentTime, setCurrentTime] = useState<string>("")
  const [currentDate, setCurrentDate] = useState<string>("")
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
  const [servicesHover, setServicesHover] = useState<boolean>(false)
  const [logoAnimationComplete, setLogoAnimationComplete] = useState<boolean>(false)
  const [isInitialized, setIsInitialized] = useState<boolean>(false)
  const [heroContentReady, setHeroContentReady] = useState<boolean>(false)

  // Splash screen refs - KEEP THESE FOR SPLASH FUNCTIONALITY
  const splashContainerRef = useRef<HTMLDivElement>(null)
  const image1ContainerRef = useRef<HTMLDivElement>(null)
  const image3ContainerRef = useRef<HTMLDivElement>(null)
  const image2ContainerRef = useRef<HTMLDivElement>(null)
  const logoImageRef = useRef<HTMLImageElement>(null)

  // Hero content refs
  const sectionRef = useRef<HTMLElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const navbarLogoRef = useRef<HTMLImageElement>(null)

  // --- Title/Description width sync ---
  const titleRef = useRef<HTMLDivElement>(null);
  const descRef = useRef<HTMLDivElement>(null);

  const cases = [
    {
      id: 1,
      title: "Corporate Litigation",
      description: "Strategic approach to complex legal challenges",
      stats: "25+ WINS",
      image: "/png/attachment1.png",
    },
    {
      id: 2,
      title: "Professional Indemnity",
      description: "Expert protection for your business assets",
      stats: "100% SUCCESS",
      image: "/png/attachment2.png",
    },
    {
      id: 3,
      title: "Crisis Resolution",
      description: "Fast response to urgent legal matters",
      stats: "24/7 SUPPORT",
      image: "/png/attachment3.png",
    },
  ]

  const latestNews = [
    "ARMA wins landmark corporate case",
    "New partners join the firm",
    "Expanding to international markets",
  ]

  const servicesItems = [
    {
      name: "Commercial Litigation",
      id: "commercial-litigation",
    },
    {
      name: "Injunction",
      id: "injunction",
    },
    {
      name: "Fraud Defense",
      id: "fraud-defense",
    },
    {
      name: "Asset Recovery",
      id: "asset-recovery",
    },
    {
      name: "Fraud Prosecution",
      id: "fraud-prosecution",
    },
    {
      name: "Private & International Investigations",
      id: "private-international-investigations",
    },
    {
      name: "International Pursuit & Enforcement",
      id: "international-pursuit-enforcement",
    },
    {
      name: "Hybridised Litigation",
      id: "hybridised-litigation",
    },
    {
      name: "Crisis Management",
      id: "crisis-management",
    },
  ]

  // Safe session storage access functions
  const safeGetSessionItem = useCallback((key: string): string | null => {
    if (typeof window !== 'undefined' && window.sessionStorage) {
      try {
        return sessionStorage.getItem(key);
      } catch (e) {
        console.warn('Error accessing sessionStorage:', e);
        return null;
      }
    }
    return null;
  }, []);

  const safeSetSessionItem = useCallback((key: string, value: string): boolean => {
    if (typeof window !== 'undefined' && window.sessionStorage) {
      try {
        sessionStorage.setItem(key, value);
        return true;
      } catch (e) {
        console.warn('Error setting sessionStorage item:', e);
        return false;
      }
    }
    return false;
  }, []);

  // Initialize component - separate from other effects for clarity
  useEffect(() => {
    if (isInitialized) return; // Only run once
    
    // Ensure we're in the browser environment
    if (typeof window === 'undefined') return;

    // Small delay to ensure browser has fully loaded
    const initTimer = setTimeout(() => {
      // Check if splash has been shown in this browser session
      const splashShownInSession = safeGetSessionItem('splashShownInSession');
      
      if (!splashShownInSession) {
        setShowSplash(true);
        safeSetSessionItem('splashShownInSession', 'true');
      } else {
        // If splash has been shown already, directly show hero content
        setTimeout(() => {
          setHeroContentReady(true);
        }, 100);
      }
      
      setIsInitialized(true);
    }, 100); // Short delay to ensure DOM is ready

    return () => clearTimeout(initTimer);
  }, [safeGetSessionItem, safeSetSessionItem]);

  // Update time and date - separate effect for different timing
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Update time and date every second
    const updateDateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }));
      setCurrentDate(
        now.toLocaleDateString("en-US", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })
      );
    };

    updateDateTime();
    const timer = setInterval(updateDateTime, 1000);

    return () => clearInterval(timer);
  }, []);

  // SPLASH SCREEN EFFECTS - MODIFIED FOR VIDEO CUTOUT
  useEffect(() => {
    // Only run splash animations if splash is showing
    if (!showSplash) return;
    if (typeof window === 'undefined') return;

    // Preload hero content while splash is showing
    if (videoRef.current) {
      videoRef.current.load();
    }

    // Set initial states for morph effect
    gsap.set(image1ContainerRef.current, {
      opacity: 0,
      x: -300,
      scale: 0.8,
      transformOrigin: "center center",
    });
    gsap.set(image3ContainerRef.current, {
      opacity: 0,
      scale: 0.8,
      transformOrigin: "center center",
    });
    gsap.set(image2ContainerRef.current, {
      opacity: 0,
      scale: 0.8,
    });

    // Morph animation timeline
    const tl = gsap.timeline({
      defaults: { ease: "power3.inOut" },
      onComplete: () => {
        // After the logo animations, animate the logo to navbar position
        setTimeout(() => {
          animateLogoToNavbar();
        }, 300); // Longer delay to ensure DOM is ready
      },
    });

    tl.to(image1ContainerRef.current, {
      opacity: 1,
      x: 0,
      scale: 1,
      duration: 1.0,
      ease: "back.out(1.7)",
    })
      .to(image1ContainerRef.current, {
        scale: 1.1,
        duration: 0.4,
        yoyo: true,
        repeat: 1,
      })
      .to(image1ContainerRef.current, {
        opacity: 0,
        scale: 0.8,
        duration: 0.6,
      })
      .to(
        image3ContainerRef.current,
        {
          opacity: 1,
          scale: 1,
          duration: 1.0,
          ease: "elastic.out(1, 0.5)",
        },
        "-=0.3",
      )
      .to(image3ContainerRef.current, {
        scale: 1.1,
        duration:  0.4,
        yoyo: true,
        repeat: 1,
      })
      .to(image3ContainerRef.current, {
        opacity: 0,
        scale: 0.8,
        duration: 0.6,
      })
      .to(
        image2ContainerRef.current,
        {
          opacity: 1,
          scale: 1,
          duration: 1.0,
          ease: "elastic.out(1, 0.5)",
        },
        "-=0.3",
      )
      .to(image2ContainerRef.current, {
        scale: 1.1,
        duration: 0.4,
        yoyo: true,
        repeat: 1,
      });

    return () => {
      tl.kill();
    };
  }, [showSplash]);

  // KEEP SPLASH SCREEN ANIMATION FUNCTIONS EXACTLY AS THEY WERE
  const animateLogoToNavbar = () => {
    if (!logoImageRef.current || !image2ContainerRef.current) return;
    if (typeof window === 'undefined' || !document) return;

    // Create a clone of the logo that we'll animate
    const logoClone = logoImageRef.current.cloneNode(true) as HTMLImageElement;
    document.body.appendChild(logoClone);

    // Get positions
    const splashLogo = logoImageRef.current.getBoundingClientRect();
    
    // Find the actual navbar logo element in the parent document
    // This allows us to target your existing navbar's logo
    const actualNavbarLogo = document.querySelector('img[alt="ARMA"]'); // Adjust this selector to match your actual navbar logo

    let targetPosition;
    if (actualNavbarLogo) {
      // If we found the actual navbar logo, use its position
      const rect = actualNavbarLogo.getBoundingClientRect();
      targetPosition = {
        top: rect.top,
        left: rect.left,
        width: rect.width,
        height: rect.height
      };
    } else {
      // Fallback to a fixed position if we can't find the actual logo
      targetPosition = {
        top: 25,
        left: 200, // Position it roughly where your navbar logo would be
        width: 40,
        height: 25
      };
    }

    // Style the clone for absolute positioning
    logoClone.style.position = "fixed";
    logoClone.style.top = `${splashLogo.top}px`;
    logoClone.style.left = `${splashLogo.left}px`;
    logoClone.style.width = `${splashLogo.width}px`;
    logoClone.style.height = `${splashLogo.height}px`;
    logoClone.style.zIndex = "9999";
    logoClone.style.transition = "none";
    logoClone.style.filter = "drop-shadow(0 0 5px rgba(0,160,233,0.5))";

    // Hide the original logo
    gsap.set(image2ContainerRef.current, { opacity: 0 });

    // Animate the clone to the navbar position
    gsap.to(logoClone, {
      top: targetPosition.top,
      left: targetPosition.left,
      width: targetPosition.width,
      height: targetPosition.height,
      duration: 1.5,
      ease: "power3.inOut",
      onComplete: () => {
        // Remove the clone
        document.body.removeChild(logoClone);

        // Set animation complete flag
        setLogoAnimationComplete(true);

        // Fade out splash screen
        gsap.to(splashContainerRef.current, {
          opacity: 0,
          duration: 0.8,
          onComplete: () => {
            setShowSplash(false);
            setHeroContentReady(true);
          },
        });
      },
    });
  };

  // SIMPLIFIED HERO CONTENT ANIMATION (NO GSAP)
  useEffect(() => {
    if (!heroContentReady) return;

    // Simple CSS-based content reveal
    const timer = setTimeout(() => {
      if (videoRef.current) {
        const playVideo = async () => {
          try {
            await videoRef.current?.play();
          } catch (error) {
            console.warn("Video autoplay failed:", error);
            const handleUserInteraction = () => {
              videoRef.current?.play().catch(console.warn);
              document.removeEventListener("click", handleUserInteraction);
              document.removeEventListener("touchstart", handleUserInteraction);
            };
            document.addEventListener("click", handleUserInteraction);
            document.addEventListener("touchstart", handleUserInteraction);
          }
        };
        playVideo();
        
        // Handle visibility changes for video playback
        document.addEventListener("visibilitychange", () => {
          if (document.visibilityState === "visible" && videoRef.current) {
            videoRef.current.play().catch(console.warn);
          }
        });
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [heroContentReady]);

  const toggleMobileMenu = useCallback(() => {
    setIsMenuOpen(!isMenuOpen);
  }, [isMenuOpen]);

  // Function to handle Home link click without showing splash
  const handleHomeClick = useCallback((e: React.MouseEvent) => {
    e.preventDefault(); // Prevent default navigation
    // This just refreshes the current view without showing splash
    // You can add any additional navigation logic here if needed
  }, []);

  const handleServicesHover = useCallback((state: boolean) => {
    setServicesHover(state);
  }, []);

  // Sync description width to title width
  useEffect(() => {
    if (!heroContentReady) return;
    if (!titleRef.current || !descRef.current) return;
    // Get the width of the title
    const titleWidth = titleRef.current.offsetWidth;
    // Set the description container width to match
    descRef.current.style.width = titleWidth + 'px';
  }, [heroContentReady]);

  // --- Title/Description width sync ---
  useEffect(() => {
    function syncDescWidth() {
      if (titleRef.current && descRef.current) {
        const width = titleRef.current.offsetWidth;
        descRef.current.style.width = width + 'px';
      }
    }
    syncDescWidth();
    window.addEventListener('resize', syncDescWidth);
    return () => window.removeEventListener('resize', syncDescWidth);
  }, [heroContentReady]);

  return (
    <>
      {/* SPLASH SCREEN - MODIFIED WITH VIDEO CUTOUT EFFECTS */}
      {showSplash && (
        <div ref={splashContainerRef} className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center">
          {/* Black background - no video background for splash screen */}
          <div className="absolute inset-0 z-0" style={{ background: "linear-gradient(to right, #000000 5%, #3E3E3E 100%)" }}></div>

          {/* Splash Screen Navbar - Only shown during splash animation */}
          <nav
            className="absolute top-0 left-0 right-0 z-20 py-3"
            style={{
              background: "transparent",
            }}
          >
            <div className="w-full mx-auto">
              <div className="container mx-auto flex justify-between items-center">
                {/* Logo - Reduced size */}
                <div className="flex items-center px-4 sm:px-8">
                  <a href="#" className="flex-shrink-0 flex items-center group">
                    <img
                      ref={navbarLogoRef}
                      className="h-6 w-auto filter drop-shadow-[0_0_5px_rgba(0,160,233,0.5)] transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(0,160,233,0.7)]"
                      src="/png/2.png"
                      alt="ARMA"
                      style={{ opacity: logoAnimationComplete ? 1 : 0 }} // Hide initially, show after animation
                    />
                    <span className="ml-2 text-xl font-bold text-white drop-shadow-[0_0_5px_rgba(0,160,233,0.5)] transition-all duration-300 group-hover:text-[#00A0E9] group-hover:drop-shadow-[0_0_8px_rgba(0,160,233,0.7)]">
                      ARMA
                    </span>
                  </a>
                </div>

                {/* Desktop menu - Hidden except logo */}
                <div className="hidden lg:flex items-center space-x-2 px-4 lg:px-8 opacity-0">
                  <a
                    href="#"
                    onClick={handleHomeClick}
                    className="px-3 py-2 text-sm font-medium uppercase tracking-wider text-white transition-colors duration-300 hover:text-[#00A0E9] hover:drop-shadow-[0_0_5px_rgba(0,160,233,0.6)]"
                  >
                    Home
                  </a>
                  <a
                    href="#"
                    className="px-3 py-2 text-sm font-medium uppercase tracking-wider text-gray-300 hover:text-white transition-colors duration-300 hover:drop-shadow-[0_0_5px_rgba(0,160,233,0.6)]"
                  >
                    About
                  </a>
                  <a
                    href="#"
                    className="px-3 py-2 text-sm font-medium uppercase tracking-wider text-gray-300 hover:text-white transition-colors duration-300 hover:drop-shadow-[0_0_5px_rgba(0,160,233,0.6)]"
                  >
                    Team
                  </a>

                  {/* Services with dropdown */}
                  <div
                    className="relative"
                    onMouseEnter={() => handleServicesHover(true)}
                    onMouseLeave={() => handleServicesHover(false)}
                  >
                    <a
                      href="#"
                      className="px-3 py-2 text-sm font-medium uppercase tracking-wider text-gray-300 hover:text-white transition-colors duration-300 hover:drop-shadow-[0_0_5px_rgba(0,160,233,0.6)]"
                    >
                      Services
                    </a>

                    {/* Dropdown menu */}
                    {servicesHover && (
                      <div className="absolute left-0 mt-2 w-64 rounded-sm shadow-lg z-50">
                        <div
                          className="rounded-sm shadow-xs overflow-hidden"
                          style={{
                            background: "linear-gradient(to right, #000000 5%, #3E3E3E 100%)",
                            border: "1px solid #1d3843",
                          }}
                        >
                          <div className="py-1">
                            {servicesItems.map((item, index) => (
                              <a
                                key={index}
                                href={`#${item.id}`}
                                className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-800 transition-colors duration-200 border-l-2 border-transparent hover:border-[#00A0E9]"
                              >
                                {item.name}
                              </a>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  <a
                    href="#"
                    className="px-3 py-2 text-sm font-medium uppercase tracking-wider text-gray-300 hover:text-white transition-colors duration-300 hover:drop-shadow-[0_0_5px_rgba(0,160,233,0.6)]"
                  >
                    Cases
                  </a>

                  <a
                    href="#contact"
                    className="ml-4 px-4 py-2 rounded-sm text-sm font-medium uppercase tracking-wider bg-[#00A0E9] text-white hover:bg-[#0085C3] block whitespace-nowrap transition-all duration-300 shadow-md hover:shadow-[0_0_15px_rgba(0,160,233,0.7)] hover:scale-105"
                  >
                    Contact
                  </a>
                </div>

                {/* Mobile menu button - Hidden */}
                <div className="flex lg:hidden items-center px-4 sm:px-6 opacity-0">
                  <button
                    onClick={toggleMobileMenu}
                    className="inline-flex items-center justify-center p-3 rounded-full text-white hover:text-[#00A0E9] focus:outline-none transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(0,160,233,0.6)] active:bg-gray-800 active:scale-95"
                    aria-expanded={isMenuOpen}
                    style={{
                      minWidth: "44px",
                      minHeight: "44px",
                      touchAction: "manipulation",
                    }}
                  >
                    <span className="sr-only">Open menu</span>
                    <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                      {isMenuOpen ? (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      ) : (
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 6h16M4 12h16M4 18h16"
                        />
                      )}
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Mobile menu overlay */}
            {isMenuOpen && (
              <div
                className="fixed inset-0 bg-black/70 z-40 lg:hidden"
                onClick={() => setIsMenuOpen(false)}
                style={{ backdropFilter: "blur(3px)" }}
              ></div>
            )}

            {/* Mobile menu */}
            <div
              className={`lg:hidden fixed right-0 top-0 h-screen z-50 w-80 transform ${
                isMenuOpen ? "translate-x-0" : "translate-x-full"
              } transition-transform duration-300 ease-in-out`}
              style={{
                background: "linear-gradient(to right, #000000 5%, #3E3E3E 100%)",
                borderLeft: "1px solid #1d3843",
              }}
            >
              {/* Close button for mobile menu */}
              <button
                onClick={() => setIsMenuOpen(false)}
                className="absolute top-4 right-4 p-3 rounded-full text-white hover:text-[#00A0E9] focus:outline-none transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(0,160,233,0.6)] active:bg-gray-800 active:scale-95"
              >
                <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="h-full overflow-y-auto pt-20 pb-10 px-6 space-y-2">
                <a
                  href="#"
                  onClick={handleHomeClick}
                  className="block px-4 py-4 rounded-md text-lg font-medium uppercase tracking-wider text-[#00A0E9] transition-all duration-300 border-l-4 border-[#00A0E9] bg-black/30 drop-shadow-[0_0_8px_rgba(0,160,233,0.6)]"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="block px-4 py-4 rounded-md text-lg font-medium uppercase tracking-wider text-gray-300 transition-all duration-300 border-l-4 border-[#1d3843] hover:border-[#00A0E9] hover:drop-shadow-[0_0_5px_rgba(0,160,233,0.4)] active:bg-black/20"
                >
                  About
                </a>
                <a
                  href="#"
                  className="block px-4 py-4 rounded-md text-lg font-medium uppercase tracking-wider text-gray-300 transition-all duration-300 border-l-4 border-[#1d3843] hover:border-[#00A0E9] hover:drop-shadow-[0_0_5px_rgba(0,160,233,0.4)] active:bg-black/20"
                >
                  Team
                </a>

                {/* Mobile Services with dropdown */}
                <div className="relative">
                  <button
                    className="block w-full text-left px-4 py-4 rounded-md text-lg font-medium uppercase tracking-wider text-gray-300 transition-all duration-300 border-l-4 border-[#1d3843] hover:border-[#00A0E9] hover:drop-shadow-[0_0_5px_rgba(0,160,233,0.4)] active:bg-black/20"
                    onClick={() => setServicesHover(!servicesHover)}
                  >
                    <div className="flex justify-between items-center">
                      <span>Services</span>
                      <svg
                        className={`w-5 h-5 transition-transform ${servicesHover ? "rotate-180" : ""}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>

                  {/* Mobile dropdown items */}
                  {servicesHover && (
                    <div className="pl-6 py-2 bg-black/20 rounded-md my-2">
                      {servicesItems.slice(0, 5).map((item, index) => (
                        <a
                          key={index}
                          href={`#${item.id}`}
                          className="block px-4 py-3 rounded-md text-base font-medium tracking-wide text-gray-300 transition-all duration-300 border-l-4 border-[#1d3843] hover:border-[#00A0E9] hover:drop-shadow-[0_0_5px_rgba(0,160,233,0.4)] active:bg-black/10"
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>

                <a
                  href="#"
                  className="block px-4 py-4 rounded-md text-lg font-medium uppercase tracking-wider text-gray-300 transition-all duration-300 border-l-4 border-[#1d3843] hover:border-[#00A0E9] hover:drop-shadow-[0_0_5px_rgba(0,160,233,0.4)] active:bg-black/20"
                >
                  Cases
                </a>

                <div className="pt-6 mt-6 border-t border-[#1d3843]">
                  <a
                    href="#contact"
                    className="block px-6 py-4 rounded-md text-center text-lg font-medium uppercase tracking-wider bg-[#00A0E9] text-white hover:bg-[#0085C3] transition-all duration-300 shadow-md hover:shadow-[0_0_12px_rgba(0,160,233,0.8)] hover:scale-105 active:scale-95"
                  >
                    Contact Us
                  </a>
                </div>

                {/* Social Media Icons */}
                <div className="flex justify-center space-x-8 pt-8 mt-8 border-t border-[#1d3843]">
                  <a
                    href="#"
                    className="p-3 rounded-full text-white hover:text-[#00A0E9] transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(0,160,233,0.7)] hover:bg-black/30 active:scale-95"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </nav>

          {/* MODIFIED ANIMATION CONTAINER WITH VIDEO CUTOUT EFFECTS */}
          <div className="relative w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 overflow-visible z-10">
            {/* Image 1 with video cutout effect */}
            <div
              ref={image1ContainerRef}
              className="absolute inset-0 flex items-center justify-center"
              style={{ 
                transform: "translateX(-3000px)"
              }}
            >
              <div className="w-full h-full relative">
                {/* Video layer */}
                <video
                  className="absolute w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  style={{
                    WebkitMask: "url(/png/1part3.png) center/contain no-repeat",
                    mask: "url(/png/1part3.png) center/contain no-repeat"
                  }}
                >
                  <source src="/videos/armabg (online-video-cutter.com).mp4" type="video/mp4" />
                </video>
              </div>
            </div>

            {/* Image 3 with video cutout effect */}
            <div 
              ref={image3ContainerRef} 
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="w-full h-full relative">
                {/* Video layer */}
                <video
                  className="absolute w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  style={{
                    WebkitMask: "url(/png/3part2.png) center/contain no-repeat",
                    mask: "url(/png/3part2.png) center/contain no-repeat"
                  }}
                >
                  <source src="/videos/armabg (online-video-cutter.com).mp4" type="video/mp4" />
                </video>
              </div>
            </div>

            {/* Image 2 (logo) - remains as regular image */}
            <div ref={image2ContainerRef} className="absolute inset-0 flex items-center justify-center">
              <img
                ref={logoImageRef}
                src="/png/2.png"
                alt="ARMA Logo"
                className="max-w-full max-h-full object-contain"
              />
            </div>
          </div>
        </div>
      )}

      {/* HERO SECTION - RESPONSIVE VERSION USING ORIGINAL COMPONENTS */}
      <section ref={sectionRef} className="relative h-screen min-h-[600px] w-full overflow-hidden bg-black -mt-16 pt-16">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            ref={videoRef}
            className="absolute w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          >
            <source src="/videos/armabg.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Main Content - Using Original Layout */}
        <div className={`absolute inset-0 z-10 flex items-center justify-center transition-opacity duration-1000 ${heroContentReady ? 'opacity-100' : 'opacity-0'}`}>
          <div className="w-full max-w-7xl px-4 sm:px-6 md:px-8 lg:px-12">
            <div className="flex justify-start items-start w-full h-full">
              {/* Left column - Enhanced Title and intro message */}
              <div className="flex flex-col pt-24 sm:pt-32 lg:pt-40 max-w-5xl">
                {/* Enhanced Title and Intro Message */}
                <div className="transform transition-all duration-800 delay-100 translate-y-0 opacity-100">
                  {/* Main Title with staggered animation */}
                  <div className="mb-4 sm:mb-6 lg:mb-8" ref={titleRef}>
                    <h1
                      className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold leading-snug uppercase tracking-normal font-sans"
                      style={{
                        letterSpacing: "0.01em",
                        fontFamily: "'AcuminVariableConcept', 'Inter', 'Segoe UI', Arial, sans-serif",
                        lineHeight: 1.12,
                        textShadow: "none"
                      }}
                    >
                      <span className="title-word title-word-1 inline-block text-white font-semibold opacity-100 translate-y-0" style={{letterSpacing: "0.01em"}}>THE LITIGATORS</span>
                      <span className="title-word title-word-2 inline-block ml-2 text-[#00A0E9] font-semibold font-sans tracking-normal opacity-100 translate-y-0" style={{letterSpacing: "0.03em"}}></span>
                    </h1>
                  </div>
                  {/* Separator line */}
                  <div className="separator-line w-16 h-0.5 bg-gradient-to-r from-[#00A0E9] to-transparent rounded-full" style={{marginBottom: '-1.5rem'}}></div>
                  {/* Enhanced Intro Text with staggered phrases */}
                  <div ref={descRef} className="intro-text-container text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl font-normal leading-snug font-sans w-full max-w-5xl" style={{fontFamily: "'AcuminVariableConcept', 'Inter', 'Segoe UI', Arial, sans-serif", letterSpacing: "0.01em", lineHeight: 1.3}}>
                    <div className="intro-phrase intro-phrase-1 mb-1 text-white/90 font-normal tracking-normal" style={{fontWeight: 400}}>
                      High Stakes <span className="text-[#00A0E9] font-medium glow-text">Commercial Litigators</span> <span className="text-white/90 font-normal" style={{fontWeight: 400}}>Specialising in;</span>
                    </div>
                    <div className="intro-phrase intro-phrase-2 mb-1 text-white/90 font-normal tracking-normal" style={{fontWeight: 400}}>
                      <span className="text-[#00A0E9] font-medium glow-text">Fraud</span>, <span className="text-[#00A0E9] font-medium glow-text">Injunction</span><span className="text-white">,</span> <span className="text-[#00A0E9] font-medium glow-text">Crisis Management</span>
                    </div>
                    <div className="intro-phrase intro-phrase-3 text-white/90 font-normal tracking-normal" style={{fontWeight: 400}}>
                      <span className="text-[#00A0E9] font-semibold glow-text">More</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        /* Video Cutout Mask Styles - Simplified */
        .video-cutout-mask {
          /* Add some glow effect to make the cutout more visible */
          filter: drop-shadow(0 0 15px rgba(0, 160, 233, 0.5));
        }

        /* Direct video masking for clearer results */
        video[style*="mask"] {
          /* Remove any darkening filters and keep video bright */
          filter: none !important;
        }

        /* Fallback for browsers that don't support mask */
        @supports not (mask: url()) and not (-webkit-mask: url()) {
          .video-cutout-mask {
            /* Fallback to showing the original image */
            background-size: contain;
            background-repeat: no-repeat;
            background-position: center;
          }
          
          .video-cutout-mask[style*="1part3"] {
            background-image: url(/png/1part3.png);
          }
          
          .video-cutout-mask[style*="3part2"] {
            background-image: url(/png/3part2.png);
          }
          
          .video-cutout-mask video {
            display: none;
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .hero-animate {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .hero-animate:nth-child(1) {
          animation-delay: 0.1s;
        }

        .hero-animate:nth-child(2) {
          animation-delay: 0.2s;
        }

        .hero-animate:nth-child(3) {
          animation-delay: 0.3s;
        }

        .hero-animate:nth-child(4) {
          animation-delay: 0.4s;
        }

        .hero-animate:nth-child(5) {
          animation-delay: 0.5s;
        }

        .hero-animate:nth-child(6) {
          animation-delay: 0.6s;
        }

        /* Enhanced Title and Text Animations */
        .title-word {
          opacity: 1;
          transform: none;
          animation: none;
          font-family: 'AcuminVariableConcept', 'Inter', 'Segoe UI', Arial, sans-serif;
        }
        .title-word-1 {
          font-weight: 600;
          letter-spacing: 0.01em;
        }
        .title-word-2 {
          font-weight: 600 !important;
          font-family: var(--font-sans, 'AcuminVariableConcept', 'Inter', 'Segoe UI', Arial, sans-serif) !important;
          text-shadow: none;
          letter-spacing: 0.03em;
        }
        .intro-text-container {
          font-family: 'AcuminVariableConcept', 'Inter', 'Segoe UI', Arial, sans-serif;
          letter-spacing: 0.01em;
          line-height: 1.3;
        }
        .intro-phrase {
          opacity: 1;
          transform: none;
          animation: none;
          font-weight: 400;
          letter-spacing: 0.01em;
        }
        .intro-phrase-1, .intro-phrase-2, .intro-phrase-3 {
          color: #f3f4f6;
        }
        .separator-line {
          width: 0;
          animation: none;
          border-radius: 9999px;
        }
        .glow-text {
          text-shadow:
            0 0 4px #00A0E9,
            0 0 8px rgba(0,160,233,0.4),
            0 0 12px rgba(0,160,233,0.2);
          color: #00A0E9;
        }
        /* ...existing code... */
      `}</style>
    </>
  )
}

export default HeroSection