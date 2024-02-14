import { Data } from "../../homepage/imageSlider/imageSlider";
import { CSSProperties, useState } from "react";

interface Props {
  data: Data;
}

const MoviePoster = ({ data }: Props) => {
  const [isHover, setIsHover] = useState<boolean>(false);

  const moviePoster = {
    backgroundImage: `url("${data.poster}")`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    cursor: "pointer",
  };

  const beforeElement: CSSProperties = {
    position: "absolute",
    right: 0,
    top: 0,
    fontSize: "10px",
    backgroundColor: "#E2B616",
    padding: "3px",
    borderRadius: "0 0 0 10px",
  };

  const afterElement: CSSProperties = {
    position: "absolute",
    left: 0,
    bottom: "5px",
    fontSize: "10px",
    backgroundColor: "#02BDED",
    padding: "3px",
    borderRadius: "0 10px 0 0",
  };

  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };

  return (
    <div className="movieContainer">
      <div
        className="movie"
        style={moviePoster}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {isHover && (
          <div style={beforeElement} className="rating">
            IMDb {data.imdb}
          </div>
        )}
        {isHover && (
          <div style={afterElement} className="title">
            {data.title}
          </div>
        )}
      </div>
    </div>
  );
};

export default MoviePoster;
