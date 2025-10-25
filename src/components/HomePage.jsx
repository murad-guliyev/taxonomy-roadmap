import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ChevronDown, ChevronUp, Download, ArrowRight } from 'lucide-react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'
import './HomePage.css'
import cop30Logo from '../assets/Cop30Brazil.svg'
import genevaPhoto from '../assets/1.2_Geneva_Roundtable_Photo.jpg'
import g20Logo1 from '../assets/5_G20_Logo_1.jpg'
import g20Logo2 from '../assets/5_G20_Logo_2.jpg'
import cop29Image from '../assets/Cop29_1.png'
import cbarLogo from '../assets/2.2_Partner_Logo_CBAR.jpg'
import ifcLogo from '../assets/2.2_Partner_Logo_IFC.png'
import sbfnLogo from '../assets/2.2_Partner_Logo_SBFN.png'
import undpLogo from '../assets/2.2_Partner_Logo_UNDP.png'
import pieChartIcon from '../assets/pie-chart.svg'
import layersIcon from '../assets/layers.svg'
import barChartIcon from '../assets/bar-chart-2.svg'
import chevronDownIcon from '../assets/chevron-down.svg'
import chevronUpIcon from '../assets/chevron-up.svg'
import downloadIcon from '../assets/download.svg'
import arrowRightIcon from '../assets/arrow-right.svg'

