"use client"

import { useEffect, useState, useRef, useCallback } from "react"
import { getAllServices, Service } from "@/data/services"

const ServicesSection = () => {
  const [currentPage, setCurrentPage] = useState(0)
  const [isMobileView, setIsMobileView] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  // Get services from our data file and sort alphabetically by title
  const services = getAllServices().sort((a, b) => a.title.localeCompare(b.title))
  const totalPages = isMobileView ? Math.ceil(services.length / 3) : 2

  // Get current cards based on view and page
  const getCurrentPageCards = useCallback(() => {
    if (isMobileView) {
      const startIdx = currentPage * 3
      return services.slice(startIdx, startIdx + 3)
    } else {
      return currentPage === 0 ? services.slice(0, 6) : services.slice(6, 9)
    }
  }, [currentPage, isMobileView, services])

  // Navigation functions
  const nextPage = useCallback(() => {
    setCurrentPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1))
  }, [totalPages])

  const prevPage = useCallback(() => {
    setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1))
  }, [totalPages])

  const goToPage = useCallback((pageNumber: number) => {
    setCurrentPage(pageNumber)
  }, [])

  const handleSeeMore = useCallback(() => {
    window.location.href = "/services"
  }, [])

  const handleServiceClick = useCallback((serviceId: string) => {
    window.location.href = `/services#${serviceId}`
  }, [])

  // Handle viewport changes and auto-rotation
  useEffect(() => {
    const checkViewport = () => {
      setIsMobileView(window.innerWidth < 1024)
    }

    checkViewport()
    window.addEventListener("resize", checkViewport)

    return () => {
      window.removeEventListener("resize", checkViewport)
    }
  }, [])

  // Auto-rotate carousel
  useEffect(() => {
    const startAutoRotate = () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
      intervalRef.current = setInterval(() => {
        setCurrentPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1))
      }, 10000)
    }

    startAutoRotate()

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [totalPages])

  return (
    <section
      id="services"
      className="relative z-20 py-16 sm:py-20 md:py-24"
      style={{
        background: "linear-gradient(to right, #000000 5%, #3E3E3E 100%)",
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title and subtitle */}
        <div className="mb-12 sm:mb-16">
          <h2 className="text-3xl font-bold mb-2 uppercase">
            <span className="text-white">SPECIAL</span>
            <span className="text-[#00A0E9]">ISMS</span>
          </h2>
          <p className="text-gray-400 text-base max-w-2xl">
            Our team provides expert legal services across a range of specialisms.
          </p>
        </div>

        {/* Show all 9 specialism blocks, no carousel, no short descriptions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="group cursor-pointer"
              onClick={() => handleServiceClick(service.id)}
              role="button"
              aria-label={`View ${service.title} specialism details`}
            >
              <div className="relative bg-black overflow-hidden shadow-lg h-44 w-full rounded-[5px] transition-all duration-500 hover:shadow-xl hover:shadow-[#00A0E9]/30 hover:-translate-y-3 hover:scale-105 group-hover:border group-hover:border-[#00A0E9]/30">
                {/* Background Video */}
                <video
                  className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-500"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  onError={(e) => {
                    console.log('Video failed to load:', e);
                    e.currentTarget.style.display = 'none';
                  }}
                  onLoadStart={() => console.log('Video loading started')}
                  onCanPlay={() => console.log('Video can play')}
                >
                  <source src="/videos/28175-368238590_small.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                
                {/* Fallback background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800/50 to-gray-900/50"></div>
                
                {/* Dark overlay for better text readability */}
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-all duration-500"></div>
                
                <div className="p-4 h-full flex flex-col justify-between relative z-10">
                  <div>
                    <p className="text-xs text-[#00A0E9] mb-1 transition-colors duration-300 group-hover:text-white">Specialism</p>
                    <h3 className="text-sm font-bold uppercase text-white mb-2 transition-all duration-300 group-hover:text-[#00A0E9]">{service.title}</h3>
                  </div>
                  <div className="flex justify-end">
                    <button className="px-4 py-2 bg-[#00A0E9] text-white text-xs font-medium rounded transition-all duration-300 group-hover:bg-white group-hover:text-[#00A0E9]">
                      Learn More
                    </button>
                  </div>
                </div>
                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#00A0E9]/0 via-[#00A0E9]/10 to-[#00A0E9]/0 opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none"></div>
                {/* Border animation */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#00A0E9]/20 rounded-[5px] transition-all duration-500"></div>
              </div>
            </div>
          ))}
        </div>

        {/* All Services Button */}
        <div className="flex justify-center mt-10">
          <button
            onClick={handleSeeMore}
            className="px-8 py-3 bg-[#00A0E9] text-white rounded-md font-medium transition-all duration-300 flex items-center space-x-2 hover:shadow-lg hover:shadow-[#00A0E9]/40 hover:bg-[#0088c9] hover:scale-105 group"
          >
            <span>All Services</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection