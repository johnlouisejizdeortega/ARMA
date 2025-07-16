"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"

type ServiceId = "1" | "2" | "3"

interface Service {
  id: ServiceId
  title: string
  image: string
}

const ScrollSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const imagesContainerRef = useRef<HTMLDivElement>(null)
  const [activeSlide, setActiveSlide] = useState(0)
  const logoRef = useRef<HTMLDivElement>(null)

  const services: Service[] = [
    { id: "1", title: "ABOUT US", image: "/png/Metis-law-Wisdom-Page-Image-0x2160-c-default.jpeg" },
    { id: "2", title: "SERVICES", image: "/png/Stocksy_txp4b448826crQ200_OriginalDelivery_1670891-1534x0-c-default.jpeg" },
    { id: "3", title: "TEAM", image: "/png/armour-1-0x2160-c-default.webp" },
  ]

  const handleImageClick = (imageId: ServiceId) => {
    const routes: Record<ServiceId, string> = {
      "1": "/about?court=arma-litigation",
      "2": "/services",
      "3": "/team",
    }
    window.location.href = routes[imageId]
  }

  const nextSlide = () => setActiveSlide((prev) => (prev === services.length - 1 ? 0 : prev + 1))
  const prevSlide = () => setActiveSlide((prev) => (prev === 0 ? services.length - 1 : prev - 1))

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative w-full"
      style={{
        background: "linear-gradient(to right, #000000 5%, #3E3E3E 100%)",
        overflow: "hidden",
        height: typeof window !== "undefined" && window.innerWidth < 1024 ? "45vh" : "70vh",
      }}
    >
      <div className="relative w-full h-full flex">
        {/* Mobile/iPad View */}
        <div className="block lg:hidden w-full h-full">
          {/* Logo with transparent background */}
          <div className="absolute top-3 left-14 z-30">
            <div className="flex flex-col bg-transparent rounded p-2">
              <div className="flex items-center">
                <div className="w-1 h-14 bg-gradient-to-b from-[#00A0E9] to-transparent rounded-full mr-4"></div>
                <div className="flex flex-col">
                  <h1
                    className="text-[#00A0E9] text-6xl font-bold"
                    style={{
                      letterSpacing: "0.15em",
                      textShadow: "0 0 15px rgba(0, 160, 233, 0.8), 0 0 25px rgba(0, 160, 233, 0.5)",
                    }}
                  >
                    ARMA
                  </h1>
                </div>
              </div>
              <div className="h-px w-full bg-gradient-to-r from-[#00A0E9]/80 via-white/20 to-transparent my-3"></div>
            </div>
          </div>

          <div className="w-full h-full relative">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
                  index === activeSlide ? "opacity-100 z-20" : "opacity-0 z-10"
                }`}
                onClick={() => handleImageClick(service.id)}
              >
                <div className="relative h-full w-full">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${service.image})` }}
                  ></div>
                  <div className="absolute inset-0 bg-black/30"></div>
                  <div className="absolute bottom-12 w-full flex justify-center items-center z-20">
                    <div className="text-white text-2xl font-bold px-4 py-2 rounded-md text-center bg-black/50 backdrop-blur-sm">
                      {service.title}
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <div className="absolute top-1/2 transform -translate-y-1/2 left-4 z-30">
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  prevSlide()
                }}
                className="bg-black/50 text-white rounded-full p-2 hover:bg-[#00A0E9]/70 transition-all"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            </div>

            <div className="absolute top-1/2 transform -translate-y-1/2 right-4 z-30">
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  nextSlide()
                }}
                className="bg-black/50 text-white rounded-full p-2 hover:bg-[#00A0E9]/70 transition-all"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-3 z-30">
              {services.map((_, index) => (
                <button
                  key={index}
                  onClick={(e) => {
                    e.stopPropagation()
                    setActiveSlide(index)
                  }}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    index === activeSlide ? "bg-[#00A0E9] scale-125" : "bg-white/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Desktop View */}
        <div className="hidden lg:flex w-full h-full">
          {/* Left section with transparent background */}
          <div className="w-[18%] h-full bg-transparent relative z-10">
            <div ref={logoRef} className="absolute top-0 left-0 w-full h-full flex flex-col py-12 justify-between">
              <div className="pl-16">
                <div className="flex items-start">
                  <div className="w-0.5 h-24 bg-gradient-to-b from-[#00A0E9] to-transparent mr-6"></div>
                  <div>
                    <h1
                      className="text-[#00A0E9] text-8xl font-bold tracking-widest"
                      style={{
                        letterSpacing: "0.2em",
                        textShadow: "0 0 20px rgba(0, 160, 233, 0.9), 0 0 40px rgba(0, 160, 233, 0.6)",
                      }}
                    >
                      ARMA
                    </h1>
                  </div>
                </div>
                <div className="my-10 w-full">
                  <div className="h-px w-full bg-gradient-to-r from-[#00A0E9] via-white/20 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>

          <div ref={imagesContainerRef} className="w-[82%] h-full relative flex">
            {services.map((service, index) => (
              <div
                key={service.id}
                className="h-full relative overflow-hidden cursor-pointer transition-all duration-300 group"
                style={{
                  width: "48%",
                  marginLeft: service.id !== "1" ? "-20%" : "0",
                }}
                data-id={service.id}
                onClick={() => handleImageClick(service.id)}
              >
                <div
                  className="absolute inset-0 overflow-hidden"
                  style={{ clipPath: "polygon(43% 0, 100% 0, 57% 100%, 0 100%)" }}
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-all duration-300 group-hover:blur-sm group-hover:brightness-75 group-hover:scale-105"
                    style={{ backgroundImage: `url(${service.image})` }}
                  ></div>
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                  <div className="absolute inset-0 bg-gradient-radial from-[#00A0E9]/30 via-black/60 to-black/80 opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
                </div>
                <div className="absolute bottom-6 left-[28%] z-10 transition-all duration-300 group-hover:left-1/2 group-hover:bottom-1/2 group-hover:transform group-hover:-translate-x-1/2 group-hover:translate-y-1/2">
                  <div className="text-white text-lg font-semibold transition-all duration-300 group-hover:scale-130 group-hover:shadow-lg">
                    {service.title}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Custom styles for hover effects */}
      <style>{`
        .group-hover\\:scale-130:hover {
          transform: scale(1.3);
        }
        
        .group:hover .group-hover\\:shadow-lg {
          text-shadow: 0 0 15px rgba(0,0,0,0.8);
        }
        
        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-from), var(--tw-gradient-to));
        }
      `}</style>
    </section>
  )
}

export default ScrollSection