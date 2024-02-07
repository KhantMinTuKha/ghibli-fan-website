import { nanoid } from "nanoid";
import { Data } from "../homepage/imageSlider/imageSlider";
import "./moviesPage.css";

interface Props {
  ghibliData: Data[];
}

const MoviesPage = ({ ghibliData }: Props) => {
  const movieSpanElements = ghibliData.map((data) => {
    const moviePoster = {
      backgroundImage: `url("${data.poster}")`,
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
    };
    return <div className="movie" key={nanoid()} style={moviePoster}></div>;
  });

  return (
    <div className="moviesPageContainer">
      <div className="moviesPageInputContainer">
        <div className="GhibliLogo"></div>
        <input
          type="name"
          className="moviesSearchInput"
          placeholder="Explore Movies"
        ></input>
        <div className="catagoriesContainer">
          <select className="form-select" aria-label="Default select example">
            <option defaultValue="Catagories">Catagories</option>
            <option value="1">A to Z</option>
            <option value="2">IMDb Rating</option>
            <option value="3">Release Date</option>
          </select>
        </div>
      </div>
      <div className="moviesContainer">{movieSpanElements}</div>
      <div className="creater">
        This website is created by{" "}
        <a href="https://github.com/KhantMinTuKha" target="_blank">
          Khant Min Thukha
        </a>
      </div>
    </div>
  );
};

export default MoviesPage;
