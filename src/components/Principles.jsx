import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Principles = () => {
  const navigate = useNavigate()
  const [selectedPrinciple, setSelectedPrinciple] = useState(null)
  // const [viewMode, setViewMode] = useState('grid') // 'grid' or 'detailed'

  const principles = [
    {
      id: 1,
      number: "01",
      title: "Build on and reinforce existing principles",
      summary: "Ensuring positive contribution and avoiding negative contribution, underpinning with a strong scientific basis, reflecting good governance and making dynamic updates.",
      description: "This principle emphasizes the importance of building upon established best practices in sustainable finance while ensuring that taxonomies contribute positively to sustainability goals. It requires a strong scientific foundation, good governance structures, and the ability to adapt and update as knowledge and circumstances evolve.",
      keyElements: [
        "Positive contribution to sustainability goals",
        "Avoidance of negative environmental and social impacts",
        "Strong scientific basis for criteria and thresholds",
        "Good governance and transparent decision-making",
        "Dynamic updates based on new evidence and learning"
      ],
      implementation: [
        "Establish clear criteria for positive contribution",
        "Implement safeguards against negative impacts",
        "Base decisions on peer-reviewed scientific evidence",
        "Create transparent governance structures",
        "Develop regular review and update mechanisms"
      ],
      category: "Foundation"
    },
    {
      id: 2,
      number: "02",
      title: "Utilize core pillars of taxonomy design",
      summary: "Core pillars include sector structure, use of common objectives, clear screening criteria and terminology.",
      description: "This principle focuses on adopting universally accepted design elements that have proven effective across existing taxonomies worldwide. It promotes consistency in structure, objectives, criteria, and language to facilitate understanding and comparison.",
      keyElements: [
        "Consistent sector classification systems",
        "Common sustainability objectives",
        "Clear and measurable screening criteria",
        "Standardized terminology and definitions",
        "Harmonized assessment methodologies"
      ],
      implementation: [
        "Adopt widely recognized sector classification systems (e.g., ISIC)",
        "Align with international sustainability frameworks",
        "Develop clear, measurable criteria",
        "Create standardized glossaries and definitions",
        "Establish common assessment methodologies"
      ],
      category: "Design"
    },
    {
      id: 3,
      number: "03",
      title: "Prioritize core sector coverage",
      summary: "Using universally relevant sectors (e.g. energy) and expand taxonomy coverage over time to take account of the local priorities of developed and emerging economies.",
      description: "This principle advocates for starting with sectors that are universally important for sustainability while allowing for expansion based on local needs and priorities. It recognizes that different economies may have varying priorities while maintaining focus on globally critical sectors.",
      keyElements: [
        "Universal relevance of core sectors",
        "Systematic expansion over time",
        "Local and regional priorities consideration",
        "Emerging market specific needs",
        "Developed economy requirements"
      ],
      implementation: [
        "Identify universally critical sectors (energy, transport, buildings)",
        "Develop phased expansion plans",
        "Consult with local stakeholders",
        "Consider emerging market constraints and opportunities",
        "Balance global and local priorities"
      ],
      category: "Coverage"
    },
    {
      id: 4,
      number: "04",
      title: "Facilitate the transition",
      summary: "Utilizing complementary approaches to addressing transitional activities, using credible science-based pathways.",
      description: "This principle recognizes the importance of supporting the transition of high-emission sectors rather than only focusing on already-green activities. It emphasizes the need for credible, science-based transition pathways that provide clear direction for improvement.",
      keyElements: [
        "Transition pathway development",
        "Science-based target setting",
        "Complementary assessment approaches",
        "Time-bound improvement plans",
        "Interim milestone recognition"
      ],
      implementation: [
        "Develop sector-specific transition pathways",
        "Set science-based interim targets",
        "Create transition activity categories",
        "Establish clear improvement timelines",
        "Monitor and verify progress"
      ],
      category: "Transition"
    },
    {
      id: 5,
      number: "05",
      title: "Leverage proxies",
      summary: "To strengthen usability and uptake both at the framework level and at the activity level. Proxies may include pre-existing certifications, labels and standards.",
      description: "This principle promotes the use of existing certifications, standards, and labels as proxies for compliance with taxonomy criteria. This approach can significantly reduce compliance costs and complexity while leveraging established verification systems.",
      keyElements: [
        "Existing certification systems",
        "International standards recognition",
        "Quality assurance mechanisms",
        "Cost reduction strategies",
        "Simplified compliance pathways"
      ],
      implementation: [
        "Map existing certifications to taxonomy criteria",
        "Establish equivalence frameworks",
        "Create proxy acceptance procedures",
        "Develop quality assurance mechanisms",
        "Provide guidance on proxy usage"
      ],
      category: "Usability"
    },
    {
      id: 6,
      number: "06",
      title: "Provide a pathway for SME adoption",
      summary: "Considering different approaches to simplifying criteria, alignment and/or implementation expectations for small- and medium-sized enterprises.",
      description: "This principle acknowledges that small and medium-sized enterprises (SMEs) may face disproportionate challenges in taxonomy compliance. It calls for simplified approaches that make taxonomies accessible to smaller entities without compromising the integrity of the framework.",
      keyElements: [
        "Simplified criteria for SMEs",
        "Reduced reporting requirements",
        "Proportionate compliance expectations",
        "Capacity building support",
        "Cost-effective implementation"
      ],
      implementation: [
        "Develop SME-specific guidance",
        "Create simplified reporting templates",
        "Establish proportionate thresholds",
        "Provide capacity building programs",
        "Offer technical assistance"
      ],
      category: "Inclusivity"
    },
    {
      id: 7,
      number: "07",
      title: "Prioritize and define use cases",
      summary: "Clearly articulating the intended end users and use cases of the taxonomy, valuing straightforward and high-impact applications as initial targets such as corporate disclosure and origination of labelled green/sustainable debt.",
      description: "This principle emphasizes the importance of clearly defining who will use the taxonomy and how. It advocates for starting with straightforward, high-impact applications before expanding to more complex use cases.",
      keyElements: [
        "Clear end user identification",
        "Specific use case definition",
        "High-impact application focus",
        "Corporate disclosure facilitation",
        "Green finance product development"
      ],
      implementation: [
        "Define primary user groups",
        "Specify intended applications",
        "Prioritize high-impact use cases",
        "Develop user-specific guidance",
        "Create application roadmaps"
      ],
      category: "Application"
    },
    {
      id: 8,
      number: "08",
      title: "Facilitate integration into national market frameworks",
      summary: "In a way that provides a clear market signal and establishes institutional ownership. Market frameworks could be in the form of guidance or regulation.",
      description: "This principle recognizes that successful taxonomy implementation requires integration into national policy and regulatory frameworks. It emphasizes the importance of clear market signals and institutional ownership to drive adoption and effectiveness.",
      keyElements: [
        "National policy integration",
        "Regulatory framework alignment",
        "Clear market signals",
        "Institutional ownership",
        "Cross-sector coordination"
      ],
      implementation: [
        "Engage with policy makers and regulators",
        "Align with national sustainability strategies",
        "Establish clear implementation timelines",
        "Designate responsible institutions",
        "Create coordination mechanisms"
      ],
      category: "Integration"
    },
    {
      id: 9,
      number: "09",
      title: "Provide user support",
      summary: "Such as pilots, tools, capacity building and user guidance (including verification and assurance expectations).",
      description: "This principle highlights the critical importance of supporting users throughout their taxonomy journey. It encompasses various forms of support from initial understanding through implementation to ongoing compliance and verification.",
      keyElements: [
        "Pilot program development",
        "Practical implementation tools",
        "Comprehensive capacity building",
        "User guidance materials",
        "Verification support systems"
      ],
      implementation: [
        "Launch pilot programs",
        "Develop practical tools and templates",
        "Provide training and capacity building",
        "Create comprehensive guidance materials",
        "Establish verification support"
      ],
      category: "Support"
    },
    {
      id: 10,
      number: "10",
      title: "Promote taxonomy interoperability",
      summary: "By engaging with other taxonomy developers, policymakers and international institutions to advance interoperability across borders, including via the exploration of formal recognition mechanisms.",
      description: "This principle is central to the overall objective of enhancing global taxonomy interoperability. It calls for active engagement and collaboration among taxonomy developers, policymakers, and international institutions to create formal mechanisms for cross-border recognition and alignment.",
      keyElements: [
        "Multi-stakeholder engagement",
        "Cross-border collaboration",
        "Formal recognition mechanisms",
        "International institution involvement",
        "Ongoing dialogue facilitation"
      ],
      implementation: [
        "Establish regular stakeholder forums",
        "Create formal collaboration agreements",
        "Develop mutual recognition frameworks",
        "Engage international organizations",
        "Facilitate knowledge sharing"
      ],
      category: "Interoperability"
    }
  ]

  const categories = [
    { id: 'all', label: 'All Principles', color: 'bg-[#01A04E]' },
    { id: 'Foundation', label: 'Foundation', color: 'bg-[#01A04E]' },
    { id: 'Design', label: 'Design', color: 'bg-[#01A04E]' },
    { id: 'Coverage', label: 'Coverage', color: 'bg-[#01A04E]' },
    { id: 'Transition', label: 'Transition', color: 'bg-[#01A04E]' },
    { id: 'Usability', label: 'Usability', color: 'bg-[#01A04E]' },
    { id: 'Inclusivity', label: 'Inclusivity', color: 'bg-[#01A04E]' },
    { id: 'Application', label: 'Application', color: 'bg-[#01A04E]' },
    { id: 'Integration', label: 'Integration', color: 'bg-[#01A04E]' },
    { id: 'Support', label: 'Support', color: 'bg-[#01A04E]' },
    { id: 'Interoperability', label: 'Interoperability', color: 'bg-[#01A04E]' }
  ]



  const getCategoryColor = (category) => {
    const cat = categories.find(c => c.id === category)
    return cat ? cat.color : 'bg-gray-500'
  }

  if (selectedPrinciple) {
    const principle = principles.find(p => p.id === selectedPrinciple)
    return (
      <div className="w-full bg-[#fafafa] pt-32 pb-20">
        <div className="max-w-[1170px] mx-auto px-4">
          <button
            onClick={() => setSelectedPrinciple(null)}
            className="mb-6 text-[#3dac5c] hover:text-[#3dac5c]/80 font-medium inline-flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to All Principles
          </button>

          <div className="bg-white border border-[#d9d9d9] rounded-lg overflow-hidden">
            <div className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-[#3dac5c] rounded-full flex items-center justify-center text-white text-xl font-bold">
                  {principle.number}
                </div>
                <div>
                  <span className="px-3 py-1 rounded-full text-sm font-medium text-white bg-[#3dac5c]">
                    {principle.category}
                  </span>
                  <h1 className="text-[32px] font-semibold text-[#1b3629] leading-[120%] mt-2">{principle.title}</h1>
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <h2 className="text-lg font-semibold text-[#2a5942] leading-[130%] mb-4">Overview</h2>
                  <p className="text-[16px] text-[#333] leading-[153%]">{principle.description}</p>
                </div>

                <div>
                  <h2 className="text-lg font-semibold text-[#2a5942] leading-[130%] mb-4">Key Elements</h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    {principle.keyElements.map((element, index) => (
                      <div key={index} className="flex items-start gap-3 p-4 bg-[#e6efe9] rounded-lg">
                        <div className="w-2 h-2 bg-[#3dac5c] rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-[#333]">{element}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h2 className="text-lg font-semibold text-[#2a5942] leading-[130%] mb-4">Implementation Guidance</h2>
                  <div className="space-y-3">
                    {principle.implementation.map((step, index) => (
                      <div key={index} className="flex items-start gap-4 p-4 border border-[#d9d9d9] rounded-lg">
                        <div className="w-8 h-8 bg-[#3dac5c] rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                          {index + 1}
                        </div>
                        <span className="text-[#333]">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full bg-[#fafafa]">
      {/* Hero Section */}
      <section className="relative h-[300px] sm:h-[350px] lg:h-[400px] w-full overflow-hidden bg-[#2a5942] pt-32 sm:pt-40 md:pt-48 lg:pt-64">
        {/* Decorative Circles */}
        <div className="absolute top-[150px] right-[-200px] w-[777px] h-[803px] rounded-full opacity-10 bg-gradient-to-br from-white/5 to-transparent blur-sm" />
        <div className="absolute top-[40px] right-[-100px] w-[724px] h-[747px] rounded-full opacity-10 bg-gradient-to-br from-white/5 to-transparent blur-sm" />

        <div className="relative z-10 max-w-[1170px] mx-auto px-4 sm:px-6 pb-12 sm:pb-16 lg:pb-20">
          <h1 className="text-[24px] sm:text-[28px] lg:text-[32px] font-semibold text-white leading-[120%] mb-4">
            Principles for Taxonomy Interoperability
          </h1>
          <p className="text-[14px] sm:text-[16px] text-[#f3f3f3] leading-[153%] max-w-[700px]">
            Ten foundational principles for sustainable finance taxonomy developers and policymakers to enhance global interoperability and comparability
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-4 sm:px-6">
          <div className="space-y-4 sm:space-y-6">
            <p className="text-[14px] sm:text-[16px] text-[#333] leading-[153%]">
              Sustainable finance taxonomies have emerged from across a range of economic contexts in developed and emerging markets.
              While a local taxonomy is an essential building block for market growth, for taxonomies to enable the flow of cross-border
              capital requires "interoperability"—the ability to compare taxonomies based on common principles and/or a scientific baseline.
            </p>
            <p className="text-[14px] sm:text-[16px] text-[#333] leading-[153%]">
              Interoperability will require global collaboration with input from emerging and developed market contexts. It is a collective
              pursuit of a global objective in line with the COP30 presidency's call for collaboration as well as leadership from the Global South.
            </p>
            <p className="text-[16px] text-[#333] leading-[153%]">
              The 10 principles outlined are for use by sustainable finance taxonomy developers and policymakers in creating, governing
              and implementing taxonomies. They aim to support the effective use of taxonomies by financial and non-financial companies.
            </p>
          </div>
        </div>
      </section>


      {/* Principles Grid */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-[1170px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {principles.map((principle) => (
              <div
                key={principle.id}
                className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer group border border-gray-100"
                onClick={() => setSelectedPrinciple(principle.id)}
              >
                {/* Top colored header */}
                <div className={`h-2 ${getCategoryColor(principle.category)}`}></div>

                <div className="p-4 sm:p-6">
                  {/* Number and category */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-semibold text-[#01A04E] uppercase tracking-wide">
                      {principle.category}
                    </span>
                    <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#01A04E] opacity-20">
                      {principle.number}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#01A04E] transition-colors leading-tight">
                    {principle.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-4">
                    {principle.summary}
                  </p>

                  <div className="flex items-center text-[#01A04E] font-semibold text-sm group-hover:gap-2 transition-all">
                    Learn More
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="max-w-[1170px] mx-auto px-4">
          <div className="bg-white border border-[#d9d9d9] rounded-lg p-8 text-center">
            <h2 className="text-[32px] font-semibold text-[#1b3629] leading-[120%] mb-6">
              Implementation Impact
            </h2>
            <p className="text-[16px] text-[#333] leading-[153%] mb-8 max-w-3xl mx-auto">
              By covering both design and implementation of taxonomies, these principles aim to enhance interoperability at different
              phases of maturity. They also aim to reinforce best practices in usability and credibility, the other two pillars of
              taxonomy development and implementation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate('/publications')}
                className="bg-[#3dac5c] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#3dac5c]/90 transition-colors"
              >
                View Related Publications
              </button>
              <button
                onClick={() => navigate('/pillar-1')}
                className="border border-[#d9d9d9] text-[#1e1e1e] px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
              >
                Explore Focus Areas
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Principles