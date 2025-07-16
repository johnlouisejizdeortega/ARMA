"use client"

import { useRef } from "react"
import { Head } from "@inertiajs/react"
import Navbar from "@/components/landing/Navbar"
import HeroSection from "@/components/landing/HeroSection"
import ScrollSection from "@/components/landing/ScrollSection"
/* import NewsSection from "@/components/landing/NewsSection" */
import ServicesSection from "@/components/landing/ServicesSection"
import AboutSection from "@/components/landing/AboutSection"
import TeamSection from "@/components/landing/TeamSection"
import CasesSection from "@/components/landing/CasesSection"
import ValuesSection from "@/components/landing/ValuesSection"
import ContactSection from "@/components/landing/ContactSection"
import Footer from "@/components/landing/Footer"

export default function Welcome() {
  const mainRef = useRef<HTMLDivElement>(null)

  return (
    <>
      <Head title="Welcome to ARMA Legal">
        <link rel="preconnect" href="https://fonts.bunny.net" />
        <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
        {/* Include Font Awesome for icons */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </Head>

      <div ref={mainRef} className="relative w-full overflow-x-hidden">
        <Navbar />
        <HeroSection />
        {/* <NewsSection /> */}
        <div id="services-section">
          <ServicesSection />
        </div>
        <div id="about-section">
          <AboutSection />
        </div>
        <div id="team-section">
          <TeamSection />
        </div>
        <div id="cases-section">
          <CasesSection />
        </div>
        <div id="values-section">
          <ValuesSection />
        </div>
        <div id="contact-section">
          <ContactSection />
        </div>
        {/*  <ScrollSection /> */}
        <Footer />
      </div>
    </>
  )
}
