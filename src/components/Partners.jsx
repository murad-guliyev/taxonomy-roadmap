import { useState } from 'react'
import { ExternalLink, Users, Globe, Building, Banknote, Factory, Leaf, ChevronDown, ChevronUp } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

// Partner logos
import cbarLogo from '../assets/2.2_Partner_Logo_CBAR.jpg'
import ifcLogo from '../assets/2.2_Partner_Logo_IFC.png'
import sbfnLogo from '../assets/2.2_Partner_Logo_SBFN.png'
import undpLogo from '../assets/2.2_Partner_Logo_UNDP.png'
import ipsfLogo from '../assets/2.2_Partner_Logo_IPSF.jpeg'
import gizLogo from '../assets/2.2_Partner_Logo_GIZ.jpg'
import unepFiLogo from '../assets/2.2_Partner_Logo_UNEP_FI.png'
import cbiLogo from '../assets/2.2_Partner_Logo_CBI.jpg'
import ecIntpaLogo from '../assets/2.2_Partner_Logo_EC_INTPA.jpg'
import unPriLogo from '../assets/2.2_Partner_Logo_UN_PRI.png'
import imfLogo from '../assets/2.2_Partner_Logo_IMF.png'
import worldBankLogo from '../assets/2.2_Partner_Logo_World_Bank.png'
import brazilMfLogo from '../assets/brazilLogo.svg'

