import React from 'react'
import { Link } from '@inertiajs/react'

interface RelatedNewsItem {
  id: number
  title: string
  excerpt: string
  date: string
  image: string
}

interface RelatedNewsCarouselProps {
  items: RelatedNewsItem[]
  currentNewsId?: number
}

const RelatedNewsCarousel: React.FC<RelatedNewsCarouselProps> = ({ items, currentNewsId }) => {
  // Filter out the current news item if provided
  const filteredItems = currentNewsId ? items.filter(item => item.id !== currentNewsId) : items

  return (
    <div className="w-full my-10">
      <h2 className="text-2xl font-bold mb-6 text-white">Related News</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredItems.slice(0, 3).map((item) => (
          <div key={item.id} className="rounded-lg overflow-hidden bg-[#111111] shadow-lg">
            <div className="relative h-48 w-full overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.onerror = null; // Prevent infinite error loop
                  target.style.display = 'none'; // Hide the broken image

                  // Create a fallback div with gradient background
                  const fallback = document.createElement('div');
                  fallback.className = 'absolute inset-0 bg-gradient-to-b from-gray-800 to-black';
                  target.parentNode?.appendChild(fallback);
                }}
              />
            </div>
            <div className="p-6">
              <p className="text-[#00A0E9] mb-2 text-sm font-medium">{item.date}</p>
              <h3 className="text-white font-bold mb-2 text-lg">{item.title}</h3>
              <p className="text-gray-400 text-sm mb-4">{item.excerpt}</p>
              <Link
                href={`/news/${item.id}`}
                className="text-[#00A0E9] hover:text-[#00c4ff] text-sm inline-flex items-center font-medium"
              >
                Read More →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RelatedNewsCarousel
