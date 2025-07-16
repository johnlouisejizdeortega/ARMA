"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import { createPortal } from "react-dom"
import CasesModal from "./CasesModal" // Import the modal component

// Use the CaseDetail interface from CasesModal
interface CaseDetail {
  id: number
  title: string
  client: string
  description: string
  value: string
  status: string
  date: string
  type: string
  crossBorder: boolean
  jurisdictions?: string
  leadLawyer: string
  teamMembers?: string
  significance: string
}

// Use the allCases array from CasesModal
const allCases: CaseDetail[] = [
  {
    id: 5,
    title: "Canary Wharf Flooding Recovery",
    client: "Canary Wharf Group",
    description: "Prosecuted negligence action on behalf of Insurer and Canary Wharf Property Developer for recovery of flood damage at residential towers. Successfully settled for £3m against commercial entities.",
    value: "£3M",
    status: "Settled",
    date: "2023",
    type: "Professional Negligence",
    crossBorder: false,
    jurisdictions: "England & Wales",
    leadLawyer: "David Green",
    teamMembers: "Sarah Connor",
    significance: "Significant recovery for flood damage in a high-profile development."
  },
  {
    id: 1,
    title: "Directors v National Law Firm & Counsel (Share Acquisition/Negligence)",
    client: "KING (Corporate Commercial business)",
    description: "Acting for 3 directors/shareholders prosecuting a claim against their former solicitors and counsel for damages exceeding £40m. The claim arises from a failed and improperly discontinued 20-day trial and a misadvised £10m corporate acquisition, involving breaches of contract, fiduciary duty, and professional negligence. The case is one of the largest value claims ever prosecuted, involving complex issues of legal retainer, fiduciary and tortious duties, and the interface between barristers and solicitors.",
    value: "£40M",
    status: "Ongoing",
    date: "2020-",
    type: "Professional Negligence",
    crossBorder: false,
    jurisdictions: "England & Wales",
    leadLawyer: "Rajat Sharma",
    teamMembers: "Ailsa Selman",
    significance: "One of the largest value professional negligence claims, involving complex issues of legal retainer and fiduciary duties."
  },
  {
    id: 2,
    title: "Dr. Dre & Eminem Concert Fraud Case",
    client: "N/A",
    description: "Prosecuted a fraud claim involving breached investment and escrow agreement connected to Dr. Dre and Eminem concerts. Obtained rare summary judgment on fraud without trial for over £6m - an unprecedented legal achievement.",
    value: "£6-7M",
    status: "Closed",
    date: "February 2024",
    type: "Commercial Fraud",
    crossBorder: false,
    jurisdictions: "England & Wales",
    leadLawyer: "John Doe",
    teamMembers: "Jane Smith",
    significance: "First case of its kind to achieve summary judgment on fraud without a trial."
  },
  {
    id: 4,
    title: "Dubai Ponzi Scheme Freezing Order",
    client: "N/A",
    description: "Successfully obtained Worldwide Freezing Injunction against Dubai-based defendant alleged to have carried out £100-200m Ponzi Scheme. Achieved one of first decisions in Dubai Court recognizing English Court Orders.",
    value: "£100-200M",
    status: "Ongoing",
    date: "2024",
    type: "International Fraud",
    crossBorder: true,
    jurisdictions: "England, Wales, Dubai",
    leadLawyer: "Aisha Khan",
    teamMembers: "Omar Faruk",
    significance: "Pioneering case in international recognition of English Court Orders."
  },
  {
    id: 3,
    title: "MI5 Officer Human Rights Case",
    client: "Confidential",
    description: "Represented a retiring high-ranking MI5 Officer against MI5 and Ministry of Defence for breaches of human rights, including Article 10 freedom of expression. Negotiated with security intelligence services at MI5 offices.",
    value: "Constitutional",
    status: "Ongoing",
    date: "2024",
    type: "Human Rights & National Security",
    crossBorder: false,
    jurisdictions: "UK",
    leadLawyer: "Emily White",
    teamMembers: "Michael Brown",
    significance: "Case challenges the boundaries of national security and human rights."
  },
  {
    id: 6,
    title: "Post-Grenfell Fire Safety Case",
    client: "N/A",
    description: "Prosecuting breach of duty and professional negligence claim against specialist alarm contractor for failure of alarm system in tower block fire, causing £8-10m damage. Case of significant public interest post-Grenfell.",
    value: "£8-10M",
    status: "Ongoing",
    date: "2024",
    type: "Professional Negligence",
    crossBorder: false,
    jurisdictions: "England & Wales",
    leadLawyer: "Rebecca Taylor",
    teamMembers: "James Smith",
    significance: "High-profile case impacting fire safety regulations and standards."
  }
]

