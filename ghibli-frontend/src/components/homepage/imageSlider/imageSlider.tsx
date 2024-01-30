import { useEffect, useState } from "react";
import "./imageSlider.css";
import { nanoid } from "nanoid";
import { Button } from "@mui/material";

interface Props {
  ghibliData: Data[];
}

export interface Data {
  id: number;
  title: string;
  releaseDate: string;
  review: string;
  imdb: string;
  genre: string[];
  poster: string;
  otherImage: string[];
  trailer: string;
}

const ImageSlider = ({ ghibliData }: Props) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (count === 23) {
        setCount(0);
      } else {
        setCount(count + 1);
      }
    }, 10000);
    return () => clearTimeout(timer);
  }, [count]);

  if (!ghibliData || ghibliData.length === 0) {
    return <div></div>;
  }

  const imageSlider = {
    backgroundImage: `url(${ghibliData[count].otherImage[0]})`,
    backgroundRepeat: "no-repeat",
    maxWidth: "500px",
    width: "500px",
    height: "300px",
    backgroundSize: "contain",
    padding: "0 20px",
    overflow: "hidden",
  };

  const genreSpanElements = ghibliData[count].genre.map((data) => {
    if (data === "Adventure") {
      const specialGenre = "Adventure";
      return (
        <span key={nanoid()} className="genre" id={specialGenre}>
          {data}
        </span>
      );
    } else if (data === "Sci-Fi") {
      const specialGenre = "Sci-Fi";
      return (
        <span key={nanoid()} className="genre" id={specialGenre}>
          {data}
        </span>
      );
    } else if (data === "Family") {
      const specialGenre = "Family";
      return (
        <span key={nanoid()} className="genre" id={specialGenre}>
          {data}
        </span>
      );
    } else if (data === "Fantasy") {
      const specialGenre = "Fantasy";
      return (
        <span key={nanoid()} className="genre" id={specialGenre}>
          {data}
        </span>
      );
    } else if (data === "Drama") {
      const specialGenre = "Drama";
      return (
        <span key={nanoid()} className="genre" id={specialGenre}>
          {data}
        </span>
      );
    } else if (data === "War") {
      const specialGenre = "War";
      return (
        <span key={nanoid()} className="genre" id={specialGenre}>
          {data}
        </span>
      );
    } else if (data === "Comedy") {
      const specialGenre = "Comedy";
      return (
        <span key={nanoid()} className="genre" id={specialGenre}>
          {data}
        </span>
      );
    } else if (data === "Romance") {
      const specialGenre = "Romance";
      return (
        <span key={nanoid()} className="genre" id={specialGenre}>
          {data}
        </span>
      );
    } else if (data === "Action") {
      const specialGenre = "Action";
      return (
        <span key={nanoid()} className="genre" id={specialGenre}>
          {data}
        </span>
      );
    } else if (data === "Mystery") {
      const specialGenre = "Mystery";
      return (
        <span key={nanoid()} className="genre" id={specialGenre}>
          {data}
        </span>
      );
    } else if (data === "Biography") {
      const specialGenre = "Biography";
      return (
        <span key={nanoid()} className="genre" id={specialGenre}>
          {data}
        </span>
      );
    }
  });

  return (
    <div className="imageSliderContainer">
      <div className="imageSlider" style={imageSlider}></div>

      <div className="imageSliderInfo">
        <div className="titleContainer">
          <span className="title">{ghibliData[count].title}</span>
          <span className="title">({ghibliData[count].releaseDate})</span>
        </div>
        <div className="imdbRating">IMDb RATING {ghibliData[count].imdb}</div>
        <div className="review">{ghibliData[count].review}</div>
        <div className="genreContainer">{genreSpanElements}</div>
        <Button
          variant="contained"
          sx={{
            fontSize: "14px",
            fontFamily: "roboto",
            textAlign: "center",
            textTransform: "none",
            marginTop: "15px",
            backgroundColor: "#D9D9D9",
            color: "black",
            boxShadow: "none",
            ":hover": {
              backgroundColor: "#D9D9D9",
              boxShadow: "none",
            },
          }}
        >
          More Info
        </Button>
      </div>
    </div>
  );
};

export default ImageSlider;
