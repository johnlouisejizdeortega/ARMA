"use client"

import { useEffect, useRef, useState, useCallback } from "react"
import { Link } from "@inertiajs/react"

interface NewsItem {
  id: number
  title: string
  excerpt: string
  date: string
  image: string
  video?: string
  placeholder: string
  size: "large" | "small"
}

const newsItems: NewsItem[] = [
  {
    id: 1,
    title: "Latest Project Launch",
    excerpt: "Our team has successfully launched the new platform with enhanced features and improved user experience.",
    date: "April 3, 2025",
    image: "/images/news1.jpg",
    video: "/videos/3rdvid.mp4",
    placeholder: "/png/news2.jpg",
    size: "large",
  },
  {
    id: 2,
    title: "Industry Conference Highlights",
    excerpt: "Key takeaways from this year's tech conference and what it means for future developments.",
    date: "March 27, 2025",
    image: "/png/news2.jpg",
    placeholder: "/png/news2.jpg",
    size: "large",
  },
  {
    id: 3,
    title: "New Partnership Announcement",
    excerpt: "We're excited to announce our strategic partnership with a leading technology provider.",
    date: "March 15, 2025",
    image: "/png/news3.jpg",
    placeholder: "/png/news3.jpg",
    size: "small",
  },
  {
    id: 4,
    title: "Team Member Recognition",
    excerpt: "Our senior developer has been recognized for contributions to open source projects.",
    date: "March 10, 2025",
    image: "/png/news4.jpg",
    placeholder: "/png/news4.jpg",
    size: "small",
  },
  {
    id: 5,
    title: "Industry Award Nomination",
    excerpt: "Our flagship product has been nominated for the annual industry excellence award.",
    date: "March 5, 2025",
    image: "/png/news5.jpg",
    placeholder: "/png/news5.jpg",
    size: "small",
  },
  {
    id: 6,
    title: "Community Outreach Program",
    excerpt: "Details about our upcoming community engagement and education initiatives.",
    date: "February 28, 2025",
    image: "/png/news2.jpg",
    video: "/videos/2ndvid.mp4",
    placeholder: "/png/news2.jpg",
    size: "small",
  },
]

const CardMedia = ({ item }: { item: NewsItem }) => {
  const handleVideoError = useCallback((e: React.SyntheticEvent<HTMLVideoElement>) => {
    const target = e.target as HTMLVideoElement
    const img = document.createElement("img")
    img.src = item.placeholder
    img.alt = item.title
    img.className = "w-full h-full object-cover"
    if (target.parentNode) {
      target.parentNode.replaceChild(img, target)
    }
  }, [item.placeholder, item.title])

  const handleImageError = useCallback((e: React.SyntheticEvent<HTMLImageElement>) => {
    const target = e.target as HTMLImageElement
    target.src = item.placeholder
    target.onerror = null
  }, [item.placeholder])

  if (item.video) {
    return (
      <div className="media-container relative w-full h-full">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={item.placeholder}
          onError={handleVideoError}
        >
          <source src={item.video} type="video/mp4" />
          <img src={item.placeholder} alt={item.title} className="w-full h-full object-cover" />
        </video>
      </div>
    )
  }

  return (
    <div className="media-container relative w-full h-full">
      <img
        src={item.image}
        alt={item.title}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover"
        onError={handleImageError}
      />
    </div>
  )
}

