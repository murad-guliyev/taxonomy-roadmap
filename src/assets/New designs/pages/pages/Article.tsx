import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navigation from "../../../components/Navigation";
import Footer from "../../../components/Footer";

export default function NewsArticle() {
  const { id } = useParams();

  return (
    <div className="w-full bg-[#fafafa]">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-auto w-full overflow-hidden bg-[#2a5942] pt-64 pb-12">
        {/* Decorative Circles */}
        <div className="absolute top-[150px] right-[-200px] w-[777px] h-[803px] rounded-full opacity-10 bg-gradient-to-br from-white/5 to-transparent blur-sm" />
        <div className="absolute top-[40px] right-[-100px] w-[724px] h-[747px] rounded-full opacity-10 bg-gradient-to-br from-white/5 to-transparent blur-sm" />

        <div className="relative z-10 max-w-[1170px] mx-auto px-4">
          <Link
            to="/news"
            className="inline-flex items-center gap-2 text-[16px] text-white hover:text-[#3dac5c] transition-colors mb-8"
          >
            <ArrowLeft size={20} />
            Back to News and Events
          </Link>
          <h1 className="text-[40px] md:text-[48px] font-semibold text-white leading-[120%] max-w-[900px]">
            Global Partners Advance Sustainable Finance Taxonomy Interoperability
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="max-w-[1170px] mx-auto px-4">
          <div className="mb-12">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/f1c1b10946c505076c419146822a8a9546fe0956?width=1200"
              alt="Group photo at the event"
              className="w-full rounded-2xl"
            />
          </div>

          <div className="max-w-[800px] mx-auto">
            <div className="space-y-6 text-[16px] text-[#333] leading-[170%]">
              <p>
                Leading global institutions came together at a roundtable to facilitate greater alignment of sustainable finance taxonomies. The Roundtable on January 22nd brought together experts from various organizations, including financial regulators, standard setters, and international institutions. Discussions centered around bridging regulatory approaches in different jurisdictions across defining criteria for green and sustainable economic activities, alongside harmonizing data reporting requirements.
              </p>

              <p>
                Hosted by GPASF, the roundtable engaged from Europe, Asia and Global partners in the sustainability finance taxonomy process, in cooperation with delegations from the Standing Finance Committee. The partnership is expected to continue to facilitate the cross-regional dialogue process between various jurisdictions and lead to greater harmonization of sustainable finance frameworks and promote consistent financing requirements for sustainable activities globally.
              </p>

              <p>
                Key focus areas included enhancing industry understanding of the GPASF sustainability framework, addressing climate finance concerns, and fostering collaboration between public and private sectors to drive meaningful progress towards global sustainability goals.
              </p>

              <p>
                Platforms of GPASF, the roundtable was established to ensure transparency of decision-making and to enable stakeholders from the business sector, investment banks, and financial institutions to participate. It also fosters support partnerships with civil society organizations and investors, who are encouraged to work towards the successful implementation of the Sustainable Framework.
              </p>

              <p>
                Released in 2020, the GPASF Sustainable Taxonomy was developed to serve as an important tool for organizations in understanding which economic activities can be considered environmentally sustainable. It is helping to shift capital flows toward more sustainable business models and provide direction for achieving climate and environmental goals. At the roundtable's conclusion, participants drafted Joint Statement reaffirming strong global commitment with climate action through transparent, comparable, and consistent sustainable finance standards.
              </p>

              <div className="mt-12 pt-8 border-t border-[#cfded1]">
                <Link
                  to="/news"
                  className="inline-flex items-center gap-2 text-[16px] text-[#2a5942] font-semibold hover:text-[#3dac5c] transition-colors"
                >
                  <ArrowLeft size={20} />
                  Back to all news
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
