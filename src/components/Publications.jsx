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
  const [activeTab, setActiveTab] = useState('publications')
  
  console.log('Active Tab:', activeTab)

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

      {/* Hero Section */}
      <section className="relative h-[387px] bg-[#2a5942] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#3dac5c]/5 to-transparent backdrop-blur-sm" />

        <div className="relative z-10 max-w-[1170px] mx-auto px-4 sm:px-6 pt-[289px]">
          <h1 className="text-white font-raleway text-[32px] font-bold leading-[120%]">
            Learning and Resources
          </h1>
        </div>
      </section>

      {/* Tabs Navigation */}
      <section className="bg-white w-full border-b border-gray-200">
        <div className="max-w-[1170px] mx-auto px-4 sm:px-6 flex items-center gap-8 py-5 overflow-x-auto">
          <button
            onClick={() => setActiveTab('publications')}
            className={`whitespace-nowrap font-raleway text-xl font-bold leading-[130%] pb-2 border-b-2 transition-colors ${
              activeTab === 'publications'
                ? 'text-[#2a5942] border-[#3dac5c]'
                : 'text-[#2a5942] border-transparent hover:border-[#3dac5c]/50'
            }`}
          >
            Roadmap Publications
          </button>
          <button
            onClick={() => setActiveTab('principles')}
            className={`whitespace-nowrap font-raleway text-xl font-bold leading-[130%] pb-2 border-b-2 transition-colors ${
              activeTab === 'principles'
                ? 'text-[#2a5942] border-[#3dac5c]'
                : 'text-[#2a5942] border-transparent hover:border-[#3dac5c]/50'
            }`}
          >
            Principles for Taxonomy Interoperability
          </button>
        </div>
      </section>

      {/* Content Section */}
      <div className="bg-[#fafafa] min-h-screen">
        <div className="max-w-[1170px] mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-20">
          {activeTab === 'publications' ? (
            <>
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
            </>
          ) : (
            <>
              {/* Principles Section */}
              <div className="mb-8 sm:mb-10 lg:mb-12">
                <h2 className="font-raleway text-[18px] sm:text-[20px] font-semibold text-[#1b3629] leading-[130%] mb-4">
                  Principles for Taxonomy Interoperability
                </h2>
                <p className="font-raleway text-[14px] sm:text-[16px] font-normal text-text-default leading-[160%]">
                  Ten foundational principles for sustainable finance taxonomy developers and policymakers
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {principles.map((principle) => (
                  <div
                    key={principle.id}
                    className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden cursor-pointer border border-gray-100 p-6"
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
            </>
          )}
        </div>
      </div>

    </div>
  )
}

export default Publications