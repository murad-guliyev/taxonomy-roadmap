import React, { useState } from 'react';
import Footer from './Footer';

const FocusAreasAndTools = () => {
  const [activeFilter, setActiveFilter] = useState('common-core');

  const focusAreas = {
    'common-core': {
      title: 'Common Core Activities',
      subtitle: 'Identifying a common core set of taxonomy economic activities, particularly in EMDEs',
      overview: 'Identifying essential sectors and activities for Emerging Markets and Developing Economies (EMDEs) with a shared classification system. This element aims to identify a core set of economic sectors and economic activities, particularly for EMDEs, which are critical for advancing decarbonization.\n\nExisting comparison exercises, such as the IPSF\'s Common Ground Taxonomy, will inform this exercise. Interoperability for these core sectors and activities can be explored through:',
      keyElements: [
        {
          title: 'Shared Classification',
          description: 'Using International Standard Industrial Classification (ISIC) as a reference framework.',
          icon: '📋'
        },
        {
          title: 'Common Criteria',
          description: 'Developing shared approaches for defining categories, activities, and metrics.',
          icon: '⚏'
        },
        {
          title: 'Tiered Approaches',
          description: 'Recommendations for treating activities based on market maturity and national pathways.',
          icon: '🎚️'
        }
      ]
    },
    'technical': {
      title: 'Technical Approaches',
      subtitle: 'Creating standardized approaches for alignment with taxonomy principles',
      overview: 'Developing common technical approaches for alignment with taxonomy principles and essential criteria, including Do No Significant Harm (DNSH), Minimum Social Safeguards (MSS) and ESG guidelines.\n\nThis pillar focuses on creating standardized methodologies that promote interoperability while incorporating essential sustainability criteria and safeguards across different jurisdictions.',
      keyComponents: [
        {
          title: 'Do No Significant Harm (DNSH)',
          features: [
            'Environmental safeguard principles',
            'Impact assessment methodologies',
            'Threshold setting approaches',
            'Monitoring and verification systems'
          ],
          image: '/src/assets/placeholder-image-1.jpg'
        },
        {
          title: 'Minimum Social Safeguards (MSS)',
          features: [
            'Social impact assessment',
            'Stakeholder engagement requirements',
            'Labor rights and standards',
            'Community consultation processes'
          ],
          image: '/src/assets/placeholder-image-2.jpg'
        }
      ]
    },
    'transition': {
      title: 'Transition Finance Approaches',
      subtitle: 'Formulating common approaches to finance the transition through taxonomies',
      overview: 'Formulating common approaches to finance the transition through taxonomies. This pillar develops frameworks to support transition finance activities that enable decarbonization across various economic sectors.\n\nTransition finance is critical for supporting activities that may not yet be fully sustainable but are on a credible pathway toward achieving sustainability goals.',
      framework: [
        {
          title: 'Pathway Definition',
          description: 'Clear criteria for credible transition pathways aligned with climate goals.',
          icon: '🕐'
        },
        {
          title: 'Timeline Requirements',
          description: 'Time-bound commitments and milestones for achieving transition goals.',
          icon: '⏰'
        },
        {
          title: 'Monitoring & Reporting',
          description: 'Regular progress tracking and transparent reporting mechanisms.',
          icon: '🎚️'
        }
      ]
    },
    'additional': {
      title: 'Additional Areas for Greater Alignment',
      subtitle: 'Areas for even greater alignment that may also be explored',
      overview: 'This section explores additional areas that can contribute to greater alignment in sustainable finance taxonomies.',
      areas: [
        {
          title: 'Inclusivity in Alignment Approaches',
          description: 'Ensuring small and medium-sized enterprises (SMEs), women and vulnerable groups.'
        },
        {
          title: 'Verification and Assurance Mechanism',
          description: 'Developing robust verification and assurance mechanisms for taxonomy alignment.'
        }
      ]
    }
  };

  const currentArea = focusAreas[activeFilter];

  return (
    <div className="min-h-screen bg-[#e1e1e1]">
      {/* Hero Section */}
      <section className="relative h-[300px] sm:h-[350px] lg:h-[387px] w-full overflow-hidden bg-[#2a5942]">
        {/* Decorative Circles */}
        <div className="absolute top-[150px] right-[-200px] w-[777px] h-[803px] rounded-full opacity-10 bg-gradient-to-br from-white/5 to-transparent blur-sm" />
        <div className="absolute top-[40px] right-[-100px] w-[724px] h-[747px] rounded-full opacity-10 bg-gradient-to-br from-white/5 to-transparent blur-sm" />

        <div className="relative z-10 max-w-[1170px] mx-auto px-4 sm:px-6 pt-32 sm:pt-40 md:pt-48 lg:pt-64 pb-12 sm:pb-16 lg:pb-20">
          <h1 className="text-white font-semibold leading-[120%] font-['Raleway']">
            Focus Areas and Tools
          </h1>
        </div>
      </section>

      {/* Filter Tabs */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-[1170px] mx-auto px-4 sm:px-6 py-4 sm:py-6">
          <div className="flex space-x-4 sm:space-x-6 lg:space-x-8 overflow-x-auto">
            <button
              onClick={() => setActiveFilter('common-core')}
              className={`pb-3 text-base sm:text-lg font-semibold transition-colors whitespace-nowrap ${
                activeFilter === 'common-core'
                  ? 'text-green-600 border-b-2 border-green-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Common Core Activities
            </button>
            <button
              onClick={() => setActiveFilter('technical')}
              className={`pb-3 text-base sm:text-lg font-semibold transition-colors whitespace-nowrap ${
                activeFilter === 'technical'
                  ? 'text-green-600 border-b-2 border-green-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Technical Approaches
            </button>
            <button
              onClick={() => setActiveFilter('transition')}
              className={`pb-3 text-base sm:text-lg font-semibold transition-colors whitespace-nowrap ${
                activeFilter === 'transition'
                  ? 'text-green-600 border-b-2 border-green-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Transition Finance Approaches
            </button>
            <button
              onClick={() => setActiveFilter('additional')}
              className={`pb-3 text-base sm:text-lg font-semibold transition-colors whitespace-nowrap ${
                activeFilter === 'additional'
                  ? 'text-green-600 border-b-2 border-green-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Additional Areas for Greater Alignment
            </button>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="bg-[#fafafa] min-h-screen">
        <div className="max-w-[1170px] mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-20">
          {/* Title and Subtitle */}
          <div className="mb-8">
            <h2 className="font-semibold text-gray-900 leading-[120%] font-['Raleway'] mb-4">
              {currentArea.title}
            </h2>
            <p className="text-[18px] text-gray-700 leading-[130%] font-['Raleway']">
              {currentArea.subtitle}
            </p>
          </div>

          {/* Overview Section */}
          <div className="mb-12">
            <h3 className="text-[24px] font-semibold text-gray-900 leading-[130%] font-['Raleway'] mb-4">
              Overview
            </h3>
            <div className="text-[16px] text-gray-700 leading-[160%] font-['Raleway'] whitespace-pre-line">
              {currentArea.overview}
            </div>
          </div>

          {/* Key Elements/Components Section */}
          {activeFilter === 'common-core' && currentArea.keyElements && (
            <div className="mb-12">
              <h3 className="text-[24px] font-semibold text-gray-900 leading-[130%] font-['Raleway'] mb-8">
                Key Technical Approaches
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {currentArea.keyElements.map((element, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-2xl">
                      {element.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-[18px] font-semibold text-gray-900 leading-[130%] font-['Raleway'] mb-2">
                        {element.title}
                      </h4>
                      <p className="text-[16px] text-gray-700 leading-[160%] font-['Raleway']">
                        {element.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Key Components Section for Technical Approaches */}
          {activeFilter === 'technical' && currentArea.keyComponents && (
            <div className="mb-12">
              <h3 className="text-[24px] font-semibold text-gray-900 leading-[130%] font-['Raleway'] mb-8">
                Key Components
              </h3>
              <div className="space-y-8">
                {currentArea.keyComponents.map((component, index) => (
                  <div key={index} className="flex items-start gap-8">
                    <div className="w-48 h-32 bg-gray-200 rounded-lg flex items-center justify-center">
                      <span className="text-gray-500">Image Placeholder</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-[20px] font-semibold text-gray-900 leading-[130%] font-['Raleway'] mb-4">
                        {component.title}
                      </h4>
                      <ul className="space-y-2">
                        {component.features.map((feature, idx) => (
                          <li key={idx} className="text-[16px] text-gray-700 leading-[160%] font-['Raleway'] flex items-start">
                            <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Transition Finance Framework */}
          {activeFilter === 'transition' && currentArea.framework && (
            <div className="mb-12">
              <h3 className="text-[24px] font-semibold text-gray-900 leading-[130%] font-['Raleway'] mb-8">
                Transition Finance Framework
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {currentArea.framework.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-2xl">
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-[18px] font-semibold text-gray-900 leading-[130%] font-['Raleway'] mb-2">
                        {item.title}
                      </h4>
                      <p className="text-[16px] text-gray-700 leading-[160%] font-['Raleway']">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Additional Areas */}
          {activeFilter === 'additional' && currentArea.areas && (
            <div className="mb-12">
              <div className="space-y-8">
                {currentArea.areas.map((area, index) => (
                  <div key={index} className="flex items-start gap-8">
                    <div className="w-48 h-32 bg-gray-200 rounded-lg flex items-center justify-center">
                      <span className="text-gray-500">Image Placeholder</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-[20px] font-semibold text-gray-900 leading-[130%] font-['Raleway'] mb-4">
                        {area.title}
                      </h4>
                      <p className="text-[16px] text-gray-700 leading-[160%] font-['Raleway']">
                        {area.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default FocusAreasAndTools;