const HomePage = () => {
  const [expandedAccordion, setExpandedAccordion] = useState(null)
  const partnerPlugin = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  )

  const toggleAccordion = (index) => {
    setExpandedAccordion(expandedAccordion === index ? null : index)
  }

  const partners = [
    {
      id: 1,
      name: 'Central Bank of the Republic of Azerbaijan (CBAR)',
      description: 'The Central Bank of the COP29 host country, leading the initiative to advance sustainable finance taxonomies.',
      logo: cbarLogo,
      alt: 'CBAR Logo'
    },
    {
      id: 2,
      name: 'International Finance Corporation (IFC)',
      description: 'World Bank Group member focused on private sector development in emerging markets.',
      logo: ifcLogo,
      alt: 'IFC Logo'
    },
    {
      id: 3,
      name: 'Sustainable Banking and Finance Network (SBFN)',
      description: 'IFC-supported network of financial sector regulators and industry associations.',
      logo: sbfnLogo,
      alt: 'SBFN Logo'
    },
    {
      id: 4,
      name: 'United Nations Development Programme (UNDP)',
      description: 'UN agency working to eradicate poverty and reduce inequalities through sustainable development.',
      logo: undpLogo,
      alt: 'UNDP Logo'
    }
  ]

  return (
    <div className="w-full bg-[#fafafa]">
      {/* Hero Section - First Screen */}
      <section className="relative h-[500px] sm:h-[600px] lg:h-[651px] w-full overflow-hidden bg-[#2a5942]">
        {/* Background Image */}
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/0710e8cda4c93164646cbb69c02ab0260611e8f6?width=3200"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          style={{ top: '-78px', height: '1067px' }}
        />

        {/* Overlay Gradient */}
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            background: 'linear-gradient(85.52deg, rgba(0, 0, 0, 0.3), rgba(32, 32, 32, 0.06))'
          }}
        />

        {/* Content */}
        <div className="relative z-10 max-w-[1170px] mx-auto px-4 sm:px-6 pt-[150px] sm:pt-[200px] lg:pt-[250px]">
          <h1 className="text-[28px] sm:text-[36px] lg:text-[44px] font-semibold !text-white leading-tight mb-6 sm:mb-8 max-w-[670px]">
            Advancing Sustainable Finance from Baku to Belém
          </h1>
          <p className="text-[14px] sm:text-[16px] text-white leading-[153%] mb-6 sm:mb-8 max-w-[700px]">
            The international initiative to enhance the interoperability and comparability of sustainable finance taxonomies was launched at COP29 in Baku. Its goal is to support cross-border sustainable investments in line with Article 2.1(c) of the Paris Agreement.
          </p>
          <Link
            to="/about-initiative"
            className="inline-flex items-center gap-2 px-4 py-3 bg-[#3dac5c] text-white font-semibold text-sm sm:text-base rounded-lg hover:bg-[#3dac5c]/90 transition-colors w-[180px] sm:w-[200px] h-[50px] sm:h-[55px]"
          >
            Learn more
          </Link>
        </div>
      </section>

      {/* Key Elements Section */}
      <section className="py-[60px] sm:py-[90px] lg:py-[120px] px-4 sm:px-6">
        <div className="max-w-[1170px] mx-auto">
          <h2 className="font-semibold text-foreground leading-[120%] mb-8 lg:mb-10">
            Key elements of the Taxonomy Roadmap
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
            {/* Item 1 */}
            <div className="flex flex-col  gap-6 lg:gap-10">
              <div className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] rounded-full border border-[#d9d9d9] flex items-center justify-center">
                <img src={pieChartIcon} alt="" className="w-10 h-10 sm:w-12 sm:h-12" />
              </div>
              <div className="space-y-4 lg:space-y-5">
                <h3 className="text-base sm:text-lg font-semibold text-foreground leading-[130%]">
                  Identifying a common core set of taxonomy economic activities, particularly in EMDEs.
                </h3>
                <p className="text-[14px] sm:text-[16px] text-muted-foreground leading-[153%]">
                  Focus on essential economic sectors and activities critical for Emerging Markets and Developing Economies to advance decarbonization efforts.
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex flex-col  gap-6 lg:gap-10">
              <div className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] rounded-full border border-[#d9d9d9] flex items-center justify-center">
                <img src={layersIcon} alt="" className="w-10 h-10 sm:w-12 sm:h-12" />
              </div>
              <div className="space-y-4 lg:space-y-5">
                <h3 className="text-base sm:text-lg font-semibold text-foreground leading-[130%]">
                  Creating standardized approaches
                </h3>
                <p className="text-[14px] sm:text-[16px] text-muted-foreground leading-[153%]">
                  Developing common technical approaches for alignment with taxonomy principles and essential criteria, including Do No Significant Harm (DNSH), Minimum Social Safeguards (MSS) and ESG guidelines. Creating standardized approaches that promote interoperability while incorporating essential sustainability criteria and safeguards.
                </p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="flex flex-col  gap-6 lg:gap-10">
              <div className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] rounded-full border border-[#d9d9d9] flex items-center justify-center">
                <img src={barChartIcon} alt="" className="w-10 h-10 sm:w-12 sm:h-12" />
              </div>
              <div className="space-y-4 lg:space-y-5">
                <h3 className="text-base sm:text-lg font-semibold text-foreground leading-[130%]">
                  Formulating common approaches to finance the transition through taxonomies.
                </h3>
                <p className="text-[14px] sm:text-[16px] text-muted-foreground leading-[153%]">
                  Developing frameworks to support transition finance activities that enable decarbonization across various economic sectors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Historic Launch Section */}
      <section className="py-[60px] sm:py-[90px] lg:py-[120px] px-4 sm:px-6 bg-[#2a5942] relative overflow-hidden">
        {/* Decorative Circles */}
        <div className="absolute top-[150px] right-[-200px] w-[777px] h-[803px] rounded-full opacity-10 bg-gradient-to-br from-white/5 to-transparent blur-sm" />
        <div className="absolute top-[40px] right-[-100px] w-[724px] h-[747px] rounded-full opacity-10 bg-gradient-to-br from-white/5 to-transparent blur-sm" />

        <div className="relative z-10 max-w-[1170px] mx-auto">
          <div className="flex flex-col lg:flex-row  gap-6 lg:gap-[26px]">
            <div className="flex-1 space-y-6 lg:space-y-10">
              <h2 className="font-semibold !text-white leading-[120%]">
                Historic Launch at COP29 Baku
              </h2>
              <div className="space-y-4 text-white leading-[153%] text-[14px] sm:text-[16px]">
                <p>
                  Baku, November 14, 2024: The Central Bank of the Republic of Azerbaijan, in partnership with the International Finance Corporation (IFC) through its Sustainable Banking and Finance Network (SBFN), the International Platform on Sustainable Finance (IPSF), the United Nations Development Programme (UNDP), and with the support of the United Nations Environment Programme Finance Initiative (UNEP FI) has launched the "Roadmap for Advancing Interoperability and Comparability of Sustainable Finance Taxonomies."
                </p>
                <p>
                  The Roadmap was officially unveiled during COP29's Finance, Investment, and Trade Day at a high level event titled "Advancing Sustainable Finance across the Globe: Roadmap towards Interoperability and Comparability of Sustainable Finance Taxonomies."
                </p>
              </div>
              <Link
                to="/about-initiative"
                className="inline-flex items-center gap-2 px-4 py-3 bg-[#3dac5c] text-white font-semibold text-sm sm:text-base rounded-lg hover:bg-[#3dac5c]/90 transition-colors w-[180px] sm:w-[200px] h-[50px] sm:h-[55px]"
              >
                Learn more
              </Link>
            </div>
            <div className="flex-shrink-0 w-full lg:w-auto">
              <img
                src={cop29Image}
                alt="COP29 Event"
                className="w-full max-w-[536px] h-auto lg:w-[400px] xl:w-[536px] lg:h-[336px] xl:h-[451px] rounded-[26px] object-cover mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section className="py-[60px] sm:py-[90px] lg:py-[120px] px-4 sm:px-6">
        <div className="max-w-[1170px] mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8 lg:mb-10">
            <h2 className="font-semibold text-foreground leading-[120%]">
              Roadmap Publications
            </h2>
            <Link to="/publications" className="flex  gap-2 px-3 py-3 rounded-lg hover:bg-gray-100 transition-colors self-start sm:self-auto">
              <span className="text-foreground text-sm sm:text-base">See all</span>
              <img src={arrowRightIcon} alt="" className="w-4 h-4" />
            </Link>
          </div>

          <p className="text-[14px] sm:text-[16px] text-muted-foreground leading-[153%] mb-6 sm:mb-8">
            Access comprehensive documentation, reports, and guidelines for sustainable finance taxonomy implementation
          </p>

          <div className="space-y-4">
            {/* Accordion Item 1 */}
            <div className={`rounded-lg p-4 transition-colors ${expandedAccordion === 0 ? 'bg-white border border-[#d9d9d9]' : 'bg-[#e6efe9]'}`}>
              <button
                onClick={() => toggleAccordion(0)}
                className="w-full flex  justify-between"
              >
                <h3 className={`font-semibold leading-[140%] text-left ${expandedAccordion === 0 ? 'text-foreground' : 'text-foreground'}`}>
                  Roadmap for Advancing Interoperability and Comparability of Sustainable Finance Taxonomies
                </h3>
                <img
                  src={expandedAccordion === 0 ? chevronUpIcon : chevronDownIcon}
                  alt=""
                  className="w-5 h-5 flex-shrink-0"
                />
              </button>

              {expandedAccordion === 0 && (
                <>
                  <div className="mt-4 text-muted-foreground leading-[140%] space-y-2">
                    <p>The comprehensive roadmap document outlining the initiative's approach, key technical elements, and implementation strategy for advancing global taxonomy interoperability.</p>
                    <p>Key Features</p>
                    <p>Comprehensive framework analysis</p>
                    <p>Implementation guidelines</p>
                    <p>Best practice recommendations</p>
                    <p>Global case studies</p>
                  </div>
                  <button className="mt-4 bg-[#3dac5c] text-white px-6 py-3 rounded-lg hover:bg-[#3dac5c]/90 transition-colors flex  gap-2">
                    <img src={downloadIcon} alt="" className="w-4 h-4" />
                    <span>Download PDF</span>
                  </button>
                </>
              )}
            </div>

            {/* Accordion Item 2-4 */}
            {['Annual Progress Report 2025', 'Technical Guidelines for Implementation', 'Global Taxonomy Mapper Tool Documentation'].map((title, idx) => (
              <div key={idx} className={`rounded-lg p-4 transition-colors ${expandedAccordion === idx + 1 ? 'bg-white border border-[#d9d9d9]' : 'bg-[#e6efe9]'}`}>
                <button
                  onClick={() => toggleAccordion(idx + 1)}
                  className="w-full flex  justify-between"
                >
                  <h3 className={`font-semibold leading-[140%] text-left ${expandedAccordion === idx + 1 ? 'text-foreground' : 'text-foreground'}`}>
                    {title}
                  </h3>
                  <img
                    src={expandedAccordion === idx + 1 ? chevronUpIcon : chevronDownIcon}
                    alt=""
                    className="w-5 h-5 flex-shrink-0"
                  />
                </button>
                {expandedAccordion === idx + 1 && (
                  <div className="mt-4 text-muted-foreground leading-[140%]">
                    <p>Content for {title} will be available soon.</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News and Events Section */}
      <section className="py-[60px] sm:py-[90px] lg:py-[120px] px-4 sm:px-6">
        <div className="max-w-[1170px] mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8 lg:mb-10">
            <h2 className="font-semibold text-foreground leading-[120%]">
              News and events
            </h2>
            <Link to="/news" className="flex  gap-2 px-3 py-3 rounded-lg hover:bg-gray-100 transition-colors self-start sm:self-auto">
              <span className="text-foreground text-sm sm:text-base">See all</span>
              <img src={arrowRightIcon} alt="" className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {/* News Item 1 */}
            <div className="flex flex-col gap-4">
              <div className="relative h-[250px] sm:h-[300px] lg:h-[350px] bg-white overflow-hidden rounded-lg">
                <img src={g20Logo1} alt="" className="w-full h-full object-cover" />
                <div className="absolute top-4 left-4 bg-[#dfefe6] rounded-2xl px-3 py-1">
                  <span className="text-xs font-bold text-black">Articles</span>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-[16px] font-semibold text-foreground leading-[150%]">
                  SBFN and CASI co-host a roundtable discussion to advance Sustainable Finance Taxonomy Interoperability in Africa
                </h3>
                <p className="text-sm text-muted-foreground tracking-wide leading-5 font-medium">
                  May 2025
                </p>
              </div>
            </div>

            {/* News Item 2 */}
            <div className="flex flex-col gap-4">
              <div className="relative h-[250px] sm:h-[300px] lg:h-[350px] bg-white overflow-hidden rounded-lg">
                <img src={genevaPhoto} alt="" className="w-full h-full object-cover" />
                <div className="absolute top-4 left-4 bg-[#dfefe6] rounded-2xl px-3 py-1">
                  <span className="text-xs font-bold text-black">Event</span>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-[16px] font-semibold text-foreground leading-[150%]">
                  Global Partners Advance Sustainable Finance Taxonomy Interoperability
                </h3>
                <p className="text-sm text-muted-foreground tracking-wide leading-5 font-medium">
                  January 2025
                </p>
              </div>
            </div>

            {/* News Item 3 */}
            <div className="flex flex-col gap-4">
              <div className="relative h-[250px] sm:h-[300px] lg:h-[350px] bg-white overflow-hidden rounded-lg">
                <img src={g20Logo2} alt="" className="w-full h-full object-cover" />
                <div className="absolute top-4 left-4 bg-[#dfefe6] rounded-2xl px-3 py-1">
                  <span className="text-xs font-bold text-black">Articles</span>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-[16px] font-semibold text-foreground leading-[150%]">
                  Roadmap for Advancing Interoperability and Comparability of Sustainable Finance Taxonomies Launched
                </h3>
                <p className="text-sm text-muted-foreground tracking-wide leading-5 font-medium">
                  November 2024
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COP30 Event Section */}
      <section className="py-[60px] sm:py-[90px] lg:py-[120px] px-4 sm:px-6 bg-[#2a5942] relative overflow-hidden">
        {/* Decorative Circles */}
        <div className="absolute -top-24 right-[490px] w-[739px] h-[739px] rounded-full opacity-10 bg-gradient-to-br from-white/5 to-transparent blur-sm" />
        <div className="absolute top-[342px] left-[690px] w-[739px] h-[739px] rounded-full opacity-10 bg-gradient-to-br from-white/5 to-transparent blur-sm rotate-[120deg]" />

        <div className="relative z-10 max-w-[1170px] mx-auto">
          <h2 className="font-semibold !text-white leading-[120%] mb-8 lg:mb-10">
            UN Climate Change Conference - COP30 Event
          </h2>

          <div className="flex flex-col lg:flex-row  gap-6 lg:gap-11">
            <div className="w-full max-w-[424px] h-[250px] sm:h-[300px] lg:h-[367px] bg-white rounded-[20px] flex  flex-shrink-0">
              <img src={cop30Logo} alt="COP30 Logo" className="w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] lg:w-[303px] lg:h-[303px] object-contain" />
            </div>

            <div className="flex-1 space-y-4 lg:space-y-5 text-white">
              <h3 className="text-lg sm:text-xl font-semibold !text-white leading-[130%]">About the event</h3>
              <div className="space-y-3 sm:space-y-4 text-[14px] sm:text-[16px] leading-[160%]">
                <p>
                  This event builds on the momentum of the Sustainable Finance Taxonomies event held in Baku, Azerbaijan during COP29, where the "Roadmap for Advancing Interoperability and Comparability of Sustainable Finance Taxonomies" (Taxonomy Roadmap Initiative) was launched by the Central Bank of Azerbaijan (CBAR), International Finance Corporation (IFC), Sustainable Banking and Finance Network (SBFN), the United Nations Development Programme (UNDP), and the International Platform on Sustainable Finance (IPSF).
                </p>
                <p>
                  The initiative aims to facilitate cross-border investment flows into sustainable activities, in line with Article 2.1(c) of the Paris Agreement. The focus of this event is to showcase progress on the Taxonomy Roadmap, driven by joint collaboration, coordination and communication.
                </p>
                <p>
                  Since the launch, the initiative has expanded its partnership from the founding partners to 13 global and public partners. Notably, the Brazil Ministry of Finance, representing the Presidency of COP30, joined the initiative to further advance the implementation of the initiative along the Road of Baku to Belém.
                </p>
              </div>
              <button className="flex  gap-2 px-6 py-3 rounded-lg hover:bg-white/10 transition-colors text-white">
                <span>Visit website</span>
                <img src={arrowRightIcon} alt="" className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section - Carousel */}
      <section className="py-[60px] sm:py-[90px] lg:py-[120px] px-4 sm:px-6">
        <div className="max-w-[1170px] mx-auto">
          <h2 className="font-semibold text-foreground leading-[120%] mb-8 lg:mb-10">
            Partners
          </h2>

          <p className="text-[14px] sm:text-[16px] text-muted-foreground leading-[160%] mb-6 sm:mb-8">
            Leading global institutions and initiatives working together to advance interoperability and comparability of sustainable finance taxonomies
          </p>

          {/* Partners Carousel */}
          <Carousel
            plugins={[partnerPlugin.current]}
            className="w-full"
            opts={{
              align: 'center',
              loop: true
            }}
            onMouseEnter={partnerPlugin.current.stop}
            onMouseLeave={partnerPlugin.current.reset}
          >
            <CarouselContent>
              {partners.map((partner) => (
                <CarouselItem key={partner.id} className="pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                  <div className="bg-white border border-[#d9d9d9] rounded-lg p-4 sm:p-6 flex flex-col gap-4 sm:gap-6 h-full">
                    <div className="h-[120px] sm:h-[160px] w-full bg-white flex items-center justify-center">
                      <img
                        src={partner.logo}
                        alt={partner.alt}
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                    <div className="flex flex-col gap-4 flex-1">
                      <div className="space-y-2">
                        <h3 className="text-base sm:text-lg font-semibold text-foreground leading-[130%]">
                          {partner.name}
                        </h3>
                        <p className="text-muted-foreground leading-[153%] text-xs sm:text-sm">
                          {partner.description}
                        </p>
                      </div>
                      <button className="flex  gap-2 px-3 py-3 rounded-lg hover:bg-gray-100 transition-colors text-foreground self-start mt-auto">
                        <span className="text-sm">Visit website</span>
                        <img src={arrowRightIcon} alt="" className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Carousel Navigation */}
            <div className="flex gap-2 mt-8 justify-center">
              <CarouselPrevious className="relative position-static mx-2 bg-[#3dac5c] text-white hover:bg-[#2a5942] border-none" />
              <CarouselNext className="relative position-static mx-2 bg-[#3dac5c] text-white hover:bg-[#2a5942] border-none" />
            </div>
          </Carousel>
        </div>
      </section>
    </div>
  )
}

export default HomePage
