import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";

export default function Navigation() {
  return (
    <nav className="fixed top-10 left-1/2 -translate-x-1/2 z-50 w-full max-w-[1254px] px-5">
      <div className="bg-white rounded-3xl shadow-[0_4px_60px_0_rgba(34,34,34,0.10)] px-5 py-1.5">
        <div className="flex items-center justify-between gap-8">
          {/* Left Navigation */}
          <div className="flex items-center gap-9">
            <Link
              to="/"
              className="text-[#333] text-center font-raleway text-lg font-bold leading-[100%] hover:text-brand-primary-500 transition-colors"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-[#333] text-center font-raleway text-lg font-bold leading-[100%] hover:text-brand-primary-500 transition-colors"
            >
              About
            </Link>
            <div className="relative group">
              <button className="flex items-center gap-1.5 text-[#333] text-center font-raleway text-lg font-bold leading-[100%] hover:text-brand-primary-500 transition-colors">
                Focus Areas and Tools
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 min-w-[250px]">
                <div className="py-2">
                  <Link
                    to="/focus-areas?tab=common-core"
                    className="block px-4 py-2 text-sm font-semibold text-[#333] hover:bg-brand-green-light transition-colors"
                  >
                    Common Core Activities
                  </Link>
                  <Link
                    to="/focus-areas?tab=technical"
                    className="block px-4 py-2 text-sm font-semibold text-[#333] hover:bg-brand-green-light transition-colors"
                  >
                    Technical Approaches
                  </Link>
                  <Link
                    to="/focus-areas?tab=transition"
                    className="block px-4 py-2 text-sm font-semibold text-[#333] hover:bg-brand-green-light transition-colors"
                  >
                    Transition Finance
                  </Link>
                  <Link
                    to="/focus-areas?tab=additional"
                    className="block px-4 py-2 text-sm font-semibold text-[#333] hover:bg-brand-green-light transition-colors"
                  >
                    Additional Alignment Areas
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/3a4cc2685b68d769c5b0e7d3a2eb1f57f3ce35e4?width=234"
              alt="Taxonomy Roadmap Initiative Logo"
              className="w-[117px] h-[117px]"
            />
          </Link>

          {/* Right Navigation */}
          <div className="flex items-center gap-9">
            <div className="relative group">
              <button className="flex items-center gap-1.5 text-[#333] text-center font-raleway text-lg font-bold leading-[100%] hover:text-brand-primary-500 transition-colors">
                Learning and Resources
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
            <Link
              to="/news"
              className="text-[#333] text-center font-raleway text-lg font-bold leading-[100%] hover:text-brand-primary-500 transition-colors"
            >
              News and Events
            </Link>
            <Link
              to="/contact"
              className="text-[#333] text-center font-raleway text-lg font-bold leading-[100%] hover:text-brand-primary-500 transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