const NewsSection = () => {
  const [activeSlide, setActiveSlide] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  // Filtered news items
  const largeNewsItems = newsItems.filter((item) => item.size === "large").slice(0, 2)
  const smallNewsItems = newsItems.filter((item) => item.size === "small").slice(0, 4)

  // Carousel navigation functions
  const nextSlide = useCallback(() => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setActiveSlide((prev) => (prev === newsItems.length - 1 ? 0 : prev + 1))
    setTimeout(() => setIsTransitioning(false), 500)
  }, [isTransitioning])

  const prevSlide = useCallback(() => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setActiveSlide((prev) => (prev === 0 ? newsItems.length - 1 : prev - 1))
    setTimeout(() => setIsTransitioning(false), 500)
  }, [isTransitioning])

  const goToSlide = useCallback((index: number) => {
    if (isTransitioning || index === activeSlide) return
    setIsTransitioning(true)
    setActiveSlide(index)
    setTimeout(() => setIsTransitioning(false), 500)
  }, [isTransitioning, activeSlide])

  // Auto-slide effect
  useEffect(() => {
    const startAutoSlide = () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
      intervalRef.current = setInterval(() => {
        if (!isTransitioning) {
          nextSlide()
        }
      }, 5000)
    }

    startAutoSlide()

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [nextSlide, isTransitioning])

  return (
    <section
      id="news-section"
      className="relative z-20"
      style={{
        background: "linear-gradient(to right, #000000 5%, #3E3E3E 100%)",
      }}
    >
      <div className="py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col space-y-6 my-4 sm:my-6 md:my-8">
            {/* Title Section */}
            <div className="mb-4 sm:mb-6 md:mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold mb-2">
                <span className="text-white">LATEST </span>
                <span className="text-cyan-400">NEWS</span>
              </h2>
              <p className="text-gray-400 text-sm sm:text-base">
                Stay updated with our latest announcements, projects, and industry insights.
              </p>
            </div>

            {/* Mobile & Tablet Carousel */}
            <div className="block lg:hidden relative">
              {/* Navigation Arrows */}
              <div className="flex justify-between items-center absolute inset-0 z-30 pointer-events-none">
                <button
                  onClick={prevSlide}
                  disabled={isTransitioning}
                  className="pointer-events-auto backdrop-blur-sm bg-black/30 hover:bg-black/50 text-white rounded-full p-2 ml-2 transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-label="Previous news"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 sm:h-6 sm:w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                <button
                  onClick={nextSlide}
                  disabled={isTransitioning}
                  className="pointer-events-auto backdrop-blur-sm bg-black/30 hover:bg-black/50 text-white rounded-full p-2 mr-2 transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-label="Next news"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 sm:h-6 sm:w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              {/* Carousel Content */}
              <div className="overflow-hidden rounded-xl">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${activeSlide * 100}%)` }}
                >
                  {newsItems.map((item) => (
                    <div key={item.id} className="relative flex-shrink-0 w-full px-2">
                      <Link href={`/news/${item.id}`} className="block h-full">
                        <div
                          className="relative rounded-xl overflow-hidden shadow-lg h-full backdrop-blur-sm bg-white/5 border border-white/10 transition-all duration-300 hover:border-cyan-400/30 hover:shadow-xl hover:shadow-cyan-400/20"
                          style={{ minHeight: "20rem" }}
                        >
                          <CardMedia item={item} />

                          <div className="relative h-full flex flex-col justify-end">
                            <div className="backdrop-blur-md bg-black/50 p-4 sm:p-5">
                              <p className="text-xs sm:text-sm text-cyan-400 mb-1">{item.date}</p>
                              <h3 className="text-base sm:text-lg font-bold text-white mb-2">{item.title}</h3>
                              <p className="text-gray-200 text-sm sm:text-base">{item.excerpt}</p>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>

              {/* Carousel Indicators */}
              <div className="flex justify-center mt-4">
                <div className="backdrop-blur-md bg-white/5 rounded-full p-2 border border-white/10 flex items-center gap-2">
                  {newsItems.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      disabled={isTransitioning}
                      className={`w-3 h-1 rounded-full transition-all duration-300 disabled:cursor-not-allowed ${
                        index === activeSlide ? "bg-cyan-400 w-6" : "bg-gray-600"
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Desktop Grid Layout */}
            <div className="hidden lg:flex lg:flex-col space-y-6">
              {/* Top Row - Large Cards */}
              <div className="flex flex-row space-x-4">
                {largeNewsItems.map((item, index) => (
                  <div key={item.id} className={`${index === 0 ? "w-2/3" : "w-1/3"} group`}>
                    <Link href={`/news/${item.id}`} className="block h-full">
                      <div
                        className="relative rounded-lg overflow-hidden shadow-lg h-full transition-all duration-300 hover:shadow-xl hover:shadow-cyan-400/20 hover:-translate-y-2"
                        style={{ minHeight: "16rem" }}
                      >
                        <CardMedia item={item} />

                        <div className="relative h-full flex flex-col justify-end">
                          <div className="bg-gradient-to-t from-black to-transparent p-4">
                            <p className="text-sm text-cyan-400 mb-1">{item.date}</p>
                            <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                            <p className="text-gray-200 text-base">{item.excerpt}</p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>

              {/* Bottom Row - Small Cards */}
              <div className="grid grid-cols-4 gap-4">
                {smallNewsItems.map((item) => (
                  <div key={item.id} className="group">
                    <Link href={`/news/${item.id}`} className="block h-full">
                      <div
                        className="relative rounded-lg overflow-hidden shadow-lg h-full transition-all duration-300 hover:shadow-xl hover:shadow-cyan-400/20 hover:-translate-y-2"
                        style={{ minHeight: "12rem" }}
                      >
                        <CardMedia item={item} />

                        <div className="relative h-full flex flex-col justify-end">
                          <div className="bg-gradient-to-t from-black to-transparent p-3">
                            <p className="text-xs text-cyan-400 mb-1">{item.date}</p>
                            <h3 className="text-sm font-bold text-white mb-1 line-clamp-1">{item.title}</h3>
                            <p className="text-gray-200 text-xs line-clamp-2">{item.excerpt}</p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NewsSection