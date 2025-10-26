import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import initiativeLogo from '../assets/logo-new-1.png'

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()
  const currentPath = location.pathname

  const navigationItems = [
    { id: 'home', label: 'Home', path: '/' },
    { id: 'about', label: 'About', path: '/about-initiative' },
    { id: 'focus-areas', label: 'Focus Areas & Tools', path: '/focus-areas' },
    { id: 'learning', label: 'Learning & Resources', path: '/publications' },
    { id: 'news-events', label: 'News & Events', path: '/news' },
    { id: 'contact', label: 'Contact', path: '/contact' }
  ]

  const handleNavClick = () => {
    setIsMenuOpen(false)
  }


  return (
    <nav className="absolute top-0 left-0 right-0 z-50">
      <div className="max-w-[1254px] mx-auto px-3 sm:px-5 py-3 sm:py-6">
        <div className="bg-white rounded-3xl px-3 sm:px-5 py-4 sm:py-6 flex items-center justify-between lg:justify-center lg:gap-[50px] shadow-md min-h-[80px] sm:min-h-[100px] lg:h-[129px]">
          {/* Left Menu Items */}
          <div className="hidden lg:flex items-center gap-[40px] xl:gap-[60px]">
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
              to="/focus-areas"
              className={`text-[14px] xl:text-[18px] font-semibold text-center transition-colors ${
                currentPath.includes('/pillar-') || currentPath === '/additional-areas' || currentPath === '/focus-areas'
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
          <div className="hidden lg:flex items-center gap-[40px] xl:gap-[60px]">
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
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex items-center justify-center text-[#1b3629] hover:bg-gray-100 rounded-xl transition-colors"
            >
              {isMenuOpen ? (
                <X size={28} className="sm:w-8 sm:h-8 md:w-10 md:h-10 stroke-[1.5]" />
              ) : (
                <Menu size={28} className="sm:w-8 sm:h-8 md:w-10 md:h-10 stroke-[1.5]" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white rounded-2xl shadow-lg">
              {navigationItems.map((item) => (
                <Link
                  key={item.id}
                  to={item.path}
                  onClick={handleNavClick}
                  className={`block w-full text-left px-3 py-3 rounded-md text-base sm:text-lg font-semibold transition-colors ${
                    currentPath === item.path
                      ? 'text-[#333333] bg-gray-100'
                      : 'text-[#1b3629] hover:text-[#3dac5c] hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation

