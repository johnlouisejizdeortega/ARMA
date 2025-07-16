"use client"

import { Head, usePage } from "@inertiajs/react"
import Navbar from "@/components/landing/Navbar"
import Footer from "@/components/landing/Footer"
import { Link } from "@inertiajs/react"
import { memo } from 'react'
import NextNews from "@/components/news/NextNews"  // Import the shared component for the bottom section
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

export default function NewsPage4() {
  const { props } = usePage()
  const { newsItem } = props as unknown as PageProps

  // Next article data (for the "What's next?" section)
  const nextNewsItem = {
    id: 5,
    title: "Industry Award Nomination",
    content: "Our flagship product has been nominated for the annual industry excellence award.",
    date: "March 5, 2025",
    image: "/png/news5.jpg",
  }
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
                      We are proud to announce that Sarah Chen, our Senior Developer, has received the prestigious Open Source Contribution Award from the Legal Technology Foundation for her work on the LegalDocs Framework, an open-source project that standardizes document formats for legal professionals.
                    </p>
                    <div className="my-10 flex flex-col md:flex-row items-center bg-black bg-opacity-30 p-6 rounded-lg">
                      <div className="w-40 h-40 rounded-full overflow-hidden mb-6 md:mb-0 md:mr-8 flex-shrink-0">
                        <img
                          src="/png/team-member.jpg"
                          alt="Sarah Chen"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="text-white font-bold mb-2 text-xl">Sarah Chen</h3>
                        <p className="text-cyan-400 mb-3">Senior Developer, ARMA Legal</p>
                        <p className="text-gray-300 text-sm">
                          With over 10 years of experience in legal tech, Sarah has been instrumental in developing our core technology infrastructure. Her passion for open standards and accessible technology has made her a respected voice in the broader legal tech community.
                        </p>
                      </div>
                    </div>
                    <p className="mb-6 leading-relaxed">
                      The LegalDocs Framework, which Sarah has been contributing to for the past two years, addresses a critical need in the legal industry: a standardized, machine-readable format for legal documents that maintains compatibility across different software platforms and jurisdictions. Her contributions have focused on improving the framework's security features and developing tools that make it easier for legal professionals to implement the standard in their existing workflows.
                    </p>
                    <blockquote className="border-l-4 border-cyan-400 pl-4 italic mb-8">
                      "Open source collaboration is essential for solving the common challenges we face as an industry," says Sarah. "By working together on standardized tools and frameworks, we can all deliver better services to our clients while focusing our proprietary efforts on what truly differentiates us."
                    </blockquote>
                    <p className="mb-6 leading-relaxed">
                      The award includes a $25,000 grant, which Sarah has chosen to dedicate to further development of the framework, specifically to add multi-language support and improve accessibility features.
                    </p>
                    <p className="leading-relaxed">
                      This recognition underscores our commitment to fostering a culture of innovation and contribution within our team. We believe that active participation in the broader legal technology ecosystem not only benefits the industry as a whole but also enhances our ability to deliver cutting-edge solutions to our clients.
                    </p>
                  </div>
                </div>

                {/* Next News - Right Column */}
                <div className="w-full lg:w-1/4 lg:pt-2 sticky top-20 self-start">
                  <SidebarNextNews item={nextNewsItem} />
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