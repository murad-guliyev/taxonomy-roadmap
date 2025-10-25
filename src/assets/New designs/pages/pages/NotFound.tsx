import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Navigation from "../../../components/Navigation";
import Footer from "../../../components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="w-full bg-[#fafafa]">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[400px] w-full overflow-hidden bg-[#2a5942] pt-64">
        {/* Decorative Circles */}
        <div className="absolute top-[150px] right-[-200px] w-[777px] h-[803px] rounded-full opacity-10 bg-gradient-to-br from-white/5 to-transparent blur-sm" />
        <div className="absolute top-[40px] right-[-100px] w-[724px] h-[747px] rounded-full opacity-10 bg-gradient-to-br from-white/5 to-transparent blur-sm" />

        <div className="relative z-10 max-w-[1170px] mx-auto px-4 pb-20">
          <h1 className="text-[32px] font-semibold text-white leading-[120%] mb-4">
            404 - Page Not Found
          </h1>
          <p className="text-[16px] text-[#f3f3f3] leading-[153%] max-w-[700px]">
            The page you're looking for doesn't exist
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
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h2 className="text-[32px] font-semibold text-[#1b3629] leading-[120%] mb-4">
              Oops! Page not found
            </h2>
            <p className="text-[16px] text-[#333] leading-[170%] mb-8 max-w-[600px]">
              The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>
            <Link
              to="/"
              className="inline-block bg-[#2a5942] text-white px-8 py-3 rounded-lg text-[16px] font-semibold hover:bg-[#3dac5c] transition-colors"
            >
              Return to Home
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NotFound;
