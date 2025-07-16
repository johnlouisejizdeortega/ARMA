"use client"

import { useCallback } from "react"
import { Link } from "@inertiajs/react"

interface PracticeCourt {
  id: string
  image?: string
  video?: string
  title: string
  cta: string
  href?: string // Optional direct link override
}

const practiceCourts: PracticeCourt[] = [
  {
    id: "arma-litigation",
    video: "/images/about/istockphoto-2203378428-640_adpp_is.mp4",
    title: "ARMA Litigation",
    cta: "See more",
  },
  {
    id: "london-court",
    video: "/images/about/istockphoto-1483338993-640_adpp_is.mp4",
    title: "Our Approach",
    cta: "See more",
  },
  {
    id: "outside-court",
    video: "/images/about/istockphoto-2074896295-640_adpp_is.mp4",
    title: "Contact Us",
    cta: "See more",
  },
]

const AboutSection = () => {
  const handleVideoError = useCallback((e: React.SyntheticEvent<HTMLVideoElement>, title: string) => {
    const target = e.target as HTMLVideoElement
    const img = document.createElement("img")
    img.src = "/placeholder.svg"
    img.alt = title || "Court"
    img.className = "w-full h-full object-cover"
    if (target.parentNode) {
      target.parentNode.replaceChild(img, target)
    }
  }, [])

  const getHref = useCallback((index: number, courtId: string) => {
    const court = practiceCourts[index]
    if (court && court.href) return court.href
    return index === practiceCourts.length - 1 ? "#contact" : `/about?court=${courtId}`
  }, [])

  return (
    <section
      id="about"
      className="relative z-20 py-12 sm:py-16 md:py-20 lg:py-24"
      style={{
        background: "linear-gradient(to right, #000000 5%, #3E3E3E 100%)",
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* MOBILE & TABLET LAYOUT */}
        <div className="lg:hidden">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold uppercase">
              <span className="text-[#00A0E9]">ABOUT </span>
              <span className="text-white">US</span>
            </h2>
            <p className="text-xs uppercase tracking-wider text-gray-400 mt-2">EQUALISERS</p>
          </div>

          {/* Mobile Cards */}
          <div className="mb-6 sm:mb-8">
            <div className="flex flex-col gap-4 sm:gap-6">
              {practiceCourts.map((court, index) => (
                <Link
                  key={court.id}
                  href={getHref(index, court.id)}
                  className="relative h-[250px] sm:h-[300px] w-full group"
                >
                  <div className="relative h-full overflow-hidden rounded-xl shadow-lg transition-all duration-500 hover:shadow-xl hover:shadow-[#00A0E9]/30 hover:scale-[1.02] hover:-translate-y-1">
                    {court.video ? (
                      <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="h-full w-full object-cover transition-all duration-500 group-hover:scale-110"
                        poster="/placeholder.svg"
                        onError={(e) => handleVideoError(e, court.title)}
                      >
                        <source src={court.video} type="video/mp4" />
                      </video>
                    ) : court.image ? (
                      <div
                        className="h-full w-full bg-cover bg-center transition-all duration-500 group-hover:scale-110"
                        style={{ backgroundImage: `url(${court.image})` }}
                      ></div>
                    ) : (
                      <div className="h-full w-full bg-[#10151a] flex items-center justify-center"></div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent group-hover:from-black/80 group-hover:via-black/40 transition-all duration-300"></div>
                    
                    {/* Hover glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#00A0E9]/0 via-[#00A0E9]/15 to-[#00A0E9]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
                      <h3 className="text-white text-lg sm:text-xl font-bold uppercase transition-all duration-300 group-hover:text-[#00A0E9]">
                        {court.title}
                      </h3>
                      <p className="text-[#00A0E9] text-sm sm:text-base transition-all duration-300 group-hover:text-white group-hover:font-medium">
                        {court.cta}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* DESKTOP LAYOUT */}
        <div className="hidden lg:block my-4 sm:my-6 md:my-8">
          <div className="text-center mb-12 sm:mb-16 md:mb-20 lg:mb-24">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase">
              <span className="text-[#00A0E9]">ABOUT </span>
              <span className="text-white">US</span>
            </h2>
            <p className="text-xs sm:text-sm uppercase tracking-wider text-gray-400 mt-2">EQUALISERS</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-8 md:mb-10">
            {practiceCourts.map((court, index) => (
              <Link
                key={court.id}
                href={getHref(index, court.id)}
                className="relative h-[300px] sm:h-[400px] md:h-[500px] w-full sm:w-[95%] md:w-[90%] mx-auto group"
              >
                <div className="relative h-full overflow-hidden rounded-lg shadow-xl transition-all duration-500 hover:shadow-2xl hover:shadow-[#00A0E9]/40 hover:-translate-y-4 hover:scale-105 hover:rotate-1">
                  {court.video ? (
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="h-full w-full object-cover transition-all duration-700 group-hover:scale-115 group-hover:brightness-110"
                      poster="/placeholder.svg"
                      onError={(e) => handleVideoError(e, court.title)}
                    >
                      <source src={court.video} type="video/mp4" />
                    </video>
                  ) : (
                    <div className="h-full w-full bg-[#10151a] flex items-center justify-center"></div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent group-hover:from-black/75 group-hover:via-black/35 transition-all duration-500"></div>
                  
                  {/* Enhanced hover glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#00A0E9]/0 via-[#00A0E9]/20 to-[#00A0E9]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Subtle border animation */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#00A0E9]/30 rounded-lg transition-all duration-500"></div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 md:p-5 transform transition-all duration-500 group-hover:-translate-y-2">
                    <h3 className="text-white text-lg sm:text-xl font-bold uppercase transition-all duration-500 group-hover:text-[#00A0E9] group-hover:font-bold group-hover:drop-shadow-lg">
                      {court.title}
                    </h3>
                    <p className="text-gray-300 text-xs sm:text-sm cursor-pointer transition-all duration-500 group-hover:text-white group-hover:font-semibold group-hover:tracking-wider">
                      {court.cta}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Custom hover effects styles */}
      <style>{`
        .group:hover .group-hover\\:scale-115 {
          transform: scale(1.15);
        }

        .group:hover .group-hover\\:brightness-110 {
          filter: brightness(1.1);
        }
      `}</style>
    </section>
  )
}

export default AboutSection