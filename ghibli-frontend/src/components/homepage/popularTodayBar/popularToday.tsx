import "./popularToday.css";
import { Data } from "../imageSlider/imageSlider";
import { nanoid } from "nanoid";

interface Props {
  ghibliData: Data[];
}

const PopularToday = ({ ghibliData }: Props) => {
  if (!ghibliData || ghibliData.length === 0) {
    return <div></div>;
  }

  const posterSpanElements = ghibliData.map((data) => {
    const posterImage = {
      backgroundImage: `url("${data.poster}")`,
      backgroundRepeat: "no-repeat",
      height: "200px",
      width: `150px`,
      display: "inline-block",
      backgroundSize: "contain",
      cursor: "pointer",
      margin: "0 5px",
    };
    if (data.isPopularToday === true) {
      return (
        <div className="posterParent">
          <span className="poster" key={nanoid()} style={posterImage}></span>
          <div className="posterTitle">{data.title}</div>
        </div>
      );
    }
  });
  return (
    <div className="popularTodayContainer">
      <div className="cat"></div>
      <div className="popularToday">Popular Today</div>
      <div className="postersContainer">{posterSpanElements}</div>
    </div>
  );
};

export default PopularToday;
