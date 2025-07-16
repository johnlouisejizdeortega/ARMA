"use client"

import { useRef } from "react"
import { useScrollAnimation } from "@/lib/animation"
import Navbar from "@/components/landing/Navbar"
import Footer from "@/components/landing/Footer"
import ContactSection from "@/components/landing/ContactSection"

const TermsOfBusiness = () => {
  // Refs for animation
  const headerRef = useRef(null)
  const contentRef = useRef(null)
  const contactSectionRef = useRef<HTMLDivElement>(null) // New ref for contact section
  const contentToExportRef = useRef<HTMLDivElement>(null) // Ref for content to export as PDF

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

  // Function to download terms of business as PDF
  const downloadTerms = async () => {
    // Create a loading indicator
    const loadingIndicator = document.createElement("div")
    loadingIndicator.className = "fixed inset-0 bg-black/70 flex items-center justify-center z-50"
    loadingIndicator.innerHTML = '<div class="text-white">Generating PDF...</div>'
    document.body.appendChild(loadingIndicator)

    try {
      // Dynamically import jsPDF
      const { jsPDF } = await import('jspdf')
      
      // Create new PDF document
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4'
      })

      // Set up document styling
      const pageWidth = pdf.internal.pageSize.getWidth()
      const pageHeight = pdf.internal.pageSize.getHeight()
      const margin = 20
      const lineHeight = 6
      let yPosition = margin

      // Helper function to add text with word wrapping
      const addText = (text: string, fontSize = 11, isBold = false, color = '#000000', spacing = 4) => {
        pdf.setFontSize(fontSize)
        pdf.setFont('', isBold ? 'bold' : 'normal')
        pdf.setTextColor(color)
        
        const lines = pdf.splitTextToSize(text, pageWidth - (margin * 2))
        
        // Check if we need a new page
        if (yPosition + (lines.length * lineHeight) > pageHeight - 30) {
          pdf.addPage()
          yPosition = margin
        }
        
        pdf.text(lines, margin, yPosition)
        yPosition += lines.length * lineHeight + spacing
      }

      // Add professional header
      pdf.setFillColor(0, 0, 0)
      pdf.rect(0, 0, pageWidth, 35, 'F')
      
      pdf.setTextColor('#FFFFFF')
      pdf.setFontSize(24)
      pdf.setFont('', 'bold')
      pdf.text('ARMA LITIGATION', margin, 22)
      
      pdf.setFontSize(12)
      pdf.setFont('', 'normal')
      pdf.text('Terms of Business', margin, 30)
      
      yPosition = 50

      // Document title
      addText('TERMS OF BUSINESS', 18, true, '#000000', 8)

      // General Terms
      addText('General Terms', 16, true, '#0066CC', 6)
      addText('ARMA Litigation Limited operates under these standard terms of business for all client matters, which outline our professional relationship and responsibilities to ensure clear understanding and effective legal representation.', 11, false, '#000000', 8)

      // Client Relationship section
      addText('Client Relationship', 13, true, '#00A0E9', 4)
      addText('Our client relationship begins upon formal engagement and acceptance of these terms. We commit to providing professional legal services with diligence and in accordance with relevant regulations.', 10, false, '#000000', 6)

      // Communication section
      addText('Communication', 13, true, '#00A0E9', 4)
      addText('We maintain regular communication regarding your case progress and will respond promptly to inquiries. You will be kept informed of significant developments in your matter.', 10, false, '#000000', 6)

      // Confidentiality section
      addText('Confidentiality', 13, true, '#00A0E9', 4)
      addText('All information provided by clients is treated as strictly confidential and protected in accordance with our professional obligations and data protection laws.', 10, false, '#000000', 6)

      // Complaints Procedure section
      addText('Complaints Procedure', 13, true, '#00A0E9', 4)
      addText('In the unlikely event of dissatisfaction with our services, we have a formal complaints procedure to address and resolve concerns promptly and fairly.', 10, false, '#000000', 8)

      // Introduction section
      addText('Introduction', 14, true, '#000000', 6)
      addText('References to "we", "us" and "our" shall be references to ARMA Litigation Limited, a limited liability company with company number 13083355 and whose registered office is at 84 Albion Street, Leeds, West Yorkshire, LS1 6AD.', 10, false, '#000000', 4)
      addText('We are regulated by the Solicitors Regulation Authority (SRA number 812983) and a list of our members is available for inspection at this address, together with a list of those non-members who are designated as partners.', 10, false, '#000000', 4)
      addText('The word \'Partner\' is used to refer to a Director of ARMA Litigation Limited, or an employee or consultant who is a lawyer with equivalent standing and qualification.', 10, false, '#000000', 8)

      // Important Features section
      addText('Important Features', 14, true, '#000000', 6)
      addText('We would like to draw your attention to the following very important features of our engagement:', 10, false, '#000000', 4)
      addText('• Condition 9 – your obligation to provide us with identification for money laundering purposes. This includes a copy of your passport, driver\'s license and a utility bill or in the case of companies, identification of its directors and beneficial owners.', 10, false, '#000000', 4)
      addText('• Condition 11 – the limitation of our liability to you to the sum of £3,000,000 (three million pounds).', 10, false, '#000000', 8)

      // Key Terms section
      addText('Key Terms', 14, true, '#000000', 6)
      
      addText('1. Engagement', 12, true, '#00A0E9', 3)
      addText('These Terms shall be read in conjunction with each engagement letter or communication that we send to you. Each engagement letter will set out the key information relating to your matter and the work we will do for you, including scope, personnel, and estimated fees.', 10, false, '#000000', 6)

      addText('2. Conflicts of Interest', 12, true, '#00A0E9', 3)
      addText('We must ensure that we have no conflict of interest in acting for you. If we identify an actual or potential conflict of interest either at the start or during the continuation of your work, we will not be permitted to continue to act for you.', 10, false, '#000000', 6)

      addText('3. Fees', 12, true, '#00A0E9', 3)
      addText('Unless otherwise agreed, our fees are determined by reference to a number of factors, the most significant of which is the time spent on your matter. This includes preparing and considering correspondence, documents and emails, making and receiving telephone calls, meetings, and travel.', 10, false, '#000000', 6)

      addText('4. Invoicing and Payment', 12, true, '#00A0E9', 3)
      addText('Invoices rendered by us will clearly identify your matter and the work being charged for. Unless specific terms of payment have been agreed, invoices, whether interim or final, should be settled within 7 days of receipt.', 10, false, '#000000', 6)

      addText('5. Costs Payable by and to Other Parties', 12, true, '#00A0E9', 3)
      addText('It is important to remember that, notwithstanding any agreement reached with, or the liability of, someone else in relation to costs, it is your primary responsibility to pay our fees and disbursements in respect of any matter which we handle for you.', 10, false, '#000000', 8)

      // Additional Key Provisions section
      addText('Additional Key Provisions', 14, true, '#000000', 6)
      addText('Our full terms of business include important provisions regarding:', 10, false, '#000000', 4)
      addText('• Cash Payments & Client Account: Limitations on cash payments and proper use of client account facilities.', 10, false, '#000000', 3)
      addText('• Money Laundering: Our obligations under UK and European regulations to prevent money laundering.', 10, false, '#000000', 3)
      addText('• Limitation of Liability: Our liability is limited to £3,000,000 subject to specific terms and conditions.', 10, false, '#000000', 3)
      addText('• Data Protection: How we process and protect your personal information in compliance with data protection laws.', 10, false, '#000000', 3)
      addText('• File Retention: Files will be retained for a maximum of 7 years after the date of your final bill.', 10, false, '#000000', 3)
      addText('• Intellectual Property: We retain ownership of all intellectual property rights in documents and advice we create.', 10, false, '#000000', 8)

      // Footer note
      addText('For a complete copy of our detailed terms of business, please contact our office or request a copy through our website.', 10, false, '#666666', 4)

      // Add footer to all pages
      const totalPages = pdf.getNumberOfPages()
      for (let i = 1; i <= totalPages; i++) {
        pdf.setPage(i)
        const footerY = pageHeight - 20
        pdf.setFontSize(9)
        pdf.setTextColor('#666666')
        pdf.text('ARMA Litigation Limited | 84 Albion Street, Leeds, West Yorkshire, LS1 6AD', margin, footerY)
        pdf.text(`Company Number: 13083355 | SRA Number: 812983 | Page ${i}`, margin, footerY + 5)
      }

      // Save the PDF
      pdf.save('ArmaLitigation-TermsOfBusiness.pdf')

      // Clean up loading indicator
      setTimeout(() => {
        document.body.removeChild(loadingIndicator)
      }, 500)

    } catch (error) {
      console.error("PDF generation failed:", error)
      document.body.removeChild(loadingIndicator)
      alert("Failed to generate PDF. Please try again.")
    }
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
              Terms of Business
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto font-light leading-relaxed">
              Our standard terms of business for all client engagements.
            </p>
          </div>
        </header>

        {/* Main Content Section */}
        <div ref={contentRef} className="w-full max-w-6xl mx-auto px-4 mb-20">
          <div className="bg-black/40 rounded-lg overflow-hidden p-8">
            <div className="animate-content" ref={contentToExportRef}>
              <h2 className="text-3xl font-bold text-white mb-8 tracking-tight leading-tight">General Terms</h2>
              <div className="prose max-w-none">
                <p className="text-gray-300 text-base leading-relaxed mb-6 font-light">
                  ARMA Litigation Limited operates under these standard terms of business for all client matters, which
                  outline our professional relationship and responsibilities to ensure clear understanding and effective
                  legal representation.
                </p>

                <div className="mt-8 grid md:grid-cols-2 gap-6">
                  <div className="p-6 border border-gray-800 rounded-lg">
                    <h4 className="text-[#00A0E9] text-lg font-medium mb-3 tracking-tight">Client Relationship</h4>
                    <p className="text-gray-300 text-base leading-relaxed font-light">
                      Our client relationship begins upon formal engagement and acceptance of these terms. We commit to
                      providing professional legal services with diligence and in accordance with relevant regulations.
                    </p>
                  </div>

                  <div className="p-6 border border-gray-800 rounded-lg">
                    <h4 className="text-[#00A0E9] text-lg font-medium mb-3 tracking-tight">Communication</h4>
                    <p className="text-gray-300 text-base leading-relaxed font-light">
                      We maintain regular communication regarding your case progress and will respond promptly to
                      inquiries. You will be kept informed of significant developments in your matter.
                    </p>
                  </div>

                  <div className="p-6 border border-gray-800 rounded-lg">
                    <h4 className="text-[#00A0E9] text-lg font-medium mb-3 tracking-tight">Confidentiality</h4>
                    <p className="text-gray-300 text-base leading-relaxed font-light">
                      All information provided by clients is treated as strictly confidential and protected in
                      accordance with our professional obligations and data protection laws.
                    </p>
                  </div>

                  <div className="p-6 border border-gray-800 rounded-lg">
                    <h4 className="text-[#00A0E9] text-lg font-medium mb-3 tracking-tight">Complaints Procedure</h4>
                    <p className="text-gray-300 text-base leading-relaxed font-light">
                      In the unlikely event of dissatisfaction with our services, we have a formal complaints procedure
                      to address and resolve concerns promptly and fairly.
                    </p>
                  </div>
                </div>

                <div className="mt-12 space-y-8">
                  <div>
                    <h3 className="text-2xl font-semibold text-white mb-4 tracking-tight">Introduction</h3>
                    <p className="text-gray-300 text-base leading-relaxed font-light">
                      References to "we", "us" and "our" shall be references to ARMA Litigation Limited, a limited
                      liability company with company number 13083355 and whose registered office is at 84 Albion Street,
                      Leeds, West Yorkshire, LS1 6AD.
                    </p>
                    <p className="text-gray-300 text-base leading-relaxed font-light mt-4">
                      We are regulated by the Solicitors Regulation Authority (SRA number 812983) and a list of our
                      members is available for inspection at this address, together with a list of those non-members who
                      are designated as partners.
                    </p>
                    <p className="text-gray-300 text-base leading-relaxed font-light mt-4">
                      The word 'Partner' is used to refer to a Director of ARMA Litigation Limited, or an employee or
                      consultant who is a lawyer with equivalent standing and qualification.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold text-white mb-4 tracking-tight">Important Features</h3>
                    <p className="text-gray-300 text-base leading-relaxed font-light">
                      We would like to draw your attention to the following very important features of our engagement:
                    </p>
                    <ul className="list-disc pl-6 mt-4 space-y-3">
                      <li className="text-gray-300 text-base leading-relaxed font-light">
                        <span className="text-white font-medium">Condition 9</span> – your obligation to provide us with
                        identification for money laundering purposes. This includes a copy of your passport, driver's
                        license and a utility bill or in the case of companies, identification of its directors and
                        beneficial owners.
                      </li>
                      <li className="text-gray-300 text-base leading-relaxed font-light">
                        <span className="text-white font-medium">Condition 11</span> – the limitation of our liability
                        to you to the sum of £3,000,000 (three million pounds).
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold text-white mb-4 tracking-tight">Key Terms</h3>
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-xl font-medium text-[#00A0E9] mb-3 tracking-tight">1. Engagement</h4>
                        <p className="text-gray-300 text-base leading-relaxed font-light">
                          These Terms shall be read in conjunction with each engagement letter or communication that we
                          send to you. Each engagement letter will set out the key information relating to your matter
                          and the work we will do for you, including scope, personnel, and estimated fees.
                        </p>
                      </div>

                      <div>
                        <h4 className="text-xl font-medium text-[#00A0E9] mb-3 tracking-tight">
                          2. Conflicts of Interest
                        </h4>
                        <p className="text-gray-300 text-base leading-relaxed font-light">
                          We must ensure that we have no conflict of interest in acting for you. If we identify an
                          actual or potential conflict of interest either at the start or during the continuation of
                          your work, we will not be permitted to continue to act for you.
                        </p>
                      </div>

                      <div>
                        <h4 className="text-xl font-medium text-[#00A0E9] mb-3 tracking-tight">3. Fees</h4>
                        <p className="text-gray-300 text-base leading-relaxed font-light">
                          Unless otherwise agreed, our fees are determined by reference to a number of factors, the most
                          significant of which is the time spent on your matter. This includes preparing and considering
                          correspondence, documents and emails, making and receiving telephone calls, meetings, and
                          travel.
                        </p>
                      </div>

                      <div>
                        <h4 className="text-xl font-medium text-[#00A0E9] mb-3 tracking-tight">
                          4. Invoicing and Payment
                        </h4>
                        <p className="text-gray-300 text-base leading-relaxed font-light">
                          Invoices rendered by us will clearly identify your matter and the work being charged for.
                          Unless specific terms of payment have been agreed, invoices, whether interim or final, should
                          be settled within 7 days of receipt.
                        </p>
                      </div>

                      <div>
                        <h4 className="text-xl font-medium text-[#00A0E9] mb-3 tracking-tight">
                          5. Costs Payable by and to Other Parties
                        </h4>
                        <p className="text-gray-300 text-base leading-relaxed font-light">
                          It is important to remember that, notwithstanding any agreement reached with, or the liability
                          of, someone else in relation to costs, it is your primary responsibility to pay our fees and
                          disbursements in respect of any matter which we handle for you.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold text-white mb-4 tracking-tight">Additional Key Provisions</h3>
                    <p className="text-gray-300 text-base leading-relaxed font-light">
                      Our full terms of business include important provisions regarding:
                    </p>
                    <ul className="grid md:grid-cols-2 gap-4 mt-4">
                      <li className="p-4 border border-gray-800 rounded-lg">
                        <span className="text-[#00A0E9] font-medium">Cash Payments & Client Account</span>
                        <p className="text-gray-300 text-sm leading-relaxed font-light mt-2">
                          Limitations on cash payments and proper use of client account facilities.
                        </p>
                      </li>
                      <li className="p-4 border border-gray-800 rounded-lg">
                        <span className="text-[#00A0E9] font-medium">Money Laundering</span>
                        <p className="text-gray-300 text-sm leading-relaxed font-light mt-2">
                          Our obligations under UK and European regulations to prevent money laundering.
                        </p>
                      </li>
                      <li className="p-4 border border-gray-800 rounded-lg">
                        <span className="text-[#00A0E9] font-medium">Limitation of Liability</span>
                        <p className="text-gray-300 text-sm leading-relaxed font-light mt-2">
                          Our liability is limited to £3,000,000 subject to specific terms and conditions.
                        </p>
                      </li>
                      <li className="p-4 border border-gray-800 rounded-lg">
                        <span className="text-[#00A0E9] font-medium">Data Protection</span>
                        <p className="text-gray-300 text-sm leading-relaxed font-light mt-2">
                          How we process and protect your personal information in compliance with data protection laws.
                        </p>
                      </li>
                      <li className="p-4 border border-gray-800 rounded-lg">
                        <span className="text-[#00A0E9] font-medium">File Retention</span>
                        <p className="text-gray-300 text-sm leading-relaxed font-light mt-2">
                          Files will be retained for a maximum of 7 years after the date of your final bill.
                        </p>
                      </li>
                      <li className="p-4 border border-gray-800 rounded-lg">
                        <span className="text-[#00A0E9] font-medium">Intellectual Property</span>
                        <p className="text-gray-300 text-sm leading-relaxed font-light mt-2">
                          We retain ownership of all intellectual property rights in documents and advice we create.
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-gray-800">
                <p className="text-gray-300 text-base leading-relaxed mb-6 font-light">
                  For a complete copy of our detailed terms of business, please contact our office or request a copy
                  through our website.
                </p>
                <div className="flex flex-col sm:flex-row sm:gap-4">
                  <button
                    onClick={downloadTerms}
                    className="inline-flex items-center bg-[#00A0E9] hover:bg-[#0085C3] text-white py-2 px-6 rounded text-sm font-medium transition-colors mb-4 sm:mb-0"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                      />
                    </svg>
                    Download PDF
                  </button>
                  <button
                    onClick={scrollToContact}
                    className="inline-flex items-center bg-transparent border border-[#00A0E9] hover:bg-[#00A0E9]/10 text-[#00A0E9] py-2 px-6 rounded text-sm font-medium transition-colors"
                  >
                    Request More Information
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Add ContactSection with ref */}
      <div id="contact" ref={contactSectionRef}>
        <ContactSection
          initialMessage="I would like to request more information about your Terms of Business."
          isDataProtectionRequest={false}
        />
      </div>

      <Footer />
    </div>
  )
}

export default TermsOfBusiness