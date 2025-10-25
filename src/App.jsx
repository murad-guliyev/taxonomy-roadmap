import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import HomePage from './components/HomePage'
import AboutInitiative from './components/AboutInitiative'
import Partners from './components/Partners'
import News from './components/News'
import NewsItem from './components/NewsItem'
import Events from './components/Events'
import EventItem from './components/EventItem'
import Publications from './components/Publications'
import RoadmapPublications from './components/RoadmapPublications'
import Principles from './components/Principles'
import OtherResources from './components/OtherResources'
import Contact from './components/Contact'
import FocusAreas from './components/FocusAreas'
import FocusAreasAndTools from './components/FocusAreasAndTools'
import './App.css'

// Pillar components
const Pillar1 = () => (
  <div className="w-full bg-[#fafafa]">
    {/* Hero Section */}
    <section className="relative h-[300px] sm:h-[350px] lg:h-[400px] w-full overflow-hidden bg-[#2a5942] pt-40 sm:pt-52 lg:pt-64">
      {/* Decorative Circles */}
      <div className="absolute top-[150px] right-[-200px] w-[777px] h-[803px] rounded-full opacity-10 bg-gradient-to-br from-white/5 to-transparent blur-sm" />
      <div className="absolute top-[40px] right-[-100px] w-[724px] h-[747px] rounded-full opacity-10 bg-gradient-to-br from-white/5 to-transparent blur-sm" />

      <div className="relative z-10 max-w-[1170px] mx-auto px-4 sm:px-6 pb-12 sm:pb-16 lg:pb-20">
        <h1 className="text-[24px] sm:text-[28px] lg:text-[32px] font-semibold text-white leading-[120%] mb-4">
          Pillar 1: Common Core Activities
        </h1>
        <p className="text-[14px] sm:text-[16px] text-[#f3f3f3] leading-[153%] max-w-[700px]">
          Identifying a common core set of taxonomy economic activities, particularly in EMDEs
        </p>
      </div>
    </section>

    {/* Content Section */}
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="max-w-[1170px] mx-auto px-4 sm:px-6">
        <div className="mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-[24px] sm:text-[28px] lg:text-[32px] font-semibold text-[#1b3629] leading-[120%] mb-4 sm:mb-6">
            Overview
          </h2>
          <div className="space-y-4 sm:space-y-6">
            <p className="text-[14px] sm:text-[16px] text-[#333] leading-[170%]">
              Identifying essential sectors and activities for Emerging Markets and Developing Economies (EMDEs)
              with a shared classification system. This element aims to identify a core set of economic sectors
              and economic activities, particularly for EMDEs, which are critical for advancing decarbonization.
            </p>
            <p className="text-[14px] sm:text-[16px] text-[#333] leading-[170%]">
              Existing comparison exercises, such as the IPSF's Common Ground Taxonomy, will inform this exercise.
              Interoperability for these core sectors and activities can be explored through:
            </p>
            <ul className="list-disc list-inside text-[#333] text-[14px] sm:text-[16px] leading-[170%] space-y-2 pl-4">
              <li>Use of a shared classification system, such as the International Standard Industrial Classification (ISIC), to serve as a reference for identifying relevant economic activities</li>
              <li>A shared approach for defining categories, activities, metrics, and technical criteria</li>
              <li>Recommendations for possible tiered approaches to treat common activities differently based on market maturity and national pathways, while maintaining science-based ambition in meeting Paris Agreement goals</li>
            </ul>
          </div>
        </div>

        <div className="border border-[#cfded1] rounded-2xl p-4 sm:p-6 lg:p-8">
          <h2 className="text-[18px] sm:text-[20px] font-semibold text-[#1b3629] leading-[130%] mb-4 sm:mb-6">Key Technical Approaches</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-10">
            <div className="flex flex-col items-center text-center">
              <div className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] rounded-full border border-[#d9d9d9] flex items-center justify-center mb-4 sm:mb-6">
                <div className="text-[#2a5942] text-[20px] sm:text-[24px]">🔄</div>
              </div>
              <h3 className="text-[16px] sm:text-[18px] font-semibold text-[#2a5942] leading-[130%] mb-3 sm:mb-4">Shared Classification</h3>
              <p className="text-[14px] sm:text-[16px] text-[#333] leading-[153%]">Using International Standard Industrial Classification (ISIC) as a reference framework.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] rounded-full border border-[#d9d9d9] flex items-center justify-center mb-4 sm:mb-6">
                <div className="text-[#2a5942] text-[20px] sm:text-[24px]">📊</div>
              </div>
              <h3 className="text-[16px] sm:text-[18px] font-semibold text-[#2a5942] leading-[130%] mb-3 sm:mb-4">Common Criteria</h3>
              <p className="text-[14px] sm:text-[16px] text-[#333] leading-[153%]">Developing shared approaches for defining categories, activities, and metrics.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] rounded-full border border-[#d9d9d9] flex items-center justify-center mb-4 sm:mb-6">
                <div className="text-[#2a5942] text-[20px] sm:text-[24px]">📈</div>
              </div>
              <h3 className="text-[16px] sm:text-[18px] font-semibold text-[#2a5942] leading-[130%] mb-3 sm:mb-4">Tiered Approaches</h3>
              <p className="text-[14px] sm:text-[16px] text-[#333] leading-[153%]">Recommendations for treating activities based on market maturity and national pathways.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
)

