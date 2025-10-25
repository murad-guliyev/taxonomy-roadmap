import { PieChart, Layers, BarChart2 } from "lucide-react";

const AboutInitiative = () => {
  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="relative h-[300px] sm:h-[350px] lg:h-[387px] bg-[#2a5942] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#3dac5c]/5 to-transparent backdrop-blur-sm" />

        <div className="relative z-10 max-w-[1170px] mx-auto px-4 sm:px-6 pt-32 sm:pt-40 md:pt-48 lg:pt-[289px]">
          <h1 className="text-white text-[24px] sm:text-[28px] lg:text-[32px] font-semibold leading-[120%]">
            About the initiative
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-[60px] sm:py-[90px] lg:py-[120px] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[215px]">
        <div className="max-w-[1170px] mx-auto flex flex-col gap-8 sm:gap-10 lg:gap-[50px]">
          {/* Introduction */}
          <div className="flex flex-col gap-6 sm:gap-8">
            <p className="text-[#333] text-[14px] sm:text-base leading-[160%]">
              "Roadmap for Advancing Interoperability and Comparability of
              Sustainable Finance Taxonomies" (Taxonomy Roadmap Initiative) was
              launched by the Central Bank of Azerbaijan (CBAR), International
              Finance Corporation (IFC), Sustainable Banking and Finance Network
              (SBFN), the United Nations Development Programme (UNDP), and the
              International Platform on Sustainable Finance (IPSF) during
              Sustainable Finance Taxonomies event held in Baku, Azerbaijan
              during COP29.
            </p>
            <p className="text-[#333] text-[14px] sm:text-base leading-[160%]">
              The initiative aims to facilitate cross-border investment flows
              into sustainable activities, in line with Article 2.1(c) of the
              Paris Agreement. The focus of this event is to showcase progress
              on the Taxonomy Roadmap, driven by joint collaboration,
              coordination and communication. Since the launch, the initiative
              has expanded its partnership from the founding partners to 13
              global and public partners. Notably, the Brazil Ministry of
              Finance, representing the Presidency of COP30, joined the
              initiative to further advance the implementation of the initiative
              along the Road of Baku to Belém.
            </p>
          </div>

          {/* Initiative Activities */}
          <div className="flex flex-col gap-4 sm:gap-6">
            <h2 className="text-[#1b3629] text-lg sm:text-xl font-semibold leading-[130%]">
              Initiative Activities and Engagement
            </h2>
            <p className="text-[#333] text-[14px] sm:text-base leading-[160%]">
              The initiative partners have engaged in high-level discussions and
              roundtables sharing the insights of sustainable finance taxonomies
              and interoperability at major forums such as:
            </p>
            <ul className="list-disc list-inside space-y-2 text-[#333] text-[14px] sm:text-base leading-[160%] pl-4">
              <li>G20 Sustainable Finance Working Group meetings</li>
              <li>BRICS+ Taxonomy Working Group meeting</li>
              <li>IPSF SN@psa Meeting</li>
              <li>Hamburg Sustainability Conference 2025</li>
              <li>UN Financing for Development Conference (FfD4)</li>
            </ul>
            <p className="text-[#333] text-[14px] sm:text-base leading-[160%]">
              The initiative partners have been developing flagship tools and
              deliverables to support the implementation of the Taxonomy Roadmap
              and advance global sustainable finance taxonomy interoperability.
            </p>
          </div>

          {/* Key Elements */}
          <div className="flex flex-col gap-6 sm:gap-8 bg-gray-50 p-4 sm:p-6 lg:p-8 rounded-2xl">
            <h2 className="text-[#1b3629] text-lg sm:text-xl font-semibold leading-[130%]">
              Key elements of the Taxonomy Roadmap
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
              {/* Element 1 */}
              <div className="flex flex-col items-center gap-6 lg:gap-10">
                <div className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] rounded-full border border-[#d9d9d9] flex items-center justify-center bg-white">
                  <PieChart
                    className="w-10 h-10 sm:w-12 sm:h-12 text-[#3dac5c]"
                    strokeWidth={2.5}
                  />
                </div>
                <div className="flex flex-col gap-3 sm:gap-5 text-center">
                  <h3 className="text-[#2a5942] text-base sm:text-lg font-semibold leading-[130%]">
                    Identifying a common core set of taxonomy economic
                    activities, particularly in EMDEs.
                  </h3>
                  <p className="text-[#333] text-[14px] sm:text-base leading-[160%]">
                    Focus on essential economic sectors and activities critical
                    for Emerging Markets and Developing Economies to advance
                    decarbonization efforts.
                  </p>
                </div>
              </div>

              {/* Element 2 */}
              <div className="flex flex-col items-center gap-6 lg:gap-10">
                <div className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] rounded-full border border-[#d9d9d9] flex items-center justify-center bg-white">
                  <Layers
                    className="w-10 h-10 sm:w-12 sm:h-12 text-[#3dac5c]"
                    strokeWidth={2.5}
                  />
                </div>
                <div className="flex flex-col gap-3 sm:gap-5 text-center">
                  <h3 className="text-[#2a5942] text-base sm:text-lg font-semibold leading-[130%]">
                    Creating standardized approaches
                  </h3>
                  <p className="text-[#333] text-[14px] sm:text-base leading-[160%]">
                    Developing common technical approaches for alignment with
                    taxonomy principles and essential criteria, including Do No
                    Significant Harm (DNSH), Minimum Social Safeguards (MSS) and
                    ESG guidelines. Creating standardized approaches that
                    promote interoperability while incorporating essential
                    sustainability criteria and safeguards.
                  </p>
                </div>
              </div>

              {/* Element 3 */}
              <div className="flex flex-col items-center gap-6 lg:gap-10">
                <div className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] rounded-full border border-[#d9d9d9] flex items-center justify-center bg-white">
                  <BarChart2
                    className="w-10 h-10 sm:w-12 sm:h-12 text-[#3dac5c]"
                    strokeWidth={2.5}
                  />
                </div>
                <div className="flex flex-col gap-3 sm:gap-5 text-center">
                  <h3 className="text-[#2a5942] text-base sm:text-lg font-semibold leading-[130%]">
                    Formulating common approaches to finance the transition
                    through taxonomies.
                  </h3>
                  <p className="text-[#333] text-[14px] sm:text-base leading-[160%]">
                    Developing frameworks to support transition finance
                    activities that enable decarbonization across various
                    economic sectors.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Areas */}
          <div className="flex flex-col gap-4 sm:gap-6">
            <h2 className="text-[#1b3629] text-lg sm:text-xl font-semibold leading-[130%]">
              Additional Areas for Greater Alignment
            </h2>
            <p className="text-[#333] text-[14px] sm:text-base font-semibold leading-[170%]">
              Areas for even greater alignment that may also be explored
            </p>

            <div className="flex flex-col md:flex-row gap-6 lg:gap-11">
              <div className="flex-1 flex flex-col gap-3 sm:gap-5 p-4 sm:p-5 border border-[#d9d9d9] rounded-2xl bg-[rgba(223,239,230,0.6)]">
                <h3 className="text-[#2a5942] text-base sm:text-lg font-semibold leading-[130%]">
                  Inclusivity in Alignment Approaches
                </h3>
                <p className="text-[#333] text-[14px] sm:text-base leading-[160%]">
                  Ensuring small and medium-sized enterprises (SMEs), women and
                  vulnerable groups.
                </p>
              </div>

              <div className="flex-1 flex flex-col gap-3 sm:gap-5 p-4 sm:p-5 border border-[#d9d9d9] rounded-2xl bg-[rgba(223,239,230,0.6)]">
                <h3 className="text-[#2a5942] text-base sm:text-lg font-semibold leading-[130%]">
                  Verification and Assurance Mechanism
                </h3>
                <p className="text-[#333] text-[14px] sm:text-base leading-[160%]">
                  Developing robust verification and assurance mechanisms for
                  taxonomy alignment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutInitiative;
