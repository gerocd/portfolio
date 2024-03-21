import { useCallback } from "react";
import "./SubContainerLinks.css";

const SubContainerLinks = () => {
  const onVectorGithubClick = useCallback(() => {
    window.open("https://github.com/gerocd?tab=repositories");
  }, []);
  const onVectorFiverrClick = useCallback(() => {
    window.open("https://es.fiverr.com/gero_cd");
  }, []);
  const onVectorInstagramClick = useCallback(() => {
    window.open("https://www.instagram.com/gero_cd/");
  }, []);
  const onVectorFacebookClick = useCallback(() => {
    window.open("https://www.facebook.com/profile.php?id=100015146357848");
  }, []);
  const onVectorLinkedinClick = useCallback(() => {
    window.open("https://www.linkedin.com/in/gerocd/");
  }, []);
  return (
    <div className="sub-container30">
      <div className="links-container">
        <div className="text38">Home</div>
        <div className="container30">
          <div className="button26">
            <button className="text39">About Me</button>
          </div>
          <div className="button26">
            <div className="text40" onClick={onVectorGithubClick}>
              My Works
            </div>
          </div>
          <div className="button26">
            <button className="text39" onClick={onVectorFiverrClick}>
              fiverr
            </button>
          </div>
        </div>
      </div>
      <div className="links-container">
        <div className="text38">Social Media</div>
        <div className="container31">
          <div className="button26">
            <button className="text39" onClick={onVectorInstagramClick}>
              instagram
            </button>
          </div>
          <div className="button30">
            <button className="text39" onClick={onVectorFacebookClick}>
              facebook
            </button>
          </div>
          <div className="button26">
            <button className="text39" onClick={onVectorLinkedinClick}>
              linkedin
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubContainerLinks;
