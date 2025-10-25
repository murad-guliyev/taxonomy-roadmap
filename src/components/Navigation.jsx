import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import initiativeLogo from '../assets/logo-new-1.png'

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)
  const location = useLocation()
  const currentPath = location.pathname

  const navigationItems = [
    { id: 'home', label: 'Home', path: '/', hasDropdown: false },
    {
      id: 'about',
      label: 'About',
      hasDropdown: true,
      subItems: [
        { id: 'about-initiative', label: 'About the Initiative', path: '/about-initiative' },
        { id: 'partners', label: 'Partners', path: '/partners' }
      ]
    },
    {
      id: 'focus-areas',
      label: 'Focus Areas & Tools',
      hasDropdown: true,
      subItems: [
        { id: 'pillar-1', label: 'Pillar 1: Common Core Activities', path: '/pillar-1' },
        { id: 'pillar-2', label: 'Pillar 2: Technical Approaches', path: '/pillar-2' },
        { id: 'pillar-3', label: 'Pillar 3: Transition Finance', path: '/pillar-3' },
        { id: 'additional-areas', label: 'Additional Alignment Areas', path: '/additional-areas' }
      ]
    },
    {
      id: 'learning',
      label: 'Learning & Resources',
      hasDropdown: true,
      subItems: [
        { id: 'publications', label: 'Roadmap Publications', path: '/publications' },
        { id: 'other-resources', label: 'Other Learning Sources', path: '/other-resources' }
      ]
    },
    {
      id: 'news-events',
      label: 'News & Events',
      hasDropdown: true,
      subItems: [
        { id: 'news', label: 'News', path: '/news' },
        { id: 'events', label: 'Events', path: '/events' }
      ]
    },
    { id: 'contact', label: 'Contact', path: '/contact', hasDropdown: false }
  ]

  const handleNavClick = () => {
    setIsMenuOpen(false)
    setOpenDropdown(null)
  }

  const toggleDropdown = (itemId) => {
    setOpenDropdown(openDropdown === itemId ? null : itemId)
  }


  return (
    <nav className="absolute top-0 left-0 right-0 z-50">
      <div className="max-w-[1254px] mx-auto px-3 sm:px-5 py-3 sm:py-6">
        <div className="bg-white rounded-3xl px-3 sm:px-5 py-4 sm:py-6 flex items-center justify-between lg:justify-center lg:gap-[30px] shadow-md min-h-[80px] sm:min-h-[100px] lg:h-[129px]">
          {/* Left Menu Items */}
          <div className="hidden lg:flex items-center gap-[20px] xl:gap-[35px]">
            <Link
              to="/"
              className={`text-[16px] xl:text-[18px] font-semibold text-center transition-colors ${
                currentPath === '/'
                  ? 'text-[#333333]'
                  : 'text-[#333333] hover:text-[#3dac5c]'
              }`}
            >
              Home
            </Link>
            <Link
              to="/about-initiative"
              className={`text-[16px] xl:text-[18px] font-semibold text-center transition-colors ${
                currentPath === '/about-initiative' || currentPath === '/partners'
                  ? 'text-[#333333]'
                  : 'text-[#333333] hover:text-[#3dac5c]'
              }`}
            >
              About
            </Link>
            <Link
              to="/pillar-1"
              className={`text-[14px] xl:text-[18px] font-semibold text-center transition-colors ${
                currentPath.includes('/pillar-') || currentPath === '/additional-areas'
                  ? 'text-[#333333]'
                  : 'text-[#333333] hover:text-[#3dac5c]'
              }`}
            >
              <span className="hidden xl:inline">Focus Areas & Tools</span>
              <span className="xl:hidden">Focus Areas</span>
            </Link>
          </div>

          {/* Logo (Center) */}
          <div className="flex-shrink-0">
            <Link
              to="/"
              className="flex items-center hover:opacity-80 transition-opacity"
            >
              <img
                src={initiativeLogo}
                alt="Taxonomy Roadmap Initiative"
                className="h-[60px] sm:h-[80px] md:h-[100px] lg:h-[117px] w-auto object-contain"
              />
            </Link>
          </div>

          {/* Right Menu Items */}
          <div className="hidden lg:flex items-center gap-[20px] xl:gap-[35px]">
            <Link
              to="/publications"
              className={`text-[14px] xl:text-[18px] font-semibold text-center transition-colors ${
                currentPath === '/publications'
                  ? 'text-[#333333]'
                  : 'text-[#333333] hover:text-[#3dac5c]'
              }`}
            >
              <span className="hidden xl:inline">Learning & Resources</span>
              <span className="xl:hidden">Learning</span>
            </Link>
            <Link
              to="/news"
              className={`text-[14px] xl:text-[18px] font-semibold text-center transition-colors ${
                currentPath === '/news' || currentPath === '/events'
                  ? 'text-[#333333]'
                  : 'text-[#333333] hover:text-[#3dac5c]'
              }`}
            >
              <span className="hidden xl:inline">News & Events</span>
              <span className="xl:hidden">News</span>
            </Link>
            <Link
              to="/contact"
              className={`text-[16px] xl:text-[18px] font-semibold text-center transition-colors ${
                currentPath === '/contact'
                  ? 'text-[#333333]'
                  : 'text-[#333333] hover:text-[#3dac5c]'
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[#1b3629] p-2"
            >
              {isMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white rounded-2xl shadow-lg max-h-[70vh] overflow-y-auto">
              {navigationItems.map((item) => (
                <div key={item.id}>
                  {item.hasDropdown ? (
                    <div>
                      <button
                        onClick={() => toggleDropdown(item.id)}
                        className="w-full text-left px-3 py-3 rounded-md text-base sm:text-lg font-semibold text-[#1b3629] hover:text-[#3dac5c] hover:bg-gray-50 transition-colors flex items-center justify-between"
                      >
                        {item.label}
                        <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === item.id ? 'rotate-180' : ''}`} />
                      </button>

                      {openDropdown === item.id && (
                        <div className="ml-4 mt-1 space-y-1">
                          {item.subItems.map((subItem) => (
                            <Link
                              key={subItem.id}
                              to={subItem.path}
                              onClick={handleNavClick}
                              className="block w-full text-left px-3 py-2 text-sm sm:text-base rounded-md text-gray-700 hover:text-[#3dac5c] hover:bg-gray-100 transition-colors"
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.path}
                      onClick={handleNavClick}
                      className="block w-full text-left px-3 py-3 rounded-md text-base sm:text-lg font-semibold text-[#1b3629] hover:text-[#3dac5c] hover:bg-gray-50 transition-colors"
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation

