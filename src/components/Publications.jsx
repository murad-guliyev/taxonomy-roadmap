import { useState } from 'react'
// import { useNavigate } from 'react-router-dom'

// Card Component
const CardForLearning = ({ publication, onDownload, className, style }) => {
  return (
    <div
      style={{
        background: "var(--var-sds-color-background-default-default, #ffffff)",
        borderRadius: "var(--var-sds-size-radius-200, 8px)",
        borderStyle: "solid",
        borderColor: "var(--var-sds-color-border-default-default, #d9d9d9)",
        borderWidth: "1px",
        padding: "var(--var-sds-size-space-600, 24px)",
        display: "flex",
        flexDirection: "column",
        gap: "var(--var-sds-size-space-600, 24px)",
        rowGap: "24px",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        flexWrap: "wrap",
        alignContent: "flex-start",
        flexShrink: "0",
        minHeight: "300px",
        width: "100%",
        position: "relative",
        ...style,
      }}
      className={`${className || ''}`}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "var(--var-sds-size-space-400, 16px)",
          alignItems: "center",
          justifyContent: "flex-start",
          flex: "1",
          minWidth: "160px",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "var(--var-sds-size-space-200, 8px)",
            alignItems: "center",
            justifyContent: "flex-start",
            alignSelf: "stretch",
            flexShrink: "0",
            position: "relative",
          }}
        >
          <div
            style={{
              color: "var(--text-default, #333333)",
              textAlign: "left",
              fontFamily: "var(--heading-h4-font-family, 'Raleway-SemiBold', sans-serif)",
              fontSize: "var(--heading-h4-font-size, 18px)",
              lineHeight: "var(--heading-h4-line-height, 130%)",
              fontWeight: "var(--heading-h4-font-weight, 600)",
              position: "relative",
              alignSelf: "stretch",
            }}
          >
            {publication.title}
          </div>
          <div
            style={{
              color: "var(--text-secondary, #757575)",
              textAlign: "left",
              fontFamily: "'Raleway', sans-serif",
              fontSize: "16px",
              lineHeight: "160%",
              fontWeight: "400",
              position: "relative",
              alignSelf: "stretch",
            }}
          >
            <span>
              <span>
                {publication.description}
                <br />
                <br />
              </span>
              <span>
                Key features:
                <br />
              </span>
              <ul style={{ margin: "8px 0", paddingLeft: "16px" }}>
                {publication.features.map((feature, index) => (
                  <li key={index} style={{ marginBottom: "4px" }}>
                    {feature}
                  </li>
                ))}
              </ul>
            </span>
          </div>
        </div>
        
        {/* Action Button */}
        <div style={{ marginTop: "auto", width: "100%" }}>
          {publication.status === 'available' ? (
            <button
              onClick={() => onDownload(publication)}
              style={{
                width: "100%",
                background: "var(--var-sds-color-background-brand-primary-default, #3dac5c)",
                color: "white",
                padding: "12px 16px",
                borderRadius: "8px",
                border: "none",
                fontFamily: "'Raleway', sans-serif",
                fontSize: "16px",
                fontWeight: "600",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px"
              }}
            >
              <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download PDF
            </button>
          ) : (
            <button
              disabled
              style={{
                width: "100%",
                background: "#f5f5f5",
                color: "#999999",
                padding: "12px 16px",
                borderRadius: "8px",
                border: "none",
                fontFamily: "'Raleway', sans-serif",
                fontSize: "16px",
                fontWeight: "600",
                cursor: "not-allowed"
              }}
            >
              Coming soon
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

const Publications = () => {
  // const navigate = useNavigate()
  // const [expandedSection, setExpandedSection] = useState(null)
  const [showPrinciples, setShowPrinciples] = useState(false)
  // const [selectedPrinciple, setSelectedPrinciple] = useState(null)
  const [activeTab, setActiveTab] = useState('publications')

  const publications = [
    {
      id: 1,
      title: "Roadmap for Advancing Interoperability and Comparability of Sustainable Finance Taxonomies",
      category: "primary",
      type: "(Core document)",
      status: "available",
      date: "2024",
      description: "The comprehensive roadmap document outlining the initiative's approach, key technical elements, and implementation strategy for advancing global taxonomy interoperability.",
      sections: [
        { id: "rationale", title: "I. Rationale for the Roadmap", description: "Addressing the need for interoperability among frameworks that guide sustainable finance" },
        { id: "technical", title: "II. Key Technical Elements", description: "Three focus pillars for enhancing taxonomy interoperability" },
        { id: "implementation", title: "III. Implementation Strategy", description: "Actionable steps for coordinated global implementation" },
        { id: "additional", title: "IV. Additional Areas", description: "Complementary areas for greater alignment" }
      ],
      features: [
        "Comprehensive framework analysis",
        "Implementation guidelines",
        "Best practice recommendations",
        "Global case studies"
      ],
      downloadLink: "#",
      previewAvailable: true
    },
    {
      id: 2,
      title: "Annual Progress Report 2025",
      category: "reports",
      type: "(Progress report)",
      status: "coming-soon",
      date: "2025",
      description: "Annual assessment of progress made in implementing the Taxonomy Roadmap across global markets and institutions.",
      features: [
        "Implementation progress tracking",
        "Regional analysis",
        "Partnership developments",
        "Future roadmap updates"
      ],
      downloadLink: "#",
      previewAvailable: false
    },
    {
      id: 3,
      title: "Principles for Taxonomy Interoperability",
      category: "tools",
      type: "Core Principles",
      status: "available",
      date: "2024",
      description: "Ten foundational principles for sustainable finance taxonomy developers and policymakers to enhance global interoperability and comparability.",
      features: [
        "Foundation & design principles",
        "Coverage & transition approaches",
        "Usability & inclusivity guidelines",
        "Integration & support mechanisms"
      ],
      downloadLink: "#",
      previewAvailable: true,
      isPrinciples: true
    },
    {
      id: 4,
      title: "Global Taxonomy Mapper Tool Documentation",
      category: "tools",
      type: "Joint Work",
      status: "coming-soon",
      date: "2025",
      description: "User guide and technical documentation for the Global Taxonomy Mapper, a flagship tool for comparing taxonomies worldwide.",
      features: [
        "User interface guide",
        "API documentation",
        "Comparison methodologies",
        "Data sources and updates"
      ],
      downloadLink: "#",
      previewAvailable: false
    }
  ]



  /*
  const getStatusStyle = (status) => {
    switch (status) {
      case 'available':
        return 'bg-green-100 text-green-800'
      case 'coming-soon':
        return 'bg-blue-100 text-blue-800'
      case 'in-development':
        return 'bg-yellow-100 text-yellow-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }
  */

  const getStatusLabel = (status) => {
    switch (status) {
      case 'available':
        return 'Available'
      case 'coming-soon':
        return 'Coming Soon'
      case 'in-development':
        return 'Coming Soon'
      default:
        return 'Unknown'
    }
  }

  const handleDownload = (publication) => {
    if (publication.status === 'available') {
      // In a real implementation, this would trigger actual download
      alert(`Downloading: ${publication.title}`)
    } else {
      alert(`This publication is ${getStatusLabel(publication.status).toLowerCase()}. Please check back later.`)
    }
  }

  /*
  const handlePreview = (publication) => {
    if (publication.isPrinciples) {
      setShowPrinciples(true)
    } else if (publication.previewAvailable) {
      alert(`Preview functionality for "${publication.title}" would open here.`)
    } else {
      alert('Preview not available for this publication.')
    }
  }
  */

  const principles = [
    {
      id: 1,
      number: "01",
      title: "Build on and reinforce existing principles",
      category: "Foundation"
    },
    {
      id: 2,
      number: "02",
      title: "Utilize core pillars of taxonomy design",
      category: "Design"
    },
    {
      id: 3,
      number: "03",
      title: "Prioritize core sector coverage",
      category: "Coverage"
    },
    {
      id: 4,
      number: "04",
      title: "Facilitate the transition",
      category: "Transition"
    },
    {
      id: 5,
      number: "05",
      title: "Leverage proxies",
      category: "Usability"
    },
    {
      id: 6,
      number: "06",
      title: "Provide a pathway for SME adoption",
      category: "Inclusivity"
    },
    {
      id: 7,
      number: "07",
      title: "Prioritize and define use cases",
      category: "Application"
    },
    {
      id: 8,
      number: "08",
      title: "Facilitate integration into national market frameworks",
      category: "Integration"
    },
    {
      id: 9,
      number: "09",
      title: "Provide user support",
      category: "Support"
    },
    {
      id: 10,
      number: "10",
      title: "Promote taxonomy interoperability",
      category: "Interoperability"
    }
  ]

  return (
    <div className="w-full bg-[#fafafa]">
      {/* Principles Modal */}
      {showPrinciples && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={() => setShowPrinciples(false)}>
          <div className="bg-white rounded-xl max-w-6xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-[#1b3629]">Principles for Taxonomy Interoperability</h2>
              <button
                onClick={() => setShowPrinciples(false)}
                className="text-gray-500 hover:text-gray-700 p-2"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="p-6">
              <p className="text-[#333] leading-[160%] mb-8">
                Ten foundational principles for sustainable finance taxonomy developers and policymakers to enhance global interoperability and comparability.
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {principles.map((principle) => (
                  <div
                    key={principle.id}
                    className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden cursor-pointer border border-gray-100 p-4"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-semibold text-[#3dac5c] uppercase tracking-wide">
                        {principle.category}
                      </span>
                      <div className="text-3xl font-bold text-[#3dac5c] opacity-20">
                        {principle.number}
                      </div>
                    </div>
                    <h3 className="text-base font-bold text-gray-900 leading-tight">
                      {principle.title}
                    </h3>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-[#333] leading-[153%]">
                  <strong>Note:</strong> These principles aim to enhance interoperability at different phases of maturity and reinforce best practices in usability and credibility for taxonomy development and implementation.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative h-[300px] sm:h-[350px] lg:h-[387px] w-full overflow-hidden bg-[#2a5942]">
        {/* Decorative Circles */}
        <div className="absolute top-[150px] right-[-200px] w-[777px] h-[803px] rounded-full opacity-10 bg-gradient-to-br from-white/5 to-transparent blur-sm" />
        <div className="absolute top-[40px] right-[-100px] w-[724px] h-[747px] rounded-full opacity-10 bg-gradient-to-br from-white/5 to-transparent blur-sm" />

        <div className="relative z-10 max-w-[1170px] mx-auto px-4 sm:px-6 pt-32 sm:pt-40 md:pt-48 lg:pt-64">
          <h1 className="text-white font-semibold leading-[120%]">
            Learning and Resources
          </h1>
        </div>
      </section>

      {/* Tab Bar */}
      <section className="bg-white border-b border-[#d9d9d9]">
        <div className="max-w-[1170px] mx-auto px-4 sm:px-6">
          <div className="flex gap-4 sm:gap-8 lg:gap-12 overflow-x-auto">
            <button
              onClick={() => setActiveTab('publications')}
              className={`py-4 font-semibold text-sm sm:text-base relative transition-colors whitespace-nowrap ${
                activeTab === 'publications'
                  ? 'text-[#1b3629] border-b-2 border-[#3dac5c] -mb-[2px]'
                  : 'text-[#999] hover:text-[#1b3629]'
              }`}
            >
              Roadmap Publications
            </button>
            <button
              onClick={() => setActiveTab('principles')}
              className={`py-4 font-semibold text-sm sm:text-base relative transition-colors whitespace-nowrap ${
                activeTab === 'principles'
                  ? 'text-[#1b3629] border-b-2 border-[#3dac5c] -mb-[2px]'
                  : 'text-[#999] hover:text-[#1b3629]'
              }`}
            >
              Principles for Taxonomy Interoperability
            </button>
          </div>
        </div>
      </section>

      {/* Publications Content */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-[1170px] mx-auto px-4 sm:px-6">
          {/* Section Header */}
          <div className="mb-8 sm:mb-10 lg:mb-12">
            <h2 className="font-raleway text-[18px] sm:text-[20px] font-semibold text-[#1b3629] leading-[130%] mb-4">
              Roadmap Publications
            </h2>
            <p className="font-raleway text-[14px] sm:text-[16px] font-normal text-text-default leading-[160%]">
              Access comprehensive documentation, reports, and guidelines for sustainable finance taxonomy implementation
            </p>
          </div>

          {/* Publications Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-[45px] mb-8 sm:mb-10 lg:mb-12">
            {publications.map((publication) => (
              <CardForLearning 
                key={publication.id} 
                publication={publication} 
                onDownload={handleDownload}
              />
            ))}
          </div>

          {/* Load More Button */}
          <div>
            <button className="bg-[#3dac5c] text-white px-8 py-3 rounded-lg font-raleway text-[16px] font-semibold hover:bg-[#3dac5c]/90 transition-colors">
              Load more
            </button>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Publications