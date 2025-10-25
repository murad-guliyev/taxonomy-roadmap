import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  PieChart,
  Layers,
  BarChart2,
  ArrowRight,
  Download,
  ChevronUp,
  ChevronDown,
  ArrowUpRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Index() {
  const [expandedAccordion, setExpandedAccordion] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[651px] bg-bg-colored overflow-hidden">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/0710e8cda4c93164646cbb69c02ab0260611e8f6?width=3200"
          alt="Hero background"
          className="absolute inset-0 w-full h-full object-cover -top-[78px]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-[rgba(32,32,32,0.06)]" />

        <div className="relative z-10 max-w-[1170px] mx-auto px-[215px] pt-[250px]">
          <h1 className="text-white font-raleway text-[44px] font-bold leading-[52px] max-w-[670px] mb-8">
            Advancing Sustainable Finance from Baku to Belém
          </h1>
          <p className="text-white font-raleway text-base font-normal leading-[160%] max-w-[700px] mb-12">
            The international initiative to enhance the interoperability and
            comparability of sustainable finance taxonomies was launched at
            COP29 in Baku. Its goal is to support cross-border sustainable
            investments in line with Article 2.1(c) of the Paris Agreement.
          </p>
          <Link
            to="/about"
            className="inline-flex items-center justify-center gap-2 px-3 py-3 bg-brand-primary-500 text-white font-raleway text-base font-bold rounded-lg hover:bg-brand-primary-600 transition-colors w-[200px] h-[55px]"
          >
            Learn more
          </Link>
        </div>
      </section>

      {/* Key Elements Section */}
      <section className="py-[120px] px-[215px]">
        <div className="max-w-[1170px] mx-auto">
          <h2 className="text-brand-primary-900 font-raleway text-[32px] font-bold leading-[120%] mb-10">
            Key elements of the Taxonomy Roadmap
          </h2>

          <div className="grid grid-cols-3 gap-10">
            {/* Element 1 */}
            <div className="flex flex-col items-center gap-10">
              <div className="w-[100px] h-[100px] rounded-full border border-border-default flex items-center justify-center">
                <PieChart
                  className="w-12 h-12 text-brand-primary-500"
                  strokeWidth={2.5}
                />
              </div>
              <div className="flex flex-col gap-5">
                <h3 className="text-text-default font-raleway text-lg font-bold leading-[130%]">
                  Identifying a common core set of taxonomy economic activities,
                  particularly in EMDEs.
                </h3>
                <p className="text-text-default font-raleway text-base font-normal leading-[160%]">
                  Focus on essential economic sectors and activities critical
                  for Emerging Markets and Developing Economies to advance
                  decarbonization efforts.
                </p>
              </div>
            </div>

            {/* Element 2 */}
            <div className="flex flex-col items-center gap-10">
              <div className="w-[100px] h-[100px] rounded-full border border-border-default flex items-center justify-center">
                <Layers
                  className="w-12 h-12 text-brand-primary-500"
                  strokeWidth={2.5}
                />
              </div>
              <div className="flex flex-col gap-5">
                <h3 className="text-text-default font-raleway text-lg font-bold leading-[130%]">
                  Creating standardized approaches
                </h3>
                <p className="text-text-default font-raleway text-base font-normal leading-[160%]">
                  Developing common technical approaches for alignment with
                  taxonomy principles and essential criteria, including Do No
                  Significant Harm (DNSH), Minimum Social Safeguards (MSS) and
                  ESG guidelines. Creating standardized approaches that promote
                  interoperability while incorporating essential sustainability
                  criteria and safeguards.
                </p>
              </div>
            </div>

            {/* Element 3 */}
            <div className="flex flex-col items-center gap-10">
              <div className="w-[100px] h-[100px] rounded-full border border-border-default flex items-center justify-center">
                <BarChart2
                  className="w-12 h-12 text-brand-primary-500"
                  strokeWidth={2.5}
                />
              </div>
              <div className="flex flex-col gap-5">
                <h3 className="text-text-default font-raleway text-lg font-bold leading-[130%]">
                  Formulating common approaches to finance the transition
                  through taxonomies.
                </h3>
                <p className="text-text-default font-raleway text-base font-normal leading-[160%]">
                  Developing frameworks to support transition finance activities
                  that enable decarbonization across various economic sectors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Historic Launch Section */}
      <section className="py-[120px] px-[215px] bg-bg-colored relative overflow-hidden">
        {/* Decorative blurs */}
        <div className="absolute top-[-94px] right-[110px] w-[739px] h-[739px] rounded-full bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm opacity-50" />
        <div className="absolute top-[-27px] left-[-319px] w-[739px] h-[739px] rounded-full bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm opacity-50" />

        <div className="max-w-[1170px] mx-auto relative z-10">
          <div className="flex items-center gap-[26px]">
            <div className="flex-1 flex flex-col gap-10">
              <h2 className="text-white font-raleway text-[32px] font-bold leading-[120%]">
                Historic Launch at COP29 Baku
              </h2>
              <div className="flex flex-col gap-8">
                <p className="text-white font-raleway text-base font-normal leading-[160%]">
                  Baku, November 14, 2024: The Central Bank of the Republic of
                  Azerbaijan, in partnership with the International Finance
                  Corporation (IFC) through its Sustainable Banking and Finance
                  Network (SBFN), the International Platform on Sustainable
                  Finance (IPSF), the United Nations Development Programme
                  (UNDP), and with the support of the United Nations Environment
                  Programme Finance Initiative (UNEP FI) has launched the
                  "Roadmap for Advancing Interoperability and Comparability of
                  Sustainable Finance Taxonomies."
                </p>
                <p className="text-white font-raleway text-base font-normal leading-[160%]">
                  The Roadmap was officially unveiled during COP29's Finance,
                  Investment, and Trade Day at a high level event titled
                  "Advancing Sustainable Finance across the Globe: Roadmap
                  towards Interoperability and Comparability of Sustainable
                  Finance Taxonomies."
                </p>
              </div>
              <Link
                to="/about"
                className="inline-flex items-center justify-center gap-2 px-3 py-3 bg-brand-primary-500 text-white font-raleway text-base font-bold rounded-lg hover:bg-brand-primary-600 transition-colors w-[200px] h-[55px]"
              >
                Learn more
              </Link>
            </div>
            <div className="rounded-[26px] overflow-hidden bg-white">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/8388c2ad94191912189ed96093ad472f01bd8494?width=1516"
                alt="COP29 Event"
                className="w-[536px] h-[514px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap Publications */}
      <section className="py-[120px] px-[215px]">
        <div className="max-w-[1170px] mx-auto">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-brand-primary-900 font-raleway text-[32px] font-bold leading-[120%]">
              Roadmap Publications
            </h2>
            <button className="flex items-center gap-2 px-2 py-2 rounded-lg hover:bg-gray-100 transition-colors">
              <span className="text-text-default font-raleway text-base font-bold">
                See all
              </span>
              <ArrowRight className="w-4 h-4 text-text-default" />
            </button>
          </div>

          <div className="flex flex-col gap-8">
            <p className="text-text-default font-raleway text-base font-normal leading-[160%]">
              Access comprehensive documentation, reports, and guidelines for
              sustainable finance taxonomy implementation
            </p>

            <div className="flex flex-col gap-4">
              {/* Expanded Accordion Item */}
              <div className="border border-border-default rounded-lg bg-white p-4 flex flex-col gap-4">
                <button
                  onClick={() =>
                    setExpandedAccordion(expandedAccordion === 0 ? null : 0)
                  }
                  className="flex items-center justify-between w-full"
                >
                  <h3 className="text-text-default font-raleway text-base font-bold leading-[170%] text-left flex-1">
                    Roadmap for Advancing Interoperability and Comparability of
                    Sustainable Finance Taxonomies
                  </h3>
                  {expandedAccordion === 0 ? (
                    <ChevronUp className="w-5 h-5 text-text-default flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-text-default flex-shrink-0" />
                  )}
                </button>
                {expandedAccordion === 0 && (
                  <>
                    <p className="text-text-default font-raleway text-base font-normal leading-[140%]">
                      The comprehensive roadmap document outlining the
                      initiative's approach, key technical elements, and
                      implementation strategy for advancing global taxonomy
                      interoperability.
                      <br />
                      <br />
                      Key Features:
                      <br />
                      • Comprehensive framework analysis
                      <br />
                      • Implementation guidelines
                      <br />
                      • Best practice recommendations
                      <br />• Global case studies
                    </p>
                    <button className="flex items-center justify-center gap-2 px-3 py-3 bg-brand-primary-500 text-white font-raleway text-base rounded-lg hover:bg-brand-primary-600 transition-colors">
                      <Download className="w-4 h-4" />
                      Download PDF
                    </button>
                  </>
                )}
              </div>

              {/* Collapsed Items */}
              <div className="bg-brand-green-light border border-border-default rounded-lg p-4 flex items-center justify-between">
                <h3 className="text-brand-primary-900 font-raleway text-base font-bold leading-[170%]">
                  Annual Progress Report 2025
                </h3>
                <ChevronDown className="w-5 h-5 text-brand-primary-900" />
              </div>

              <div className="bg-brand-green-light border border-border-default rounded-lg p-4 flex items-center justify-between">
                <h3 className="text-brand-primary-900 font-raleway text-base font-bold leading-[170%]">
                  Technical Guidelines for Implementation
                </h3>
                <ChevronDown className="w-5 h-5 text-brand-primary-900" />
              </div>

              <div className="bg-brand-green-light border border-border-default rounded-lg p-4 flex items-center justify-between">
                <h3 className="text-brand-primary-900 font-raleway text-base font-bold leading-[170%]">
                  Global Taxonomy Mapper Tool Documentation
                </h3>
                <ChevronDown className="w-5 h-5 text-brand-primary-900" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News and Events */}
      <section className="py-[120px] px-[215px]">
        <div className="max-w-[1170px] mx-auto">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-brand-primary-900 font-raleway text-[32px] font-bold leading-[120%]">
              News and events
            </h2>
            <button className="flex items-center gap-2 px-2 py-2 rounded-lg hover:bg-gray-100 transition-colors">
              <span className="text-text-default font-raleway text-base font-bold">
                See all
              </span>
              <ArrowRight className="w-4 h-4 text-text-default" />
            </button>
          </div>

          <div className="grid grid-cols-3 gap-10">
            {/* News Item 1 */}
            <div className="flex flex-col gap-4">
              <div className="relative h-[350px] bg-white rounded-lg overflow-hidden">
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
              <div className="relative h-[350px] bg-white rounded-lg overflow-hidden">
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
              <div className="relative h-[350px] bg-white rounded-lg overflow-hidden">
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
          </div>
        </div>
      </section>

      {/* COP30 Event */}
      <section className="py-[120px] px-[215px] bg-bg-colored relative overflow-hidden">
        {/* Decorative blurs */}
        <div className="absolute top-[-94px] right-[110px] w-[739px] h-[739px] rounded-full bg-gradient-to-br from-brand-primary-500/5 to-transparent backdrop-blur-sm" />
        <div className="absolute top-[-27px] left-[-319px] w-[739px] h-[739px] rounded-full bg-gradient-to-br from-brand-primary-500/5 to-transparent backdrop-blur-sm" />

        <div className="max-w-[1170px] mx-auto relative z-10">
          <h2 className="text-white font-raleway text-[32px] font-bold leading-[120%] mb-10">
            UN Climate Change Conference - COP30 Event
          </h2>

          <div className="flex items-center gap-11">
            <div className="bg-white rounded-[20px] p-8 flex items-center justify-center w-[424px] h-[368px]">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/5622f7bf295f753036df132b00d6137138ca2beb?width=606"
                alt="COP30 Logo"
                className="w-[303px] h-[303px]"
              />
            </div>

            <div className="flex-1 flex flex-col gap-5">
              <h3 className="text-white font-raleway text-xl font-bold leading-[130%]">
                About the event
              </h3>
              <p className="text-white font-raleway text-base font-normal leading-[160%]">
                This event builds on the momentum of the Sustainable Finance
                Taxonomies event held in Baku, Azerbaijan during COP29, where
                the "Roadmap for Advancing Interoperability and Comparability of
                Sustainable Finance Taxonomies" (Taxonomy Roadmap Initiative)
                was launched by the Central Bank of Azerbaijan (CBAR),
                International Finance Corporation (IFC), Sustainable Banking and
                Finance Network (SBFN), the United Nations Development Programme
                (UNDP), and the International Platform on Sustainable Finance
                (IPSF).
                <br />
                <br />
                The initiative aims to facilitate cross-border investment flows
                into sustainable activities, in line with Article 2.1(c) of the
                Paris Agreement. The focus of this event is to showcase progress
                on the Taxonomy Roadmap, driven by joint collaboration,
                coordination and communication.
                <br />
                Since the launch, the initiative has expanded its partnership
                from the founding partners to 13 global and public partners.
                Notably, the Brazil Ministry of Finance, representing the
                Presidency of COP30, joined the initiative to further advance
                the implementation of the initiative along the Road of Baku to
                Belém.
              </p>
              <div>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 px-3 py-3 rounded-lg text-white font-raleway text-base font-bold hover:bg-white/10 transition-colors"
                >
                  Visit website
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-[120px] px-[215px]">
        <div className="max-w-[1170px] mx-auto">
          <h2 className="text-brand-primary-900 font-raleway text-[32px] font-bold leading-[120%] mb-10">
            Partners
          </h2>

          <p className="text-text-default font-raleway text-base font-normal leading-[160%] mb-8">
            Leading global institutions and initiatives working together to
            advance interoperability and comparability of sustainable finance
            taxonomies
          </p>

          <div className="grid grid-cols-3 gap-10">
            {/* Partner 1 */}
            <div className="border border-border-default rounded-lg p-6 bg-white flex flex-col gap-6">
              <div className="h-[160px] flex items-center justify-center">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/57fb36292b299a828655b38f9fbb076ddd8588c4?width=604"
                  alt="CBAR Logo"
                  className="max-h-14"
                />
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="text-text-default font-raleway text-lg font-bold leading-[130%]">
                  Central Bank of the Republic of Azerbaijan (CBAR)
                </h3>
                <p className="text-text-secondary font-raleway text-base font-normal leading-[160%]">
                  The Central Bank of the COP29 host country, leading the
                  initiative to advance sustainable finance taxonomies.
                </p>
                <a
                  href="#"
                  className="flex items-center gap-2 px-3 py-3 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <span className="text-text-default font-raleway text-base">
                    Visit website
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-text-default" />
                </a>
              </div>
            </div>

            {/* Partner 2 */}
            <div className="border border-border-default rounded-lg p-6 bg-white flex flex-col gap-6">
              <div className="h-[160px] flex items-center justify-center">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/5d52f8d72793256ea6c36d87f58b7a1bafd0d060?width=604"
                  alt="IFC Logo"
                  className="max-h-[302px]"
                />
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="text-text-default font-raleway text-lg font-bold leading-[130%]">
                  International Finance Corporation (IFC)
                </h3>
                <p className="text-text-secondary font-raleway text-base font-normal leading-[160%]">
                  World Bank Group member focused on private sector development
                  in emerging markets.
                </p>
                <a
                  href="#"
                  className="flex items-center gap-2 px-3 py-3 rounded-lg bg-button-neutral border border-border-subtle-green hover:bg-brand-green-light transition-colors"
                >
                  <span className="text-text-default font-raleway text-base">
                    Visit website
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-text-default" />
                </a>
              </div>
            </div>

            {/* Partner 3 */}
            <div className="border border-border-default rounded-lg p-6 bg-white flex flex-col gap-6">
              <div className="h-[160px] flex items-center justify-center">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/47a0ac9afdc32c15e5acfccd3860e49702a5c213?width=604"
                  alt="SBFN Logo"
                  className="max-h-[101px]"
                />
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="text-text-default font-raleway text-lg font-bold leading-[130%]">
                  Sustainable Banking and Finance Network (SBFN)
                </h3>
                <p className="text-text-secondary font-raleway text-base font-normal leading-[160%]">
                  IFC-supported network of financial sector regulators and
                  industry associations.
                </p>
                <a
                  href="#"
                  className="flex items-center gap-2 px-3 py-3 rounded-lg bg-button-neutral border border-border-subtle-green hover:bg-brand-green-light transition-colors"
                >
                  <span className="text-text-default font-raleway text-base">
                    Visit website
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-text-default" />
                </a>
              </div>
            </div>

            {/* Partner 4 */}
            <div className="border border-border-default rounded-lg p-6 bg-white flex flex-col gap-6">
              <div className="h-[160px] flex items-center justify-center">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/c835f4ceff02c9265c818e6d584fe42a82f841c6?width=600"
                  alt="UNDP Logo"
                  className="max-h-[300px]"
                />
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="text-text-default font-raleway text-lg font-bold leading-[130%]">
                  United Nations Development Programme (UNDP)
                </h3>
                <p className="text-text-secondary font-raleway text-base font-normal leading-[160%]">
                  UN agency working to eradicate poverty and reduce inequalities
                  through sustainable development.
                </p>
                <a
                  href="#"
                  className="flex items-center gap-2 px-3 py-3 rounded-lg bg-button-neutral border border-border-subtle-green hover:bg-brand-green-light transition-colors"
                >
                  <span className="text-text-default font-raleway text-base">
                    Visit website
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-text-default" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
