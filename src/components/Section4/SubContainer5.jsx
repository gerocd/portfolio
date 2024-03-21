import { useCallback } from "react";
import "./SubContainer5.css";

const SubContainer5 = () => {
  const onVectorIcon2Click = useCallback(() => {
    window.open("https://github.com/gerocd?tab=repositories");
  }, []);
  return (
    <div className="sub-container17">
      <div className="text-container5">
        <div className="text20">Github</div>
        <h1 className="heading10" id="works">
          EXPLORE SOME OF MY REPOSITORIES.
        </h1>
      </div>
      <button className="buttoncards" onClick={onVectorIcon2Click}>
        <div className="text15">{`View All Projects ->`}</div>
      </button>
    </div>
  );
};

export default SubContainer5;
