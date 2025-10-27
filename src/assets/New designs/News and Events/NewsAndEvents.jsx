import { MenuSeparator } from "../MenuSeparator/MenuSeparator.jsx";
import { Footer } from "../Footer/Footer.jsx";
import { FilterAllFirst } from "../FilterAllFirst/FilterAllFirst.jsx";
import { News } from "../News/News.jsx";
import { NavMenu } from "../NavMenu/NavMenu.jsx";

export const NewsAndEvents = ({ className, style, ...props }) => {
  return (
    <div
      style={{
        background: "#fafafa",
        height: "2353px",
        position: "relative",
        overflow: "hidden",
        ...style,
      }}
    >
      <div
        style={{
          background:
            "linear-gradient(76.25deg, rgba(61, 172, 92, 0.05) 0%,rgba(79, 181, 136, 0.05) 100%)",
          borderRadius: "50%",
          width: "845.8px",
          height: "873.5px",
          position: "absolute",
          right: "-1068.17px",
          bottom: "155.76px",
          transformOrigin: "0 0",
          transform: "rotate(120deg) scale(1, 1)",
          backdropFilter: "blur(2px)",
        }}
      ></div>
      <div
        style={{
          background: "var(--bg-colored, #2a5942)",
          width: "1600px",
          height: "387px",
          position: "absolute",
          left: "0px",
          top: "0px",
        }}
      ></div>
      <div
        style={{
          color: "var(--text-inverse, #ffffff)",
          textAlign: "left",
          fontFamily:
            "var(--heading-h2-font-family, 'Raleway-SemiBold', sans-serif)",
          fontSize: "var(--heading-h2-font-size, 32px)",
          lineHeight: "var(--heading-h2-line-height, 120%)",
          fontWeight: "var(--heading-h2-font-weight, 600)",
          position: "absolute",
          left: "215px",
          top: "289px",
          width: "1170px",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        News and events{" "}
      </div>
      <MenuSeparator
        style={{
          padding:
            "var(--var-sds-size-padding-sm, 8px) 0px var(--var-sds-size-padding-sm, 8px) 0px",
          width: "68px",
          height: "7px",
          position: "absolute",
          left: "1115px",
          top: "113px",
        }}
      ></MenuSeparator>
      <Footer
        style={{
          width: "1600px",
          position: "absolute",
          left: "50%",
          translate: "-50%",
          bottom: "0px",
        }}
      ></Footer>
      <div
        style={{
          background:
            "linear-gradient(76.25deg, rgba(61, 172, 92, 0.05) 0%,rgba(79, 181, 136, 0.05) 100%)",
          borderRadius: "50%",
          width: "845.8px",
          height: "873.5px",
          position: "absolute",
          left: "1892.37px",
          top: "-276.25px",
          transformOrigin: "0 0",
          transform: "rotate(120deg) scale(1, 1)",
          backdropFilter: "blur(2px)",
        }}
      ></div>
      <FilterAllFirst
        style={{
          width: "1600px",
          position: "absolute",
          left: "0px",
          top: "387px",
        }}
      ></FilterAllFirst>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "40px",
          rowGap: "78px",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          flexWrap: "wrap",
          alignContent: "flex-start",
          width: "1112px",
          position: "absolute",
          left: "215px",
          top: "513px",
        }}
      >
        <News
          text="May 2025"
          style={{ flexShrink: "0", width: "536px" }}
        ></News>
        <News
          text="Global Partners Advance Sustainable Finance Taxonomy Interoperability"
          text2="January 2025"
          text3="Article"
          visibleFiveG20Logo1Di9Be67X1={false}
          visibleOne2GenevaRoundtablePhotoYUfRoiDt12={true}
          visibleFiveG20Logo1Di9Be67X23={false}
          style={{ flexShrink: "0", width: "536px" }}
        ></News>
        <News
          text="Roadmap for Advancing Interoperability and Comparability of Sustainable Finance Taxonomies Launched"
          text2="November 2024"
          visibleFiveG20Logo1Di9Be67X1={true}
          visibleOne2GenevaRoundtablePhotoYUfRoiDt12={false}
          visibleFiveG20Logo1Di9Be67X23={false}
          style={{ flexShrink: "0", width: "536px" }}
        ></News>
        <News
          text="Roadmap for Advancing Interoperability and Comparability of Sustainable Finance Taxonomies Launched"
          text2="November 2024"
          text3="Event"
          visibleFiveG20Logo1Di9Be67X1={true}
          visibleOne2GenevaRoundtablePhotoYUfRoiDt12={false}
          visibleFiveG20Logo1Di9Be67X23={false}
          style={{ flexShrink: "0", width: "536px" }}
        ></News>
      </div>
      <NavMenu
        style={{
          width: "1254px",
          position: "absolute",
          left: "50%",
          translate: "-50%",
          top: "40px",
          boxShadow: "0px 4px 60px 0px rgba(34, 34, 34, 0.10)",
        }}
      ></NavMenu>
    </div>
  );
};
