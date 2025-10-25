import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function News() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[387px] bg-bg-colored overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-primary-500/5 to-transparent backdrop-blur-sm" />

        <div className="relative z-10 max-w-[1170px] mx-auto px-[215px] pt-[289px]">
          <h1 className="text-white font-raleway text-[32px] font-bold leading-[120%]">
            News and Events
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-[120px] px-[215px]">
        <div className="max-w-[1170px] mx-auto">
          <div className="grid grid-cols-3 gap-10">
            {/* News Item 1 */}
            <div className="flex flex-col gap-4">
              <div className="relative h-[350px] bg-white rounded-lg overflow-hidden border border-border-default">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/54a9745bb95f42c40b364dea487269ca6c0f3f52?width=1112"
                  alt="News"
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-4 left-4 px-2.5 py-1 bg-button-neutral rounded-2xl text-text-default text-center font-raleway text-xs font-bold">
                  Articles
                </span>
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="text-text-default font-raleway text-lg font-bold leading-[130%]">
                  SBFN and CASI co-host a roundtable discussion to advance
                  Sustainable Finance Taxonomy Interoperability in Africa
                </h3>
                <p className="text-text-secondary font-raleway text-sm font-normal">
                  May 2025
                </p>
              </div>
            </div>

            {/* News Item 2 */}
            <div className="flex flex-col gap-4">
              <div className="relative h-[350px] bg-white rounded-lg overflow-hidden border border-border-default">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/937e2c24b51f75b4a5ec9370cf02bfb6b1aa649c?width=1378"
                  alt="Event"
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-4 left-4 px-2.5 py-1 bg-button-neutral rounded-2xl text-text-default text-center font-raleway text-xs font-bold">
                  Event
                </span>
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="text-text-default font-raleway text-lg font-bold leading-[130%]">
                  Global Partners Advance Sustainable Finance Taxonomy
                  Interoperability
                </h3>
                <p className="text-text-secondary font-raleway text-sm font-normal">
                  January 2025
                </p>
              </div>
            </div>

            {/* News Item 3 */}
            <div className="flex flex-col gap-4">
              <div className="relative h-[350px] bg-white rounded-lg overflow-hidden border border-border-default">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/79a85bffd031bb1acf92585d668668f7627f5913?width=1136"
                  alt="News"
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-4 left-4 px-2.5 py-1 bg-button-neutral rounded-2xl text-text-default text-center font-raleway text-xs font-bold">
                  Articles
                </span>
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="text-text-default font-raleway text-lg font-bold leading-[130%]">
                  Roadmap for Advancing Interoperability and Comparability of
                  Sustainable Finance Taxonomies Launched
                </h3>
                <p className="text-text-secondary font-raleway text-sm font-normal">
                  November 2024
                </p>
              </div>
            </div>

            {/* Duplicate items for more content */}
            <div className="flex flex-col gap-4">
              <div className="relative h-[350px] bg-white rounded-lg overflow-hidden border border-border-default">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/54a9745bb95f42c40b364dea487269ca6c0f3f52?width=1112"
                  alt="News"
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-4 left-4 px-2.5 py-1 bg-button-neutral rounded-2xl text-text-default text-center font-raleway text-xs font-bold">
                  Event
                </span>
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="text-text-default font-raleway text-lg font-bold leading-[130%]">
                  Sustainable Finance Working Group Annual Meeting 2025
                </h3>
                <p className="text-text-secondary font-raleway text-sm font-normal">
                  March 2025
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="relative h-[350px] bg-white rounded-lg overflow-hidden border border-border-default">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/937e2c24b51f75b4a5ec9370cf02bfb6b1aa649c?width=1378"
                  alt="News"
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-4 left-4 px-2.5 py-1 bg-button-neutral rounded-2xl text-text-default text-center font-raleway text-xs font-bold">
                  Articles
                </span>
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="text-text-default font-raleway text-lg font-bold leading-[130%]">
                  New Technical Guidelines Released for Taxonomy Implementation
                </h3>
                <p className="text-text-secondary font-raleway text-sm font-normal">
                  February 2025
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="relative h-[350px] bg-white rounded-lg overflow-hidden border border-border-default">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/79a85bffd031bb1acf92585d668668f7627f5913?width=1136"
                  alt="Event"
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-4 left-4 px-2.5 py-1 bg-button-neutral rounded-2xl text-text-default text-center font-raleway text-xs font-bold">
                  Event
                </span>
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="text-text-default font-raleway text-lg font-bold leading-[130%]">
                  Hamburg Sustainability Conference Highlights Taxonomy
                  Initiative
                </h3>
                <p className="text-text-secondary font-raleway text-sm font-normal">
                  January 2025
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
