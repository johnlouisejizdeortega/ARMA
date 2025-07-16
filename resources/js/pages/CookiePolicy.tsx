"use client"
import { useRef } from "react"
import { useScrollAnimation } from "@/lib/animation"
import Navbar from "@/components/landing/Navbar"
import Footer from "@/components/landing/Footer"

const CookiePolicy = () => {
  // Refs for animation
  const headerRef = useRef(null)
  const contentRef = useRef(null)

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
              Cookie Policy
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto font-light leading-relaxed">
              How we use cookies on our website.
            </p>
          </div>
        </header>

        {/* Main Content Section */}
        <div ref={contentRef} className="w-full max-w-6xl mx-auto px-4 mb-20">
          <div className="bg-black/40 rounded-lg overflow-hidden p-8">
            <div className="animate-content">
              <h2 className="text-3xl font-bold text-white mb-8 tracking-tight leading-tight">Our Cookie Policy</h2>
              <div className="prose max-w-none">
                <p className="text-gray-300 text-base leading-relaxed mb-6 font-light">
                  This is the Cookie Policy for Arma Litigation, accessible from https://armalitigation.com/
                </p>

                <h3 className="text-2xl font-semibold text-white mb-4 mt-8 tracking-tight">What Are Cookies</h3>
                <p className="text-gray-300 text-base leading-relaxed mb-6 font-light">
                  As is common practice with almost all professional websites this site uses cookies, which are tiny
                  files that are downloaded to your computer, to improve your experience. This page describes what
                  information they gather, how we use it and why we sometimes need to store these cookies. We will also
                  share how you can prevent these cookies from being stored however this may downgrade or 'break'
                  certain elements of the sites functionality.
                </p>

                <h3 className="text-2xl font-semibold text-white mb-4 mt-8 tracking-tight">How We Use Cookies</h3>
                <p className="text-gray-300 text-base leading-relaxed mb-6 font-light">
                  We use cookies for a variety of reasons detailed below. Unfortunately in most cases there are no
                  industry standard options for disabling cookies without completely disabling the functionality and
                  features they add to this site. It is recommended that you leave on all cookies if you are not sure
                  whether you need them or not in case they are used to provide a service that you use.
                </p>

                <h3 className="text-2xl font-semibold text-white mb-4 mt-8 tracking-tight">Disabling Cookies</h3>
                <p className="text-gray-300 text-base leading-relaxed mb-6 font-light">
                  You can prevent the setting of cookies by adjusting the settings on your browser. Be aware that
                  disabling cookies will affect the functionality of this and many other websites that you visit.
                  Disabling cookies will usually result in also disabling certain functionality and features of the this
                  site. Therefore it is recommended that you do not disable cookies.
                </p>

                <div className="mt-10 mb-8">
                  <h3 className="text-2xl font-semibold text-white mb-5 tracking-tight">Types of Cookies We Use</h3>
                  <ul className="space-y-4">
                    <li className="text-gray-300 text-base leading-relaxed font-light">
                      <strong className="text-white font-medium">Essential Cookies:</strong> These cookies are necessary
                      for the website to function properly and cannot be disabled.
                    </li>
                    <li className="text-gray-300 text-base leading-relaxed font-light">
                      <strong className="text-white font-medium">Analytics Cookies:</strong> These cookies help us
                      understand how visitors interact with our website.
                    </li>
                    <li className="text-gray-300 text-base leading-relaxed font-light">
                      <strong className="text-white font-medium">Functional Cookies:</strong> These cookies enable
                      enhanced functionality and personalization.
                    </li>
                  </ul>
                </div>

                <h3 className="text-2xl font-semibold text-white mb-4 mt-8 tracking-tight">Third Party Cookies</h3>
                <p className="text-gray-300 text-base leading-relaxed mb-4 font-light">
                  The following section details which third party cookies you might encounter through this site.
                </p>
                <ul className="space-y-4 mt-2 mb-6">
                  <li className="text-gray-300 text-base leading-relaxed font-light">
                    This site uses Google Analytics which is one of the most widespread and trusted analytics solution
                    on the web for helping us to understand how you use the site and ways that we can improve your
                    experience. These cookies may track things such as how long you spend on the site and the pages that
                    you visit so we can continue to produce engaging content. For more information on Google Analytics
                    cookies, see the official Google Analytics page.
                  </li>
                </ul>

                <h3 className="text-2xl font-semibold text-white mb-4 mt-8 tracking-tight">More Information</h3>
                <p className="text-gray-300 text-base leading-relaxed mb-4 font-light">
                  If you are looking for more information then you can contact us through our preferred contact methods:
                </p>
                <ul className="space-y-4 mt-2 mb-6">
                  <li className="text-gray-300 text-base leading-relaxed font-light">
                    Email:{" "}
                    <a
                      href="mailto:info@armalitigation.com"
                      className="text-[#00A0E9] hover:underline transition-colors"
                    >
                      info@armalitigation.com
                    </a>
                  </li>
                </ul>
              </div>

              {/* Removed the button section as requested */}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default CookiePolicy