const Partners = () => {
  const [showAll, setShowAll] = useState(false)

  // Partner information
  const foundingPartners = [
    {
      name: "Central Bank of the Republic of Azerbaijan (CBAR)",
      description: "The central bank of the COP29 host country, leading the initiative to advance sustainable finance taxonomies.",
      type: "Central Bank",
      website: "https://www.cbar.az/home?language=en",
      logo: cbarLogo,
    },
    {
      name: "International Finance Corporation (IFC)",
      description: "World Bank Group member focused on private sector development in emerging markets.",
      type: "International Organization",
      website: "https://www.ifc.org/en/home",
      logo: ifcLogo,
    },
    {
      name: "Sustainable Banking and Finance Network (SBFN)",
      description: "IFC-supported network of financial sector regulators and industry associations.",
      type: "Network",
      website: "https://www.sbfnetwork.org/",
      logo: sbfnLogo,
    },
    {
      name: "United Nations Development Programme (UNDP)",
      description: "UN agency working to eradicate poverty and reduce inequalities through sustainable development.",
      type: "UN Agency",
      website: "https://www.undp.org/",
      logo: undpLogo,
    },
    {
      name: "International Platform on Sustainable Finance (IPSF)",
      description: "Platform for dialogue and coordination on sustainable finance approaches.",
      type: "International Platform",
      website: "https://finance.ec.europa.eu/sustainable-finance/international-platform-sustainable-finance_en",
      logo: ipsfLogo,
    }
  ]

  const expandedPartners = [
    {
      name: "Deutsche Gesellschaft für Internationale Zusammenarbeit (GIZ)",
      description: "German federal enterprise supporting international cooperation for sustainable development.",
      type: "Development Agency",
      website: "https://www.giz.de/en",
      logo: gizLogo,
    },
    {
      name: "United Nations Environment Programme Finance Initiative (UNEP FI)",
      description: "Partnership between UNEP and the global financial sector to mobilize private sector finance.",
      type: "UN Initiative",
      website: "https://www.unepfi.org/",
      logo: unepFiLogo,
    },
    {
      name: "Climate Bonds Initiative (CBI)",
      description: "International organization working to mobilize the bond market for climate change solutions.",
      type: "NGO",
      website: "https://www.climatebonds.net/",
      logo: cbiLogo,
    },
    {
      name: "European Commission Directorate-General for International Partnerships (EC DG INTPA)",
      description: "EU department responsible for international partnerships and development cooperation.",
      type: "Government Agency",
      website: "https://international-partnerships.ec.europa.eu/index_en",
      logo: ecIntpaLogo,
    },
    {
      name: "United Nations Principles for Responsible Investment (UN PRI)",
      description: "UN-supported network of investors working together to implement responsible investment principles.",
      type: "Investment Network",
      website: "https://www.unpri.org/",
      logo: unPriLogo,
    },
    {
      name: "International Monetary Fund (IMF)",
      description: "International organization working to foster global monetary cooperation and financial stability.",
      type: "International Organization",
      website: "https://www.imf.org/en/Home",
      logo: imfLogo,
    },
    {
      name: "World Bank (WB)",
      description: "International financial institution providing loans and grants to governments for development projects.",
      type: "International Organization",
      website: "https://www.worldbank.org/ext/en/home",
      logo: worldBankLogo,
    },
    {
      name: "Ministry of Finance of Brazil (MF)",
      description: "Representing the Presidency of COP30, advancing implementation along the Road from Baku to Belém.",
      type: "Government Ministry",
      website: "https://www.gov.br/fazenda/pt-br",
      logo: brazilMfLogo,
    }
  ]

  const getTypeIcon = (type) => {
    switch (type) {
      case 'Central Bank':
        return <Banknote className="w-6 h-6 text-primary" />
      case 'Government Agency':
      case 'Government Ministry':
        return <Building className="w-6 h-6 text-primary" />
      case 'International Organization':
      case 'UN Agency':
      case 'UN Initiative':
        return <Globe className="w-6 h-6 text-secondary" />
      case 'Development Agency':
        return <Factory className="w-6 h-6 text-accent" />
      case 'NGO':
        return <Leaf className="w-6 h-6 text-green-600" />
      default:
        return <Users className="w-6 h-6 text-accent" />
    }
  }

  const PartnerCard = ({ partner }) => (
    <Card className="hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      <div className="flex flex-col md:flex-row">
        {/* Logo Section - Left Side */}
        <div className="md:w-72 md:min-w-72 bg-white p-8 flex items-center justify-center border-r border-gray-200">
          <img
            src={partner.logo}
            alt={`${partner.name} logo`}
            className={`h-auto object-contain ${
              partner.logo === worldBankLogo ? 'w-3/4 max-h-32' : 'w-full max-h-32'
            }`}
          />
        </div>

        {/* Content Section - Right Side */}
        <div className="flex-1 p-5 flex flex-col justify-between">
          <div>
            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">{partner.type}</span>
            <h3 className="text-base font-bold text-gray-900 mb-2 mt-1 leading-tight">
              {partner.name}
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              {partner.description}
            </p>
          </div>
          <div className="mt-3">
            <a
              href={partner.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 font-semibold text-sm inline-flex items-center gap-2 transition-colors"
            >
              Visit Website
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </Card>
  )

  return (
    <div className="w-full bg-[#fafafa]">
      {/* Hero Section */}
      <section className="relative h-[400px] w-full overflow-hidden bg-[#2a5942] pt-64">
        {/* Decorative Circles */}
        <div className="absolute top-[150px] right-[-200px] w-[777px] h-[803px] rounded-full opacity-10 bg-gradient-to-br from-white/5 to-transparent blur-sm" />
        <div className="absolute top-[40px] right-[-100px] w-[724px] h-[747px] rounded-full opacity-10 bg-gradient-to-br from-white/5 to-transparent blur-sm" />

        <div className="relative z-10 max-w-[1170px] mx-auto px-4 pb-20">
          <h1 className="text-[32px] font-semibold text-white leading-[120%] mb-4">
            Our Global Partners
          </h1>
          <p className="text-[16px] text-[#f3f3f3] leading-[153%] max-w-[700px]">
            Leading global institutions and initiatives working together to advance
            interoperability and comparability of sustainable finance taxonomies
          </p>
        </div>
      </section>

      {/* Partnership Growth Section */}
      <section className="py-20">
        <div className="max-w-[1170px] mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-[32px] font-semibold text-[#1b3629] leading-[120%] mb-4">
              Growing Global Coalition
            </h2>
            <p className="text-[16px] text-[#333] leading-[153%] max-w-3xl">
              Since the launch at COP29, the initiative has expanded from the founding partners
              to 13 global and public partners, demonstrating strong international commitment
              to sustainable finance taxonomy interoperability.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-3xl">
            <div className="bg-[#e6efe9] p-8 rounded-lg">
              <div className="text-4xl font-bold text-[#2a5942] mb-2">5</div>
              <div className="text-lg font-semibold text-[#1e1e1e] mb-2">Founding Partners</div>
              <div className="text-[#333]">Initial coalition launched at COP29</div>
            </div>
            <div className="bg-[#e6efe9] p-8 rounded-lg">
              <div className="text-4xl font-bold text-[#2a5942] mb-2">13</div>
              <div className="text-lg font-semibold text-[#1e1e1e] mb-2">Total Partners</div>
              <div className="text-[#333]">Expanded global partnership</div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Directory - Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-[1170px] mx-auto px-4">
          <div className="mb-10">
            <h2 className="text-[32px] font-semibold text-[#1b3629] leading-[120%] mb-4">
              Partner Directory
            </h2>
            <p className="text-[16px] text-[#333] leading-[153%]">
              Complete partner information as specified in the Taxonomy Roadmap document
            </p>
          </div>

          <div className="space-y-4">
            {[...foundingPartners, ...expandedPartners]
              .slice(0, showAll ? undefined : 5)
              .map((partner, index) => (
                <PartnerCard key={index} partner={partner} />
              ))}
          </div>

          {/* Show More/Less Button */}
          {[...foundingPartners, ...expandedPartners].length > 5 && (
            <div className="mt-8 text-center">
              <button
                onClick={() => setShowAll(!showAll)}
                className="inline-flex items-center gap-2 bg-[#3dac5c] text-white px-6 py-3 rounded-lg hover:bg-[#3dac5c]/90 transition-colors font-semibold"
              >
                {showAll ? (
                  <>
                    Show Less
                    <ChevronUp className="w-5 h-5" />
                  </>
                ) : (
                  <>
                    Show More ({[...foundingPartners, ...expandedPartners].length - 5} more partners)
                    <ChevronDown className="w-5 h-5" />
                  </>
                )}
              </button>
            </div>
          )}
        </div>
      </section>
      
      {/* Collaboration Highlights */}
      <section className="py-20">
        <div className="max-w-[1170px] mx-auto px-4">
          <div className="mb-10">
            <h2 className="text-[32px] font-semibold text-[#1b3629] leading-[120%] mb-4">
              Collaborative Engagement
            </h2>
            <p className="text-[16px] text-[#333] leading-[153%]">
              Our partners actively engage in high-level discussions and roundtables
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardContent className="p-6">
                <Globe className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">G20 Sustainable Finance Working Group</h3>
                <p className="text-sm text-gray-600">Active participation in global policy forums</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <Users className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">BRICS Taxonomy Working Group</h3>
                <p className="text-sm text-gray-600">Engaging with emerging market initiatives</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <Building className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">IPSF Sherpa Meetings</h3>
                <p className="text-sm text-gray-600">Contributing to international platform discussions</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <Leaf className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Hamburg Sustainability Conference</h3>
                <p className="text-sm text-gray-600">Contributing to sustainability discussions</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Partners