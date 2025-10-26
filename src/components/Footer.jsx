import { Link } from 'react-router-dom'
import { ExternalLink, Mail, Globe } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  // Unused variables commented out to fix linting warnings
  // const footerSections = [...]
  // const keyPartners = [...]

  return (
    <footer className="bg-[#2a5942] text-white">
      {/* Main Footer Content */}
      <div className="max-w-[1170px] mx-auto px-4 py-12 sm:py-16 md:py-20 lg:py-[120px]">
        <div className="flex flex-col gap-8 sm:gap-10 lg:gap-[50px]">
          {/* Navigation Sections */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-8">
            {/* About */}
            <div className="flex flex-col gap-5 sm:gap-[30px]">
              <h4 className="text-base sm:text-lg font-semibold leading-[130%]">About</h4>
              <div className="flex flex-col gap-3 sm:gap-5 text-sm sm:text-[16px] leading-[153%]">
                <Link to="/about-initiative" className="hover:text-[#3dac5c] transition-colors">
                  About the Initiative
                </Link>
                <Link to="/partners" className="hover:text-[#3dac5c] transition-colors">
                  Partners
                </Link>
              </div>
            </div>

            {/* Focus Areas and Tools */}
            <div className="flex flex-col gap-5 sm:gap-[30px]">
              <h4 className="text-base sm:text-lg font-semibold leading-[130%]">Focus Areas and Tools</h4>
              <div className="flex flex-col gap-3 sm:gap-5 text-sm sm:text-[16px] leading-[153%]">
                <Link to="/focus-areas" className="hover:text-[#3dac5c] transition-colors">
                  Taxonomy Roadmap Pillars
                </Link>
                <Link to="/interoperability-principles" className="hover:text-[#3dac5c] transition-colors">
                  Interoperability Principles
                </Link>
              </div>
            </div>

            {/* Learning and Resources */}
            <div className="flex flex-col gap-5 sm:gap-[30px]">
              <h4 className="text-base sm:text-lg font-semibold leading-[130%]">Learning and Resources</h4>
              <div className="flex flex-col gap-3 sm:gap-5 text-sm sm:text-[16px] leading-[153%]">
                <Link to="/publications" className="hover:text-[#3dac5c] transition-colors">
                  Roadmap Publications
                </Link>
                <Link to="/other-resources" className="hover:text-[#3dac5c] transition-colors">
                  Other Learning Sources
                </Link>
              </div>
            </div>

            {/* News and Events */}
            <div className="flex flex-col gap-5 sm:gap-[30px]">
              <h4 className="text-base sm:text-lg font-semibold leading-[130%]">News and Events</h4>
              <div className="flex flex-col gap-3 sm:gap-5 text-sm sm:text-[16px] leading-[153%]">
                <Link to="/news" className="hover:text-[#3dac5c] transition-colors">
                  News
                </Link>
                <Link to="/events" className="hover:text-[#3dac5c] transition-colors">
                  Events
                </Link>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-[rgba(223,239,230,0.38)]" />

          {/* Important Links */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 lg:gap-9 text-sm sm:text-[16px]">
            <a
              href="https://www.cbar.az/press-release-4877/central-bank-of-azerbaijan-and-ifc-hosted-an-event-during-cop29s-finance-investment-and-trade-day"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-[#3dac5c] transition-colors"
            >
              <span>COP29 Launch Press Release</span>
              <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
            </a>
            <a
              href="https://uploads.cbar.az/assets/7d847df68cb1050116b027c77.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-[#3dac5c] transition-colors"
            >
              <span>Roadmap Document</span>
              <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
            </a>
            <a
              href="https://www.sbfnetwork.org/post-event-advisory-global-partners-advance-sustainable-finance-taxonomy-interoperability"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-[#3dac5c] transition-colors"
            >
              <span>Geneva Roundtable Advisory</span>
              <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
            </a>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-[rgba(223,239,230,0.38)]" />

          {/* Copyright */}
          <div className="text-xs sm:text-[13px] font-light leading-relaxed">
            © {currentYear} Taxonomy Roadmap Initiative. Advancing sustainable finance taxonomy interoperability.
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer