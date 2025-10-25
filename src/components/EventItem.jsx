import { useParams, Link, Navigate } from 'react-router-dom'
import { ExternalLink, Calendar, MapPin, Users, Target, ArrowLeft } from 'lucide-react'
import { eventItems } from '../data/eventsData'

const EventItem = () => {
  const { id } = useParams()

  // Find event item by ID or slug
  const eventItem = eventItems.find(item =>
    item.id.toString() === id || item.slug === id
  )

  if (!eventItem) {
    return <Navigate to="/events" replace />
  }

  const getStatusStyle = (status) => {
    switch (status) {
      case 'upcoming':
        return 'bg-[#3dac5c]/10 text-[#3dac5c] border border-[#3dac5c]'
      case 'completed':
        return 'bg-[#2a5942]/10 text-[#2a5942] border border-[#2a5942]'
      case 'ongoing':
        return 'bg-orange-100 text-orange-700 border border-orange-300'
      default:
        return 'bg-gray-100 text-gray-700 border border-gray-300'
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
      <section className="relative h-auto w-full overflow-hidden bg-[#2a5942] pt-64 pb-12">
        {/* Decorative Circles */}
        <div className="absolute top-[150px] right-[-200px] w-[777px] h-[803px] rounded-full opacity-10 bg-gradient-to-br from-white/5 to-transparent blur-sm" />
        <div className="absolute top-[40px] right-[-100px] w-[724px] h-[747px] rounded-full opacity-10 bg-gradient-to-br from-white/5 to-transparent blur-sm" />

        <div className="relative z-10 max-w-[1170px] mx-auto px-4">
          <Link
            to="/events"
            className="inline-flex items-center gap-2 text-[16px] text-white hover:text-[#3dac5c] transition-colors mb-8"
          >
            <ArrowLeft size={20} />
            Back to Events
          </Link>

          <div className="flex items-center gap-4 text-[14px] text-[#f3f3f3] mb-6 flex-wrap">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {eventItem.date}
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              {eventItem.location}
            </div>
            <span className={`px-3 py-1 rounded-lg text-[13px] font-semibold ${getStatusStyle(eventItem.status)}`}>
              {getStatusLabel(eventItem.status)}
            </span>
          </div>

          <h1 className="text-[40px] md:text-[48px] font-semibold text-white leading-[120%] max-w-[900px] mb-6">
            {eventItem.title}
          </h1>

          <p className="text-[18px] text-[#f3f3f3] leading-[153%] max-w-[800px]">
            {eventItem.description}
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="max-w-[1170px] mx-auto px-4">
          {/* Event Image */}
          {eventItem.image && (
            <div className="mb-12">
              <img
                src={eventItem.image}
                alt={eventItem.title}
                className="w-full h-[500px] object-cover rounded-2xl"
              />
            </div>
          )}

          {/* Event Content */}
          <div className="max-w-[800px] mx-auto">
            <div className="text-[16px] text-[#333] leading-[170%] whitespace-pre-line mb-12">
              {eventItem.content}
            </div>

            {/* Event Agenda */}
            {eventItem.agenda && (
              <div className="mt-12 border-t border-[#cfded1] pt-8">
                <h3 className="text-[28px] font-semibold text-[#1b3629] leading-[130%] mb-8">Event Agenda</h3>

                {/* Objectives */}
                {eventItem.agenda.objectives && (
                  <div className="mb-10">
                    <h4 className="text-[20px] font-semibold text-[#1b3629] leading-[130%] mb-6 flex items-center gap-2">
                      <Target className="w-5 h-5 text-[#3dac5c]" />
                      Event Objectives
                    </h4>
                    <ul className="space-y-4">
                      {eventItem.agenda.objectives.map((objective, index) => (
                        <li key={index} className="flex items-start gap-3 text-[16px] text-[#333] leading-[170%]">
                          <span className="w-7 h-7 bg-[#3dac5c]/10 text-[#3dac5c] rounded-full flex items-center justify-center text-[14px] font-semibold flex-shrink-0 mt-1">
                            {index + 1}
                          </span>
                          {objective}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Speakers */}
                {eventItem.agenda.speakers && (
                  <div className="mb-10">
                    <h4 className="text-[20px] font-semibold text-[#1b3629] leading-[130%] mb-6 flex items-center gap-2">
                      <Users className="w-5 h-5 text-[#3dac5c]" />
                      Speakers & Participants
                    </h4>
                    <div className="grid md:grid-cols-2 gap-6">
                      {eventItem.agenda.speakers.openingRemarks && (
                        <div className="bg-white p-6 rounded-xl border border-[#cfded1]">
                          <h5 className="font-semibold text-[18px] text-[#1b3629] mb-4">Opening Remarks</h5>
                          <ul className="space-y-3">
                            {eventItem.agenda.speakers.openingRemarks.map((speaker, index) => (
                              <li key={index} className="text-[16px] text-[#333] flex items-center gap-2">
                                <span className="w-2 h-2 bg-[#3dac5c] rounded-full"></span>
                                {speaker}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {eventItem.agenda.speakers.panelSpeakers && (
                        <div className="bg-white p-6 rounded-xl border border-[#cfded1]">
                          <h5 className="font-semibold text-[18px] text-[#1b3629] mb-4">Panel Speakers</h5>
                          <ul className="space-y-3">
                            {eventItem.agenda.speakers.panelSpeakers.map((speaker, index) => (
                              <li key={index} className="text-[16px] text-[#333] flex items-center gap-2">
                                <span className="w-2 h-2 bg-[#2a5942] rounded-full"></span>
                                {speaker}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>

                    {eventItem.agenda.speakers.moderator && (
                      <div className="mt-6 bg-[#3dac5c]/10 p-5 rounded-xl border border-[#3dac5c]/20">
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-[16px] text-[#1b3629]">Moderator:</span>
                          <span className="text-[16px] text-[#333]">{eventItem.agenda.speakers.moderator}</span>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}

            {/* External Links */}
            {eventItem.links && eventItem.links.length > 0 && (
              <div className="mt-12 border-t border-[#cfded1] pt-8">
                <h3 className="text-[24px] font-semibold text-[#1b3629] leading-[130%] mb-6">
                  Related Links
                </h3>
                <div className="space-y-4">
                  {eventItem.links.map((link, index) => (
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
                to="/events"
                className="inline-flex items-center gap-2 text-[16px] text-[#2a5942] font-semibold hover:text-[#3dac5c] transition-colors"
              >
                <ArrowLeft size={20} />
                Back to all events
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default EventItem