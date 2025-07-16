"use client"

import { Head, usePage } from "@inertiajs/react"
import Navbar from "@/components/landing/Navbar"
import Footer from "@/components/landing/Footer"
import { Link } from "@inertiajs/react"
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

export default function NewsPage2() {
  const { props } = usePage()
  const { newsItem, nextNewsItem } = props as unknown as PageProps

  // Use a static next news item if one isn't provided
  const fallbackNextItem = {
    id: 3,
    title: "New Partnership Announcement",
    content: "We're excited to announce our strategic partnership with a leading technology provider.",
    excerpt: "We're excited to announce our strategic partnership with a leading technology provider.",
    date: "March 15, 2025",
    image: "/png/news3.jpg",
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
                <img
                  src={newsItem.image}
                  alt={newsItem.title}
                  className="w-full h-[350px] md:h-[500px] object-cover"
                />
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
                      The annual conference, held in London last week, brought together leading minds from the legal technology sector to discuss emerging trends, challenges, and innovations. Our team was proud to participate in several key panel discussions and workshops throughout the three-day event.
                    </p>
                    <p className="mb-6 leading-relaxed">
                      Among the most significant topics addressed were:
                    </p>
                    <ul className="list-disc pl-6 mb-8 space-y-3">
                      <li>The impact of artificial intelligence on legal research and document review</li>
                      <li>Blockchain applications for smart contracts and intellectual property protection</li>
                      <li>Cybersecurity concerns specific to law firms and client data</li>
                      <li>Regulatory changes affecting legal technology adoption</li>
                      <li>Best practices for digital transformation in traditional law firms</li>
                    </ul>
                    <p className="mb-8 leading-relaxed">
                      Our Managing Partner delivered a keynote address on "The Future of Legal Practice in a Digital-First World," highlighting the importance of balancing technological innovation with the human elements that remain central to effective legal representation.
                    </p>
                    <blockquote className="border-l-4 border-cyan-400 pl-4 italic mb-8">
                      "We stand at a pivotal moment in legal history, where the tools at our disposal are evolving more rapidly than ever before. The firms that thrive will be those that harness technology to enhance, rather than replace, the expertise and judgment of skilled legal professionals."
                    </blockquote>
                    <p className="leading-relaxed">
                      The insights gained from this conference are already informing our strategic planning and technology roadmap for the coming year. We look forward to implementing several new initiatives based on what we've learned, with a continued focus on enhancing client service and operational efficiency.
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