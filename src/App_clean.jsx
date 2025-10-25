import { useState } from 'react'
import Navigation from './components/Navigation'
import HomePage from './components/HomePage'
import AboutInitiative from './components/AboutInitiative'
import Partners from './components/Partners'
import News from './components/News'
import Events from './components/Events'
import Publications from './components/Publications'
import Principles from './components/Principles'
import OtherResources from './components/OtherResources'
import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage setCurrentPage={setCurrentPage} />
      case 'about-initiative':
        return <AboutInitiative setCurrentPage={setCurrentPage} />
      case 'partners':
        return <Partners setCurrentPage={setCurrentPage} />
      case 'publications':
        return <Publications setCurrentPage={setCurrentPage} />
      case 'interoperability-principles':
        return <Principles setCurrentPage={setCurrentPage} />
      case 'other-resources':
        return <OtherResources setCurrentPage={setCurrentPage} />
      case 'news':
        return <News setCurrentPage={setCurrentPage} />
      case 'events':
        return <Events setCurrentPage={setCurrentPage} />
      case 'pillar-1':
        return <div className="min-h-screen bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Pillar 1: Defining Core Taxonomy Activities</h1>
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Overview</h2>
                <p className="text-lg text-gray-700 mb-6">
                  Identifying essential sectors and activities for Emerging Markets and Developing Economies (EMDEs)
                  with a shared classification system. This element aims to identify a core set of economic sectors
                  and economic activities, particularly for EMDEs, which are critical for advancing decarbonization.
                </p>
                <p className="text-gray-700 mb-6">
                  Existing comparison exercises, such as the IPSF's Common Ground Taxonomy, will inform this exercise.
                  Interoperability for these core sectors and activities can be explored through:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                  <li>Use of a shared classification system, such as the International Standard Industrial Classification (ISIC), to serve as a reference for identifying relevant economic activities</li>
                  <li>A shared approach for defining categories, activities, metrics, and technical criteria</li>
                  <li>Recommendations for possible tiered approaches to treat common activities differently based on market maturity and national pathways, while maintaining science-based ambition in meeting Paris Agreement goals</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">Key Technical Approaches</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-3">Shared Classification</h3>
                    <p className="text-gray-700 text-sm">International Standard Industrial Classification (ISIC) as reference framework</p>
                  </div>
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-3">Common Definitions</h3>
                    <p className="text-gray-700 text-sm">Shared approach for categories, activities, and technical criteria</p>
                  </div>
                  <div className="bg-purple-50 p-6 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-3">Tiered Approaches</h3>
                    <p className="text-gray-700 text-sm">Context-specific treatments based on market maturity</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      case 'pillar-2':
        return <div className="min-h-screen bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Pillar 2: Technical Approaches for Consistent Alignment</h1>
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Overview</h2>
                <p className="text-lg text-gray-700 mb-6">
                  Creating standardized alignment approaches for taxonomy principles, including environmental,
                  social, and governance (ESG) guidelines. Guided by the G20 Principles for Alignment Approaches,
                  this element seeks to develop common technical approaches.
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">ESG Integration</h3>
                    <ul className="text-gray-700 space-y-2">
                      <li>• Environmental, social, and governance guidelines</li>
                      <li>• Jurisdictional sustainability regulations</li>
                      <li>• Global good practice frameworks</li>
                    </ul>
                  </div>

                  <div className="bg-green-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Principles</h3>
                    <ul className="text-gray-700 space-y-2">
                      <li>• Do No Significant Harm (DNSH)</li>
                      <li>• Minimum Social Safeguards (MSS)</li>
                      <li>• IFC Performance Standards alignment</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      case 'pillar-3':
        return <div className="min-h-screen bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Pillar 3: Supporting Transition Finance</h1>
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Overview</h2>
                <p className="text-lg text-gray-700 mb-6">
                  Setting guidelines for transition activities that enable decarbonization and sustainability
                  in high-emission sectors. The Roadmap seeks to operationalize Pillar 1 of the G20 Transition
                  Finance Framework.
                </p>

                <div className="bg-yellow-50 p-6 rounded-lg mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Transition Approach</h3>
                  <p className="text-gray-700 mb-4">
                    Setting technical directions that define what qualifies as a transparent, credible,
                    comparable and accountable way for activities and companies to decarbonise and improve sustainability.
                  </p>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Companies can use taxonomy criteria to set targets as part of transition and investment plans</li>
                    <li>• "Traffic light" system similar to ASEAN Taxonomy Board approach</li>
                    <li>• Clear distinction between aligned and transforming sectors</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      case 'additional-areas':
        return <div className="min-h-screen bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Additional Alignment Areas</h1>
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">Focus Areas for Greater Alignment</h2>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-teal-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Inclusivity in Alignment Approaches</h3>
                    <p className="text-gray-700 mb-4">
                      Ensuring small and medium-sized enterprises (SMEs), women, and vulnerable groups
                      are included in taxonomy frameworks.
                    </p>
                    <ul className="text-gray-700 space-y-2">
                      <li>• Simplified rules for SMEs</li>
                      <li>• Reduced reporting requirements</li>
                      <li>• Capacity building support</li>
                      <li>• Gender-inclusive approaches</li>
                    </ul>
                  </div>

                  <div className="bg-purple-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Verification and Assurance Mechanism</h3>
                    <p className="text-gray-700 mb-4">
                      Research and development of verification approaches that promote credibility
                      while minimizing costs and burden.
                    </p>
                    <ul className="text-gray-700 space-y-2">
                      <li>• Menu of verification options</li>
                      <li>• Cost-effective approaches</li>
                      <li>• Quality assurance frameworks</li>
                      <li>• Regional adaptation flexibility</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      case 'focus-areas':
        return <div className="min-h-screen bg-gray-50">
          {/* Header Section */}
          <section className="bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Focus Areas & Tools
                </h1>
                <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                  Three key pillars and additional alignment areas for advancing taxonomy interoperability
                </p>
              </div>
            </div>
          </section>

          {/* Three Pillars */}
          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-3 gap-8 mb-16">
                <div
                  className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                  onClick={() => setCurrentPage('pillar-1')}
                >
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-blue-600 text-2xl font-bold">1</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Defining Core Taxonomy Activities</h3>
                    <p className="text-gray-600">
                      Identifying essential sectors and activities for Emerging Markets and Developing
                      Economies (EMDEs) with a shared classification system.
                    </p>
                  </div>
                  <div className="text-center">
                    <button className="text-primary font-medium inline-flex items-center gap-1 hover:gap-2 transition-all">
                      Learn More
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>

                <div
                  className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                  onClick={() => setCurrentPage('pillar-2')}
                >
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-green-600 text-2xl font-bold">2</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Technical Approaches for Consistent Alignment</h3>
                    <p className="text-gray-600">
                      Creating standardized alignment approaches for taxonomy principles, including
                      environmental, social, and governance (ESG) guidelines.
                    </p>
                  </div>
                  <div className="text-center">
                    <button className="text-primary font-medium inline-flex items-center gap-1 hover:gap-2 transition-all">
                      Learn More
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>

                <div
                  className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                  onClick={() => setCurrentPage('pillar-3')}
                >
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-purple-600 text-2xl font-bold">3</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Supporting Transition Finance</h3>
                    <p className="text-gray-600">
                      Setting guidelines for transition activities that enable decarbonization and
                      sustainability in high-emission sectors.
                    </p>
                  </div>
                  <div className="text-center">
                    <button className="text-primary font-medium inline-flex items-center gap-1 hover:gap-2 transition-all">
                      Learn More
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              {/* Additional Areas */}
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Additional Alignment Areas</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Complementary areas for even greater alignment and effectiveness
                </p>
              </div>

              <div
                className="bg-gradient-to-r from-teal-50 to-purple-50 border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                onClick={() => setCurrentPage('additional-areas')}
              >
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Inclusivity in Alignment Approaches</h3>
                    <p className="text-gray-600">
                      Ensuring small and medium-sized enterprises (SMEs), women, and vulnerable groups
                      are included in taxonomy frameworks.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Verification and Assurance Mechanism</h3>
                    <p className="text-gray-600">
                      Research and development of verification approaches that promote credibility
                      while minimizing costs and burden.
                    </p>
                  </div>
                </div>
                <div className="text-center mt-6">
                  <button className="text-primary font-medium inline-flex items-center gap-1 hover:gap-2 transition-all">
                    Explore Additional Areas
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl font-bold mb-6">
                Ready to Explore the Principles?
              </h2>
              <p className="text-xl mb-8 max-w-3xl mx-auto">
                Discover the 10 foundational principles for taxonomy interoperability that guide
                the implementation of these focus areas.
              </p>
              <button
                onClick={() => setCurrentPage('interoperability-principles')}
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                View Principles
              </button>
            </div>
          </section>
        </div>
      case 'contact':
        return <div className="min-h-screen bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Contact Us</h1>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <p className="text-lg text-gray-700 mb-6">
                For more information about the Taxonomy Roadmap Initiative or to get involved,
                please visit our contact page.
              </p>
              <a
                href="https://capacity-building.org/contact-us"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors inline-flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Visit Contact Page
              </a>
            </div>
          </div>
        </div>
      default:
        return <HomePage setCurrentPage={setCurrentPage} />
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main>
        {renderPage()}
      </main>
    </div>
  )
}

export default App