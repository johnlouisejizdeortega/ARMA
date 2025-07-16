// ConsultationModal.tsx - TypeScript version for Laravel backend

"use client"

import { useState } from 'react'

interface ConsultationData {
  name: string
  email: string
  phone: string
  preferredDate: string
  preferredTime: string
  caseType: string
  message: string
  urgency: 'normal' | 'urgent' | 'very-urgent'
}

interface ConsultationModalProps {
  isOpen: boolean
  onClose: () => void
}

type SubmitStatus = 'success' | 'error' | null

const ConsultationModal: React.FC<ConsultationModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<ConsultationData>({
    name: '',
    email: '',
    phone: '',
    preferredDate: '',
    preferredTime: '',
    caseType: '',
    message: '',
    urgency: 'normal'
  })
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>(null)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // Laravel API endpoint - hardcoded for now
      const response = await fetch('http://localhost:8000/api/consultation-request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          // Add CSRF token if needed
          'X-CSRF-TOKEN': (document.querySelector('meta[name="csrf-token"]') as HTMLMetaElement)?.getAttribute('content') || '',
        },
        body: JSON.stringify({
          ...formData,
          source: 'website_consultation_modal'
        })
      })

      const result = await response.json()

      if (response.ok && result.success) {
        setSubmitStatus('success')
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          preferredDate: '',
          preferredTime: '',
          caseType: '',
          message: '',
          urgency: 'normal'
        })
        
        // Close modal after short delay
        setTimeout(() => {
          onClose()
          setSubmitStatus(null)
        }, 2000)
      } else {
        throw new Error(result.message || 'Failed to submit consultation request')
      }
    } catch (error) {
      console.error('Error submitting consultation request:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  // Direct Gmail link as fallback
  const openGmailCompose = (): void => {
    const subject = encodeURIComponent('Consultation Request - ARMA Litigation')
    const body = encodeURIComponent(`
Consultation Request Details:

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Preferred Date: ${formData.preferredDate}
Preferred Time: ${formData.preferredTime}
Case Type: ${formData.caseType}
Urgency: ${formData.urgency}

Message:
${formData.message}

Submitted via website consultation form.
    `)
    
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=contact@armalitigation.com&su=${subject}&body=${body}`
    window.open(gmailUrl, '_blank')
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
      <div className="bg-gray-900 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-800">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-white">Schedule a Consultation</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <p className="text-gray-300 mt-2">
            Please provide your details and we'll get back to you within 24 hours.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-[#00A0E9] transition-colors"
                placeholder="Your full name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-[#00A0E9] transition-colors"
                placeholder="your.email@example.com"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-[#00A0E9] transition-colors"
                placeholder="+44 7XXX XXXXXX"
              />
            </div>

            <div>
              <label htmlFor="caseType" className="block text-sm font-medium text-gray-300 mb-2">
                Case Type
              </label>
              <select
                id="caseType"
                name="caseType"
                value={formData.caseType}
                onChange={handleInputChange}
                className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-[#00A0E9] transition-colors"
              >
                <option value="">Select case type</option>
                <option value="commercial-dispute">Commercial Dispute</option>
                <option value="debt-recovery">Debt Recovery</option>
                <option value="contract-dispute">Contract Dispute</option>
                <option value="arbitration">Arbitration</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="preferredDate" className="block text-sm font-medium text-gray-300 mb-2">
                Preferred Date
              </label>
              <input
                type="date"
                id="preferredDate"
                name="preferredDate"
                value={formData.preferredDate}
                onChange={handleInputChange}
                min={new Date().toISOString().split('T')[0]}
                className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-[#00A0E9] transition-colors"
              />
            </div>

            <div>
              <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-300 mb-2">
                Preferred Time
              </label>
              <select
                id="preferredTime"
                name="preferredTime"
                value={formData.preferredTime}
                onChange={handleInputChange}
                className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-[#00A0E9] transition-colors"
              >
                <option value="">Select time</option>
                <option value="09:00">09:00 AM</option>
                <option value="10:00">10:00 AM</option>
                <option value="11:00">11:00 AM</option>
                <option value="14:00">02:00 PM</option>
                <option value="15:00">03:00 PM</option>
                <option value="16:00">04:00 PM</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="urgency" className="block text-sm font-medium text-gray-300 mb-2">
              Urgency Level
            </label>
            <select
              id="urgency"
              name="urgency"
              value={formData.urgency}
              onChange={handleInputChange}
              className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-[#00A0E9] transition-colors"
            >
              <option value="normal">Normal (within 48 hours)</option>
              <option value="urgent">Urgent (within 24 hours)</option>
              <option value="very-urgent">Very Urgent (same day)</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
              Brief Description of Your Case
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows={4}
              className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-[#00A0E9] transition-colors resize-vertical"
              placeholder="Please provide a brief description of your legal matter..."
            />
          </div>

          {submitStatus === 'success' && (
            <div className="p-4 bg-green-900/50 border border-green-700 rounded-lg" role="alert">
              <p className="text-green-300">
                ✓ Consultation request submitted successfully! We'll contact you soon.
              </p>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="p-4 bg-red-900/50 border border-red-700 rounded-lg" role="alert">
              <p className="text-red-300">
                ✗ There was an error submitting your request. Please try again or contact us directly.
              </p>
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 bg-[#00A0E9] hover:bg-[#0085C3] disabled:bg-gray-600 disabled:cursor-not-allowed text-white py-3 px-6 rounded-lg font-medium transition-colors"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Request'}
            </button>
            
            <button
              type="button"
              onClick={openGmailCompose}
              className="flex-1 bg-transparent border border-[#00A0E9] hover:bg-[#00A0E9]/10 text-[#00A0E9] py-3 px-6 rounded-lg font-medium transition-colors"
            >
              Open in Gmail
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ConsultationModal