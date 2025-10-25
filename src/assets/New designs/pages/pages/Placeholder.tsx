import { useLocation } from "react-router-dom";
import Navigation from "../../../components/Navigation";
import Footer from "../../../components/Footer";

export default function Placeholder() {
  const location = useLocation();
  const pageName = location.pathname
    .split("/")
    .filter(Boolean)
    .join(" > ")
    .replace(/-/g, " ");

  return (
    <div className="w-full bg-[#fafafa]">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[400px] w-full overflow-hidden bg-[#2a5942] pt-64">
        {/* Decorative Circles */}
        <div className="absolute top-[150px] right-[-200px] w-[777px] h-[803px] rounded-full opacity-10 bg-gradient-to-br from-white/5 to-transparent blur-sm" />
        <div className="absolute top-[40px] right-[-100px] w-[724px] h-[747px] rounded-full opacity-10 bg-gradient-to-br from-white/5 to-transparent blur-sm" />

        <div className="relative z-10 max-w-[1170px] mx-auto px-4 pb-20">
          <h1 className="text-[32px] font-semibold text-white leading-[120%] mb-4 capitalize">
            {pageName || "Page"}
          </h1>
          <p className="text-[16px] text-[#f3f3f3] leading-[153%] max-w-[700px]">
            This page is currently being developed
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="max-w-[1170px] mx-auto px-4">
          <div className="flex flex-col items-center justify-center text-center">
            <div className="w-[120px] h-[120px] rounded-full border-4 border-[#cfded1] flex items-center justify-center mb-8">
              <svg
                className="w-16 h-16 text-[#2a5942]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <h2 className="text-[32px] font-semibold text-[#1b3629] leading-[120%] mb-4">
              Page Under Construction
            </h2>
            <p className="text-[16px] text-[#333] leading-[170%] mb-2 max-w-[600px]">
              This page is currently being developed. Content will be available soon.
            </p>
            <p className="text-[14px] text-[#666] leading-[153%] max-w-[600px]">
              Continue prompting to fill in this page's contents if you'd like it built out now.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
