import React from "react"
import Navbar from "@/components/landing/Navbar"
import Footer from "@/components/landing/Footer"

export default function Careers() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-black to-[#3E3E3E]">
      <Navbar />
      <main className="max-w-4xl mx-auto py-24 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Careers at ARMA</h1>
        <p className="text-gray-300 text-lg md:text-xl mb-8">[Placeholder] Explore opportunities to join ARMA Litigation. Information about current vacancies, culture, and how to apply will appear here.</p>
      </main>
      <Footer />
    </div>
  )
}
