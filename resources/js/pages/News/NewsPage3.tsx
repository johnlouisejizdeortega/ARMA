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

export default function NewsPage3() {
  const { props } = usePage()
  const { newsItem, nextNewsItem } = props as unknown as PageProps

  // Use a static next news item if one isn't provided
  const fallbackNextItem: NewsItem = {
    id: 4,
    title: "Team Member Recognition",
    content: "Team member recognition and achievements showcase.",
    date: "March 10, 2025",
    image: "/png/news4.jpg"
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
                      After months of careful planning and negotiation, we are delighted to formalize our collaboration with TechVantage Solutions, a recognized leader in legal technology innovation. This partnership represents a significant step forward in our mission to deliver exceptional legal services powered by cutting-edge technology.
                    </p>
                    <p className="mb-8 leading-relaxed">
                      The partnership will focus on several key areas:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                      <div className="bg-black bg-opacity-30 p-6 rounded-lg">
                        <h3 className="text-white font-bold mb-3 text-lg">Enhanced Technology Infrastructure</h3>
                        <p className="text-gray-300 text-sm">
                          Implementation of advanced security protocols, cloud-based case management, and seamless mobile integration for our client services platform.
                        </p>
                      </div>
                      <div className="bg-black bg-opacity-30 p-6 rounded-lg">
                        <h3 className="text-white font-bold mb-3 text-lg">Innovative Client Solutions</h3>
                        <p className="text-gray-300 text-sm">
                          Development of proprietary tools for legal research, contract analysis, and data visualization to provide clients with actionable insights.
                        </p>
                      </div>
                      <div className="bg-black bg-opacity-30 p-6 rounded-lg">
                        <h3 className="text-white font-bold mb-3 text-lg">Research & Development</h3>
                        <p className="text-gray-300 text-sm">
                          Joint investment in exploring emerging technologies like AI and blockchain for legal applications, ensuring we remain at the forefront of legal innovation.
                        </p>
                      </div>
                      <div className="bg-black bg-opacity-30 p-6 rounded-lg">
                        <h3 className="text-white font-bold mb-3 text-lg">Talent Development</h3>
                        <p className="text-gray-300 text-sm">
                          Exchange programs and specialized training initiatives to develop a workforce uniquely skilled in both legal expertise and technological proficiency.
                        </p>
                      </div>
                    </div>
                    <p className="mb-6 leading-relaxed">
                      "This partnership marks a transformative moment for both organizations," said our CEO. "By combining TechVantage's technological expertise with our legal knowledge and client relationships, we're creating something truly unique in the legal marketplace."
                    </p>
                    <p className="leading-relaxed">
                      The first phase of joint initiatives will begin next month, with a focus on integrating TechVantage's proprietary document analysis software into our workflow. Clients can expect to see the benefits of this partnership through enhanced service delivery, more efficient processes, and innovative new offerings in the coming months.
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