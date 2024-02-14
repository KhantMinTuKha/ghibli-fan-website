import { nanoid } from "nanoid";
import { Data } from "../homepage/imageSlider/imageSlider";
import "./moviesPage.css";
import { ChangeEventHandler, useState } from "react";
import MoviePoster from "./movie-posters/moviePoster";
import { ClickHandler } from "../homepage/titleAndNavigationBar/titleAndNavi";

interface Props {
  ghibliData: Data[];
}

const MoviesPage = ({ ghibliData }: Props) => {
  const [chosenCatagoriesValue, setChosenCatagoriesValue] = useState<
    string | null
  >("");

  const movieSpanElements = ghibliData.map((data) => {
    return <MoviePoster data={data} key={nanoid()} />;
  });

  const atoZSortFunction = () => {
    const aToZSortedData = [...ghibliData].sort((a, b) =>
      a.title > b.title ? 1 : -1
    );
    return aToZSortedData;
  };

  const aToZSpanElements = atoZSortFunction().map((data) => {
    return <MoviePoster data={data} key={nanoid()} />;
  });

  const imdbSortedData = () => {
    const imdbSortedData = [...ghibliData].sort((a, b) =>
      a.imdb > b.imdb ? -1 : 1
    );
    return imdbSortedData;
  };

  const imdbSpanElements = imdbSortedData().map((data) => {
    return <MoviePoster data={data} key={nanoid()} />;
  });

  const handleChosenCatagoriesClick = (event: any) => {
    setChosenCatagoriesValue(event.currentTarget.value);
  };

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
          <select
            className="form-select"
            aria-label="Default select example"
            onChange={handleChosenCatagoriesClick}
          >
            <option value="release-date">Release Date</option>
            <option value="a-to-z">A to Z</option>
            <option value="imdb">IMDb Rating</option>
          </select>
        </div>
      </div>
      <div className="moviesContainer">
        {chosenCatagoriesValue === "" && movieSpanElements}
        {chosenCatagoriesValue === "release-date" && movieSpanElements}
        {chosenCatagoriesValue === "a-to-z" && aToZSpanElements}
        {chosenCatagoriesValue === "imdb" && imdbSpanElements}
      </div>
      <div className="creater">
        This website is created by
        <a href="https://github.com/KhantMinTuKha" target="_blank">
          Khant Min Thukha
        </a>
      </div>
    </div>
  );
};

export default MoviesPage;
