import { useCallback } from "react";
import "./SubContainer6.css";

const SubContainer6 = () => {
  const onVectorIcon2Click = useCallback(() => {
    window.open("https://www.linkedin.com/in/gerocd/");
  }, []);
  return (
    <div className="sub-container13">
      <div className="text-container4">
        <h1 className="heading7">A LITTLE MORE ABOUT ME</h1>
      </div>
      <div className="container10" onClick={onVectorIcon2Click}>
        <button className="button14">
          <div className="text15">{`Know more ->`}</div>
        </button>
      </div>
    </div>
  );
};

export default SubContainer6;
