import { useCallback } from "react";
import "./Container5.css";

const Container5 = () => {
  const onVectorIcon2Click = useCallback(() => {
    window.open("https://www.linkedin.com/in/gerocd/");
  }, []);
  return (
    <div className="container11">
      <div className="sub-container14">
        <div className="container12">
          <div className="sub-container15">
            <h1 className="heading8" id="services">
              Service Highlights
            </h1>
            <button className="button15" onClick={onVectorIcon2Click}>
              <img className="icon15" alt="" src="/vector-431-stroke@2x.png" />
            </button>
          </div>
          <div className="paragraph1">
            During my time in college, I immersed myself in modern web
            development. I became familiar with technologies like React and
            Node.js, which allowed me to create dynamic and scalable web
            applications.
            <p> </p>
            The ability to build fast, interactive user interfaces with React
            fascinated me, while the versatility of Node.js to develop both the
            frontend and backend allowed me to create allowed me to create
            complete end-to-end web applications.
          </div>
        </div>
        <div className="container13">
          <div className="heading9">FULL STACK DEVELOPER</div>
          <div className="sub-container16">
            <div className="container14">
              <img className="icon16" alt="" src="/StarIcon2.svg" />
              <div className="text16">
                Develop a complete backend for a stock control of a stockyard
                with Node.js.
              </div>
            </div>
            <div className="container14">
              <img className="icon16" alt="" src="/StarIcon2.svg" />
              <div className="text16">
                Create a system in c# with MVC and CRUD, with SQL SERVER.
              </div>
            </div>
            <div className="container14">
              <img className="icon16" alt="" src="/StarIcon2.svg" />
              <div className="text16">
                Quickly develop a landin page for an accounting firm, with FIGMA
                and UX/UI design.
              </div>
            </div>
            <div className="container17">
              I also have some experience in QA testing. :)
            </div>
          </div>
        </div>
      </div>
      <img className="image-icon1" alt="" src="/meprogramming.svg" />
    </div>
  );
};

export default Container5;
