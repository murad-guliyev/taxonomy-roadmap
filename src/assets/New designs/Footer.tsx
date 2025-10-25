import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-bg-colored py-[120px] px-[215px]">
      <div className="max-w-[1170px] mx-auto flex flex-col gap-[50px]">
        {/* Footer Links */}
        <div className="flex justify-between gap-8">
          {/* About */}
          <div className="flex flex-col gap-8 w-[200px]">
            <h3 className="text-white font-raleway text-lg font-bold leading-[130%]">
              About
            </h3>
            <div className="flex flex-col gap-5">
              <Link
                to="/about"
                className="text-white font-raleway text-base font-normal leading-[160%] hover:text-brand-primary-500 transition-colors"
              >
                Description the initiatives
              </Link>
              <Link
                to="/about#partners"
                className="text-white font-raleway text-base font-normal leading-[160%] hover:text-brand-primary-500 transition-colors"
              >
                Partners
              </Link>
            </div>
          </div>

          {/* Focus Areas */}
          <div className="flex flex-col gap-8 w-[200px]">
            <h3 className="text-white font-raleway text-lg font-bold leading-[130%]">
              Focus Areas and tools
            </h3>
            <div className="flex flex-col gap-5">
              <Link
                to="/focus-areas?tab=common-core"
                className="text-white font-raleway text-base font-normal leading-[160%] hover:text-brand-primary-500 transition-colors"
              >
                Common Core Activities
              </Link>
              <Link
                to="/focus-areas?tab=technical"
                className="text-white font-raleway text-base font-normal leading-[160%] hover:text-brand-primary-500 transition-colors"
              >
                Technical Approaches
              </Link>
              <Link
                to="/focus-areas?tab=transition"
                className="text-white font-raleway text-base font-normal leading-[160%] hover:text-brand-primary-500 transition-colors"
              >
                Transition Finance
              </Link>
              <Link
                to="/focus-areas?tab=additional"
                className="text-white font-raleway text-base font-normal leading-[160%] hover:text-brand-primary-500 transition-colors"
              >
                Additional Alignment Areas
              </Link>
            </div>
          </div>

          {/* Learning and Resources */}
          <div className="flex flex-col gap-8 w-[240px]">
            <h3 className="text-white font-raleway text-lg font-bold leading-[130%]">
              Learning and Resources
            </h3>
            <div className="flex flex-col gap-5">
              <a
                href="#"
                className="text-white font-raleway text-base font-normal leading-[160%] hover:text-brand-primary-500 transition-colors"
              >
                Publications & Resources
              </a>
              <a
                href="#"
                className="text-white font-raleway text-base font-normal leading-[160%] hover:text-brand-primary-500 transition-colors"
              >
                Pillar 2: Technical Approaches
              </a>
              <a
                href="#"
                className="text-white font-raleway text-base font-normal leading-[160%] hover:text-brand-primary-500 transition-colors"
              >
                Other Learning Resources
              </a>
            </div>
          </div>

          {/* News and Events */}
          <div className="flex flex-col gap-8 w-[200px]">
            <h3 className="text-white font-raleway text-lg font-bold leading-[130%]">
              News and Events
            </h3>
            <div className="flex flex-col gap-5">
              <Link
                to="/news"
                className="text-white font-raleway text-base font-normal leading-[160%] hover:text-brand-primary-500 transition-colors"
              >
                News
              </Link>
              <Link
                to="/news#events"
                className="text-white font-raleway text-base font-normal leading-[160%] hover:text-brand-primary-500 transition-colors"
              >
                Events
              </Link>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-[rgba(223,239,230,0.38)]" />

        {/* Quick Links */}
        <div className="flex items-center gap-9">
          <a
            href="#"
            className="flex items-center gap-2 px-3 py-3 rounded-lg text-white font-raleway text-base hover:bg-white/10 transition-colors"
          >
            COP29 Launch Press Release
            <ArrowUpRight className="w-4 h-4" />
          </a>
          <a
            href="#"
            className="flex items-center gap-2 px-3 py-3 rounded-lg text-white font-raleway text-base hover:bg-white/10 transition-colors"
          >
            Roadmap Document
            <ArrowUpRight className="w-4 h-4" />
          </a>
          <a
            href="#"
            className="flex items-center gap-2 px-3 py-3 rounded-lg text-white font-raleway text-base hover:bg-white/10 transition-colors"
          >
            Geneva Roundtable Advisory
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-[rgba(223,239,230,0.38)]" />

        {/* Copyright */}
        <p className="text-white font-raleway text-[13px] font-light leading-normal">
          © 2025 Taxonomy Roadmap Initiative. Advancing sustainable finance
          taxonomy interoperability.
        </p>
      </div>
    </footer>
  );
}
