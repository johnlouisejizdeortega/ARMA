"use client"

import { useState, useEffect } from "react"
import { Head } from "@inertiajs/react"
import Navbar from "@/components/landing/Navbar"
import Footer from "@/components/landing/Footer"
import ContactSection from "@/components/landing/ContactSection"
import { motion, AnimatePresence } from "framer-motion"
import {
  services,
  Service,
  getAllServices,
  getServiceById,
  getServiceContent,
  getServiceIndustries,
  getServiceCapabilities,
  getServiceDisputes,
  getServiceCourts,
  getServiceKeyPoints,
  getServiceTools,
  getServiceProcedures,
  getServiceApproaches,
  getServiceSpecializations,
  getServiceSections,
  getServiceCardContent,
  getServiceGlobalReach,
  getServiceQuote,
  getServiceConclusion,
  contactInfo,
  styling,
  motionConfig,
  contentSections
} from "@/data/services"

export default function ServicesPage() {
  const [message, setMessage] = useState("")
  const [activeTab, setActiveTab] = useState("commercial")
  const [currentService, setCurrentService] = useState<Service>(services.commercial)
  const [imageLoaded, setImageLoaded] = useState(false)
  const [heroImageLoaded, setHeroImageLoaded] = useState(false)

  const handleServiceSelect = (service: Service) => {
    setCurrentService(service)
    setActiveTab(service.id)
    setImageLoaded(false)
    setHeroImageLoaded(false)
    
    // Use proper hash navigation that triggers events
    window.location.hash = service.id
    
    // Smooth scroll to the very top after a small delay
    setTimeout(() => {
      window.scrollTo({ 
        top: 0, 
        left: 0,
        behavior: 'smooth' 
      })
    }, 100)
  }

  // Handle initial load and hash changes
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1)
      const service = getServiceById(hash) || services.commercial
      
      // Only update if the service actually changed
      if (service.id !== currentService.id) {
        setCurrentService(service)
        setActiveTab(service.id)
        setImageLoaded(false)
        setHeroImageLoaded(false)
      }
    }

    // Set initial service based on hash
    handleHashChange()
    
    // Listen for hash changes
    window.addEventListener("hashchange", handleHashChange, { passive: true })
    
    // Also listen for popstate events (back/forward navigation)
    window.addEventListener("popstate", handleHashChange, { passive: true })
    
    return () => {
      window.removeEventListener("hashchange", handleHashChange)
      window.removeEventListener("popstate", handleHashChange)
    }
  }, [currentService.id]) // Add dependency to track current service

  // Image loading effects
  useEffect(() => {
    const img = new Image()
    img.src = currentService.backgroundImage || "/images/services-background.png"
    img.onload = () => setImageLoaded(true)

    const heroImg = new Image()
    heroImg.src = currentService.heroImage || "/legal-services-abstract.png"
    heroImg.onload = () => setHeroImageLoaded(true)

    return () => {
      img.onload = null
      heroImg.onload = null
      setImageLoaded(false)
      setHeroImageLoaded(false)
    }
  }, [currentService])

  const renderServiceContent = () => {
    const content = getServiceContent(currentService.id)
    if (!content) {
      return (
        <div className="space-y-6">
          <p className="text-xl font-medium leading-relaxed text-gray-200">
            {currentService.description}
          </p>
        </div>
      )
    }

    return (
      <motion.div
        initial={motionConfig.serviceContent.initial}
        animate={motionConfig.serviceContent.animate}
        transition={motionConfig.serviceContent.transition}
        id={currentService.id}
        className="space-y-8"
      >
        <div className="prose prose-invert max-w-none">
          {/* Main Description */}
          <p className="text-xl font-medium leading-relaxed text-gray-200 mb-8">
            {content.mainDescription}
          </p>

          {/* Quote Section */}
          {content.quote && (
            <div className="backdrop-blur-md bg-black/30 border border-white/10 my-8 p-6 rounded-lg">
              <p className="text-lg italic text-gray-300">
                "{content.quote}"
              </p>
            </div>
          )}

          {/* Key Points */}
          {content.keyPoints && content.keyPoints.length > 0 && (
            <div className="space-y-4 mb-10">
              {content.keyPoints.map((point, index) => (
                <p key={index} className="leading-7 text-gray-300">
                  {point}
                </p>
              ))}
            </div>
          )}

          {/* Industries */}
          {content.industries && content.industries.length > 0 && (
            <div className="mt-12 mb-10">
              <h3 className="text-sm font-semibold tracking-wide uppercase text-[#00A0E9] mb-6">
                Our expertise spans multiple industries, including:
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {content.industries.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 px-4 py-2 text-gray-200 backdrop-blur-md bg-black/20 border border-white/10 rounded"
                  >
                    <span className="text-[#00A0E9]">✓</span> {item}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Disputes */}
          {content.disputes && content.disputes.length > 0 && (
            <div className="mt-12 mb-10">
              <h3 className="text-sm font-semibold tracking-wide uppercase text-[#00A0E9] mb-6">
                We handle disputes involving:
              </h3>
              <div className="grid gap-4">
                {content.disputes.map((item, index) => (
                  <div className="flex items-start gap-2" key={index}>
                    <span className="text-[#00A0E9] mt-1">✓</span>
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Capabilities */}
          {content.capabilities && content.capabilities.length > 0 && (
            <div className="mt-12 mb-10">
              <h3 className="text-sm font-semibold tracking-wide uppercase text-[#00A0E9] mb-6">
                We are regularly instructed to:
              </h3>
              <div className="grid gap-4">
                {content.capabilities.map((item, index) => (
                  <div className="flex items-start gap-2" key={index}>
                    <span className="text-[#00A0E9] mt-1">✓</span>
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tools */}
          {content.tools && content.tools.length > 0 && (
            <div className="mt-12 mb-10">
              <h3 className="text-sm font-semibold tracking-wide uppercase text-[#00A0E9] mb-6">
                Our lawyers are skilled at deploying:
              </h3>
              <div className="grid gap-4">
                {content.tools.map((item, index) => (
                  <div className="flex items-start gap-2" key={index}>
                    <span className="text-[#00A0E9] mt-1">✓</span>
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Procedures */}
          {content.procedures && content.procedures.length > 0 && (
            <div className="mt-12 mb-10">
              <h3 className="text-sm font-semibold tracking-wide uppercase text-[#00A0E9] mb-6">
                We routinely act and advise on:
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {content.procedures.map((item, index) => (
                  <div className="flex items-start gap-2" key={index}>
                    <span className="text-[#00A0E9] mt-1">✓</span>
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Specializations */}
          {content.specializations && content.specializations.length > 0 && (
            <div className="mt-12 mb-10">
              <h3 className="text-sm font-semibold tracking-wide uppercase text-[#00A0E9] mb-6">
                High-Risk Scenarios We Navigate:
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {content.specializations.map((item, index) => (
                  <div key={index} className="backdrop-blur-md bg-black/30 border border-white/10 p-4 rounded-lg">
                    <div className="flex items-center gap-3">
                      <span className="text-[#00A0E9]">✓</span>
                      <span className="text-gray-200">{item}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Approaches */}
          {content.approaches && content.approaches.length > 0 && (
            <div className="mt-12 mb-10">
              <h3 className="text-sm font-semibold tracking-wide uppercase text-[#00A0E9] mb-6">
                Why Our Model Works:
              </h3>
              <div className="grid gap-4">
                {content.approaches.map((item, index) => (
                  <div className="flex items-start gap-2" key={index}>
                    <span className="text-[#00A0E9] mt-1">✓</span>
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Card Content */}
          {content.cardContent && content.cardContent.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
              {content.cardContent.map((card, index) => (
                <div key={index} className="backdrop-blur-md bg-black/30 border border-white/10 p-6 rounded-lg">
                  <div className="flex flex-col items-center text-center h-full">
                    <div className="rounded-full bg-gray-800 p-3 mb-4">
                      <span className="text-2xl">{getIconForCard(card.icon)}</span>
                    </div>
                    <h3 className="text-lg font-medium text-white mb-2">{card.title}</h3>
                    <p className="text-sm text-gray-300">{card.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Sections (for Crisis Management) */}
          {content.sections && content.sections.length > 0 && (
            <div className="space-y-12">
              {content.sections.map((section, index) => (
                <div key={index} className="mt-12 mb-10">
                  <h3 className="text-sm font-semibold tracking-wide uppercase text-[#00A0E9] mb-6">
                    {section.title}
                  </h3>
                  <p className="leading-7 text-gray-300 mb-6">{section.content}</p>
                  {section.items && (
                    <div className="grid gap-4">
                      {section.items.map((item, itemIndex) => (
                        <div className="flex items-start gap-2" key={itemIndex}>
                          <span className="text-[#00A0E9] mt-1">✓</span>
                          <span className="text-gray-300">{item}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Courts */}
          {content.courts && content.courts.length > 0 && (
            <div className="mt-12 mb-10">
              <h3 className="text-sm font-semibold tracking-wide uppercase text-[#00A0E9] mb-6">
                Our team has acted in high-value cases before:
              </h3>
              <div className="grid gap-4">
                {content.courts.map((item, index) => (
                  <div className="flex items-start gap-2" key={index}>
                    <span className="text-[#00A0E9] mt-1">✓</span>
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Global Reach */}
          {content.globalReach && (
            <div className="mt-12 mb-10">
              <h3 className="text-sm font-semibold tracking-wide uppercase text-[#00A0E9] mb-6">
                International Reach, Local Expertise
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="backdrop-blur-md bg-black/30 border border-white/10 p-6 rounded-lg">
                  <h4 className="text-white font-medium mb-2">Global Coverage</h4>
                  <p className="text-sm text-gray-300">{content.globalReach.coverage}</p>
                </div>
                {content.globalReach.expertise && (
                  <div className="backdrop-blur-md bg-black/30 border border-white/10 p-6 rounded-lg">
                    <h4 className="text-white font-medium mb-2">Cross-Border Expertise</h4>
                    <p className="text-sm text-gray-300">{content.globalReach.expertise}</p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Conclusion */}
          {content.conclusion && (
            <div className="mt-12 pt-6 border-t border-gray-800">
              <p className="text-lg font-medium text-center text-gray-200">
                {content.conclusion}
              </p>
            </div>
          )}
        </div>
      </motion.div>
    )
  }

  // Helper function to get icons for cards
  const getIconForCard = (iconName: string) => {
    const iconMap: Record<string, string> = {
      Shield: "🛡️",
      AlertTriangle: "⚠️",
      Layers: "📚",
      Briefcase: "💼",
      Globe: "🌍",
      Search: "🔍"
    }
    return iconMap[iconName] || "📋"
  }

  // Video backgrounds for services, alternating
  const serviceVideos = [
    "/videos/4779866-hd_1920_1080_30fps.mp4",
    "/videos/8303104-hd_1920_1080_24fps.mp4",
    "/videos/9150545-hd_1920_1080_24fps.mp4"
  ];

  return (
    <>
      <Head title="Services - ARMA Legal">
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
        className="relative w-full overflow-x-hidden min-h-screen"
        style={{
          background: "linear-gradient(to right, #000000 5%, #3E3E3E 100%)",
        }}
      >
        <Navbar />

        <main className="w-full">
          {/* Hero Section */}
          <motion.div
            initial={motionConfig.hero.initial}
            animate={motionConfig.hero.animate}
            transition={motionConfig.hero.transition}
            className="w-full max-w-6xl mx-auto mt-28 mb-24 px-4"
          >
            <div className="overflow-hidden rounded-lg shadow-2xl border border-white/10">
              <div className="relative min-h-[400px] flex items-center">
                {/* Video background, alternating by service index */}
                <video
                  className="absolute inset-0 w-full h-full object-cover opacity-60 z-0"
                  src={serviceVideos[getAllServices().findIndex(s => s.id === currentService.id) % serviceVideos.length]}
                  autoPlay
                  loop
                  muted
                  playsInline
                />
                <div className="absolute inset-0 bg-black opacity-60"></div>

                <div className="relative z-10 w-full">
                  <motion.div
                    initial={motionConfig.heroContent.initial}
                    animate={motionConfig.heroContent.animate}
                    transition={motionConfig.heroContent.transition}
                    className="p-8 md:p-12 lg:p-16 max-w-2xl"
                  >
                    <div className="mb-6 px-4 py-1.5 text-sm font-medium bg-[#00A0E9]/10 text-[#00A0E9] border border-[#00A0E9]/20 w-fit backdrop-blur-sm rounded">
                      {contentSections.hero.badge}
                    </div>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight leading-tight uppercase drop-shadow-md">
                      {currentService.title}
                    </h1>
                    <p className="text-gray-100 text-base md:text-lg leading-relaxed font-light drop-shadow-md">
                      {currentService.description}
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Service Navigation */}
          <div className="w-full max-w-6xl mx-auto px-4 mb-20">
            <div className="grid grid-cols-3 md:grid-cols-9 backdrop-blur-md bg-black/30 border border-white/10 p-1.5 rounded-xl gap-1">
              {getAllServices().map((service) => (
                <button
                  key={service.id}
                  onClick={() => handleServiceSelect(service)}
                  className={`py-2.5 px-3 rounded-lg transition-colors ${
                    activeTab === service.id 
                      ? "bg-[#00A0E9] text-white" 
                      : "hover:bg-white/10 text-gray-400"
                  }`}
                  title={service.title}
                >
                  <div className="flex items-center justify-center">
                    {service.icon}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Service Content */}
          <div className="w-full max-w-6xl mx-auto px-4 mb-24">
            <div className="flex items-center mb-12">
              <div className="flex-shrink-0">
                <h2 className="text-3xl font-bold text-white tracking-tight uppercase">
                  {currentService.sectionTitle}
                </h2>
                <div className="h-1 w-24 bg-[#00A0E9] mt-3"></div>
              </div>
              <div className="flex-1 ml-8 h-px bg-gray-800"></div>
            </div>
            <div className="text-gray-300 text-base leading-relaxed font-light max-w-3xl space-y-8">
              <AnimatePresence mode="wait">
                {renderServiceContent()}
              </AnimatePresence>
            </div>
          </div>

          {/* Services Grid */}
          <div className="backdrop-blur-md bg-black/30 border border-white/10 p-10 rounded-lg mb-24 max-w-6xl mx-auto">
            <div className="flex items-center mb-10">
              <h2 className="text-2xl font-bold text-white tracking-tight uppercase flex items-center">
                <span className="text-[#00A0E9] mr-3">✓</span> Specialisms
              </h2>
              <div className="h-px flex-1 bg-gray-800 ml-6"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {getAllServices()
                .slice()
                .sort((a, b) => a.title.localeCompare(b.title))
                .map((service) => (
                  <div
                    key={service.id}
                    className={`backdrop-blur-md bg-black/30 border border-white/10 hover:border-[#00A0E9]/50 transition-all duration-300 cursor-pointer rounded-lg ${
                      activeTab === service.id ? "border-[#00A0E9]/70 shadow-lg shadow-[#00A0E9]/20" : ""
                    }`}
                    onClick={() => handleServiceSelect(service)}
                  >
                    <div className="relative w-full h-40 overflow-hidden rounded-t-lg">
                      <img
                        src={service.placeholderImage || "/placeholder.svg?height=200&width=400&query=legal%20services"}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                      <div className="absolute bottom-3 left-3 bg-[#00A0E9]/80 hover:bg-[#00A0E9] text-white px-2 py-1 rounded text-sm">
                        {service.title.split(" ")[0]}
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-start gap-4 mb-4">
                        <div className={`rounded-full p-2.5 ${activeTab === service.id ? "bg-[#00A0E9]/20" : "bg-gray-800"}`}>
                          {service.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-white font-medium text-lg">{service.title}</h3>
                        </div>
                        <span className={`${activeTab === service.id ? "text-[#00A0E9]" : "text-gray-600"}`}>→</span>
                      </div>
                      <p className="text-sm text-gray-300 line-clamp-2">{service.description}</p>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          {/* Contact Section */}
          <ContactSection />
        </main>

        <Footer />
      </div>
    </>
  )
}