"use client"

import React, { useEffect } from "react"
import { gsap } from "gsap"

interface ImageDetailPageProps {
  imageId: string
  imageSrc: string
  title: string
  description: string
}

const ImageDetailPage: React.FC<ImageDetailPageProps> = ({ imageId, imageSrc, title, description }) => {
  useEffect(() => {
    // GSAP animation for page elements
    const tl = gsap.timeline()

    // Animate hero image
    tl.from(".detail-hero-image", {
      y: 100,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out"
    })

    // Animate content
    tl.from(".detail-content", {
      y: 50,
      opacity: 0,
      duration: 0.6,
      ease: "power2.out"
    }, "-=0.4")

    // Animate back button
    tl.from(".back-button", {
      x: -30,
      opacity: 0,
      duration: 0.5,
      ease: "power2.out"
    }, "-=0.3")
  }, [])

  const handleGoBack = () => {
    window.history.back();
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 to-gray-800">
      {/* Back button */}
      <div className="container mx-auto pt-8 px-4">
        <button
          onClick={handleGoBack}
          className="back-button flex items-center text-white hover:text-[#00A0E9] transition-colors duration-300"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Services
        </button>
      </div>

      {/* Hero image with parallelogram effect */}
      <div className="detail-hero-image container mx-auto px-4 mt-8">
        <div className="relative h-[60vh] w-full overflow-hidden rounded-xl shadow-2xl">
          {/* Background blur overlay */}
          <div
            className="absolute inset-0 bg-cover bg-center blur-sm scale-105"
            style={{ backgroundImage: `url(${imageSrc})` }}
          ></div>

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-black/50"></div>

          {/* Main image with parallelogram */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-[80%] h-[80%] transform skew-x-[-12deg] overflow-hidden rounded-xl shadow-2xl">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${imageSrc})`,
                  transform: "skew(12deg) scale(1.2)",
                  transformOrigin: "center"
                }}
              ></div>

              {/* Blue highlight */}
              <div className="absolute inset-0 border-4 border-[#00A0E9]/30"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="detail-content container mx-auto px-4 py-16">
        <h1 className="text-5xl md:text-6xl font-bold mb-8 text-white">
          <span className="text-[#00A0E9]">{title}</span>
        </h1>

        <div className="max-w-4xl">
          <p className="text-xl text-gray-300 leading-relaxed mb-8">
            {description}
          </p>

          {/* Additional content can be added here */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-gray-800/50 p-8 rounded-lg border border-gray-700">
              <h3 className="text-xl font-semibold text-white mb-4">Our Approach</h3>
              <p className="text-gray-300">
                Our team of experts approaches each case with precision and care, ensuring the best possible outcomes for our clients.
              </p>
            </div>

            <div className="bg-gray-800/50 p-8 rounded-lg border border-gray-700">
              <h3 className="text-xl font-semibold text-white mb-4">Why Choose Us</h3>
              <p className="text-gray-300">
                With years of experience and a proven track record, we deliver results that speak for themselves.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <button className="px-10 py-5 bg-gradient-to-r from-[#00A0E9] to-[#0085C3] text-white rounded-lg text-lg font-semibold hover:from-[#0090D9] hover:to-[#0075B3] transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg shadow-blue-500/20 flex items-center mx-auto">
              <span>Contact Us Today</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ImageDetailPage
