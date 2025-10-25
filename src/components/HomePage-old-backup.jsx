import { useNavigate } from 'react-router-dom'
import { ArrowRight, Globe, Users, Target, Calendar, ExternalLink, FileText, Download } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'
import { useRef } from 'react'
import initiativeLogo from '../assets/1.1_Initiative_Logo.svg'
import cop29Image1 from '../assets/Cop29_1.png'
import cop29Image2 from '../assets/Cop29_2.png'
import cop29Image3 from '../assets/Cop29_3.png'
import cop29Image4 from '../assets/Cop29_4.png'
import cop29Image5 from '../assets/Cop29_5.png'
import genevaRoundtablePhoto from '../assets/1.2_Geneva_Roundtable_Photo.jpg'

const HomePage = () => {
  const navigate = useNavigate()
  const plugin = useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )

  // COP29 Event Photos for Carousel
  const cop29EventImages = [
    {
      id: 1,
      image: cop29Image1,
      title: 'Keynote Speech - Governor Taleh Kazimov',
      description: 'Governor of Central Bank of Azerbaijan delivering keynote speech',
      alt: 'Taleh Kazimov keynote speech at COP29'
    },
    {
      id: 2,
      image: cop29Image2,
      title: 'Keynote Speech - Managing Director Makhtar Diop',
      description: 'IFC Managing Director addressing the audience',
      alt: 'Makhtar Diop keynote speech at COP29'
    },
    {
      id: 3,
      image: cop29Image3,
      title: 'Panel Speaker',
      description: 'Expert speaker presenting at the COP29 event',
      alt: 'Speaker presentation at COP29'
    },
    {
      id: 4,
      image: cop29Image4,
      title: 'Panel Discussion',
      description: 'High-level panel discussion on sustainable finance taxonomies',
      alt: 'Panel discussion at COP29'
    },
    {
      id: 5,
      image: cop29Image5,
      title: 'Panel Speaker Presentation',
      description: 'International expert sharing insights on taxonomy roadmap',
      alt: 'Speaker at COP29 panel'
    }
  ]

  return (
    <div className="min-h-screen">

      {/* Roadmap Launch News + Event Photos */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4">Roadmap Launch News</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-heading font-bold text-gray-900 mb-6">
                Historic Launch at COP29 Baku
              </h3>
              <p className="text-lg font-serif text-gray-700 mb-6">
                <strong>Baku, November 14, 2024:</strong> The Central Bank of the Republic of Azerbaijan, in partnership with
                the International Finance Corporation (IFC) through its Sustainable Banking and Finance Network (SBFN),
                the International Platform on Sustainable Finance (IPSF), the United Nations Development Programme (UNDP),
                and with the support of the United Nations Environment Programme Finance Initiative (UNEP FI) has launched
                the "Roadmap for Advancing Interoperability and Comparability of Sustainable Finance Taxonomies."
              </p>
              <p className="text-gray-700 mb-8">
                The Roadmap was officially unveiled during COP29's Finance, Investment, and Trade Day at a high level event
                titled "Advancing Sustainable Finance across the Globe: Roadmap towards Interoperability and Comparability
                of Sustainable Finance Taxonomies."
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://www.cbar.az/press-release-4877/central-bank-of-azerbaijan-and-ifc-hosted-an-event-during-cop29s-finance-investment-and-trade-day"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 font-semibold inline-flex items-center gap-2 underline"
                >
                  Read Press Release
                  <ExternalLink className="w-4 h-4" />
                </a>
                <Button
                  asChild
                  className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
                >
                  <a
                    href="https://uploads.cbar.az/assets/7d847df68cb1050116b027c77.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2"
                  >
                    <Download className="w-4 h-4" />
                    View Document
                  </a>
                </Button>
              </div>
            </div>
            <div>
              {/* COP29 Event Photos Carousel */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden p-8">
                <Carousel
                  plugins={[plugin.current]}
                  className="w-full"
                  onMouseEnter={plugin.current.stop}
                  onMouseLeave={plugin.current.reset}
                >
                  <CarouselContent>
                    {cop29EventImages.map((item) => (
                      <CarouselItem key={item.id}>
                        <div className="relative rounded-lg overflow-hidden">
                          <img
                            src={item.image}
                            alt={item.alt}
                            className="w-full h-96 object-cover"
                          />
                          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                            <h3 className="text-xl font-heading font-bold text-white mb-2">
                              {item.title}
                            </h3>
                            <p className="text-white/90 font-serif text-sm">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-2" />
                  <CarouselNext className="right-2" />
                </Carousel>
                <div className="mt-6 text-center">
                  <p className="text-gray-900 font-heading font-medium text-lg">COP29 Launch Event Gallery</p>
                  <p className="text-sm font-serif text-gray-600 mt-1">
                    Historic launch at COP29 Baku, Azerbaijan - November 14, 2024
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Geneva Post-event Advisory + Event Photos */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4">Geneva Post-event Advisory</h2>
            <p className="text-lg font-serif text-gray-600">Global Partners Advance Sustainable Finance Taxonomy Interoperability</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start mb-8">
            <div>
              {/* Geneva Roundtable Photo */}
              <div className="rounded-lg h-96 overflow-hidden shadow-lg">
                <img
                  src={genevaRoundtablePhoto}
                  alt="Geneva Roundtable - Global partners meeting"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Leading global institutions and initiatives convened a roundtable in Geneva to discuss implementation
                of the Roadmap for Advancing Interoperability and Comparability of Sustainable Finance Taxonomies
                (Taxonomy Roadmap). Launched during COP29 in Azerbaijan last November, the initiative is a joint effort
                by the Central Bank of Azerbaijan (CBAR), International Finance Corporation (IFC), Sustainable Banking
                and Finance Network (SBFN), the United Nations Development Programme (UNDP), and the International
                Platform on Sustainable Finance (IPSF).
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Hosted by UNDP, the roundtable marked a key milestone in the implementation of the Roadmap, bringing
                together key organizations and initiatives working on sustainable finance taxonomies.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-gray-700 leading-relaxed">
              In addition to the founding partners, United Nations Environment Programme Finance Initiative (UNEP FI),
              German Agency for International Cooperation (GIZ), Climate Bonds Initiative (CBI), the EU Sustainable
              Finance Advisory Hub (for low and middle income countries), UN-supported Principles for Responsible
              Investment (UN PRI), the World Bank (WB) and the International Monetary Fund (IMF) joined as partners.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Reflecting on COP29, the roundtable participants emphasized the growing importance of interoperability
              in the global sustainable finance ecosystem. It was agreed that the Taxonomy Roadmap will serve as a
              key global platform for coordination, collaboration and alignment of taxonomy initiatives, helping
              organizations better align their efforts, reduce redundancies, and establish stronger linkages between
              their activities/efforts and the Roadmap's key pillars.
            </p>
            <p className="text-gray-700 mb-8 leading-relaxed">
              Partners also stressed the importance of connecting these efforts with global policy forums, including
              the G20 Sustainable Finance Working Group, the UN's 4th International Conference on Financing for
              Development (FfD4), and COP30 & COP31.
            </p>
            <a
              href="https://www.sbfnetwork.org/post-event-advisory-global-partners-advance-sustainable-finance-taxonomy-interoperability"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors inline-flex items-center gap-2"
            >
              Read Full Advisory
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* COP30 Event Programme */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              COP30 Event Programme
            </h2>
            <p className="text-xl text-gray-600">COP 30 Global Climate Action Agenda Programme</p>
          </div>

          <div className="space-y-8">
            {/* Background/Concept */}
            <div className="bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Background/Concept</h3>
              <p className="text-gray-700 mb-4">
                This event builds on the momentum of the Sustainable Finance Taxonomies event held in Baku, Azerbaijan
                during COP29, where the "Roadmap for Advancing Interoperability and Comparability of Sustainable Finance
                Taxonomies" (Taxonomy Roadmap Initiative) was launched by the Central Bank of Azerbaijan (CBAR),
                International Finance Corporation (IFC), Sustainable Banking and Finance Network (SBFN), the United
                Nations Development Programme (UNDP), and the International Platform on Sustainable Finance (IPSF).
              </p>
              <p className="text-gray-700 mb-4">
                The initiative aims to facilitate cross-border investment flows into sustainable activities, in line
                with Article 2.1(c) of the Paris Agreement. The focus of this event is to showcase progress on the
                Taxonomy Roadmap, driven by joint collaboration, coordination and communication.
              </p>
              <p className="text-gray-700">
                Since the launch, the initiative has expanded its partnership from the founding partners to 13 global
                and public partners. Notably, the Brazil Ministry of Finance, representing the Presidency of COP30,
                joined the initiative to further advance the implementation of the initiative along the Road of Baku to Belém.
              </p>
            </div>

            {/* Key Elements */}
            {/* <div className="bg-blue-50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Key elements of the Taxonomy Roadmap to facilitate interoperability include:</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="font-bold text-blue-600 mr-3 mt-1">i.</span>
                  <p className="text-gray-700">Identifying a common core set of taxonomy economic activities, particularly in EMDEs.</p>
                </div>
                <div className="flex items-start">
                  <span className="font-bold text-blue-600 mr-3 mt-1">ii.</span>
                  <p className="text-gray-700">Developing common technical approaches for alignment with taxonomy principles and essential criteria, including Do No Significant Harm (DNSH), Minimum Social Safeguards (MSS) and ESG guidelines.</p>
                </div>
                <div className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                  <p className="text-gray-700">Formulating common approaches to finance the transition through taxonomies.</p>
                </div>
              </div>
            </div> */}

            {/* Additional Areas */}
            {/* <div className="bg-green-50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Additional areas for greater alignment:</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                  <p className="text-gray-700">Inclusivity in alignment approaches, ensuring small and medium-sized enterprises (SMEs), women and vulnerable groups.</p>
                </div>
                <div className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                  <p className="text-gray-700">Verification and assurance mechanism.</p>
                </div>
              </div>
            </div> */}

          </div>
        </div>
      </section>

      {/* Roadmap Focus Areas */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Roadmap Focus Areas</h2>
            <p className="text-lg text-gray-600 mb-6">
              The initiative aims to facilitate cross-border investment flows into sustainable activities, in line with Article 2.1 (c) of the Paris Agreement.
              Since the launch, the initiative has expanded its partnership from the founding partners to 13 global and public partners.
              Notably, the Brazil Ministry of Finance, representing the Presidency of COP30, joined the initiative to further advance the implementation along the Road of Baku to Belém.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Key elements of the Taxonomy Roadmap to facilitate interoperability include:</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <span className="font-bold text-primary text-lg mr-4 mt-1">i.</span>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Identifying a common core set of taxonomy economic activities, particularly in EMDEs.</h4>
                  <p className="text-gray-700">Focus on essential economic sectors and activities critical for Emerging Markets and Developing Economies to advance decarbonization efforts.</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="font-bold text-secondary text-lg mr-4 mt-1">ii.</span>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Developing common technical approaches for alignment with taxonomy principles and essential criteria, including Do No Significant Harm (DNSH), Minimum Social Safeguards (MSS) and ESG guidelines.</h4>
                  <p className="text-gray-700">Creating standardized approaches that promote interoperability while incorporating essential sustainability criteria and safeguards.</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="font-bold text-secondary text-lg mr-4 mt-1">iii.</span>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Formulating common approaches to finance the transition through taxonomies.</h4>
                  <p className="text-gray-700">Developing frameworks to support transition finance activities that enable decarbonization across various economic sectors.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Additional areas for greater alignment:</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start">
                <span className="w-3 h-3 bg-green-500 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Inclusivity in alignment approaches</h4>
                  <p className="text-gray-700 text-sm">Ensuring small and medium-sized enterprises (SMEs), women and vulnerable groups.</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="w-3 h-3 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Verification and assurance mechanism</h4>
                  <p className="text-gray-700 text-sm">Developing robust frameworks for credible verification while minimizing burden on reporting entities.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* News and Events Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest News & Events</h2>
            <p className="text-lg text-gray-600">Stay updated with the latest developments and upcoming activities</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Latest News */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start mb-6">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Latest News</h3>
                  <p className="text-gray-700">Global Partners Advance Sustainable Finance Taxonomy Interoperability</p>
                </div>
              </div>
              <div className="space-y-4 mb-6">
                <div className="bg-white/70 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 text-sm mb-1">Geneva Roundtable • January 2025</h4>
                  <p className="text-gray-700 text-sm">Leading global institutions convened to discuss implementation of the Taxonomy Roadmap...</p>
                </div>
                <div className="bg-white/70 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 text-sm mb-1">Africa Roundtable • March 2025</h4>
                  <p className="text-gray-700 text-sm">SBFN and CASI co-hosted discussions on sustainable finance taxonomy interoperability...</p>
                </div>
              </div>
              <Button
                onClick={() => navigate('/news')}
                className="w-full bg-blue-600 hover:bg-blue-700"
              >
                View All News
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>

            {/* Upcoming Events */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-lg hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start mb-6">
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Upcoming Events</h3>
                  <p className="text-gray-700">Join us at key conferences and meetings</p>
                </div>
              </div>
              <div className="space-y-4 mb-6">
                <div className="bg-white/70 p-4 rounded-lg border-l-4 border-green-500">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="bg-green-500 text-white text-xs px-2 py-1 rounded">Upcoming</span>
                    <h4 className="font-semibold text-gray-900 text-sm">COP30 Brazil • 2025</h4>
                  </div>
                  <p className="text-gray-700 text-sm mb-2">COP30 Global Climate Action Agenda Programme showcasing the initiative's progress and flagship tools.</p>
                  <p className="text-green-600 text-xs font-medium">📍 Brazil</p>
                </div>
                <div className="bg-white/70 p-4 rounded-lg opacity-75">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="bg-gray-500 text-white text-xs px-2 py-1 rounded">Completed</span>
                    <h4 className="font-semibold text-gray-900 text-sm">COP29 Launch • Nov 2024</h4>
                  </div>
                  <p className="text-gray-700 text-sm mb-2">Historic launch event in Baku, Azerbaijan.</p>
                  <p className="text-gray-600 text-xs">📍 Baku, Azerbaijan</p>
                </div>
              </div>
              <Button
                onClick={() => navigate('/events')}
                className="w-full bg-green-600 hover:bg-green-700"
              >
                View All Events
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default HomePage