const Pillar2 = () => (
  <div className="w-full bg-[#fafafa]">
    {/* Hero Section */}
    <section className="relative h-[400px] w-full overflow-hidden bg-[#2a5942] pt-64">
      <div className="absolute top-[150px] right-[-200px] w-[777px] h-[803px] rounded-full opacity-10 bg-gradient-to-br from-white/5 to-transparent blur-sm" />
      <div className="absolute top-[40px] right-[-100px] w-[724px] h-[747px] rounded-full opacity-10 bg-gradient-to-br from-white/5 to-transparent blur-sm" />

      <div className="relative z-10 max-w-[1170px] mx-auto px-4 pb-20">
        <h1 className="text-[32px] font-semibold text-white leading-[120%] mb-4">
          Pillar 2: Technical Approaches
        </h1>
        <p className="text-[16px] text-[#f3f3f3] leading-[153%] max-w-[700px]">
          Creating standardized approaches for alignment with taxonomy principles
        </p>
      </div>
    </section>

    {/* Content Section */}
    <section className="py-20">
      <div className="max-w-[1170px] mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-[32px] font-semibold text-[#1b3629] leading-[120%] mb-6">
            Overview
          </h2>
          <div className="space-y-6">
            <p className="text-[16px] text-[#333] leading-[170%]">
              Developing common technical approaches for alignment with taxonomy principles and essential criteria,
              including Do No Significant Harm (DNSH), Minimum Social Safeguards (MSS) and ESG guidelines.
            </p>
            <p className="text-[16px] text-[#333] leading-[170%]">
              This pillar focuses on creating standardized methodologies that promote interoperability while
              incorporating essential sustainability criteria and safeguards across different jurisdictions.
            </p>
          </div>
        </div>

        <div className="border border-[#cfded1] rounded-2xl p-8">
          <h2 className="text-[20px] font-semibold text-[#1b3629] leading-[130%] mb-6">Key Components</h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="flex flex-col items-center text-center">
              <div className="w-[100px] h-[100px] rounded-full border border-[#d9d9d9] flex items-center justify-center mb-6">
                <div className="text-[#2a5942] text-[24px]">🛡️</div>
              </div>
              <h3 className="text-[18px] font-semibold text-[#2a5942] leading-[130%] mb-4">Do No Significant Harm (DNSH)</h3>
              <ul className="text-[16px] text-[#333] leading-[153%] space-y-2 list-disc list-inside text-left">
                <li>Environmental safeguard principles</li>
                <li>Impact assessment methodologies</li>
                <li>Threshold setting approaches</li>
                <li>Monitoring and verification systems</li>
              </ul>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-[100px] h-[100px] rounded-full border border-[#d9d9d9] flex items-center justify-center mb-6">
                <div className="text-[#2a5942] text-[24px]">🤝</div>
              </div>
              <h3 className="text-[18px] font-semibold text-[#2a5942] leading-[130%] mb-4">Minimum Social Safeguards (MSS)</h3>
              <ul className="text-[16px] text-[#333] leading-[153%] space-y-2 list-disc list-inside text-left">
                <li>Social impact assessment</li>
                <li>Stakeholder engagement requirements</li>
                <li>Labor rights and standards</li>
                <li>Community consultation processes</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
)

const Pillar3 = () => (
  <div className="w-full bg-[#fafafa]">
    {/* Hero Section */}
    <section className="relative h-[400px] w-full overflow-hidden bg-[#2a5942] pt-64">
      <div className="absolute top-[150px] right-[-200px] w-[777px] h-[803px] rounded-full opacity-10 bg-gradient-to-br from-white/5 to-transparent blur-sm" />
      <div className="absolute top-[40px] right-[-100px] w-[724px] h-[747px] rounded-full opacity-10 bg-gradient-to-br from-white/5 to-transparent blur-sm" />

      <div className="relative z-10 max-w-[1170px] mx-auto px-4 pb-20">
        <h1 className="text-[32px] font-semibold text-white leading-[120%] mb-4">
          Pillar 3: Transition Finance Approaches
        </h1>
        <p className="text-[16px] text-[#f3f3f3] leading-[153%] max-w-[700px]">
          Formulating common approaches to finance the transition through taxonomies
        </p>
      </div>
    </section>

    {/* Content Section */}
    <section className="py-20">
      <div className="max-w-[1170px] mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-[32px] font-semibold text-[#1b3629] leading-[120%] mb-6">
            Overview
          </h2>
          <div className="space-y-6">
            <p className="text-[16px] text-[#333] leading-[170%]">
              Formulating common approaches to finance the transition through taxonomies. This pillar develops
              frameworks to support transition finance activities that enable decarbonization across various
              economic sectors.
            </p>
            <p className="text-[16px] text-[#333] leading-[170%]">
              Transition finance is critical for supporting activities that may not yet be fully sustainable
              but are on a credible pathway toward achieving sustainability goals.
            </p>
          </div>
        </div>

        <div className="border border-[#cfded1] rounded-2xl p-8">
          <h2 className="text-[20px] font-semibold text-[#1b3629] leading-[130%] mb-6">Transition Finance Framework</h2>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="flex flex-col items-center text-center">
              <div className="w-[100px] h-[100px] rounded-full border border-[#d9d9d9] flex items-center justify-center mb-6">
                <div className="text-[#2a5942] text-[24px]">🎯</div>
              </div>
              <h3 className="text-[18px] font-semibold text-[#2a5942] leading-[130%] mb-4">Pathway Definition</h3>
              <p className="text-[16px] text-[#333] leading-[153%]">Clear criteria for credible transition pathways aligned with climate goals.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-[100px] h-[100px] rounded-full border border-[#d9d9d9] flex items-center justify-center mb-6">
                <div className="text-[#2a5942] text-[24px]">⏱️</div>
              </div>
              <h3 className="text-[18px] font-semibold text-[#2a5942] leading-[130%] mb-4">Timeline Requirements</h3>
              <p className="text-[16px] text-[#333] leading-[153%]">Time-bound commitments and milestones for achieving transition goals.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-[100px] h-[100px] rounded-full border border-[#d9d9d9] flex items-center justify-center mb-6">
                <div className="text-[#2a5942] text-[24px]">📊</div>
              </div>
              <h3 className="text-[18px] font-semibold text-[#2a5942] leading-[130%] mb-4">Monitoring & Reporting</h3>
              <p className="text-[16px] text-[#333] leading-[153%]">Regular progress tracking and transparent reporting mechanisms.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
)

const AdditionalAreas = () => (
  <div className="w-full bg-[#fafafa]">
    {/* Hero Section */}
    <section className="relative h-[400px] w-full overflow-hidden bg-[#2a5942] pt-64">
      <div className="absolute top-[150px] right-[-200px] w-[777px] h-[803px] rounded-full opacity-10 bg-gradient-to-br from-white/5 to-transparent blur-sm" />
      <div className="absolute top-[40px] right-[-100px] w-[724px] h-[747px] rounded-full opacity-10 bg-gradient-to-br from-white/5 to-transparent blur-sm" />

      <div className="relative z-10 max-w-[1170px] mx-auto px-4 pb-20">
        <h1 className="text-[32px] font-semibold text-white leading-[120%] mb-4">
          Additional Areas for Greater Alignment
        </h1>
        <p className="text-[16px] text-[#f3f3f3] leading-[153%] max-w-[700px]">
          Areas for even greater alignment that may also be explored
        </p>
      </div>
    </section>

    {/* Content Section */}
    <section className="py-20">
      <div className="max-w-[1170px] mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-[32px] font-semibold text-[#1b3629] leading-[120%] mb-6">
            Overview
          </h2>
          <p className="text-[16px] text-[#333] leading-[170%]">
            Areas for even greater alignment that may also be explored to enhance the effectiveness
            and inclusivity of sustainable finance taxonomies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="border border-[#cfded1] rounded-2xl p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-[80px] h-[80px] rounded-full border border-[#d9d9d9] flex items-center justify-center">
                <div className="text-[#2a5942] text-[24px]">👥</div>
              </div>
              <h3 className="text-[20px] font-semibold text-[#2a5942] leading-[130%]">Inclusivity in Alignment Approaches</h3>
            </div>
            <p className="text-[16px] text-[#333] leading-[153%] mb-4">
              Ensuring small and medium-sized enterprises (SMEs), women and vulnerable groups are
              considered in taxonomy design and implementation.
            </p>
            <ul className="list-disc list-inside text-[16px] text-[#333] leading-[153%] space-y-2 pl-4">
              <li>SME-specific criteria and thresholds</li>
              <li>Gender-responsive taxonomy elements</li>
              <li>Vulnerable group protection measures</li>
              <li>Capacity building and support mechanisms</li>
            </ul>
          </div>

          <div className="border border-[#cfded1] rounded-2xl p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-[80px] h-[80px] rounded-full border border-[#d9d9d9] flex items-center justify-center">
                <div className="text-[#2a5942] text-[24px]">✓</div>
              </div>
              <h3 className="text-[20px] font-semibold text-[#2a5942] leading-[130%]">Verification and Assurance Mechanisms</h3>
            </div>
            <p className="text-[16px] text-[#333] leading-[153%] mb-4">
              Developing robust verification and assurance mechanisms for taxonomy alignment while
              minimizing burden on reporting entities.
            </p>
            <ul className="list-disc list-inside text-[16px] text-[#333] leading-[153%] space-y-2 pl-4">
              <li>Standardized verification protocols</li>
              <li>Third-party assurance frameworks</li>
              <li>Digital verification tools</li>
              <li>Cost-effective compliance mechanisms</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
)

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App relative">
        <Navigation />
        <main className="relative">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about-initiative" element={<AboutInitiative />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/focus-areas" element={<FocusAreasAndTools />} />
            <Route path="/pillar-1" element={<FocusAreas />} />
            <Route path="/pillar-2" element={<FocusAreas />} />
            <Route path="/pillar-3" element={<FocusAreas />} />
            <Route path="/additional-areas" element={<FocusAreas />} />
            <Route path="/publications" element={<RoadmapPublications />} />
            <Route path="/interoperability-principles" element={<Principles />} />
            <Route path="/other-resources" element={<OtherResources />} />
            <Route path="/news" element={<News />} />
            <Route path="/news/:id" element={<NewsItem />} />
            <Route path="/events" element={<Events />} />
            <Route path="/events/:id" element={<EventItem />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App