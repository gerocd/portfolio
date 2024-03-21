import Header from "../components/Header1/Header";
import Container7 from "../components/Section1/Container7";
import Container6 from "../components/Section2/Container6";
import Container4 from "../components/Section3/Container4";
import Container3 from "../components/Section4/Container3";
import OpinionSection from "../components/Cards/CardOpinions/OpinionSection";
import Contact from "../components/Contact/Contact";
import Container from "../components/Section7/Container";

import "./HomePageDesktop.css";

const HomePageDesktop = () => {
  return (
    <div className="home-page-desktop">
      <section className="frame" id="section1">
        <Header />
        <Container7 />
      </section>
      <Container6 />
      <Container4 />
      <Container3 />
      <OpinionSection />
      <Contact />

      <Container />
    </div>
  );
};

export default HomePageDesktop;
