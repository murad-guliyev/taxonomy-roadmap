import { useNavigate } from 'react-router-dom'
import { ExternalLink, ArrowRight } from 'lucide-react'

const OtherResources = () => {
  const navigate = useNavigate()

  const resources = [
    {
      id: 1,
      title: "Introduction to Sustainable Finance Taxonomies",
      provider: "UN CC:Learn",
      description: "This interactive and practical course provides you with an overview of sustainable finance taxonomies, their relevance, purpose and different use cases. It explains the core elements of taxonomies and introduces principles and good practices for their development.",
      link: "https://unccelearn.org/course/view.php?id=160&lang=en&page=overview&utm"
    },
    {
      id: 2,
      title: "Overview and Recommendations for Sustainable Finance Taxonomies",
      provider: "ICMA",
      description: "This paper provides an international overview of both official and market-based taxonomies of which there are an increasing number with multiple initiatives arising in line with the mainstreaming of sustainable finance.",
      link: "https://www.icmagroup.org/assets/documents/Sustainable-finance/ICMA-Overview-and-Recommendations-for-Sustainable-Finance-Taxonomies-May-2021-180521.pdf"
    },
    {
      id: 3,
      title: "SBFN Toolkit for Sustainable Finance Taxonomies",
      provider: "SBFN",
      description: "A comprehensive toolkit designed to support financial sector regulators and industry associations in developing and implementing sustainable finance taxonomies. Provides practical guidance and best practices for taxonomy development.",
      link: "https://www.sbfnetwork.org/sbfn-toolkit-sustainable-finance-taxonomies"
    },
    {
      id: 4,
      title: "Guide for Creating a Green and Sustainable Finance Taxonomy",
      provider: "GIZ",
      description: "This guide draws from the experiences of GIZ in developing two processes for the creation of a taxonomy for green and sustainable finance. The objective is to share lessons learned and best practices with other countries.",
      link: "https://www.giz.de/de/downloads/giz-2023-en-guide-sustainable-green-taxonomy.pdf"
    },
    {
      id: 5,
      title: "Common Framework of Sustainable Finance Taxonomies for Latin America and the Caribbean",
      provider: "UNEP",
      description: "A guidance document that can serve as a voluntary reference to orient LAC member states that are in the process of or intend to develop sustainable finance taxonomies.",
      link: "https://www.unep.org/resources/publication/common-framework-sustainable-finance-taxonomies-latin-america-and-caribbean"
    },
    {
      id: 6,
      title: "EU Taxonomy Compass",
      provider: "European Commission",
      description: "An interactive online tool that helps users navigate the EU Taxonomy for sustainable activities. It provides clear guidance on the technical screening criteria and how to apply them.",
      link: "https://ec.europa.eu/sustainable-finance-taxonomy/tool/"
    },
    {
      id: 7,
      title: "Sustainable Finance Taxonomies: A Global Overview",
      provider: "Climate Policy Initiative",
      description: "This report provides a comprehensive overview of sustainable finance taxonomies globally, analyzing their design, implementation, and potential for interoperability.",
      link: "https://www.climatepolicyinitiative.org/publication/sustainable-finance-taxonomies-a-global-overview/"
    },
    {
      id: 8,
      title: "ASEAN Taxonomy for Sustainable Finance",
      provider: "ASEAN",
      description: "The ASEAN Taxonomy provides a framework for sustainable finance activities in Southeast Asia, promoting regional harmonization and interoperability with global standards.",
      link: "https://www.theacmf.org/initiatives/sustainable-finance/asean-taxonomy-for-sustainable-finance"
    },
    {
      id: 9,
      title: "China's Green Finance Standards and Taxonomy",
      provider: "People's Bank of China",
      description: "Overview of China's green finance taxonomy and standards, including technical criteria and implementation guidelines for sustainable finance activities.",
      link: "http://www.pbc.gov.cn/en/3688110/3688172/4157443/4244579/index.html"
    }
  ]

  return (
    <div className="w-full bg-[#fafafa]">
      {/* Hero Section */}
      <section className="relative h-[300px] sm:h-[350px] lg:h-[387px] w-full overflow-hidden bg-[#2a5942]">
        {/* Decorative Circles */}
        <div className="absolute top-[150px] right-[-200px] w-[777px] h-[803px] rounded-full opacity-10 bg-gradient-to-br from-white/5 to-transparent blur-sm" />
        <div className="absolute top-[40px] right-[-100px] w-[724px] h-[747px] rounded-full opacity-10 bg-gradient-to-br from-white/5 to-transparent blur-sm" />

        <div className="relative z-10 max-w-[1170px] mx-auto px-4 sm:px-6 pt-32 sm:pt-40 md:pt-48 lg:pt-64 pb-12 sm:pb-16 lg:pb-20">
          <h1 className="text-white font-semibold leading-[120%] mb-4">
            Other Learning Resources
          </h1>
          <p className="text-[14px] sm:text-[16px] text-[#f3f3f3] leading-[153%] max-w-[700px]">
            Explore additional resources, tools, and educational materials to deepen your
            understanding of sustainable finance taxonomies and interoperability
          </p>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-14 lg:mb-16">
            {resources.map((resource) => (
              <div
                key={resource.id}
                className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
              >
                <div className="p-4 sm:p-6 lg:p-8">
                  <div className="mb-4">
                    <h3 className="text-base sm:text-lg font-semibold text-[#2a5942] leading-[130%] mb-2 line-clamp-2">
                      {resource.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-medium text-[#3dac5c]">
                      {resource.provider}
                    </p>
                  </div>

                  <p className="text-muted-foreground text-[14px] sm:text-base leading-[153%] mb-4 sm:mb-6 line-clamp-3">
                    {resource.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <a
                      href={resource.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-[#3dac5c] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#3dac5c]/90 transition-colors"
                    >
                      Access Resource
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="bg-white border border-[#d9d9d9] rounded-lg p-8">
            <div>
              <h3 className="text-[32px] font-semibold text-foreground leading-[120%] mb-4">
                Explore More Resources
              </h3>
              <p className="text-muted-foreground leading-[153%] mb-8 max-w-3xl mx-auto">
                Discover our comprehensive publications and principles for taxonomy interoperability,
                or stay updated with the latest news and developments in sustainable finance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => navigate('/publications')}
                  className="bg-[#3dac5c] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#3dac5c]/90 transition-colors inline-flex items-center gap-2"
                >
                  View Publications
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => navigate('/interoperability-principles')}
                  className="border border-[#d9d9d9] text-[#1e1e1e] px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors inline-flex items-center gap-2"
                >
                  Interoperability Principles
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default OtherResources