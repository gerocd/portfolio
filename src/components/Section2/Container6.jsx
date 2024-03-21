import { useCallback } from "react";
import "./Container6.css";

const Container6 = () => {
  const onVectorIcon1Click = useCallback(() => {
    window.open("https://github.com/gerocd/");
  }, []);

  const onVectorIcon2Click = useCallback(() => {
    window.open("https://www.linkedin.com/in/gerocd/");
  }, []);

  return (
    <div className="container4" id="Container1">
      <div className="sub-container9">
        <div className="text-container1">
          <div className="text9">About</div>
          <h1 className="heading2" id="about-me">
            I am GERÓNIMO
          </h1>
        </div>
        <button className="button6" onClick={onVectorIcon2Click}>
          <div className="text10">{`Know More ->`}</div>
        </button>
      </div>
      <div className="sub-container10">
        <img className="image-icon" alt="" src="/image.svg" />
        <div className="container5">
          <div className="sub-container11">
            <div className="container6">
              <img className="icon8" alt="" src="/StarIcon2.svg" />
              <h2 className="heading3">Introduction</h2>
            </div>
            <div className="paragraph">
              <p className="ever-since-i">
                Ever since I was a kid, programming became my passion. I started
                my journey with Java, a language that introduced me to the
                fascinating world of coding. Over the years, my interest and
                skills grew, leading me to explore beyond what I had initially
                learned.
              </p>
              <p className="ever-since-i">&nbsp;</p>
              <p className="ever-since-i">
                I decided to take my passion to the next level and entered
                college. Despite the challenges and obstacles I encountered
                along the way, I never gave up. I persisted, learning and
                growing with each experience.
              </p>
            </div>
          </div>
          <div className="sub-container12">
            <div className="container7">
              <img className="icon9" alt="" src="/StarIcon2.svg" />
              <h2 className="heading3">Contact Information</h2>
            </div>
            <div className="container8">
              <div className="text-container2">
                <div className="heading5">Email</div>
                <div className="text11">geronimomcordoba@gmail.com</div>
              </div>
              <div className="text-container2">
                <div className="heading5">Phone Number</div>
                <div className="text11">+54 381 5983363</div>
              </div>
            </div>
            <div className="container9">
              <div className="buttons-container1">
                <div className="button8">
                  <button className="icon11">
                    <img
                      className="vector-icon1"
                      alt=""
                      src="/github1.png"
                      onClick={onVectorIcon1Click}
                    />
                  </button>
                </div>
                <a className="button7">
                  <button className="icon11">
                    <img
                      className="vector-icon2"
                      alt=""
                      src="/vector.svg"
                      onClick={onVectorIcon2Click}
                    />
                  </button>
                </a>
              </div>
              <div className="buttons-container2">
                <button className="button10" onClick={onVectorIcon2Click}>
                  <div className="text10">Let’s Work</div>
                </button>
                <a
                  className="button11"
                  href="https://drive.google.com/file/d/1uh4kPxT7PVUUR1Wda-H6ahAmCvEq8rhl/view?usp=sharing"
                  target="_blank"
                >
                  <div className="heading5">Download CV</div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container6;
