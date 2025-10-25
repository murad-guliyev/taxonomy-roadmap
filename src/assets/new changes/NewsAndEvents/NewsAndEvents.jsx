import "./NewsAndEvents.css";
import { MenuSeparator } from "../MenuSeparator/MenuSeparator.jsx";
import { Footer } from "../Footer/Footer.jsx";
import { FilterAllFirst } from "../FilterAllFirst/FilterAllFirst.jsx";
import { News } from "../News/News.jsx";
import { NavMenu } from "../NavMenu/NavMenu.jsx";

export const NewsAndEvents = ({ className, ...props }) => {
  return (
    <div className={"news-and-events " + className}>
      <div className="ellipse-4"></div>
      <div className="rectangle-4"></div>
      <div className="news-and-events2">News and events </div>
      <MenuSeparator className="menu-separator-instance"></MenuSeparator>
      <Footer className="footer-instance"></Footer>
      <div className="ellipse-3"></div>
      <FilterAllFirst className="filter-instance"></FilterAllFirst>
      <div className="frame-47">
        <News text="May 2025" className="news-instance"></News>
        <News
          text="Global Partners Advance Sustainable Finance Taxonomy Interoperability"
          text2="January 2025"
          text3="Article"
          visibleFiveG20Logo1Di9Be67X1={false}
          visibleOne2GenevaRoundtablePhotoYUfRoiDt12={true}
          visibleFiveG20Logo1Di9Be67X23={false}
          className="news-instance"
        ></News>
        <News
          text="Roadmap for Advancing Interoperability and Comparability of Sustainable Finance Taxonomies Launched"
          text2="November 2024"
          visibleFiveG20Logo1Di9Be67X1={true}
          visibleOne2GenevaRoundtablePhotoYUfRoiDt12={false}
          visibleFiveG20Logo1Di9Be67X23={false}
          className="news-instance"
        ></News>
        <News
          text="Roadmap for Advancing Interoperability and Comparability of Sustainable Finance Taxonomies Launched"
          text2="November 2024"
          text3="Event"
          visibleFiveG20Logo1Di9Be67X1={true}
          visibleOne2GenevaRoundtablePhotoYUfRoiDt12={false}
          visibleFiveG20Logo1Di9Be67X23={false}
          className="news-instance"
        ></News>
      </div>
      <NavMenu className="nav-menu-instance"></NavMenu>
    </div>
  );
};
