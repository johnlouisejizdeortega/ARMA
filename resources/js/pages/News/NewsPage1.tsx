"use client"

import { Head, usePage } from "@inertiajs/react"
import Navbar from "@/components/landing/Navbar"
import Footer from "@/components/landing/Footer"
import { Link } from "@inertiajs/react"
import { memo } from 'react'
import NextNews from "@/components/news/NextNews"
// Make sure to update the path if you placed the fixed carousel in a different location
import NewsCardCarousel from "@/components/news/NewsCardCarousel" // Import the NewsCardCarousel component

interface NewsItem {
  id: number
  title: string
  content: string
  date: string
  image?: string
  video?: string
  excerpt?: string
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
          <img
            src={item.image}
            alt={item.title}
            loading="lazy"
            className="w-full h-[100px] object-cover"
          />
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

export default function NewsPage1() {
  const { props } = usePage()
  const { newsItem, nextNewsItem } = props as unknown as PageProps

  // Use a static next news item if one isn't provided
  const fallbackNextItem = {
    id: 2,
    title: "Industry Conference Highlights",
    content: "Key takeaways from this year's tech conference and what it means for future developments.",
    excerpt: "Key takeaways from this year's tech conference and what it means for future developments.",
    date: "March 27, 2025",
    image: "/png/news2.jpg",
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
                {newsItem.video ? (
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-[350px] md:h-[500px] object-cover"
                    poster={newsItem.image}
                  >
                    <source src={newsItem.video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <img
                    src={newsItem.image}
                    alt={newsItem.title}
                    className="w-full h-[350px] md:h-[500px] object-cover"
                  />
                )}
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
                      The new platform represents a significant milestone in our ongoing commitment to innovation and client service excellence. It features an intuitive dashboard, enhanced document management capabilities, and secure communication channels for client-attorney interactions.
                    </p>
                    <p className="mb-6 leading-relaxed">
                      "This launch is the culmination of extensive research and development, guided by direct client feedback," said our Chief Technology Officer. "We've focused on creating a solution that not only meets current needs but anticipates future requirements in the rapidly evolving legal technology landscape."
                    </p>
                    <p className="mb-10 leading-relaxed">
                      Key features of the new platform include:
                    </p>
                    <ul className="list-disc pl-6 mb-12 space-y-3">
                      <li>Real-time case status updates and notifications</li>
                      <li>Secure document sharing with version control</li>
                      <li>Integrated billing and payment processing</li>
                      <li>Mobile-optimized interface for access on any device</li>
                      <li>Advanced data encryption and security protocols</li>
                    </ul>
                    <p className="leading-relaxed">
                      The platform will be rolled out to existing clients in phases over the next month, with comprehensive training and support provided during the transition. New clients will be onboarded directly to the new system starting immediately.
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