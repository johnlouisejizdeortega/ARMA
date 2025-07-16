"use client"

import React from 'react'
import { Head, usePage, Link } from "@inertiajs/react"
import Navbar from "@/components/landing/Navbar"
import Footer from "@/components/landing/Footer"
import { memo } from 'react'
import NextNews from "@/components/news/NextNews"
import NewsCardCarousel from "@/components/news/NewsCardCarousel" // Import the NewsCardCarousel component

interface NewsItem {
  id: number
  title: string
  content: string
  date: string
  image?: string
  video?: string
}

interface PageProps {
  newsItem: NewsItem
  nextNewsItem?: NewsItem
}

// Local NextNews Component for the sidebar
const SidebarNextNews = memo(({ item }: { item: NewsItem }) => {
  return (
    <div className="flex flex-col">
      <h3 className="text-white text-lg font-medium mb-4">What's next?</h3>
      <Link href={`/news/${item.id}`} className="block">
        <div className="relative rounded-lg overflow-hidden w-full">
          {item.image ? (
            <img
              src={item.image}
              alt={item.title}
              loading="lazy"
              className="w-full h-[100px] object-cover"
            />
          ) : item.video ? (
            <video 
              src={item.video} 
              className="w-full h-[100px] object-cover"
              preload="metadata"
              autoPlay
              loop
              muted
            />
          ) : (
            <div className="w-full h-[100px] bg-gray-800 flex items-center justify-center">
              <span className="text-gray-400">No preview available</span>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
          <div className="absolute bottom-0 p-3">
            <p className="text-xs text-[#00A0E9]">Posted on {item.date}</p>
          </div>
        </div>
        <h4 className="text-white font-medium mt-3 line-clamp-2">{item.title}</h4>
      </Link>
    </div>
  )
})

SidebarNextNews.displayName = 'SidebarNextNews'

export default function NewsPage5() {
  const { props } = usePage()
  const { newsItem, nextNewsItem } = props as unknown as PageProps

  // Use a static next news item if one isn't provided
  const fallbackNextItem: NewsItem = {
    id: 6,
    title: "Community Outreach Program",
    content: "Stay tuned for our upcoming community outreach program details.",
    date: "February 28, 2025",
    video: "/videos/2ndvid.mp4"
  }
  
  // Use provided nextNewsItem or fallback to ensure something is shown
  const nextItem = nextNewsItem || fallbackNextItem

  return (
    <>
      <Head title={`${newsItem.title} - ARMA Legal`}>
        <link rel="preconnect" href="https://fonts.bunny.net" />
        <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </Head>

      <div className="relative w-full overflow-x-hidden" style={{
        background: "linear-gradient(to right, #000000 5%, #3E3E3E 100%)"
      }}>
        <Navbar />

        <main className="w-full">
          <div className="mb-16">
            {/* Hero Section */}
            <div className="w-full max-w-6xl mx-auto mt-20 mb-12 px-4">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">{newsItem.title}</h1>
              <p className="text-cyan-400 mb-8">{newsItem.date}</p>

              {/* Main Media Section */}
              <div className="rounded-lg overflow-hidden shadow-xl mb-12">
                {newsItem.image ? (
                  <img
                    src={newsItem.image}
                    alt={newsItem.title}
                    className="w-full h-[350px] md:h-[500px] object-cover"
                  />
                ) : newsItem.video ? (
                  <video 
                    src={newsItem.video} 
                    controls
                    autoPlay
                    loop
                    className="w-full h-[350px] md:h-[500px] object-cover"
                  />
                ) : null}
              </div>
            </div>

            {/* Content Section with Sidebar Layout */}
            <div className="max-w-6xl mx-auto px-4 mb-20">
              <div className="flex flex-col lg:flex-row gap-8">
                {/* Main Content - Left Column */}
                <div className="w-full lg:w-3/4">
                  <div className="prose prose-lg text-gray-300 max-w-none">
                    <p className="mb-6 leading-relaxed">
                      {newsItem.content}
                    </p>
                    <p className="mb-6 leading-relaxed">
                      We are delighted to announce that LegalSphere, our flagship legal practice management platform, has been shortlisted for the prestigious "Innovation in Legal Services" award at this year's Global Legal Technology Awards. This nomination recognizes the platform's innovative approach to integrating client management, case tracking, and document automation in a single, intuitive interface.
                    </p>
                    <div className="my-10 bg-gradient-to-r from-black to-gray-900 p-8 rounded-lg">
                      <div className="flex items-center mb-6">
                        <div className="w-20 h-20 mr-6">
                          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-cyan-400">
                            <path d="M12 15C8.8 15 6.5 13.9 5 12C6.5 10.1 8.8 9 12 9C15.2 9 17.5 10.1 19 12C17.5 13.9 15.2 15 12 15ZM12 7C8.2 7 5.2 9.2 4 12C5.2 14.8 8.2 17 12 17C15.8 17 18.8 14.8 20 12C18.8 9.2 15.8 7 12 7ZM12 13.5C13.1 13.5 14 12.6 14 11.5C14 10.4 13.1 9.5 12 9.5C10.9 9.5 10 10.4 10 11.5C10 12.6 10.9 13.5 12 13.5ZM12 7.5C14.8 7.5 17 9.7 17 12.5C17 15.3 14.8 17.5 12 17.5C9.2 17.5 7 15.3 7 12.5C7 9.7 9.2 7.5 12 7.5ZM12 19.2C7 19.2 2.8 15.7 1 10.5C2.8 5.3 7 1.8 12 1.8C17 1.8 21.2 5.3 23 10.5C21.2 15.7 17 19.2 12 19.2Z" fill="currentColor"/>
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-white font-bold text-xl">Global Legal Technology Awards</h3>
                          <p className="text-cyan-400">Innovation in Legal Services Category</p>
                        </div>
                      </div>
                      <p className="text-gray-300 mb-4">
                        The Global Legal Technology Awards celebrate excellence and innovation in legal technology solutions worldwide. Being nominated places LegalSphere among the top innovations in the industry this year.
                      </p>
                      <p className="text-gray-300">
                        The award ceremony will take place on April 15, 2025, in New York City, bringing together leaders and innovators from across the legal technology landscape.
                      </p>
                    </div>
                    <p className="mb-6 leading-relaxed">
                      Developed over three years with extensive input from practicing attorneys and legal administrators, LegalSphere stands out for its advanced features, including:
                    </p>
                    <ul className="list-disc pl-6 mb-10 space-y-3">
                      <li><strong className="text-white">Intelligent Case Management:</strong> AI-powered task prioritization and resource allocation</li>
                      <li><strong className="text-white">Seamless Document Automation:</strong> Template system with dynamic field population and version control</li>
                      <li><strong className="text-white">Client Portal:</strong> Secure communication and document sharing with customizable permissions</li>
                      <li><strong className="text-white">Unified Billing:</strong> Integrated time tracking, expense recording, and invoice generation</li>
                      <li><strong className="text-white">Advanced Analytics:</strong> Customizable dashboards providing insights on case progress, resource utilization, and financial performance</li>
                    </ul>
                    <p className="mb-8 leading-relaxed">
                      "This nomination validates our team's dedication to rethinking how legal practice management software can work," said our Director of Product Development. "We've focused not just on features, but on creating workflows that truly align with how legal professionals work today."
                    </p>
                    <p className="leading-relaxed">
                      The Global Legal Technology Awards will announce winners at their annual gala on April 15, 2025. We extend our appreciation to our clients and partners whose feedback and collaboration have been instrumental in the development and success of LegalSphere.
                    </p>
                  </div>
                </div>

                {/* Next News - Right Column */}
                <div className="w-full lg:w-1/4 lg:pt-2 sticky top-20 self-start">
                  <SidebarNextNews item={nextItem} />
                </div>
              </div>
            </div>
            
            {/* NewsCardCarousel added at the bottom */}
            <div className="w-full max-w-6xl mx-auto px-4 pt-12 border-t border-gray-700">
              <NewsCardCarousel subtitle="Explore more news and updates from our team" />
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  )
}