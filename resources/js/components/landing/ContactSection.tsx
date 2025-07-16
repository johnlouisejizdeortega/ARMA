"use client"

import { useState, useCallback } from "react"

interface ContactSectionProps {
  initialMessage?: string
  isDataProtectionRequest?: boolean
}

type SubmitStatus = 'idle' | 'submitting' | 'success' | 'error'

const ContactSection = ({ initialMessage = "", isDataProtectionRequest = false }: ContactSectionProps) => {
  const [message, setMessage] = useState(initialMessage)
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>('idle')

  // Dynamic API URL detection
  const getApiUrl = () => {
    if (typeof window !== 'undefined') {
      // Check if we're in production
      if (window.location.hostname === 'arma-website-main-gbgm6t.laravel.cloud') {
        return 'https://arma-website-main-gbgm6t.laravel.cloud'
      }
      // Local development
      return 'http://localhost:8000'
    }
    return 'http://localhost:8000'
  }

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault()
    
    console.log('🚀 Contact form submission started')
    console.log('📝 Message:', message.trim())
    console.log('🔒 Is Data Protection:', isDataProtectionRequest)
    
    if (!message.trim()) {
      console.log('❌ Empty message')
      alert('Please enter a message before submitting.')
      return
    }

    console.log('⏳ Setting status to submitting')
    setSubmitStatus('submitting')

    try {
      const apiUrl = getApiUrl()
      console.log('🌐 API URL:', apiUrl)
      console.log('📡 Making request to:', `${apiUrl}/api/contact-message`)
      
      const requestBody = {
        message: message.trim(),
        isDataProtectionRequest,
        source: 'website_contact_form'
      }
      console.log('📦 Request body:', requestBody)

      const response = await fetch(`${apiUrl}/api/contact-message`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'X-CSRF-TOKEN': (document.querySelector('meta[name="csrf-token"]') as HTMLMetaElement)?.getAttribute('content') || '',
        },
        body: JSON.stringify(requestBody)
      })

      console.log('📨 Response status:', response.status)
      console.log('📨 Response headers:', Object.fromEntries(response.headers.entries()))

      const result = await response.json()
      console.log('📄 Response data:', result)

      if (response.ok && result.success) {
        console.log('✅ Success!')
        setSubmitStatus('success')
        setMessage("")
        
        // Reset status after 3 seconds
        setTimeout(() => {
          setSubmitStatus('idle')
        }, 3000)
      } else {
        console.log('❌ Server returned error:', result.message)
        throw new Error(result.message || 'Failed to send message')
      }
    } catch (error) {
      console.error('💥 Error sending message:', error)
      setSubmitStatus('error')
      
      // Reset status after 3 seconds
      setTimeout(() => {
        setSubmitStatus('idle')
      }, 3000)
    }
  }, [message, isDataProtectionRequest])

  const handleMessageChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value)
  }, [])

  // Direct Gmail fallback
  const openGmailCompose = useCallback(() => {
    const subject = encodeURIComponent(
      isDataProtectionRequest 
        ? 'Data Protection Inquiry - ARMA Litigation'
        : 'General Inquiry - ARMA Litigation'
    )
    const body = encodeURIComponent(`
Message from ARMA Litigation website:

${message}

--
Submitted via: ${isDataProtectionRequest ? 'Data Protection Contact Form' : 'General Contact Form'}
Date: ${new Date().toLocaleString()}
    `)
    
    const email = isDataProtectionRequest ? 'dpo@armalitigation.com' : 'info@armalitigation.com'
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`
    window.open(gmailUrl, '_blank')
  }, [message, isDataProtectionRequest])

  const socialLinks = [
    {
      name: "Facebook",
      href: "https://www.facebook.com/ArmaLitigationLeeds/",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/armalitigation/?igshid=YmMyMTA2M2Y%3D",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/arma-litigation-limited/?originalSubdomain=uk",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
  ]

  const getButtonText = () => {
    switch (submitStatus) {
      case 'submitting': return 'Sending...'
      case 'success': return 'Message Sent!'
      case 'error': return 'Try Again'
      default: return 'Send Message'
    }
  }

  const getButtonClass = () => {
    switch (submitStatus) {
      case 'submitting': 
        return 'bg-gray-600 cursor-not-allowed'
      case 'success': 
        return 'bg-green-600 hover:bg-green-700'
      case 'error': 
        return 'bg-red-600 hover:bg-red-700'
      default: 
        return 'bg-gradient-to-r from-[#00A0E9] to-[#00A0E9]/80 hover:from-[#0088c7] hover:to-[#0088c7]/80'
    }
  }

  return (
    <section
      id="contact"
      className="relative z-20 py-12 sm:py-16 md:py-20 lg:py-24 w-full"
      style={{
        background: "linear-gradient(to right, #000000 5%, #3E3E3E 100%)",
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* MOBILE & TABLET LAYOUT */}
        <div className="lg:hidden">
          <div className="mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-2">
              <span className="text-white">CONTACT </span>
              <span className="text-[#00A0E9]">US</span>
            </h2>
            <p className="text-base text-gray-400 max-w-2xl">
              {isDataProtectionRequest
                ? "Contact our Data Protection Officer with any privacy-related inquiries."
                : "For any inquiries or assistance, feel free to reach out to us."}
            </p>
          </div>

          {/* Stacked layout for mobile/tablet */}
          <div className="flex flex-col gap-6 sm:gap-8">
            {/* Contact Form with glassmorphism */}
            <div className="backdrop-blur-md bg-white/5 rounded-2xl p-6 sm:p-8 border border-white/10 transition-all duration-300 hover:shadow-lg hover:shadow-[#00A0E9]/10">
              <div className="w-full">
                <h3 className="text-white text-xl sm:text-2xl font-bold mb-5">
                  {isDataProtectionRequest ? "Contact Data Protection Officer" : "Send us a message"}
                </h3>
                
                <form onSubmit={handleSubmit}>
                  <textarea
                    value={message}
                    onChange={handleMessageChange}
                    placeholder="Write your message..."
                    className="w-full h-40 p-4 bg-white/5 text-white rounded-xl border border-white/10 resize-none text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#00A0E9] focus:border-transparent backdrop-blur-sm transition-all duration-300"
                    required
                    disabled={submitStatus === 'submitting'}
                  ></textarea>

                  {/* Status Messages */}
                  {submitStatus === 'success' && (
                    <div className="mt-4 p-3 bg-green-900/50 border border-green-700 rounded-lg">
                      <p className="text-green-300 text-sm">✓ Your message has been sent successfully! We'll get back to you soon.</p>
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="mt-4 p-3 bg-red-900/50 border border-red-700 rounded-lg">
                      <p className="text-red-300 text-sm">✗ There was an error sending your message. Please try again or use the Gmail option below.</p>
                    </div>
                  )}

                  <div className="flex flex-col sm:flex-row gap-3 mt-6">
                    <button
                      type="submit"
                      disabled={submitStatus === 'submitting'}
                      className={`flex-1 text-white font-medium py-3 px-8 rounded-xl text-sm sm:text-base transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02] group relative overflow-hidden ${getButtonClass()}`}
                    >
                      <span className="relative z-10">{getButtonText()}</span>
                      {submitStatus === 'idle' && (
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                      )}
                    </button>
                    
                    <button
                      type="button"
                      onClick={openGmailCompose}
                      className="flex-1 bg-transparent border border-[#00A0E9] hover:bg-[#00A0E9]/10 text-[#00A0E9] py-3 px-8 rounded-xl text-sm sm:text-base font-medium transition-colors"
                    >
                      Open in Gmail
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* Contact Information with glassmorphism */}
            <div className="backdrop-blur-md bg-white/5 rounded-2xl p-6 sm:p-8 border border-white/10 transition-all duration-300 hover:shadow-lg hover:shadow-[#00A0E9]/10">
              <h3 className="text-white text-xl sm:text-2xl font-bold mb-5">Contact Details</h3>
              <div className="backdrop-blur-sm bg-white/5 p-5 rounded-xl border border-white/10 mb-6">
                <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                  You can contact us by phone at{" "}
                  <span className="text-[#00A0E9] font-medium">+44 (0) 113 242 4099</span> or send us an email at
                  <span className="text-[#00A0E9] font-medium"> info@armalitigation.com</span>. Our team is ready to
                  assist you with your legal needs and provide the support you require.
                </p>
              </div>

              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={social.name}
                    href={social.href}
                    aria-label={social.name}
                    className="backdrop-blur-md bg-white/5 hover:bg-[#00A0E9] text-[#00A0E9] hover:text-white transition-all duration-300 p-3 rounded-full border border-white/10 hover:border-[#00A0E9] hover:scale-110"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* DESKTOP LAYOUT - Side by side cards */}
        <div className="hidden lg:block">
          <div className="mb-12 sm:mb-16 md:mb-20 lg:mb-24">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
              <span className="text-white">CONTACT </span>
              <span className="text-[#00A0E9]">US</span>
            </h2>
            <p className="text-sm sm:text-base text-gray-400 max-w-2xl">
              {isDataProtectionRequest
                ? "Contact our Data Protection Officer with any privacy-related inquiries."
                : "For any inquiries or assistance, feel free to reach out to us."}
            </p>
          </div>

          <div className="flex flex-row gap-8 items-start">
            {/* Left Card - Contact Information */}
            <div className="flex-1 backdrop-blur-md bg-white/5 rounded-2xl p-8 border border-white/10 h-fit transition-all duration-300 hover:shadow-lg hover:shadow-[#00A0E9]/10">
              <h3 className="text-white text-xl md:text-2xl font-bold mb-6">Contact Details</h3>
              <div className="backdrop-blur-sm bg-white/5 p-6 rounded-xl border border-white/10 mb-6">
                <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                  You can contact us by phone at{" "}
                  <span className="text-[#00A0E9] font-medium">+44 (0) 113 242 4099</span> or send us an email at
                  <span className="text-[#00A0E9] font-medium"> info@armalitigation.com</span>. Our team is ready to
                  assist you with your legal needs and provide the support you require.
                </p>
              </div>

              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={social.name}
                    href={social.href}
                    aria-label={social.name}
                    className="backdrop-blur-md bg-white/5 hover:bg-[#00A0E9] text-[#00A0E9] hover:text-white transition-all duration-300 p-3 rounded-full border border-white/10 hover:border-[#00A0E9] hover:scale-110"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Right Card - Contact Form */}
            <div className="flex-1 backdrop-blur-md bg-white/5 rounded-2xl p-8 border border-white/10 transition-all duration-300 hover:shadow-lg hover:shadow-[#00A0E9]/10">
              <div className="w-full">
                <h3 className="text-white text-xl md:text-2xl font-bold mb-6">
                  {isDataProtectionRequest ? "Contact Data Protection Officer" : "Send us a message"}
                </h3>
                
                <form onSubmit={handleSubmit}>
                  <textarea
                    value={message}
                    onChange={handleMessageChange}
                    placeholder="Write your message..."
                    className="w-full h-48 p-5 bg-white/5 text-white rounded-xl border border-white/10 resize-none text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#00A0E9] focus:border-transparent backdrop-blur-sm transition-all duration-300"
                    required
                    disabled={submitStatus === 'submitting'}
                  ></textarea>

                  {/* Status Messages */}
                  {submitStatus === 'success' && (
                    <div className="mt-4 p-3 bg-green-900/50 border border-green-700 rounded-lg">
                      <p className="text-green-300 text-sm">✓ Your message has been sent successfully! We'll get back to you soon.</p>
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="mt-4 p-3 bg-red-900/50 border border-red-700 rounded-lg">
                      <p className="text-red-300 text-sm">✗ There was an error sending your message. Please try again or use the Gmail option below.</p>
                    </div>
                  )}

                  <div className="flex flex-col sm:flex-row gap-3 mt-8">
                    <button
                      type="submit"
                      disabled={submitStatus === 'submitting'}
                      className={`flex-1 text-white font-medium py-3 px-8 rounded-xl text-sm md:text-base transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02] group relative overflow-hidden ${getButtonClass()}`}
                    >
                      <span className="relative z-10">{getButtonText()}</span>
                      {submitStatus === 'idle' && (
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                      )}
                    </button>
                    
                    <button
                      type="button"
                      onClick={openGmailCompose}
                      className="flex-1 bg-transparent border border-[#00A0E9] hover:bg-[#00A0E9]/10 text-[#00A0E9] py-3 px-8 rounded-xl text-sm md:text-base font-medium transition-colors"
                    >
                      Open in Gmail
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection