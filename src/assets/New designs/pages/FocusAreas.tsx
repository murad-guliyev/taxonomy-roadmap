import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useSearchParams } from "react-router-dom";
import { Clipboard, Grid, Sliders, Clock } from "lucide-react";

export default function FocusAreas() {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentTab = searchParams.get("tab") || "common-core";

  const tabs = [
    { id: "common-core", label: "Common Core Activities" },
    { id: "technical", label: "Technical Approaches" },
    { id: "transition", label: "Transition Finance Approaches" },
    { id: "additional", label: "Additional Areas for Greater Alignment" },
  ];

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[387px] bg-bg-colored overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-primary-500/5 to-transparent backdrop-blur-sm" />

        <div className="relative z-10 max-w-[1170px] mx-auto px-[215px] pt-[289px]">
          <h1 className="text-white font-raleway text-[32px] font-bold leading-[120%]">
            Focus Areas and Tools
          </h1>
        </div>
      </section>

      {/* Tabs Navigation */}
      <section className="bg-[#ECECEC] px-[215px]">
        <div className="max-w-[1170px] mx-auto flex items-center gap-8 py-5 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSearchParams({ tab: tab.id })}
              className={`whitespace-nowrap font-raleway text-xl font-bold leading-[130%] pb-2 border-b-2 transition-colors ${
                currentTab === tab.id
                  ? "text-brand-primary-900 border-brand-primary-500"
                  : "text-brand-primary-900 border-transparent hover:border-brand-primary-500/50"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-[120px] px-[215px]">
        <div className="max-w-[1170px] mx-auto">
          {currentTab === "common-core" && (
            <div className="flex flex-col gap-[50px]">
              <div className="flex flex-col gap-8">
                <h2 className="text-brand-primary-900 font-raleway text-xl font-bold leading-[130%]">
                  Common Core Activities
                </h2>
                <p className="text-black font-raleway text-base font-normal leading-[160%]">
                  Identifying a common core set of taxonomy economic activities,
                  particularly in EMDEs
                </p>
              </div>

              <div className="flex flex-col gap-6">
                <h3 className="text-brand-primary-900 font-raleway text-lg font-bold leading-[130%]">
                  Overview
                </h3>
                <p className="text-black font-raleway text-base font-normal leading-[160%]">
                  Identifying essential sectors and activities for Emerging
                  Markets and Developing Economies (EMDEs) with a shared
                  classification system. This element aims to identify a core
                  set of economic sectors and economic activities, particularly
                  for EMDEs, which are critical for advancing decarbonization.
                  <br />
                  <br />
                  Existing comparison exercises, such as the IPSF's Common
                  Ground Taxonomy, will inform this exercise. Interoperability
                  for these core sectors and activities can be explored through:
                  <br />
                  <br />
                  • Use of a shared classification system, such as the
                  International Standard Industrial Classification (ISIC), to
                  serve as a reference for identifying relevant economic
                  activities
                  <br />
                  • A shared approach for defining categories, activities,
                  metrics, and technical criteria
                  <br />• Recommendations for possible tiered approaches to
                  treat common activities differently based on market maturity
                  and national pathways, while maintaining science-based
                  ambition in meeting Paris Agreement goals
                </p>
              </div>

              <div className="border border-border-default rounded-2xl p-8 bg-white">
                <h3 className="text-brand-primary-900 font-raleway text-xl font-bold leading-[130%] mb-8">
                  Key Technical Approaches
                </h3>

                <div className="grid grid-cols-3 gap-10">
                  <div className="flex flex-col items-center gap-10">
                    <div className="w-[100px] h-[100px] rounded-full border border-border-default flex items-center justify-center">
                      <Clipboard
                        className="w-12 h-12 text-brand-primary-500"
                        strokeWidth={2.5}
                      />
                    </div>
                    <div className="flex flex-col gap-5">
                      <h4 className="text-bg-colored font-raleway text-lg font-bold leading-[130%]">
                        Shared Classification
                      </h4>
                      <p className="text-text-default font-raleway text-base font-normal leading-[160%]">
                        Using International Standard Industrial Classification
                        (ISIC) as a reference framework.
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col items-center gap-10">
                    <div className="w-[100px] h-[100px] rounded-full border border-border-default flex items-center justify-center">
                      <Grid
                        className="w-12 h-12 text-brand-primary-500"
                        strokeWidth={2.5}
                      />
                    </div>
                    <div className="flex flex-col gap-5">
                      <h4 className="text-bg-colored font-raleway text-lg font-bold leading-[130%]">
                        Common Criteria
                      </h4>
                      <p className="text-text-default font-raleway text-base font-normal leading-[160%]">
                        Developing shared approaches for defining categories,
                        activities, and metrics.
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col items-center gap-10">
                    <div className="w-[100px] h-[100px] rounded-full border border-border-default flex items-center justify-center">
                      <Sliders
                        className="w-12 h-12 text-brand-primary-500"
                        strokeWidth={2.5}
                      />
                    </div>
                    <div className="flex flex-col gap-5">
                      <h4 className="text-bg-colored font-raleway text-lg font-bold leading-[130%]">
                        Tiered Approaches
                      </h4>
                      <p className="text-text-default font-raleway text-base font-normal leading-[160%]">
                        Recommendations for treating activities based on market
                        maturity and national pathways.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {currentTab === "technical" && (
            <div className="flex flex-col gap-[50px]">
              <div className="flex flex-col gap-8">
                <h2 className="text-brand-primary-900 font-raleway text-xl font-bold leading-[130%]">
                  Technical Approaches
                </h2>
                <p className="text-black font-raleway text-base font-normal leading-[160%]">
                  Creating standardized approaches for alignment with taxonomy
                  principles
                </p>
              </div>

              <div className="flex flex-col gap-6">
                <h3 className="text-brand-primary-900 font-raleway text-lg font-bold leading-[130%]">
                  Overview
                </h3>
                <p className="text-black font-raleway text-base font-normal leading-[160%]">
                  Developing common technical approaches for alignment with
                  taxonomy principles and essential criteria, including Do No
                  Significant Harm (DNSH), Minimum Social Safeguards (MSS) and
                  ESG guidelines.
                  <br />
                  <br />
                  This pillar focuses on creating standardized methodologies
                  that promote interoperability while incorporating essential
                  sustainability criteria and safeguards across different
                  jurisdictions.
                </p>
              </div>

              <div className="flex flex-col gap-6">
                <h3 className="text-brand-primary-900 font-raleway text-xl font-bold leading-[130%]">
                  Key Components
                </h3>

                <div className="flex flex-col gap-[50px]">
                  <div className="flex gap-[60px]">
                    <div className="rounded-2xl overflow-hidden w-[535px] h-[350px]">
                      <img
                        src="https://api.builder.io/api/v1/image/assets/TEMP/672a05fd72f6227f455f7ee32b8e33cc9b7402e7?width=1242"
                        alt="Environmental safeguards"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 flex flex-col gap-6">
                      <h4 className="text-bg-colored font-raleway text-xl font-bold leading-[130%]">
                        Do No Significant Harm (DNSH)
                      </h4>
                      <p className="text-text-default font-raleway text-base font-normal leading-[160%]">
                        • Environmental safeguard principles
                        <br />
                        • Impact assessment methodologies
                        <br />
                        • Threshold setting approaches
                        <br />• Monitoring and verification systems
                      </p>
                    </div>
                  </div>

                  <div className="w-full h-px bg-border-subtle-green" />

                  <div className="flex gap-[60px]">
                    <div className="flex-1 flex flex-col gap-6">
                      <h4 className="text-bg-colored font-raleway text-xl font-bold leading-[130%]">
                        Minimum Social Safeguards (MSS)
                      </h4>
                      <p className="text-text-default font-raleway text-base font-normal leading-[160%]">
                        • Social impact assessment
                        <br />
                        • Stakeholder engagement requirements
                        <br />
                        • Labor rights and standards
                        <br />• Community consultation processes
                      </p>
                    </div>
                    <div className="rounded-2xl overflow-hidden w-[535px] h-[350px]">
                      <img
                        src="https://api.builder.io/api/v1/image/assets/TEMP/253bed79d8211474a79ee9fd2ee77acd595b89fa?width=1070"
                        alt="Social safeguards"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {currentTab === "transition" && (
            <div className="flex flex-col gap-[50px]">
              <div className="flex flex-col gap-8">
                <h2 className="text-brand-primary-900 font-raleway text-xl font-bold leading-[130%]">
                  Transition Finance Approaches
                </h2>
                <p className="text-black font-raleway text-base font-normal leading-[160%]">
                  Formulating common approaches to finance the transition
                  through taxonomies
                </p>
              </div>

              <div className="flex flex-col gap-6">
                <h3 className="text-brand-primary-900 font-raleway text-lg font-bold leading-[130%]">
                  Overview
                </h3>
                <p className="text-black font-raleway text-base font-normal leading-[160%]">
                  Formulating common approaches to finance the transition
                  through taxonomies. This pillar develops frameworks to support
                  transition finance activities that enable decarbonization
                  across various economic sectors.
                  <br />
                  <br />
                  Transition finance is critical for supporting activities that
                  may not yet be fully sustainable but are on a credible pathway
                  toward achieving sustainability goals.
                </p>
              </div>

              <div className="border border-border-default rounded-2xl p-8 bg-white">
                <h3 className="text-brand-primary-900 font-raleway text-xl font-bold leading-[130%] mb-8">
                  Transition Finance Framework
                </h3>

                <div className="grid grid-cols-3 gap-10">
                  <div className="flex flex-col items-center gap-10">
                    <div className="w-[100px] h-[100px] rounded-full border border-border-default flex items-center justify-center">
                      <Clock
                        className="w-12 h-12 text-brand-primary-500"
                        strokeWidth={2.5}
                      />
                    </div>
                    <div className="flex flex-col gap-5">
                      <h4 className="text-bg-colored font-raleway text-lg font-bold leading-[130%]">
                        Pathway Definition
                      </h4>
                      <p className="text-text-default font-raleway text-base font-normal leading-[160%]">
                        Clear criteria for credible transition pathways aligned
                        with climate goals.
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col items-center gap-10">
                    <div className="w-[100px] h-[100px] rounded-full border border-border-default flex items-center justify-center">
                      <Clock
                        className="w-12 h-12 text-brand-primary-500"
                        strokeWidth={2.5}
                      />
                    </div>
                    <div className="flex flex-col gap-5">
                      <h4 className="text-bg-colored font-raleway text-lg font-bold leading-[130%]">
                        Timeline Requirements
                      </h4>
                      <p className="text-text-default font-raleway text-base font-normal leading-[160%]">
                        Time-bound commitments and milestones for achieving
                        transition goals.
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col items-center gap-10">
                    <div className="w-[100px] h-[100px] rounded-full border border-border-default flex items-center justify-center">
                      <Sliders
                        className="w-12 h-12 text-brand-primary-500"
                        strokeWidth={2.5}
                      />
                    </div>
                    <div className="flex flex-col gap-5">
                      <h4 className="text-bg-colored font-raleway text-lg font-bold leading-[130%]">
                        Monitoring & Reporting
                      </h4>
                      <p className="text-text-default font-raleway text-base font-normal leading-[160%]">
                        Regular progress tracking and transparent reporting
                        mechanisms.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {currentTab === "additional" && (
            <div className="flex flex-col gap-[50px]">
              <div className="flex flex-col gap-8">
                <h2 className="text-brand-primary-900 font-raleway text-xl font-bold leading-[130%]">
                  Additional Areas for Greater Alignment
                </h2>
                <p className="text-text-default font-raleway text-base font-bold leading-[170%]">
                  Areas for even greater alignment that may also be explored
                </p>
              </div>

              <div className="flex gap-11">
                <div className="flex-1 flex flex-col gap-5 p-5 border border-border-default rounded-2xl bg-brand-primary-50/60">
                  <h3 className="text-bg-colored font-raleway text-lg font-bold leading-[130%]">
                    Inclusivity in Alignment Approaches
                  </h3>
                  <p className="text-text-default font-raleway text-base font-normal leading-[160%]">
                    Ensuring small and medium-sized enterprises (SMEs), women
                    and vulnerable groups.
                  </p>
                </div>

                <div className="flex-1 flex flex-col gap-5 p-5 border border-border-default rounded-2xl bg-brand-primary-50/60">
                  <h3 className="text-bg-colored font-raleway text-lg font-bold leading-[130%]">
                    Verification and Assurance Mechanism
                  </h3>
                  <p className="text-text-default font-raleway text-base font-normal leading-[160%]">
                    Developing robust verification and assurance mechanisms for
                    taxonomy alignment.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
