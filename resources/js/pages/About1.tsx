"use client"

import React, { useState, useRef, useEffect } from "react"
import { Head, usePage } from "@inertiajs/react"
import Navbar from "@/components/landing/Navbar"
import Footer from "@/components/landing/Footer"
import ContactSection from "@/components/landing/ContactSection"
import { useScrollAnimation, useHeroAnimation } from "@/lib/animation"

// Define types
type CourtData = {
  id: string
  title: string
  image?: string
  video?: string
  description?: string
}

interface PageProps {
  courtData: CourtData | null
}

// Error boundary component to prevent white screens
class ErrorBoundary extends React.Component<{ children: React.ReactNode }, { hasError: boolean; error: Error | null }> {
  constructor(props: { children: React.ReactNode }) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("Error caught by boundary:", error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-6 bg-red-50 text-red-800 rounded-lg">
          <h2 className="text-xl font-bold mb-2">Something went wrong</h2>
          <p className="mb-4">Please try refreshing the page or contact support if the issue persists.</p>
          <button
            onClick={() => this.setState({ hasError: false, error: null })}
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
          >
            Try Again
          </button>
        </div>
      )
    }

    return this.props.children
  }
}

export default function About() {
  // Safe access to page props with fallbacks
  const pageContext = usePage()
  const props = pageContext?.props as unknown as PageProps
  const courtData = props?.courtData || null

  // State
  const [currentCourtId, setCurrentCourtId] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

  // Refs with proper typing
  const heroRef = useRef<HTMLDivElement>(null)
  const section1Ref = useRef<HTMLDivElement>(null)
  const section2Ref = useRef<HTMLDivElement>(null)
  const valuesRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  // Animation setup - always call hooks unconditionally at the top level
  const heroCleanup = useHeroAnimation(heroRef)
  const section1Cleanup = useScrollAnimation(section1Ref, { animation: "slideUp", delay: 0.2 }) ?? (() => {})
  const section2Cleanup = useScrollAnimation(section2Ref, { animation: "stagger" }) ?? (() => {})
  const valuesCleanup = useScrollAnimation(valuesRef, { animation: "fadeIn" }) ?? (() => {})

  // Force play video when component mounts
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((err) => {
        console.log("Autoplay still prevented after mount:", err)
      })
    }
  }, [currentCourtId])

  // Single effect to handle animation cleanup
  useEffect(() => {
    return () => {
      // Clean up animations when component unmounts
      heroCleanup.stop()
      section1Cleanup?.()
      section2Cleanup?.()
      valuesCleanup()
    }
  }, [heroCleanup, section1Cleanup, section2Cleanup, valuesCleanup])

  // Extract court ID from URL
  useEffect(() => {
    try {
      if (typeof window !== "undefined") {
        // Extract court ID from URL
        const urlParams = new URLSearchParams(window.location.search)
        const courtParam = urlParams.get("court")
        setCurrentCourtId(courtParam)

        setIsLoading(false)
      }
    } catch (error) {
      console.error("URL parsing error:", error)
      setIsLoading(false)
    }
  }, [])

  // Safe content rendering with error handling
  const renderContent = () => {
    try {
      // Use the court ID from URL if available, otherwise use courtData.id
      const courtId = currentCourtId || (courtData ? courtData.id : null)

      console.log("Rendering content for court ID:", courtId)

      if (isLoading) {
        return (
          <div className="flex justify-center items-center py-20">
            <div className="animate-pulse flex flex-col items-center">
              <div className="h-8 w-32 bg-gray-300 rounded mb-4"></div>
              <div className="h-4 w-64 bg-gray-300 rounded"></div>
            </div>
          </div>
        )
      }

      if (!courtId) {
        // Default content if no specific court is selected
        return (
          <>
            {/* First Section - ARMA Litigation */}
            <div ref={section1Ref} className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
              <div className="pl-0 animate-content">
                <h2 className="text-2xl font-bold mb-4 text-white">ARMA Litigation</h2>
                <p className="text-gray-400 text-sm leading-loose">
                  ARMA Litigation is a dispute resolution powerhouse, born in Leeds and now making waves in London and
                  across the globe. Forged from two decades of proven success in commercial litigation, we are not your
                  typical boutique practice. We are a genuine alternative to the established City and national firms,
                  offering the same level of expertise and reach out with a distinctly different approach. We are
                  specialists, particularly leading managers in high-stakes situations. Our core strength lies in
                  injunctions and crisis management, providing decisive action when it matters most. We are comfortable
                  operating at the highest levels, regularly appearing in the London Courts (RCJ, Court of Appeal,
                  IPEC), the London Court of International Ambition, and even venturing into uncommon sectors like
                  national security and energy within the Investigatory Powers Tribunal (IPT). We are structured unlike
                  any other, helping vulnerable figures with up to 30% of our workload being pro-bono.
                </p>
              </div>
              <div className="animate-content">
                <img
                  src="/png/rayt.jpg"
                  alt="ARMA Litigation"
                  className="w-full h-[400px] rounded-lg shadow-md object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.src = "/placeholder.svg"
                    target.alt = "Image not available"
                  }}
                />
              </div>
            </div>

            {/* Second Section - Our Approach */}
            <div ref={section2Ref} className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
              <div className="animate-item">
                <img
                  src="/png/mid.jpg"
                  alt="Our Approach"
                  className="w-full h-[400px] rounded-lg shadow-md object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.src = "/placeholder.svg"
                    target.alt = "Image not available"
                  }}
                />
              </div>
              <div className="animate-item">
                <h2 className="text-2xl font-bold mb-4 text-white">Our Approach</h2>
                <p className="text-gray-400 text-sm leading-loose mb-6">
                  While our credentials speak for themselves - competing directly with, and often chosen over, the Top
                  TOO UK law firms - it's how we operate that truly sets us apart. We thrive on the complex, the
                  challenging, the cases that demand more than just legal knowledge.
                </p>

                <ul className="text-gray-400 text-sm leading-loose space-y-6">
                  <li className="flex">
                    <span className="text-[#00A0E9] mr-2">•</span>
                    <span>
                      <strong className="text-white">Global Reach, Personal Touch:</strong> We act for a diverse
                      clientele, including commercial insurers, national and international corporations, and
                      high-net-worth and ultra-high-net-worth individuals. Our cases span the globe, from the USA and
                      Scandinavia to Dubai, Indo-Asa, and Singapore, with arbitration work extending into Eastern
                      Europe, Malta, and Argentina. Our recommendations stem from word-of-mouth; even from leading US
                      Law Firms.
                    </span>
                  </li>
                  <li className="flex">
                    <span className="text-[#00A0E9] mr-2">•</span>
                    <span>
                      <strong className="text-white">Beyond the Courtroom:</strong> Legal battles are rarely confined to
                      the courtroom. We're frequently called upon to handle intricate, sensitive situations with the
                      utmost discretion. We orchestrate solutions, working in close partnership with leading barristers,
                      expert witnesses, and specialist firms in private investigation, counter-intelligence, and
                      security, both in the UK and internationally. We're problem-solvers, achieving resolutions others
                      might deem impossible.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </>
        )
      } else if (courtId === "arma-litigation") {
        // ARMA Litigation content plus Our Approach section
        return (
          <>
            {/* First Section - ARMA Litigation */}
            <div ref={section1Ref} className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
              <div className="pl-0 animate-content">
                <h2 className="text-2xl font-bold mb-4 text-white">ARMA Litigation</h2>
                <p className="text-gray-400 text-xs leading-loose">
                  ARMA Litigation is a dispute resolution powerhouse, born in Leeds and now making waves in London and
                  across the globe. Forged from two decades of proven success in commercial litigation, we are not your
                  typical boutique practice. We are a genuine alternative to the established City and national firms,
                  offering the same level of expertise and reach out with a distinctly different approach. We are
                  specialists, particularly leading managers in high-stakes situations. Our core strength lies in
                  injunctions and crisis management, providing decisive action when it matters most. We are comfortable
                  operating at the highest levels, regularly appearing in the London Courts (RCJ, Court of Appeal,
                  IPEC), the London Court of International Ambition, and even venturing into uncommon sectors like
                  national security and energy within the Investigatory Powers Tribunal (IPT). We are structured unlike
                  any other, helping vulnerable figures with up to 30% of our workload being pro-bono.
                </p>
              </div>
              <div className="animate-content">
                <img
                  src="/png/rayt.jpg"
                  alt="ARMA Litigation"
                  className="w-full h-[400px] rounded-lg shadow-md object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.src = "/placeholder.svg"
                    target.alt = "Image not available"
                  }}
                />
              </div>
            </div>

            {/* Added Second Section - Our Approach */}
            <div ref={section2Ref} className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
              <div className="animate-item">
                <img
                  src="/png/mid.jpg"
                  alt="Our Approach"
                  className="w-full h-[400px] rounded-lg shadow-md object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.src = "/placeholder.svg"
                    target.alt = "Image not available"
                  }}
                />
              </div>
              <div className="animate-item">
                <h2 className="text-2xl font-bold mb-4 text-white">Our Approach</h2>
                <p className="text-gray-400 text-xs leading-loose mb-6">
                  While our credentials speak for themselves - competing directly with, and often chosen over, the Top
                  TOO UK law firms - it's how we operate that truly sets us apart. We thrive on the complex, the
                  challenging, the cases that demand more than just legal knowledge.
                </p>

                <ul className="text-gray-400 text-xs leading-loose space-y-6">
                  <li className="flex">
                    <span className="text-[#00A0E9] mr-2">•</span>
                    <span>
                      <strong className="text-white">Global Reach, Personal Touch:</strong> We act for a diverse
                      clientele, including commercial insurers, national and international corporations, and
                      high-net-worth and ultra-high-net-worth individuals. Our cases span the globe, from the USA and
                      Scandinavia to Dubai, Indo-Asa, and Singapore, with arbitration work extending into Eastern
                      Europe, Malta, and Argentina. Our recommendations stem from word-of-mouth; even from leading US
                      Law Firms.
                    </span>
                  </li>
                  <li className="flex">
                    <span className="text-[#00A0E9] mr-2">•</span>
                    <span>
                      <strong className="text-white">Beyond the Courtroom:</strong> Legal battles are rarely confined to
                      the courtroom. We're frequently called upon to handle intricate, sensitive situations with the
                      utmost discretion. We orchestrate solutions, working in close partnership with leading barristers,
                      expert witnesses, and specialist firms in private investigation, counter-intelligence, and
                      security, both in the UK and internationally. We're problem-solvers, achieving resolutions others
                      might deem impossible.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </>
        )
      } else if (courtId === "london-court") {
        // Our Approach page now shows Our Approach first, then ARMA Litigation
        return (
          <>
            {/* First Section - Our Approach (now first) */}
            <div ref={section2Ref} className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
              <div className="animate-item">
                <img
                  src="/png/mid.jpg"
                  alt="Our Approach"
                  className="w-full h-[400px] rounded-lg shadow-md object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.src = "/placeholder.svg"
                    target.alt = "Image not available"
                  }}
                />
              </div>
              <div className="animate-item">
                <h2 className="text-2xl font-bold mb-4 text-white">Our Approach</h2>
                <p className="text-gray-400 text-xs leading-loose mb-6">
                  While our credentials speak for themselves - competing directly with, and often chosen over, the Top
                  TOO UK law firms - it's how we operate that truly sets us apart. We thrive on the complex, the
                  challenging, the cases that demand more than just legal knowledge.
                </p>

                <ul className="text-gray-400 text-xs leading-loose space-y-6">
                  <li className="flex">
                    <span className="text-[#00A0E9] mr-2">•</span>
                    <span>
                      <strong className="text-white">Global Reach, Personal Touch:</strong> We act for a diverse
                      clientele, including commercial insurers, national and international corporations, and
                      high-net-worth and ultra-high-net-worth individuals. Our cases span the globe, from the USA and
                      Scandinavia to Dubai, Indo-Asa, and Singapore, with arbitration work extending into Eastern
                      Europe, Malta, and Argentina. Our recommendations stem from word-of-mouth; even from leading US
                      Law Firms.
                    </span>
                  </li>
                  <li className="flex">
                    <span className="text-[#00A0E9] mr-2">•</span>
                    <span>
                      <strong className="text-white">Beyond the Courtroom:</strong> Legal battles are rarely confined to
                      the courtroom. We're frequently called upon to handle intricate, sensitive situations with the
                      utmost discretion. We orchestrate solutions, working in close partnership with leading barristers,
                      expert witnesses, and specialist firms in private investigation, counter-intelligence, and
                      security, both in the UK and internationally. We're problem-solvers, achieving resolutions others
                      might deem impossible.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Second Section - ARMA Litigation (now second) */}
            <div ref={section1Ref} className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
              <div className="pl-0 animate-content">
                <h2 className="text-2xl font-bold mb-4 text-white">ARMA Litigation</h2>
                <p className="text-gray-400 text-xs leading-loose">
                  ARMA Litigation is a dispute resolution powerhouse, born in Leeds and now making waves in London and
                  across the globe. Forged from two decades of proven success in commercial litigation, we are not your
                  typical boutique practice. We are a genuine alternative to the established City and national firms,
                  offering the same level of expertise and reach out with a distinctly different approach. We are
                  specialists, particularly leading managers in high-stakes situations. Our core strength lies in
                  injunctions and crisis management, providing decisive action when it matters most. We are comfortable
                  operating at the highest levels, regularly appearing in the London Courts (RCJ, Court of Appeal,
                  IPEC), the London Court of International Ambition, and even venturing into uncommon sectors like
                  national security and energy within the Investigatory Powers Tribunal (IPT). We are structured unlike
                  any other, helping vulnerable figures with up to 30% of our workload being pro-bono.
                </p>
              </div>
              <div className="animate-content">
                <img
                  src="/png/rayt.jpg"
                  alt="ARMA Litigation"
                  className="w-full h-[400px] rounded-lg shadow-md object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.src = "/placeholder.svg"
                    target.alt = "Image not available"
                  }}
                />
              </div>
            </div>
          </>
        )
      } else {
        // For any other court ID, show the content that matches that ID
        // This is a fallback case
        return (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold mb-4 text-white">Content Not Found</h2>
            <p className="text-gray-400">The requested content could not be found.</p>
            <p className="text-gray-400 mt-2">Court ID: {courtId}</p>
            <button
              onClick={() => (window.location.href = "/about")}
              className="mt-6 bg-[#00A0E9] hover:bg-[#0085C3] text-white py-2 px-6 rounded text-sm transition-colors"
            >
              Return to About Page
            </button>
          </div>
        )
      }
    } catch (error) {
      console.error("Content rendering error:", error)
      return (
        <div className="text-center py-12">
          <h2 className="text-2xl font-bold mb-4 text-white">Error Loading Content</h2>
          <p className="text-gray-400">There was a problem loading the content. Please try refreshing the page.</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-6 bg-[#00A0E9] hover:bg-[#0085C3] text-white py-2 px-6 rounded text-sm transition-colors"
          >
            Refresh Page
          </button>
        </div>
      )
    }
  }

  return (
    <ErrorBoundary>
      <Head title={courtData ? `${courtData.title || "About"} - ARMA Legal` : "About Us - ARMA Legal"}>
        <link rel="preconnect" href="https://fonts.bunny.net" />
        <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </Head>

      <div
        className="relative w-full overflow-x-hidden"
        style={{
          background: "linear-gradient(to right, #000000 5%, #3E3E3E 100%)",
        }}
      >
        <Navbar />

        <main className="w-full">
          <div className="mb-16">
            {/* Main Image/Video Section */}
            <div
              ref={heroRef}
              className="w-full max-w-6xl mx-auto mt-20 mb-[150px] rounded-lg overflow-hidden shadow-lg px-4"
            >
              {courtData?.video ? (
                <div className="relative w-full h-[350px]">
                  <video
                    ref={videoRef}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    className="w-full h-[350px] object-cover rounded-lg"
                    poster="/video-placeholder.svg"
                    onLoadedData={(e) => {
                      const video = e.target as HTMLVideoElement
                      // Try to play video after it's loaded
                      video.play().catch((err) => {
                        console.log("Autoplay prevented:", err)
                      })
                    }}
                    onError={(e) => {
                      const target = e.target as HTMLVideoElement
                      const img = document.createElement("img")
                      img.src = "/video-placeholder.svg"
                      img.alt = "Video not available"
                      img.className = "w-full h-[350px] object-cover rounded-lg"
                      if (target.parentNode) {
                        target.parentNode.replaceChild(img, target)
                      }
                    }}
                    onPlaying={() => setIsVideoPlaying(true)}
                    onPause={() => setIsVideoPlaying(false)}
                  >
                    <source src={courtData.video} type="video/mp4" />
                    <img
                      src="/video-placeholder.svg"
                      alt="Video not available"
                      className="w-full h-[350px] object-cover rounded-lg"
                    />
                    Your browser does not support the video tag.
                  </video>

                  {/* Clickable play button overlay */}
                  {!isVideoPlaying && (
                    <div
                      className="absolute inset-0 flex items-center justify-center cursor-pointer bg-black/30 z-10 rounded-lg"
                      onClick={(e) => {
                        e.preventDefault()
                        if (videoRef.current) {
                          videoRef.current.play().catch((err) => {
                            console.log("Play on click prevented:", err)
                          })
                        }
                      }}
                    >
                      <div className="rounded-full bg-black/50 w-24 h-24 flex items-center justify-center border-2 border-white hover:bg-black/70 transition-all transform hover:scale-110">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-12 w-12 text-white"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                  )}
                </div>
              ) : courtData?.image ? (
                <div
                  className="w-full h-[350px] bg-cover bg-center rounded-lg"
                  style={{ backgroundImage: `url(${courtData.image})` }}
                ></div>
              ) : (
                <div className="relative w-full h-[350px]">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    className="w-full h-[350px] object-cover rounded-lg"
                    src="/images/about/istockphoto-2203378428-640_adpp_is.mp4"
                  >
                    <div className="w-full h-[350px] bg-gray-800 rounded-lg flex items-center justify-center">
                      <p className="text-gray-400">Video not available</p>
                    </div>
                  </video>
                  
                  {/* Overlay with title and description */}
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center rounded-lg">
                    <div className="text-center px-6">
                      <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        <span className="text-[#00A0E9]">ABOUT </span>
                        <span className="text-white">ARMA LITIGATION</span>
                      </h1>
                      <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
                        A dispute resolution powerhouse, born in Leeds and now making waves in London and across the globe.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Content Sections */}
            <div className="w-full max-w-6xl mx-auto px-4">
              {/* About ARMA Litigation Section */}
              <section ref={section1Ref} className="mb-24 animate-content">
                <div className="max-w-4xl mx-auto text-center mb-12">
                  <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About ARMA Litigation</h1>
                  <span className="inline-block bg-[#00A0E9]/90 text-white font-semibold px-5 py-2 rounded-full text-base shadow-lg animate-pulse mb-4">
                    AI-Powered Litigation
                  </span>
                  <p className="text-xl md:text-2xl text-[#00A0E9] font-semibold mb-2">
                    A serious alternative to City and Magic Circle commercial litigation firms.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {/* Peer Recognition */}
                  <div className="bg-white/[0.06] rounded-2xl p-8 border border-white/[0.10] shadow-lg flex flex-col items-center text-center hover:scale-105 transition">
                    <i className="fa-solid fa-handshake text-[#00A0E9] text-3xl mb-4"></i>
                    <h2 className="text-xl font-bold text-white mb-2 uppercase">PEER RECOGNITION</h2>
                    <p className="text-gray-300 text-base">
                      Recognised as a{" "}
                      <span className="text-[#00A0E9] font-semibold">serious alternative</span> to City and Magic Circle
                      commercial litigation firms.
                    </p>
                  </div>
                  {/* Judicial Recognition */}
                  <div className="bg-white/[0.06] rounded-2xl p-8 border border-white/[0.10] shadow-lg flex flex-col items-center text-center hover:scale-105 transition">
                    <i className="fa-solid fa-gavel text-[#00A0E9] text-3xl mb-4"></i>
                    <h2 className="text-xl font-bold text-white mb-2 uppercase">JUDICIAL RECOGNITION</h2>
                    <p className="text-gray-300 text-base">
                      Described in judgments by leading judges as{" "}
                      <span className="text-[#00A0E9] font-semibold">“specialist fraud litigators.”</span>
                    </p>
                  </div>
                  {/* AI Technology */}
                  <div className="bg-white/[0.06] rounded-2xl p-8 border border-white/[0.10] shadow-lg flex flex-col items-center text-center hover:scale-105 transition">
                    <i className="fa-solid fa-robot text-[#00A0E9] text-3xl mb-4"></i>
                    <h2 className="text-xl font-bold text-white mb-2 uppercase">AI TECHNOLOGY</h2>
                    <p className="text-gray-300 text-base">
                      Likely the only non-magic-circle firm in the UK developing and deploying bespoke AI technology for
                      litigation. Our proprietary tools give clients a unique edge—faster, smarter, and more cost-effective
                      dispute resolution.
                    </p>
                  </div>
                </div>
              </section>

              {/* Jurisdiction & Clientele Section */}
              <section ref={section2Ref} className="mb-24 animate-item">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
                  <div className="bg-gradient-to-br from-[#00A0E9]/10 to-white/[0.03] rounded-2xl p-10 border border-[#00A0E9]/20 shadow-lg flex flex-col justify-center">
                    <h3 className="text-2xl font-bold text-white mb-4">Jurisdiction & Clientele</h3>
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-[#00A0E9] mb-2">Courts We Operate In</h4>
                      <ul className="text-gray-300 text-base list-disc list-inside ml-4 mb-4">
                        <li>High Court (Commercial Court, Chancery Division)</li>
                        <li>Court of Appeal</li>
                        <li>Technology & Construction Court</li>
                        <li>London Court of International Arbitration (LCIA)</li>
                        <li>Investigatory Powers Tribunal (IPT)</li>
                        <li>International and cross-border forums</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-[#00A0E9] mb-2">Who We Act For</h4>
                      <ul className="text-gray-300 text-base list-disc list-inside ml-4">
                        <li>Major commercial insurers</li>
                        <li>National and international corporations</li>
                        <li>High-net-worth and ultra-high-net-worth individuals</li>
                        <li>Entrepreneurs, investors, and family offices</li>
                        <li>Public sector and pro bono clients</li>
                      </ul>
                    </div>
                  </div>
                  <div className="bg-white/[0.04] rounded-2xl p-10 border border-white/[0.08] shadow-lg flex flex-col justify-center">
                    <h3 className="text-2xl font-bold text-white mb-4">Specialist Expertise</h3>
                    <p className="text-gray-300 text-base mb-4">
                      Our expertise extends far beyond the courtroom. We are trusted to advise on crisis management,
                      regulatory investigations, asset recovery, and reputation management. We work closely with leading
                      barristers, forensic experts, and intelligence professionals to deliver holistic solutions.
                    </p>
                    <h4 className="text-lg font-semibold text-[#00A0E9] mb-2">Trusted Problem-Solvers</h4>
                    <p className="text-gray-300 text-base">
                      We are frequently called upon to handle intricate, sensitive situations with the utmost
                      discretion—achieving resolutions others might deem impossible.
                    </p>
                  </div>
                </div>
              </section>
            </div>

            {/* Contact Section */}
            <ContactSection />
          </div>
        </main>

        <Footer />
      </div>
    </ErrorBoundary>
  )
}