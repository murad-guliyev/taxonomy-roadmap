import { Link } from 'react-router-dom'
import { Calendar, MapPin, ChevronRight } from 'lucide-react'
import { newsItems } from '../data/newsData'

const News = () => {
  return (
    <div className="w-full bg-[#fafafa]">
      {/* Hero Section */}
      <section className="relative h-[300px] sm:h-[350px] lg:h-[387px] w-full overflow-hidden bg-[#2a5942]">
        {/* Decorative Circles */}
        <div className="absolute top-[150px] right-[-200px] w-[777px] h-[803px] rounded-full opacity-10 bg-gradient-to-br from-white/5 to-transparent blur-sm" />
        <div className="absolute top-[40px] right-[-100px] w-[724px] h-[747px] rounded-full opacity-10 bg-gradient-to-br from-white/5 to-transparent blur-sm" />

        <div className="relative z-10 max-w-[1170px] mx-auto px-4 sm:px-6 pt-32 sm:pt-40 md:pt-48 lg:pt-64 pb-20">
          <h1 className="text-white font-semibold leading-[120%] mb-4">
            Latest News
          </h1>
          <p className="text-[16px] text-[#f3f3f3] leading-[153%] max-w-[700px]">
            Stay updated with the latest developments, partnerships, and milestones
            in the Taxonomy Roadmap Initiative
          </p>
        </div>
      </section>

      {/* News Articles */}
      <section className="py-[60px] sm:py-[90px] lg:py-[120px] px-4 sm:px-6">
        <div className="max-w-[1170px] mx-auto">
          <div className="space-y-8">
            {newsItems.map((item) => (
              <article
                key={item.id}
                className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100"
              >
                <div className="lg:flex">
                  {/* Image */}
                  <div className="lg:w-1/3">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-64 lg:h-full object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="lg:w-2/3 p-4 sm:p-6 lg:p-8">
                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {item.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {item.location}
                      </div>
                    </div>

                    <h2 className="text-xl font-semibold text-[#1e1e1e] leading-[150%] mb-4 line-clamp-2">
                      {item.title}
                    </h2>

                    <p className="text-muted-foreground leading-[153%] mb-6 line-clamp-3">
                      {item.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <Link
                        to={`/news/${item.slug}`}
                        className="inline-flex items-center gap-2 text-[#3dac5c] hover:text-[#3dac5c]/80 font-medium transition-colors"
                      >
                        Read Full Article
                        <ChevronRight className="w-4 h-4" />
                      </Link>

                      <div className="text-sm text-[#767676]">
                        News Article
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-12 sm:mt-16">
            <div className="bg-white border border-[#d9d9d9] rounded-lg p-6 sm:p-8">
              <h3 className="text-[24px] sm:text-[28px] lg:text-[32px] font-semibold text-foreground leading-[120%] mb-4">
                Stay Connected
              </h3>
              <p className="text-muted-foreground leading-[153%] mb-6 max-w-2xl mx-auto">
                Follow the latest developments in sustainable finance taxonomy interoperability
                and learn about upcoming events and initiatives.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/events"
                  className="bg-[#3dac5c] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#3dac5c]/90 transition-colors"
                >
                  View Upcoming Events
                </Link>
                <Link
                  to="/publications"
                  className="border border-[#d9d9d9] text-[#1e1e1e] px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                >
                  Read Publications
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default News