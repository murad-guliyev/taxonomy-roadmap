import { Link, useSearchParams, useNavigate } from 'react-router-dom'
import { Calendar, MapPin, ChevronRight } from 'lucide-react'
import { newsItems } from '../data/newsData'

const News = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const currentTab = searchParams.get('tab') || 'all'
  const navigate = useNavigate()

  const handleTabChange = (tab) => {
    if (tab === 'events') {
      navigate('/events')
    } else {
      setSearchParams({ tab })
    }
  }

  const tabs = [
    { id: 'all', label: 'All' },
    { id: 'news', label: 'News' },
    { id: 'events', label: 'Events' }
  ]

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      {/* Hero Section */}
      <section className="relative h-[387px] bg-[#2a5942] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#3dac5c]/5 to-transparent backdrop-blur-sm" />

        <div className="relative z-10 max-w-[1170px] mx-auto px-4 sm:px-6 pt-[289px]">
          <h1 className="text-white font-raleway text-[32px] font-bold leading-[120%]">
            News and Events
          </h1>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="bg-white w-full border-b border-gray-200">
        <div className="max-w-[1170px] mx-auto px-4 sm:px-6 flex items-center gap-8 py-5 overflow-x-auto">
          <button
            onClick={() => handleTabChange('all')}
            className={`whitespace-nowrap font-raleway text-xl font-bold leading-[130%] pb-2 border-b-2 transition-colors ${
              currentTab === 'all'
                ? 'text-[#2a5942] border-[#3dac5c]'
                : 'text-[#2a5942] border-transparent hover:border-[#3dac5c]/50'
            }`}
          >
            All
          </button>
          <button
            onClick={() => handleTabChange('news')}
            className={`whitespace-nowrap font-raleway text-xl font-bold leading-[130%] pb-2 border-b-2 transition-colors ${
              currentTab === 'news'
                ? 'text-[#2a5942] border-[#3dac5c]'
                : 'text-[#2a5942] border-transparent hover:border-[#3dac5c]/50'
            }`}
          >
            News
          </button>
          <button
            onClick={() => handleTabChange('events')}
            className={`whitespace-nowrap font-raleway text-xl font-bold leading-[130%] pb-2 border-b-2 transition-colors ${
              currentTab === 'events'
                ? 'text-[#2a5942] border-[#3dac5c]'
                : 'text-[#2a5942] border-transparent hover:border-[#3dac5c]/50'
            }`}
          >
            Events
          </button>
        </div>
      </section>

      {/* News Articles - Grid Layout */}
      <section className="py-[60px] sm:py-[90px] lg:py-[120px] px-4 sm:px-6 bg-[#fafafa]">
        <div className="max-w-[1170px] mx-auto">
          {/* News Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {newsItems.map((item) => (
              <article
                key={item.id}
                className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-[#e5e5e5] flex flex-col"
              >
                {/* Image */}
                <div className="h-64 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col flex-1">
                  <div className="flex items-center gap-4 text-sm text-[#767676] mb-6 font-raleway">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {item.date}
                    </div>
                  </div>

                  <h2 className="text-lg font-raleway font-bold text-[#2a5942] leading-[130%] mb-4 line-clamp-2 flex-grow">
                    {item.title}
                  </h2>

                  <p className="text-[#333333] font-raleway text-base leading-[160%] mb-6 line-clamp-3">
                    {item.description}
                  </p>

                  <div className="flex items-center justify-between mt-auto">
                    <Link
                      to={`/news/${item.slug}`}
                      className="inline-flex items-center gap-2 text-[#3dac5c] hover:text-[#3dac5c]/80 font-raleway font-bold transition-colors text-sm"
                    >
                      Read More
                      <ChevronRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>
    </div>
  )
}

export default News