import { Link } from 'react-router-dom'
import { Calendar, MapPin, ChevronRight } from 'lucide-react'
import { eventItems } from '../data/eventsData'

const Events = () => {
  const getStatusStyle = (status) => {
    switch (status) {
      case 'upcoming':
        return 'bg-blue-100 text-blue-800'
      case 'completed':
        return 'bg-green-100 text-green-800'
      case 'ongoing':
        return 'bg-yellow-100 text-yellow-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const getStatusLabel = (status) => {
    switch (status) {
      case 'upcoming':
        return 'Upcoming'
      case 'completed':
        return 'Completed'
      case 'ongoing':
        return 'Ongoing'
      default:
        return 'Unknown'
    }
  }

  return (
    <div className="w-full bg-[#fafafa]">
      {/* Hero Section */}
      <section className="relative h-[300px] sm:h-[350px] lg:h-[387px] w-full overflow-hidden bg-[#2a5942]">
        {/* Decorative Circles */}
        <div className="absolute top-[150px] right-[-200px] w-[777px] h-[803px] rounded-full opacity-10 bg-gradient-to-br from-white/5 to-transparent blur-sm" />
        <div className="absolute top-[40px] right-[-100px] w-[724px] h-[747px] rounded-full opacity-10 bg-gradient-to-br from-white/5 to-transparent blur-sm" />

        <div className="relative z-10 max-w-[1170px] mx-auto px-4 sm:px-6 pt-32 sm:pt-40 md:pt-48 lg:pt-64 pb-20">
          <h1 className="text-white font-semibold leading-[120%] mb-4">
            Events & Conferences
          </h1>
          <p className="text-[16px] text-[#f3f3f3] leading-[153%] max-w-[700px]">
            Join us at key conferences, roundtables, and meetings advancing
            sustainable finance taxonomy interoperability
          </p>
        </div>
      </section>

      {/* Events List */}
      <section className="py-20">
        <div className="max-w-[1170px] mx-auto px-4">
          <div className="space-y-8">
            {eventItems.map((item) => (
              <article
                key={item.id}
                className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100"
              >
                <div className="lg:flex">
                  {/* Image */}
                  <div className="lg:w-1/3 bg-gray-50 flex items-center justify-center p-8">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-auto max-h-48 lg:max-h-56 object-contain"
                    />
                  </div>

                  {/* Content */}
                  <div className="lg:w-2/3 p-8">
                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {item.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {item.location}
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusStyle(item.status)}`}>
                        {getStatusLabel(item.status)}
                      </span>
                    </div>

                    <h2 className="text-xl font-semibold text-[#1e1e1e] leading-[150%] mb-4 line-clamp-2">
                      {item.title}
                    </h2>

                    <p className="text-muted-foreground leading-[153%] mb-6 line-clamp-3">
                      {item.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <Link
                        to={`/events/${item.slug}`}
                        className="inline-flex items-center gap-2 text-[#3dac5c] hover:text-[#3dac5c]/80 font-medium transition-colors"
                      >
                        View Event Details
                        <ChevronRight className="w-4 h-4" />
                      </Link>

                      <div className={`text-sm font-medium ${
                        item.status === 'upcoming'
                          ? 'text-[#3dac5c]'
                          : 'text-[#767676]'
                      }`}>
                        {item.status === 'upcoming' ? 'Upcoming Event' : 'Past Event'}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-16">
            <div className="bg-white border border-[#d9d9d9] rounded-lg p-8">
              <h3 className="text-[32px] font-semibold text-foreground leading-[120%] mb-4">
                Stay Informed
              </h3>
              <p className="text-muted-foreground leading-[153%] mb-6 max-w-2xl mx-auto">
                Keep up with the latest events, roundtables, and conferences where the Taxonomy Roadmap
                Initiative advances sustainable finance taxonomy interoperability.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/news"
                  className="bg-[#3dac5c] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#3dac5c]/90 transition-colors"
                >
                  Read Latest News
                </Link>
                <Link
                  to="/about-initiative"
                  className="border border-[#d9d9d9] text-[#1e1e1e] px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                >
                  Learn About Initiative
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Events