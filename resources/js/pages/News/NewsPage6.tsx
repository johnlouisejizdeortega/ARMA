"use client"

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
              playsInline
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

export default function NewsPage6() {
  const { props } = usePage()
  const { newsItem, nextNewsItem } = props as unknown as PageProps

  // Use a static next news item if one isn't provided
  const fallbackNextItem = {
    id: 1,
    title: "Latest Project Launch",
    content: "Our team has successfully launched the new platform with enhanced features and improved user experience. The platform introduces cutting-edge technology that will revolutionize how our clients interact with our services. This launch represents months of dedicated work from our development and design teams to create a seamless, intuitive interface that addresses the key challenges in the legal tech space.",
    date: "April 3, 2025",
    video: "/videos/3rdvid.mp4"
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
                      ARMA Legal is proud to announce the launch of our Community Outreach Program, a comprehensive initiative designed to improve access to legal resources and education in underserved communities. The program represents a significant expansion of our pro bono efforts and reflects our commitment to using our legal expertise for the greater good.
                    </p>
                    <div className="my-10 grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="bg-black bg-opacity-40 p-6 rounded-lg">
                        <div className="text-4xl mb-4 text-cyan-400">
                          <i className="fas fa-gavel"></i>
                        </div>
                        <h3 className="text-white font-bold mb-3 text-lg">Free Legal Clinics</h3>
                        <p className="text-gray-300 text-sm">
                          Monthly walk-in clinics offering free legal consultations on common issues including tenant rights, employment law, and family matters. Staffed by our attorneys on a volunteer basis.
                        </p>
                        <p className="text-cyan-400 mt-4 font-bold">First Clinic: March 15, 2025</p>
                      </div>
                      <div className="bg-black bg-opacity-40 p-6 rounded-lg">
                        <div className="text-4xl mb-4 text-cyan-400">
                          <i className="fas fa-chalkboard-teacher"></i>
                        </div>
                        <h3 className="text-white font-bold mb-3 text-lg">Legal Literacy Workshops</h3>
                        <p className="text-gray-300 text-sm">
                          Educational sessions designed to help community members understand their rights and navigate common legal situations. Topics include tenant rights, consumer protection, and employment discrimination.
                        </p>
                        <p className="text-cyan-400 mt-4 font-bold">Workshop Series Begins: April 10, 2025</p>
                      </div>
                      <div className="bg-black bg-opacity-40 p-6 rounded-lg">
                        <div className="text-4xl mb-4 text-cyan-400">
                          <i className="fas fa-laptop"></i>
                        </div>
                        <h3 className="text-white font-bold mb-3 text-lg">Online Resource Hub</h3>
                        <p className="text-gray-300 text-sm">
                          A dedicated section of our website providing free access to simplified legal information, downloadable templates for common documents, and guidance on accessing public legal resources.
                        </p>
                        <p className="text-cyan-400 mt-4 font-bold">Launching: March 30, 2025</p>
                      </div>
                      <div className="bg-black bg-opacity-40 p-6 rounded-lg">
                        <div className="text-4xl mb-4 text-cyan-400">
                          <i className="fas fa-handshake"></i>
                        </div>
                        <h3 className="text-white font-bold mb-3 text-lg">Community Partnerships</h3>
                        <p className="text-gray-300 text-sm">
                          Collaboration with local non-profits, community centers, and advocacy groups to provide targeted legal support to their constituencies and amplify existing community resources.
                        </p>
                        <p className="text-cyan-400 mt-4 font-bold">Ongoing Initiative</p>
                      </div>
                    </div>
                    <p className="mb-6 leading-relaxed">
                      "Equal access to legal resources is fundamental to justice," said our Managing Partner. "Through this program, we're aiming to break down barriers that prevent many people from understanding and asserting their legal rights."
                    </p>
                    <p className="mb-6 leading-relaxed">
                      The Community Outreach Program will initially focus on the metropolitan area, with plans to expand to surrounding communities in the coming year. All services will be provided at no cost to participants, and materials will be available in multiple languages to serve our diverse community.
                    </p>
                    <p className="leading-relaxed">
                      For more information on upcoming clinics and workshops, or to learn about volunteer opportunities, please visit the Community Outreach section of our website or contact our Community Liaison Office.
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