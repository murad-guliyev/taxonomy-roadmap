import { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "../../../components/Navigation";
import Footer from "../../../components/Footer";

export default function NewsAndEvents() {
  const [activeTab, setActiveTab] = useState<"all" | "news" | "events">("all");

  const newsItems = [
    {
      id: 1,
      type: "news",
      title: "GPASF 25th Anniversary Congress Took Place on 8th March at IMF",
      date: "25 Jun 2021",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/c329fcb113e1c260e728afe443882f39f450e3da?width=800",
      badge: "NEWS",
    },
    {
      id: 2,
      type: "news",
      title: "Global Partners Advance Sustainable Finance Taxonomy Interoperability",
      date: "18 May 2021",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/f1c1b10946c505076c419146822a8a9546fe0956?width=800",
      badge: "NEWS",
    },
    {
      id: 3,
      type: "event",
      title: "International Platform on Sustainable Finance Roundtable",
      date: "10 Apr 2021",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/c329fcb113e1c260e728afe443882f39f450e3da?width=800",
      badge: "EVENT",
    },
    {
      id: 4,
      type: "event",
      title: "International Platform on Sustainable Finance Roundtable",
      date: "10 Apr 2021",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/c329fcb113e1c260e728afe443882f39f450e3da?width=800",
      badge: "EVENT",
    },
  ];

  const filteredItems = newsItems.filter((item) => {
    if (activeTab === "all") return true;
    return item.type === activeTab;
  });

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
            News and Events
          </h1>
          <p className="text-[16px] text-[#f3f3f3] leading-[153%] max-w-[700px]">
            Stay updated with the latest news and upcoming events from the Taxonomy Roadmap Initiative
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="max-w-[1170px] mx-auto px-4">
          {/* Tabs */}
          <div className="flex gap-8 border-b border-[#cfded1] mb-12">
            <button
              onClick={() => setActiveTab("all")}
              className={`pb-4 px-2 font-semibold text-[18px] transition-colors relative ${
                activeTab === "all"
                  ? "text-[#2a5942]"
                  : "text-[#333] hover:text-[#2a5942]"
              }`}
            >
              All
              {activeTab === "all" && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#2a5942]" />
              )}
            </button>
            <button
              onClick={() => setActiveTab("news")}
              className={`pb-4 px-2 font-semibold text-[18px] transition-colors relative ${
                activeTab === "news"
                  ? "text-[#2a5942]"
                  : "text-[#333] hover:text-[#2a5942]"
              }`}
            >
              News
              {activeTab === "news" && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#2a5942]" />
              )}
            </button>
            <button
              onClick={() => setActiveTab("events")}
              className={`pb-4 px-2 font-semibold text-[18px] transition-colors relative ${
                activeTab === "events"
                  ? "text-[#2a5942]"
                  : "text-[#333] hover:text-[#2a5942]"
              }`}
            >
              Events
              {activeTab === "events" && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#2a5942]" />
              )}
            </button>
          </div>

          {/* News Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredItems.map((item) => (
              <Link
                key={item.id}
                to={`/news/${item.id}`}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-2xl mb-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-[280px] object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-[#2a5942] text-white px-4 py-2 rounded-lg text-[13px] font-semibold">
                    {item.badge}
                  </div>
                </div>
                <p className="text-[14px] text-[#666] mb-3">{item.date}</p>
                <h3 className="text-[20px] font-semibold text-[#1b3629] leading-[130%] group-hover:text-[#3dac5c] transition-colors">
                  {item.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
