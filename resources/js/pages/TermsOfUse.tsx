"use client"
import { useRef } from "react"
import { useScrollAnimation } from "@/lib/animation"
import Navbar from "@/components/landing/Navbar"
import Footer from "@/components/landing/Footer"
import ContactSection from "@/components/landing/ContactSection"

const TermsOfUse = () => {
  // Refs for animation
  const headerRef = useRef(null)
  const contentRef = useRef(null)
  const contactSectionRef = useRef<HTMLDivElement>(null) // New ref for contact section

  // Apply scroll animations
  useScrollAnimation(headerRef, {
    animation: "fadeIn",
    threshold: 0.1,
  })

  useScrollAnimation(contentRef, {
    animation: "fadeIn",
    delay: 0.2,
    duration: 0.8,
  })

  // Function to scroll to contact section
  const scrollToContact = () => {
    contactSectionRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div
      className="relative w-full overflow-x-hidden"
      style={{
        background: "linear-gradient(to right, #000000 5%, #3E3E3E 100%)",
      }}
    >
      <Navbar />

      <main className="w-full">
        {/* Empty space before header section */}
        <div className="h-16"></div>

        {/* Header Section */}
        <header
          ref={headerRef}
          className="relative bg-black h-64 max-w-6xl mx-auto flex items-center justify-center rounded-lg overflow-hidden mb-16"
        >
          <div
            className="absolute inset-0 opacity-50 rounded-lg"
            role="img"
            aria-label="Law firm background"
            style={{
              backgroundImage: "url('/png/pillars.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />

          <div className="relative z-10 text-center px-4 animate-content">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">Terms of Use</h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              Guidelines for using our website and digital services.
            </p>
          </div>
        </header>

        {/* Main Content Section */}
        <div ref={contentRef} className="w-full max-w-6xl mx-auto px-4 mb-20">
          <div className="bg-black/40 rounded-lg overflow-hidden p-8">
            <div className="animate-content">
              <h2 className="text-3xl font-bold text-white mb-6">Website Terms of Use</h2>
              <div className="prose max-w-none">
                <p className="text-gray-400 text-xs leading-loose">
                  These terms of use govern your access to and use of the ARMA Litigation website and online services,
                  establishing the rights, responsibilities, and restrictions that apply when interacting with our
                  digital platforms.
                </p>

                <div className="mt-8">
                  <h3 className="text-2xl font-bold text-white mb-4">Key Provisions</h3>
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#00A0E9] flex items-center justify-center text-white font-bold text-xs mr-3 mt-0.5">
                        1
                      </div>
                      <div>
                        <h4 className="text-white text-sm font-semibold mb-1">Acceptance of Terms</h4>
                        <p className="text-gray-400 text-xs leading-loose">
                          By accessing or using our website, you acknowledge that you have read, understood, and agree
                          to be bound by these Terms of Use.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#00A0E9] flex items-center justify-center text-white font-bold text-xs mr-3 mt-0.5">
                        2
                      </div>
                      <div>
                        <h4 className="text-white text-sm font-semibold mb-1">Intellectual Property</h4>
                        <p className="text-gray-400 text-xs leading-loose">
                          All content on this website, including text, graphics, logos, and software, is the property of
                          ARMA Litigation and is protected by copyright and other intellectual property laws.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#00A0E9] flex items-center justify-center text-white font-bold text-xs mr-3 mt-0.5">
                        3
                      </div>
                      <div>
                        <h4 className="text-white text-sm font-semibold mb-1">Limitations of Liability</h4>
                        <p className="text-gray-400 text-xs leading-loose">
                          The information on our website is provided on an "as is" basis. We make no warranties about
                          the accuracy, completeness, or reliability of any information on the site.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#00A0E9] flex items-center justify-center text-white font-bold text-xs mr-3 mt-0.5">
                        4
                      </div>
                      <div>
                        <h4 className="text-white text-sm font-semibold mb-1">User Conduct</h4>
                        <p className="text-gray-400 text-xs leading-loose">
                          You agree not to use our website for any unlawful purpose or in any way that might impair the
                          website's functionality or accessibility.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-gray-900/50 rounded-lg">
                  <h4 className="text-[#00A0E9] text-lg font-medium mb-3">Important Note</h4>
                  <p className="text-gray-400 text-xs leading-loose">
                    The content on this website is for general information purposes only and does not constitute legal
                    advice. You should not rely on any information on this site without seeking professional legal
                    advice specific to your situation.
                  </p>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-gray-800">
                <p className="text-gray-400 text-xs leading-loose mb-6">
                  We reserve the right to modify these Terms of Use at any time. Continued use of the website after any
                  changes constitutes your acceptance of the modified terms.
                </p>
                <div className="flex flex-col sm:flex-row sm:gap-4">
                  <button
                    onClick={scrollToContact}
                    className="inline-flex items-center bg-[#00A0E9] hover:bg-[#0085C3] text-white py-2 px-6 rounded text-sm transition-colors"
                  >
                    Contact Us With Questions
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Add ContactSection with ref */}
      <div id="contact" ref={contactSectionRef}>
        <ContactSection initialMessage="I have a question about the Terms of Use." isDataProtectionRequest={false} />
      </div>

      <Footer />
    </div>
  )
}

export default TermsOfUse
