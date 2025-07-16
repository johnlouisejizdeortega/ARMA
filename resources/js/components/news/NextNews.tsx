import React from 'react'
import { Link } from '@inertiajs/react'

interface NewsItem {
  id: number
  title: string
  date: string
  image?: string
}

interface NextNewsProps {
  item: NewsItem
}

const NextNews: React.FC<NextNewsProps> = ({ item }) => {
  if (!item) return null
  
  return (
    <div className="flex flex-col">
      <h3 className="text-white text-lg font-medium mb-4">What's next?</h3>
      <Link href={`/news/${item.id}`} className="block">
        <div className="relative rounded-lg overflow-hidden w-full">
          {item.image && (
            <img
              src={item.image}
              alt={item.title}
              loading="lazy"
              className="w-full h-[100px] object-cover"
            />
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
}

export default NextNews