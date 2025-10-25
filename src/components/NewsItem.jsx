import { useParams, Link, Navigate } from 'react-router-dom'
import { ExternalLink, Calendar, MapPin, ArrowLeft } from 'lucide-react'
import { newsItems } from '../data/newsData'

const NewsItem = () => {
  const { id } = useParams()

  // Find news item by ID or slug
  const newsItem = newsItems.find(item =>
    item.id.toString() === id || item.slug === id
  )

  if (!newsItem) {
    return <Navigate to="/news" replace />
  }

  return (
    <div className="w-full bg-[#fafafa]">
      {/* Hero Section */}
      <section className="relative h-auto w-full overflow-hidden bg-[#2a5942] pt-64 pb-12">
        {/* Decorative Circles */}
        <div className="absolute top-[150px] right-[-200px] w-[777px] h-[803px] rounded-full opacity-10 bg-gradient-to-br from-white/5 to-transparent blur-sm" />
        <div className="absolute top-[40px] right-[-100px] w-[724px] h-[747px] rounded-full opacity-10 bg-gradient-to-br from-white/5 to-transparent blur-sm" />

        <div className="relative z-10 max-w-[1170px] mx-auto px-4">
          <Link
            to="/news"
            className="inline-flex items-center gap-2 text-[16px] text-white hover:text-[#3dac5c] transition-colors mb-8"
          >
            <ArrowLeft size={20} />
            Back to News
          </Link>

          <div className="flex items-center gap-4 text-[14px] text-[#f3f3f3] mb-6">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {newsItem.date}
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              {newsItem.location}
            </div>
          </div>

          <h1 className="text-[40px] md:text-[48px] font-semibold text-white leading-[120%] max-w-[900px] mb-6">
            {newsItem.title}
          </h1>

          <p className="text-[18px] text-[#f3f3f3] leading-[153%] max-w-[800px]">
            {newsItem.description}
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="max-w-[1170px] mx-auto px-4">
          {/* News Image */}
          {newsItem.image && (
            <div className="mb-12">
              <img
                src={newsItem.image}
                alt={newsItem.title}
                className="w-full h-[500px] object-cover rounded-2xl"
              />
            </div>
          )}

          {/* Article Content */}
          <div className="max-w-[800px] mx-auto">
            <div className="text-[16px] text-[#333] leading-[170%] whitespace-pre-line mb-12">
              {newsItem.content}
            </div>

            {/* External Links */}
            {newsItem.links && newsItem.links.length > 0 && (
              <div className="mt-12 border-t border-[#cfded1] pt-8">
                <h3 className="text-[24px] font-semibold text-[#1b3629] leading-[130%] mb-6">
                  Related Links
                </h3>
                <div className="space-y-4">
                  {newsItem.links.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block bg-white p-5 rounded-xl border border-[#cfded1] hover:border-[#2a5942] hover:shadow-md transition-all duration-200 group"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-[16px] text-[#1b3629] group-hover:text-[#3dac5c] transition-colors">
                          {link.text}
                        </span>
                        <ExternalLink className="w-5 h-5 text-[#666] group-hover:text-[#3dac5c] transition-colors" />
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            )}

            {/* Navigation */}
            <div className="mt-12 pt-8 border-t border-[#cfded1]">
              <Link
                to="/news"
                className="inline-flex items-center gap-2 text-[16px] text-[#2a5942] font-semibold hover:text-[#3dac5c] transition-colors"
              >
                <ArrowLeft size={20} />
                Back to all news
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default NewsItem