import React, { useState } from 'react';
import { Download } from 'lucide-react';

const RoadmapPublications = () => {
  const [activeTab, setActiveTab] = useState('publications');
  const [visibleCount, setVisibleCount] = useState(6);
  const [visiblePrinciplesCount, setVisiblePrinciplesCount] = useState(6);

  const handleDownload = (publicationTitle) => {
    // In a real application, this would trigger an actual download
    console.log(`Downloading: ${publicationTitle}`);
    alert(`Download started for: ${publicationTitle}`);
  };

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 6);
  };

  const handleLoadMorePrinciples = () => {
    setVisiblePrinciplesCount(prev => prev + 6);
  };

  const publications = [
    {
      id: 1,
      title: "Annual Progress Report 2025",
      description: "Annual assessment of progress made in implementing the Taxonomy Roadmap across global markets and institutions.",
      features: [
        "Implementation progress tracking",
        "Regional analysis",
        "Partnership developments",
        "Future roadmap updates"
      ],
      status: "available",
      buttonText: "Download PDF",
      buttonIcon: <Download className="w-4 h-4" />
    },
    {
      id: 2,
      title: "Interoperability Principles",
      description: "Comprehensive principles for achieving interoperability among sustainable finance taxonomies globally.",
      features: [
        "Interoperability framework",
        "Best practice guidelines",
        "Implementation principles",
        "Alignment approaches"
      ],
      status: "coming-soon",
      buttonText: "Coming soon"
    },
    {
      id: 3,
      title: "Global Taxonomy Mapper Tool Documentation",
      description: "User guide and technical documentation for the Global Taxonomy Mapper, a flagship tool for comparing taxonomies worldwide.",
      features: [
        "User interface guide",
        "API documentation",
        "Comparison methodologies",
        "Data sources and updates"
      ],
      status: "coming-soon",
      buttonText: "Coming soon"
    }
  ];

  // Create a larger grid by repeating publications for demonstration
  const allPublications = [
    ...publications,
    ...publications,
    ...publications
  ];

  const visiblePublications = allPublications.slice(0, visibleCount);
  const hasMore = visibleCount < allPublications.length;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[300px] sm:h-[350px] lg:h-[387px] w-full overflow-hidden bg-[#2a5942]">
        {/* Decorative Circles */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#3dac5c]/5 to-transparent backdrop-blur-sm" />

        <div className="relative z-10 max-w-[1170px] mx-auto px-4 sm:px-6 pt-32 sm:pt-40 md:pt-48 lg:pt-64">
          <h1 className="text-white font-semibold leading-[120%]">
            Learning and Resources
          </h1>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="bg-[#ECECEC] px-4 sm:px-6">
        <div className="max-w-[1170px] mx-auto flex items-center gap-4 sm:gap-6 lg:gap-8 py-4 sm:py-5 overflow-x-auto">
          <button
            onClick={() => setActiveTab('publications')}
            className={`whitespace-nowrap text-lg sm:text-xl font-semibold leading-[130%] pb-2 border-b-2 transition-colors ${
              activeTab === 'publications'
                ? 'text-[#1b3629] border-[#3dac5c]'
                : 'text-[#1b3629] border-transparent hover:border-[#3dac5c]/50'
            }`}
          >
            Roadmap Publications
          </button>
          <button
            onClick={() => setActiveTab('principles')}
            className={`whitespace-nowrap text-lg sm:text-xl font-semibold leading-[130%] pb-2 border-b-2 transition-colors ${
              activeTab === 'principles'
                ? 'text-[#1b3629] border-[#3dac5c]'
                : 'text-[#1b3629] border-transparent hover:border-[#3dac5c]/50'
            }`}
          >
            Principles for Taxonomy Interoperability
          </button>
        </div>
      </section>

      {/* Content based on active tab */}
      {activeTab === 'publications' && (
        /* Publications Grid */
        <div className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
          <div className="max-w-[1170px] mx-auto">
            {/* Section Heading and Description */}
            <div className="mb-8 sm:mb-10 lg:mb-12">
              <h2 className="text-lg sm:text-xl font-semibold text-gray-900 font-['Raleway'] mb-4">
                Roadmap Publications
              </h2>
              <p className="text-[14px] sm:text-base font-normal text-gray-900 font-['Raleway']">
                Access comprehensive documentation, reports, and guidelines for sustainable finance taxonomy implementation
              </p>
            </div>

            {/* Publications Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-11">
              {visiblePublications.map((publication, index) => (
                <div key={`${publication.id}-${index}`} className="bg-white rounded-lg border border-gray-300 p-6 flex flex-col justify-between min-h-[400px]">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-zinc-800 font-['Raleway'] leading-[130%] mb-4">
                      {publication.title}
                    </h3>
                    <p className="text-[#757575] text-base font-normal font-['Raleway'] leading-[160%] mb-4">
                      {publication.description}
                    </p>
                    <div className="mb-4">
                      <p className="text-[#757575] text-base font-semibold font-['Raleway'] leading-[175%] mb-2">
                        Key features:
                      </p>
                      <ul className="list-disc pl-[1em] text-[#757575] text-base font-normal font-['Raleway'] leading-[160%] space-y-1">
                        {publication.features.map((feature, idx) => (
                          <li key={idx}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="mt-auto">
                    <button
                      onClick={() => publication.status === 'available' && handleDownload(publication.title)}
                      disabled={publication.status !== 'available'}
                      className={`p-3 rounded-lg border flex items-center justify-center gap-2 transition-colors ${
                        publication.status === 'available'
                          ? 'bg-[#dfefe6] border-[#cfded1] text-[#333333] hover:bg-[#d0e5dc]'
                          : 'bg-zinc-300 border-zinc-300 text-neutral-500 cursor-not-allowed'
                      }`}
                    >
                      {publication.status === 'available' && publication.buttonIcon}
                      <span className="text-[16px] font-normal font-['Inter'] leading-[100%]">
                        {publication.buttonText}
                      </span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            {hasMore && (
              <div className="mt-12">
                <button
                  onClick={handleLoadMore}
                  className="bg-green-500 text-white px-8 py-3 rounded-lg font-semibold font-['Raleway'] hover:bg-green-600 transition-colors"
                >
                  Load more
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {activeTab === 'principles' && (
        /* Principles Content */
        <div className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
          <div className="max-w-[1170px] mx-auto">
            {/* Main Title and Introduction */}
            <div className="mb-12 sm:mb-14 lg:mb-16">
              <h2 className="font-semibold text-gray-900 font-['Raleway'] mb-6 sm:mb-8">
                Principles for Taxonomy Interoperability
              </h2>
              <div className="space-y-4 sm:space-y-6 text-[14px] sm:text-[16px] text-gray-700 font-['Raleway'] leading-relaxed">
                <p>
                  These foundational principles are designed to guide sustainable finance taxonomy developers and policymakers 
                  in creating interoperable frameworks that can work together effectively across different jurisdictions and markets.
                </p>
                <p>
                  As sustainable finance taxonomies continue to emerge globally, the need for interoperability becomes increasingly 
                  critical. Interoperability refers to the ability of different taxonomies to work together, share data, and provide 
                  consistent guidance to investors and other stakeholders.
                </p>
                <p>
                  These principles represent a collaborative effort to establish common ground and best practices that can help 
                  ensure sustainable finance taxonomies contribute effectively to the global transition to a more sustainable economy.
                </p>
              </div>
            </div>

            {/* Principles Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {[
                {
                  number: "01",
                  category: "Foundation",
                  title: "Build on and reinforce existing principles",
                  description: "Leverage established sustainability frameworks and build upon proven methodologies."
                },
                {
                  number: "02",
                  category: "Design",
                  title: "Utilize core pillars of taxonomy design",
                  description: "Apply fundamental design principles that ensure clarity and consistency."
                },
                {
                  number: "03",
                  category: "Coverage",
                  title: "Prioritize core sector coverage",
                  description: "Focus on sectors that are most critical for sustainable transition."
                },
                {
                  number: "04",
                  category: "Transition",
                  title: "Support credible transition pathways",
                  description: "Enable activities that are on a credible path toward sustainability goals."
                },
                {
                  number: "05",
                  category: "Usability",
                  title: "Ensure practical applicability",
                  description: "Design taxonomies that are practical and usable for market participants."
                },
                {
                  number: "06",
                  category: "Inclusivity",
                  title: "Promote inclusive approaches",
                  description: "Consider diverse stakeholders and ensure broad accessibility."
                },
                {
                  number: "07",
                  category: "Application",
                  title: "Facilitate consistent application",
                  description: "Provide clear guidance for consistent implementation across markets."
                },
                {
                  number: "08",
                  category: "Integration",
                  title: "Enable seamless integration",
                  description: "Support integration with existing financial and regulatory systems."
                },
                {
                  number: "09",
                  category: "Support",
                  title: "Provide ongoing support",
                  description: "Ensure continuous support and guidance for implementation."
                },
                {
                  number: "10",
                  category: "Interoperability",
                  title: "Achieve true interoperability",
                  description: "Enable different taxonomies to work together effectively."
                }
              ].slice(0, visiblePrinciplesCount).map((principle, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg border border-gray-200 p-6 relative hover:border-[#3dac5c] hover:shadow-md transition-all duration-300"
                >
                  {/* Category Label */}
                  <div className="inline-block bg-green-100 text-green-700 text-xs font-medium px-3 py-1 rounded-full mb-4">
                    {principle.category}
                  </div>

                  {/* Number */}
                  <div className="absolute top-4 right-4 text-4xl font-bold text-green-200">
                    {principle.number}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-gray-900 font-['Raleway'] mb-3 pr-16">
                    {principle.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm font-['Raleway'] mb-4 leading-relaxed">
                    {principle.description}
                  </p>

                  {/* Learn More Link */}
                  <div className="mt-auto">
                    <button
                      onClick={() => console.log(`Learn more about: ${principle.title}`)}
                      className="text-gray-700 text-sm font-medium font-['Raleway'] hover:text-[#3dac5c] transition-colors inline-flex items-center gap-1"
                    >
                      Learn more →
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More Button */}
            {visiblePrinciplesCount < 10 && (
              <div>
                <button
                  onClick={handleLoadMorePrinciples}
                  className="bg-green-500 text-white px-8 py-3 rounded-lg font-semibold font-['Raleway'] hover:bg-green-600 transition-colors"
                >
                  Load more
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default RoadmapPublications;