const caseVideo = "/videos/9150545-hd_1920_1080_24fps.mp4"

// Utility for line clamping
const clampDescription = (desc: string) => (
  <span className="line-clamp-5">{desc}</span>
)

const CasesSection = () => {
  const [activeSlide, setActiveSlide] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const nextSlide = useCallback(() => {
    setActiveSlide((prev) => (prev === allCases.length - 1 ? 0 : prev + 1))
  }, [])

  const prevSlide = useCallback(() => {
    setActiveSlide((prev) => (prev === 0 ? allCases.length - 1 : prev - 1))
  }, [])

  const goToSlide = useCallback((index: number) => {
    setActiveSlide(index)
  }, [])

  const handleImageError = useCallback((e: React.SyntheticEvent<HTMLImageElement>) => {
    const target = e.target as HTMLImageElement
    if (target.src !== `${window.location.origin}/placeholder.svg`) {
      target.src = "/placeholder.svg"
    }
  }, [])

  const handleContactClick = useCallback(() => {
    // Add your contact logic here
    console.log("Contact us clicked")
  }, [])

  const handleViewAllCases = useCallback(() => {
    // Ensure we're staying at the cases section position
    const casesSection = document.getElementById('cases')
    if (casesSection) {
      casesSection.scrollIntoView({ behavior: 'instant', block: 'start' })
    }
    // Small delay to ensure scroll position is set before opening modal
    setTimeout(() => {
      setIsModalOpen(true)
    }, 10)
  }, [])

  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false)
  }, [])

  // Auto-slide effect
  useEffect(() => {
    const startAutoSlide = () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
      intervalRef.current = setInterval(() => {
        nextSlide()
      }, 7000) // Increased to 7 seconds for more complex content
    }

    startAutoSlide()

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [nextSlide])

  return (
    <section
      id="cases"
      className="relative z-20 py-12 sm:py-16 md:py-20 lg:py-24"
      style={{
        background: "linear-gradient(to right, #000000 5%, #3E3E3E 100%)",
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* MOBILE & TABLET LAYOUT */}
        <div className="lg:hidden">
          <div className="mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold uppercase mb-2">
              <span className="text-white">OUR </span>
              <span className="text-[#00A0E9]">WORKS</span>
            </h2>
            <p className="text-sm sm:text-base text-gray-400 max-w-2xl">
              Landmark cases and significant legal victories across commercial litigation, fraud prosecution, and international disputes.
            </p>
          </div>

          {/* Mobile Carousel */}
          <div className="relative mb-6">
            <div className="relative overflow-hidden rounded-2xl">
              <div className="w-full relative h-[280px] sm:h-[360px] md:h-[400px]">
                {allCases.map((caseItem, index) => (
                  <div
                    key={caseItem.id}
                    className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ease-in-out ${
                      index === activeSlide ? "opacity-100 z-10" : "opacity-100 z-0"
                    }`}
                  >
                    <div className="h-full bg-gray-800 rounded-2xl overflow-hidden relative group">
                      <video
                        src={"/videos/8303104-hd_1920_1080_24fps.mp4"}
                        className="w-full h-full object-cover absolute inset-0 z-0"
                        autoPlay
                        loop
                        muted
                        playsInline
                        style={{ transition: 'opacity 0.5s', willChange: 'opacity' }}
                      />
                      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 via-black/60 to-transparent z-20">
                        <div className="backdrop-blur-md bg-white/10 p-4 rounded-xl border border-white/20 transition-all duration-300 group-hover:bg-white/15 group-hover:border-white/30">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-[#00A0E9] text-xs font-medium bg-[#00A0E9]/20 px-2 py-1 rounded-full">{caseItem.type}</span>
                            <span className="text-white text-xs font-semibold">{caseItem.date}</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-white text-sm font-medium">Case Value</span>
                            <span className="text-[#00A0E9] text-sm font-bold">{caseItem.value}</span>
                          </div>
                          <div className="flex items-center justify-between mt-2">
                            <span className="text-white text-xs font-light">Lead: {caseItem.leadLawyer}</span>
                            <span className="text-white text-xs font-light">Status: {caseItem.status}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Navigation buttons */}
              <div className="absolute bottom-4 right-4 flex gap-3 z-20">
                <button
                  onClick={prevSlide}
                  className="backdrop-blur-md bg-black/50 hover:bg-black/70 text-white rounded-full p-2.5 transition-all duration-300 border border-white/20 hover:border-white/40 hover:scale-125 hover:shadow-lg hover:shadow-[#00A0E9]/20"
                  aria-label="Previous slide"
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
                <button
                  onClick={nextSlide}
                  className="backdrop-blur-md bg-black/50 hover:bg-black/70 text-white rounded-full p-2.5 transition-all duration-300 border border-white/20 hover:border-white/40 hover:scale-125 hover:shadow-lg hover:shadow-[#00A0E9]/20"
                  aria-label="Next slide"
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
            </div>

            {/* Indicator dots */}
            <div className="backdrop-blur-md bg-black/30 rounded-full px-3 py-2 flex justify-center mt-4 space-x-2 mx-auto border border-white/10 overflow-x-auto">
              {allCases.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 hover:scale-125 flex-shrink-0 ${
                    index === activeSlide ? "bg-[#00A0E9] scale-110 shadow-md shadow-[#00A0E9]/50" : "bg-gray-400/60"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Mobile content */}
          <div>
            <div className="backdrop-blur-md bg-white/5 rounded-xl p-6 mb-6 border border-white/10 transition-all duration-300 hover:bg-white/8 hover:border-white/20">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[#00A0E9] text-xs font-medium bg-[#00A0E9]/20 px-3 py-1 rounded-full">{allCases[activeSlide].type}</span>
                <span className="text-white text-xs font-semibold">{allCases[activeSlide].date}</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold uppercase text-white mb-3 transition-colors duration-300 hover:text-[#00A0E9]">{allCases[activeSlide].title}</h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4 line-clamp-5">
                {allCases[activeSlide].description}
              </p>
              <div className="flex items-center justify-between pt-3 border-t border-white/10">
                <span className="text-gray-400 text-sm">Case Value</span>
                <span className="text-[#00A0E9] text-sm font-bold">{allCases[activeSlide].value}</span>
              </div>
            </div>

            <div className="text-center">
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button 
                  onClick={handleContactClick}
                  className="bg-gradient-to-r from-[#00A0E9] to-[#00A0E9]/80 hover:from-[#0088c7] hover:to-[#0088c7]/80 text-white font-medium py-3 px-8 rounded-lg text-base transition-all duration-500 shadow-lg hover:shadow-xl hover:shadow-[#00A0E9]/40 hover:scale-110 group relative overflow-hidden"
                >
                  <span className="relative z-10">Contact Us</span>
                  {/* Button shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </button>
                
                <button 
                  onClick={handleViewAllCases}
                  className="bg-transparent border-2 border-[#00A0E9] hover:bg-[#00A0E9] text-[#00A0E9] hover:text-white font-medium py-3 px-8 rounded-lg text-base transition-all duration-500 shadow-lg hover:shadow-xl hover:shadow-[#00A0E9]/40 hover:scale-110 group relative overflow-hidden"
                >
                  <span className="relative z-10">View All Cases</span>
                  {/* Button shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* DESKTOP LAYOUT */}
        <div className="hidden lg:flex flex-col space-y-4 sm:space-y-6 md:space-y-8 my-4 sm:my-6 md:my-8">
          <div className="mb-12 sm:mb-16 md:mb-20 lg:mb-24">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase mb-2">
              <span className="text-white">OUR </span>
              <span className="text-[#00A0E9]">WORKS</span>
            </h2>
            <p className="text-sm sm:text-base text-gray-400 max-w-3xl">
              Landmark cases and significant legal victories across commercial litigation, fraud prosecution, and international disputes. Our track record demonstrates expertise in complex, high-value legal matters.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col order-2 lg:order-1 mt-6 lg:mt-0">
              <div className="min-h-[300px] md:min-h-[340px] backdrop-blur-md bg-white/5 rounded-xl p-8 border border-white/10 mb-6 transition-all duration-300 hover:bg-white/8 hover:border-white/20 hover:shadow-lg hover:shadow-[#00A0E9]/10">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[#00A0E9] text-sm font-medium bg-[#00A0E9]/20 px-3 py-1 rounded-full">{allCases[activeSlide].type}</span>
                  <span className="text-white text-sm font-semibold">{allCases[activeSlide].date}</span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold uppercase text-white mb-4 transition-colors duration-300 hover:text-[#00A0E9] leading-tight">{allCases[activeSlide].title}</h3>
                <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-6 line-clamp-5">
                  {allCases[activeSlide].description}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <span className="text-gray-400 text-base">Case Value</span>
                  <span className="text-[#00A0E9] text-lg font-bold">{allCases[activeSlide].value}</span>
                </div>
              </div>

              <div className="mt-4 sm:mt-6 md:mt-8">
                <div className="flex flex-col sm:flex-row gap-4 justify-start items-start">
                  <button 
                    onClick={handleContactClick}
                    className="bg-gradient-to-r from-[#00A0E9] to-[#00A0E9]/80 hover:from-[#0088c7] hover:to-[#0088c7]/80 text-white font-medium py-2.5 px-8 rounded-lg text-sm md:text-base transition-all duration-500 shadow-lg hover:shadow-xl hover:shadow-[#00A0E9]/40 hover:scale-110 group relative overflow-hidden"
                  >
                    <span className="relative z-10">Contact Us</span>
                    {/* Button shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  </button>
                  
                  <button 
                    onClick={handleViewAllCases}
                    className="bg-transparent border-2 border-[#00A0E9] hover:bg-[#00A0E9] text-[#00A0E9] hover:text-white font-medium py-2.5 px-8 rounded-lg text-sm md:text-base transition-all duration-500 shadow-lg hover:shadow-xl hover:shadow-[#00A0E9]/40 hover:scale-110 group relative overflow-hidden"
                  >
                    <span className="relative z-10">View All Cases</span>
                    {/* Button shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  </button>
                </div>
              </div>
            </div>

            <div className="relative order-1 lg:order-2">
              <div className="relative overflow-hidden rounded-xl">
                <div className="transition-all duration-500 ease-in-out w-full relative h-[340px] md:h-[400px]">
                  {allCases.map((caseItem, index) => (
                    <div
                      key={caseItem.id}
                      className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ease-in-out ${
                        index === activeSlide ? "opacity-100 z-10" : "opacity-100 z-0"
                      }`}
                    >
                      <div className="h-full bg-gray-800 rounded-xl overflow-hidden relative group">
                        <video
                          src={"/videos/8303104-hd_1920_1080_24fps.mp4"}
                          className="w-full h-full object-cover absolute inset-0 z-0"
                          autoPlay
                          loop
                          muted
                          playsInline
                          style={{ transition: 'opacity 0.5s', willChange: 'opacity' }}
                        />
                        <div className="absolute bottom-0 left-0 right-0 p-6 transition-transform duration-300 group-hover:-translate-y-1 z-20">
                          <div className="backdrop-blur-md bg-white/10 p-4 rounded-lg border border-white/20 transition-all duration-300 group-hover:bg-white/15 group-hover:border-white/30 group-hover:scale-105">
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-[#00A0E9] text-sm font-medium bg-[#00A0E9]/30 px-2 py-1 rounded-full">{caseItem.type}</span>
                              <span className="text-white text-sm font-semibold">{caseItem.date}</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-white text-base font-medium">Case Value</span>
                              <span className="text-[#00A0E9] text-base font-bold">{caseItem.value}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Desktop navigation buttons */}
                <div className="absolute top-1/2 transform -translate-y-1/2 left-4 z-20">
                  <button
                    onClick={prevSlide}
                    className="backdrop-blur-md bg-black/50 hover:bg-black/70 text-white rounded-full p-2.5 transition-all duration-300 border border-white/20 hover:border-white/40 hover:scale-125 hover:shadow-lg hover:shadow-[#00A0E9]/20"
                    aria-label="Previous slide"
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
                <div className="absolute top-1/2 transform -translate-y-1/2 right-4 z-20">
                  <button
                    onClick={nextSlide}
                    className="backdrop-blur-md bg-black/50 hover:bg-black/70 text-white rounded-full p-2.5 transition-all duration-300 border border-white/20 hover:border-white/40 hover:scale-125 hover:shadow-lg hover:shadow-[#00A0E9]/20"
                    aria-label="Next slide"
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
              </div>

              {/* Desktop indicator dots */}
              <div className="backdrop-blur-md bg-black/30 rounded-full px-3 py-2 flex justify-center mt-6 space-x-2 mx-auto border border-white/10 overflow-x-auto">
                {allCases.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 hover:scale-125 flex-shrink-0 ${
                      index === activeSlide ? "bg-[#00A0E9] scale-110 shadow-md shadow-[#00A0E9]/50" : "bg-gray-400/60"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom hover effects styles */}
      <style>{`
        .group:hover .group-hover\\:scale-110 {
          transform: scale(1.1);
        }

        .group:hover .group-hover\\:brightness-110 {
          filter: brightness(1.1);
        }

        .line-clamp-5 {
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>

      {/* Cases Modal - Rendered as Portal */}
      {typeof window !== 'undefined' && createPortal(
        <CasesModal isOpen={isModalOpen} onClose={handleCloseModal} />,
        document.body
      )}
    </section>
  )
}

export default CasesSection