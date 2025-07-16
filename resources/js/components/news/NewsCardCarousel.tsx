import React, { useState, useCallback, memo } from 'react'
import { Link } from '@inertiajs/react'

interface NewsCardItem {
  id: number
  title: string
  excerpt: string
  date: string
  image: string
}

interface NewsCardCarouselProps {
  subtitle?: string
}

const newsItems: NewsCardItem[] = [
  {
    id: 2,
    title: "Industry Conference Highlights",
    excerpt: "Key takeaways from this year's tech conference and what it means for future developments.",
    date: "March 27, 2025",
    image: "/png/news2.jpg",
  },
  {
    id: 3,
    title: "New Partnership Announcement",
    excerpt: "We're excited to announce our strategic partnership with a leading technology provider.",
    date: "March 15, 2025",
    image: "/png/news3.jpg",
  },
  {
    id: 6,
    title: "Community Outreach Program",
    excerpt: "Details about our upcoming community engagement and education initiatives.",
    date: "February 28, 2025",
    image: "/png/news2.jpg",
  },
  {
    id: 4,
    title: "Team Member Recognition",
    excerpt: "Our senior developer has been recognized for contributions to open source projects.",
    date: "March 10, 2025",
    image: "/png/news4.jpg",
  },
  {
    id: 5,
    title: "Industry Award Nomination",
    excerpt: "Our flagship product has been nominated for the annual industry excellence award.",
    date: "March 5, 2025",
    image: "/png/news5.jpg",
  },
]

// Memoized NewsCard component to prevent unnecessary re-renders
const NewsCard = memo(({
  item,
  index,
  isActive
}: {
  item: NewsCardItem
  index: number
  isActive: boolean
}) => {
  const [imgError, setImgError] = useState(false)

  const handleImgError = () => {
    setImgError(true)
  }

  return (
    <Link
      href={`/news/${item.id}`}
      className={`
        absolute rounded-lg overflow-hidden transition-transform duration-300 transform
        ${index === 0 ? '-translate-x-[20%] scale-85 z-10 opacity-75' : ''}
        ${index === 1 ? 'z-20 scale-100' : ''}
        ${index === 2 ? 'translate-x-[20%] scale-85 z-10 opacity-75' : ''}
        ${isActive ? 'shadow-lg' : ''}
        ${!isActive ? 'hover:brightness-90' : ''}
      `}
    >
      <div className="relative h-[280px] w-[300px] bg-black">
        {/* Background Image with lazy loading */}
        <img
          src={item.image}
          alt={item.title}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover opacity-90"
          onError={handleImgError}
          style={{ visibility: imgError ? 'hidden' : 'visible' }}
        />

        {/* Fallback background color if image fails */}
        {imgError && (
          <div className="absolute inset-0 bg-gray-800"></div>
        )}

        {/* Simplified glow effect for active card */}
        {isActive && (
          <div className="absolute inset-0 box-border border-2 border-[#00A0E9] rounded-lg z-10"></div>
        )}

        {/* Content Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent">
          <div className="absolute bottom-0 left-0 right-0 p-5">
            <p className="text-xs text-[#00A0E9] mb-2">{item.date}</p>
            <h3 className="text-base font-bold text-white mb-2 line-clamp-2">{item.title}</h3>
            <p className="text-xs text-gray-300 line-clamp-2">{item.excerpt}</p>
          </div>
        </div>
      </div>
    </Link>
  )
})

NewsCard.displayName = 'NewsCard'

const NewsCardCarousel: React.FC<NewsCardCarouselProps> = ({
  subtitle = "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
}) => {
  const [activeIndex, setActiveIndex] = useState(0); // Start with first item active

  // Memoized handlers to avoid recreation on re-renders
  const handlePrevious = useCallback(() => {
    setActiveIndex(prev => (prev === 0 ? newsItems.length - 1 : prev - 1));
  }, []);

  const handleNext = useCallback(() => {
    setActiveIndex(prev => (prev === newsItems.length - 1 ? 0 : prev + 1));
  }, []);

  // Get the correct order of items for display (prev, current, next)
  const orderedItems = React.useMemo(() => {
    // Calculate the previous index with wrapping
    const prevIndex = activeIndex === 0 ? newsItems.length - 1 : activeIndex - 1;

    // Calculate the next index with wrapping
    const nextIndex = activeIndex === newsItems.length - 1 ? 0 : activeIndex + 1;

    // Return the array of 3 items in the correct order: [prev, current, next]
    return [
      newsItems[prevIndex],
      newsItems[activeIndex],
      newsItems[nextIndex]
    ];
  }, [activeIndex]);

  return (
    <div className="w-full mb-16">
      {/* Title */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-2">
          <span className="text-white">LATEST </span>
          <span className="text-[#00A0E9]">NEWS</span>
        </h2>
      </div>

      {/* Main content with Carousel only */}
      <div className="relative h-[340px] w-full flex items-center justify-center mb-8">
        {/* Navigation Arrows */}
        <button
          onClick={handlePrevious}
          className="absolute left-0 md:left-10 z-30 w-10 h-10 flex items-center justify-center rounded-full bg-black/50 text-white hover:bg-[#00A0E9]/70 transition-colors"
          aria-label="Previous slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {orderedItems.map((item, index) => {
          const isActive = index === 1; // Middle item (index 1) is always the active one
          return (
            <NewsCard
              key={item.id}
              item={item}
              index={index}
              isActive={isActive}
            />
          );
        })}

        <button
          onClick={handleNext}
          className="absolute right-0 md:right-10 z-30 w-10 h-10 flex items-center justify-center rounded-full bg-black/50 text-white hover:bg-[#00A0E9]/70 transition-colors"
          aria-label="Next slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Subtitle */}
      <div className="text-center mt-4">
        <p className="text-gray-400 text-sm">
          {subtitle}
        </p>
      </div>
    </div>
  )
}

export default NewsCardCarousel
