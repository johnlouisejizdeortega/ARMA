"use client"

import { useRef, useState } from "react"
import { useScrollAnimation } from "@/lib/animation"
import Navbar from "@/components/landing/Navbar"
import Footer from "@/components/landing/Footer"
import ContactSection from "@/components/landing/ContactSection"
import ConsultationModal from "@/components/ConsultationModal"

const OurCharges: React.FC = () => {
  // State for modal
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  
  // Refs for animation
  const headerRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const contactSectionRef = useRef<HTMLDivElement>(null)

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
  const scrollToContact = (): void => {
    contactSectionRef.current?.scrollIntoView({ behavior: 'smooth' })
  }
  
  // Functions to handle modal
  const openModal = (): void => {
    setIsModalOpen(true)
  }
  
  const closeModal = (): void => {
    setIsModalOpen(false)
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
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white tracking-tight leading-tight drop-shadow-sm">
              Our Charges
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto font-light leading-relaxed">
              Information about our fee structure and billing practices.
            </p>
          </div>
        </header>

        {/* Main Content Section */}
        <div ref={contentRef} className="w-full max-w-6xl mx-auto px-4 mb-20">
          <div className="bg-black/40 rounded-lg overflow-hidden p-8">
            <div className="animate-content">
              <h2 className="text-3xl font-bold text-white mb-8 tracking-tight leading-tight">Fee Structure</h2>
              <div className="prose max-w-none">
                <p className="text-gray-300 text-base leading-relaxed mb-6 font-light">
                  We are a boutique litigation practice. The work we undertake is mostly complex commercial dispute
                  resolution and arbitration claims.
                </p>

                <p className="text-gray-300 text-base leading-relaxed mb-8 font-light">
                  We are flexible in our fee structures, details of which are set out below.
                </p>

                <div className="bg-black/30 p-6 rounded-lg border border-gray-800 mb-10">
                  <p className="text-amber-300 text-base leading-relaxed font-medium mb-4">
                    Please note that when budgeting, you will need to factor in costs for the appropriate Court Fees and
                    any further professional expenses (barristers fees, expert fees, search fees) details of which we
                    will provide to you before engagement.
                  </p>
                </div>

                <div className="mt-10">
                  <h3 className="text-2xl font-semibold text-white mb-6 tracking-tight">Our Fee Options</h3>
                  <div className="space-y-6">
                    <div className="p-6 border border-gray-800 rounded-lg hover:border-gray-700 transition-colors">
                      <h4 className="text-[#00A0E9] text-lg font-medium mb-3 tracking-tight">Fixed Fees</h4>
                      <p className="text-gray-300 text-base leading-relaxed font-light">
                        An agreed fee based on the percentage of the debt + VAT, together with the Court Fee appropriate
                        to the value of your claim.
                      </p>
                    </div>

                    <div className="p-6 border border-gray-800 rounded-lg hover:border-gray-700 transition-colors">
                      <h4 className="text-[#00A0E9] text-lg font-medium mb-3 tracking-tight">Hourly Rates</h4>
                      <p className="text-gray-300 text-base leading-relaxed font-light">
                        An hourly rate based on both the complexity of the case and seniority of the lawyer engaged +
                        VAT.
                      </p>
                    </div>

                    <div className="p-6 border border-gray-800 rounded-lg hover:border-gray-700 transition-colors">
                      <h4 className="text-[#00A0E9] text-lg font-medium mb-3 tracking-tight">
                        Hybrid Conditional Fee Agreement
                      </h4>
                      <p className="text-gray-300 text-base leading-relaxed font-light">
                        A combination of a lower hourly rate but with an agreed success fee payable upon successful
                        resolution of the case as agreed between us + VAT.
                      </p>
                    </div>

                    <div className="p-6 border border-gray-800 rounded-lg hover:border-gray-700 transition-colors">
                      <h4 className="text-[#00A0E9] text-lg font-medium mb-3 tracking-tight">Contingency Agreement</h4>
                      <p className="text-gray-300 text-base leading-relaxed font-light">
                        In pre-action, we can agree to be paid via a percentage of the debt payable + VAT.
                      </p>
                    </div>

                    <div className="p-6 border border-gray-800 rounded-lg hover:border-gray-700 transition-colors">
                      <h4 className="text-[#00A0E9] text-lg font-medium mb-3 tracking-tight">Other Proposals</h4>
                      <p className="text-gray-300 text-base leading-relaxed font-light">
                        We're open to discussing alternative fee arrangements that might better suit your specific
                        needs.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-12">
                  <h3 className="text-2xl font-semibold text-white mb-6 tracking-tight">
                    Factors That May Affect Our Charges
                  </h3>
                  <div className="grid md:grid-cols-2 gap-5">
                    <div className="p-5 bg-black/20 rounded-lg border-l-4 border-[#00A0E9]">
                      <h4 className="text-white text-lg font-medium mb-2 tracking-tight">Complexity of the case</h4>
                      <p className="text-gray-300 text-base leading-relaxed font-light">
                        More complex matters typically require additional time and expertise.
                      </p>
                    </div>

                    <div className="p-5 bg-black/20 rounded-lg border-l-4 border-[#00A0E9]">
                      <h4 className="text-white text-lg font-medium mb-2 tracking-tight">Service Level Guarantees</h4>
                      <p className="text-gray-300 text-base leading-relaxed font-light">
                        Specific response time commitments may affect our fee structure.
                      </p>
                    </div>

                    <div className="p-5 bg-black/20 rounded-lg border-l-4 border-[#00A0E9]">
                      <h4 className="text-white text-lg font-medium mb-2 tracking-tight">Success Fees</h4>
                      <p className="text-gray-300 text-base leading-relaxed font-light">
                        Additional fees that may be payable upon achieving specific outcomes.
                      </p>
                    </div>

                    <div className="p-5 bg-black/20 rounded-lg border-l-4 border-[#00A0E9]">
                      <h4 className="text-white text-lg font-medium mb-2 tracking-tight">Urgency</h4>
                      <p className="text-gray-300 text-base leading-relaxed font-light">
                        Expedited work may require additional resources and priority attention.
                      </p>
                    </div>

                    <div className="p-5 bg-black/20 rounded-lg border-l-4 border-[#00A0E9]">
                      <h4 className="text-white text-lg font-medium mb-2 tracking-tight">
                        Pricing choice and certainty
                      </h4>
                      <p className="text-gray-300 text-base leading-relaxed font-light">
                        Fixed fee arrangements provide certainty but may be set at different levels.
                      </p>
                    </div>

                    <div className="p-5 bg-black/20 rounded-lg border-l-4 border-[#00A0E9]">
                      <h4 className="text-white text-lg font-medium mb-2 tracking-tight">Price linked to result</h4>
                      <p className="text-gray-300 text-base leading-relaxed font-light">
                        Fees that vary based on the outcome of your case.
                      </p>
                    </div>

                    <div className="p-5 bg-black/20 rounded-lg border-l-4 border-[#00A0E9] md:col-span-2">
                      <h4 className="text-white text-lg font-medium mb-2 tracking-tight">Risk</h4>
                      <p className="text-gray-300 text-base leading-relaxed font-light">
                        The level of risk we assume in taking on your case may affect our fee structure.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-gray-800">
                <p className="text-gray-300 text-base leading-relaxed mb-6 font-light">
                  For a detailed discussion about our fees and which arrangement would best suit your needs, please
                  contact our team. We're committed to providing transparent fee information and finding the most
                  appropriate arrangement for your specific circumstances.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={scrollToContact}
                    className="inline-flex items-center bg-[#00A0E9] hover:bg-[#0085C3] text-white py-2 px-6 rounded text-sm font-medium transition-colors"
                  >
                    Contact Us for Fee Information
                  </button>
                  <button
                    onClick={openModal}
                    className="inline-flex items-center bg-transparent border border-[#00A0E9] hover:bg-[#00A0E9]/10 text-[#00A0E9] py-2 px-6 rounded text-sm font-medium transition-colors"
                  >
                    Schedule a Consultation
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Add ContactSection with ref */}
      <div id="contact" ref={contactSectionRef}>
        <ContactSection />
      </div>

      <Footer />
      
      {/* Consultation Modal */}
      <ConsultationModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  )
}

export default OurCharges