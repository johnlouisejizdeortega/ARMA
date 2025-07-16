"use client"

import React, { useRef } from "react"
import { useScrollAnimation } from "@/lib/animation"
import Navbar from "@/components/landing/Navbar"
import Footer from "@/components/landing/Footer"
import ContactSection from "@/components/landing/ContactSection"

const PrivacyStatement = () => {
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
    contactSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Simple download function that works without external libraries
  const downloadPrivacyPolicy = () => {
    // Create a hidden link for download
    const link = document.createElement("a");
    
    // Get content from ref
    const content = contentToExportRef.current?.innerText || contentToExportRef.current?.textContent || "";
    
    // Format content
    const formattedContent = `
    ARMA LITIGATION - PRIVACY POLICY
    ================================
    
    ${content}
    `;
    
    // Create blob with content
    const file = new Blob([formattedContent], { type: 'text/plain' });
    
    // Create download URL
    link.href = URL.createObjectURL(file);
    link.download = "ArmaLitigation-PrivacyPolicy.txt";
    
    // Append to body, click and remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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
              Privacy Statement
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto font-light leading-relaxed">
              Our commitment to protecting your privacy.
            </p>
          </div>
        </header>

        {/* Main Content Section - Using ref for PDF export */}
        <div ref={contentRef} className="w-full max-w-6xl mx-auto px-4 mb-20">
          <div className="bg-black/40 rounded-lg overflow-hidden p-8">
            <div className="animate-content" ref={contentToExportRef}>
              <h2 className="text-3xl font-bold text-white mb-8 tracking-tight leading-tight">Privacy Notice</h2>
              <div className="prose max-w-none">
                <p className="text-gray-300 text-base leading-relaxed mb-6 font-light">
                  This notice explains when and why we collect personal information about you; how we use it, the
                  conditions under which we may disclose it to others and how we keep it secure.
                </p>
                <p className="text-gray-300 text-base leading-relaxed mb-8 font-light">
                  For clients of this firm, you should read this notice alongside our general terms and conditions which
                  provide further information on confidentiality, data privacy etc.
                </p>

                <div className="space-y-10">
                  {/* Who we are section */}
                  <section>
                    <h3 className="text-2xl font-semibold text-white mb-4 tracking-tight">Who We Are</h3>
                    <p className="text-gray-300 text-base leading-relaxed font-light">
                      Data is collected, processed and stored by Arma Litigation Limited, a limited liability company
                      with registered company number 13083355. We are what is known as the 'data controller' of the
                      personal information you provide to us.
                    </p>
                    <p className="text-gray-300 text-base leading-relaxed mt-4 font-light">
                      Our Data Protection Officer is Wani Mkandawire who can be contacted by email at{" "}
                      <a href="mailto:wani.mkandawire@armalitigation.com" className="text-[#00A0E9] hover:underline">
                        wani.mkandawire@armalitigation.com
                      </a>
                    </p>
                  </section>

                  {/* What we need section */}
                  <section>
                    <h3 className="text-2xl font-semibold text-white mb-4 tracking-tight">What We Need</h3>
                    <p className="text-gray-300 text-base leading-relaxed font-light">
                      The exact information we will request from you will depend on what you have asked us to do or what
                      we are contracted to do for you.
                    </p>
                    <p className="text-gray-300 text-base leading-relaxed mt-4 font-light">
                      There are two types of personal data (personal information) that you may provide to us:
                    </p>
                    <div className="mt-4 space-y-4">
                      <div className="p-4 bg-black/30 rounded-lg border-l-4 border-[#00A0E9]">
                        <h4 className="text-white text-lg font-medium mb-2 tracking-tight">Personal data</h4>
                        <p className="text-gray-300 text-base leading-relaxed font-light">
                          Is the general information that you supply about yourself – such as your name, address,
                          gender, date of birth, contact details, financial information etc.
                        </p>
                      </div>
                      <div className="p-4 bg-black/30 rounded-lg border-l-4 border-[#00A0E9]">
                        <h4 className="text-white text-lg font-medium mb-2 tracking-tight">Sensitive personal data</h4>
                        <p className="text-gray-300 text-base leading-relaxed font-light">
                          Is, by its nature, more sensitive information and may include your racial or ethnic origin,
                          religion, sexual orientation, political opinions, health data, trade union membership,
                          philosophical views, biometric and genetic data.
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-300 text-base leading-relaxed mt-4 font-light">
                      In most cases personal data will be restricted to basic information and information needed to
                      complete ID checks. However, some of the work we do may require us to ask for more sensitive
                      information.
                    </p>
                  </section>

                  {/* Sources of information section */}
                  <section>
                    <h3 className="text-2xl font-semibold text-white mb-4 tracking-tight">Sources of Information</h3>
                    <p className="text-gray-300 text-base leading-relaxed font-light">
                      Information about you may be obtained from a number of sources, including:
                    </p>
                    <ul className="list-disc pl-6 mt-4 space-y-3">
                      <li className="text-gray-300 text-base leading-relaxed font-light">
                        You may volunteer the information about yourself
                      </li>
                      <li className="text-gray-300 text-base leading-relaxed font-light">
                        You may provide information relating to someone else – if you have the authority to do so
                      </li>
                      <li className="text-gray-300 text-base leading-relaxed font-light">
                        Information may be passed to us by third parties in order that we can undertake your legal work
                        on your behalf. Typically these organisations can be:
                        <ul className="list-disc pl-6 mt-2 space-y-2">
                          <li className="text-gray-300 text-base leading-relaxed font-light">
                            Banks or building societies
                          </li>
                          <li className="text-gray-300 text-base leading-relaxed font-light">
                            Panel providers who allocate legal work to law firms
                          </li>
                          <li className="text-gray-300 text-base leading-relaxed font-light">
                            Organisations that have referred work to us
                          </li>
                          <li className="text-gray-300 text-base leading-relaxed font-light">
                            Medical or financial institutions – who provide your personal records / information
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </section>

                  {/* Why we need it section */}
                  <section>
                    <h3 className="text-2xl font-semibold text-white mb-4 tracking-tight">Why We Need It</h3>
                    <p className="text-gray-300 text-base leading-relaxed font-light">
                      The primary reason for asking you to provide us with your personal data, is to allow us to carry
                      out your requests – which will ordinarily be to represent you and carry out your legal work.
                    </p>
                    <p className="text-gray-300 text-base leading-relaxed mt-4 font-light">
                      The following are some examples, although not exhaustive, of what we may use your information for:
                    </p>
                    <ul className="grid md:grid-cols-2 gap-3 mt-4">
                      <li className="flex items-start">
                        <div className="flex-shrink-0 h-5 w-5 text-[#00A0E9] mr-2">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <p className="text-gray-300 text-base leading-relaxed font-light">Verifying your identity</p>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 h-5 w-5 text-[#00A0E9] mr-2">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <p className="text-gray-300 text-base leading-relaxed font-light">Verifying source of funds</p>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 h-5 w-5 text-[#00A0E9] mr-2">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <p className="text-gray-300 text-base leading-relaxed font-light">Communicating with you</p>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 h-5 w-5 text-[#00A0E9] mr-2">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <p className="text-gray-300 text-base leading-relaxed font-light">
                          To establish funding of your matter or transaction
                        </p>
                      </li>
                      <li className="flex items-start md:col-span-2">
                        <div className="flex-shrink-0 h-5 w-5 text-[#00A0E9] mr-2">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <p className="text-gray-300 text-base leading-relaxed font-light">
                          Processing your legal transaction including: providing you with advice; carrying out
                          litigation on your behalf; attending hearings on your behalf; preparing documents or to
                          complete transactions
                        </p>
                      </li>
                    </ul>
                  </section>

                  {/* How we protect your data section */}
                  <section>
                    <h3 className="text-2xl font-semibold text-white mb-4 tracking-tight">
                      How We Protect Your Personal Data
                    </h3>
                    <p className="text-gray-300 text-base leading-relaxed font-light">
                      We recognise that your information is valuable, and we take all reasonable measures to protect it
                      whilst it is in our care.
                    </p>
                    <div className="mt-4 p-6 bg-black/20 rounded-lg border border-gray-800">
                      <h4 className="text-[#00A0E9] text-lg font-medium mb-3 tracking-tight">Security Measures</h4>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <div className="flex-shrink-0 h-5 w-5 text-[#00A0E9] mr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <p className="text-gray-300 text-base leading-relaxed font-light">
                            We have exceptional standards of technology and operational security to protect personally
                            identifiable data from loss, misuse, alteration, or destruction.
                          </p>
                        </li>
                        <li className="flex items-start">
                          <div className="flex-shrink-0 h-5 w-5 text-[#00A0E9] mr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <p className="text-gray-300 text-base leading-relaxed font-light">
                            We strictly comply with our confidentiality obligations and protect all personal data.
                          </p>
                        </li>
                        <li className="flex items-start">
                          <div className="flex-shrink-0 h-5 w-5 text-[#00A0E9] mr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <p className="text-gray-300 text-base leading-relaxed font-light">
                            We use computer safeguards such as firewalls, data encryption, and annual penetration
                            testing.
                          </p>
                        </li>
                        <li className="flex items-start">
                          <div className="flex-shrink-0 h-5 w-5 text-[#00A0E9] mr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <p className="text-gray-300 text-base leading-relaxed font-light">
                            We enforce physical access controls to our buildings and file storage facilities to keep
                            personal data safe.
                          </p>
                        </li>
                      </ul>
                    </div>
                  </section>

                  {/* Your rights section */}
                  <section>
                    <h3 className="text-2xl font-semibold text-white mb-4 tracking-tight">Your Privacy Rights</h3>
                    <p className="text-gray-300 text-base leading-relaxed font-light">
                      Under GDPR, you are entitled to access your personal data (otherwise known as a 'right to
                      access'). If you wish to make a request, please do so in writing addressed to our Data Protection
                      Officer Wani Mkandawire or contact the person dealing with your matter.
                    </p>
                    <p className="text-gray-300 text-base leading-relaxed mt-4 font-light">
                      Under certain circumstances, you have the following additional rights:
                    </p>
                    <ul className="list-disc pl-6 mt-4 space-y-3">
                      <li className="text-gray-300 text-base leading-relaxed font-light">
                        <span className="text-white font-medium">The right to be informed:</span> which is fulfilled by
                        way of this privacy notice and our transparent explanation as to how we use your personal data
                      </li>
                      <li className="text-gray-300 text-base leading-relaxed font-light">
                        <span className="text-white font-medium">The right to rectification:</span> you are entitled to
                        have personal data rectified if it is inaccurate or incomplete
                      </li>
                      <li className="text-gray-300 text-base leading-relaxed font-light">
                        <span className="text-white font-medium">The right to erasure / 'right to be forgotten':</span>{" "}
                        you have the right to request the deletion or removal of your personal data where there is no
                        compelling reason for its continued processing
                      </li>
                      <li className="text-gray-300 text-base leading-relaxed font-light">
                        <span className="text-white font-medium">The right to object:</span> you have the right to
                        object to processing based on legitimate interests and direct marketing
                      </li>
                      <li className="text-gray-300 text-base leading-relaxed font-light">
                        <span className="text-white font-medium">The right to restrict processing:</span> you have the
                        right to request the restriction or suppression of your data
                      </li>
                    </ul>
                  </section>

                  {/* Complaints section */}
                  <section>
                    <h3 className="text-2xl font-semibold text-white mb-4 tracking-tight">
                      Complaints About the Use of Personal Data
                    </h3>
                    <p className="text-gray-300 text-base leading-relaxed font-light">
                      If you wish to raise a complaint on how we have handled your personal data, you can contact our
                      Data Protection Officer who will investigate further. Our Data Protection Officer is Wani
                      Mkandawire and you can contact him at{" "}
                      <a href="mailto:wani.mkandawire@armalitigation.com" className="text-[#00A0E9] hover:underline">
                        wani.mkandawire@armalitigation.com
                      </a>
                    </p>
                    <p className="text-gray-300 text-base leading-relaxed mt-4 font-light">
                      If you are not satisfied with our response or believe we are not processing your personal data in
                      accordance with the law, you can complain to the Information Commissioner's Office (ICO){" "}
                      <a
                        href="https://ico.org.uk/"
                        target="_blank"
                        className="text-[#00A0E9] hover:underline"
                        rel="noreferrer"
                      >
                        https://ico.org.uk/
                      </a>
                      , or by telephone 0303 123 1113.
                    </p>
                  </section>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-gray-800">
                <div className="flex flex-col sm:flex-row sm:gap-4">
                  <button
                    onClick={downloadPrivacyPolicy}
                    className="inline-flex items-center bg-[#00A0E9] hover:bg-[#0085C3] text-white py-2 px-6 rounded text-sm font-medium transition-colors mb-4 sm:mb-0"
                  >
                    Download Full Privacy Policy
                  </button>
                  <button
                    onClick={scrollToContact}
                    className="inline-flex items-center bg-transparent border border-[#00A0E9] hover:bg-[#00A0E9]/10 text-[#00A0E9] py-2 px-6 rounded text-sm font-medium transition-colors"
                  >
                    Contact Data Protection Officer
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Add ContactSection with ref */}
      <div id="contact" ref={contactSectionRef}>
        {/* Create the ContactSection with props */}
        <ContactSection
          initialMessage="I would like to contact the Data Protection Officer regarding my privacy rights."
          isDataProtectionRequest={true}
        />
      </div>
      
      <Footer />
    </div>
  )
}

export default PrivacyStatement