import { nanoid } from "nanoid";
import { Data } from "../homepage/imageSlider/imageSlider";
import "./moviesPage.css";
import { useState } from "react";
import MoviePoster from "./movie-posters/moviePoster";

interface Props {
  ghibliData: Data[];
}

const MoviesPage = ({ ghibliData }: Props) => {
  const [chosenCatagoriesValue, setChosenCatagoriesValue] = useState<
    string | null
  >("");
  const [currentSearch, setCurrentSearch] = useState<string>("");

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

  const filterData = () => {
    const filteredData = ghibliData.filter((data) => {
      return data.title.toLowerCase().includes(currentSearch);
    });
    return filteredData;
  };

  const fileredMoviesData = filterData();

  const searchedMoviesSpanElements = fileredMoviesData.map((data) => {
    return <MoviePoster data={data} key={nanoid()} />;
  });

  const currentCondition = () => {
    if (chosenCatagoriesValue === "" && currentSearch.length === 0) {
      return movieSpanElements;
    } else if (
      chosenCatagoriesValue === "release-date" &&
      currentSearch.length === 0
    ) {
      return movieSpanElements;
    } else if (
      chosenCatagoriesValue === "a-to-z" &&
      currentSearch.length === 0
    ) {
      return aToZSpanElements;
    } else if (chosenCatagoriesValue === "imdb" && currentSearch.length === 0) {
      return imdbSpanElements;
    } else if (currentSearch.length > 0) {
      return searchedMoviesSpanElements;
    }
  };

  return (
    <div className="moviesPageContainer">
      <div className="moviesPageInputContainer">
        <div className="GhibliLogo"></div>
        <input
          type="name"
          className="moviesSearchInput"
          placeholder="Explore Movies"
          onChange={(event) => setCurrentSearch(event.target.value)}
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
      <div className="moviesContainer">{currentCondition()}</div>
      <div className="createrK">
        This website is created by
        <a href="https://github.com/KhantMinTuKha" target="_blank">
          Khant Min Thukha
        </a>
      </div>
    </div>
  );
};

export default MoviesPage;
