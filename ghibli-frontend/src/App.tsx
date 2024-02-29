import "./App.css";
import { useEffect, useState } from "react";
import HomePage from "./components/homepage/homePage";
import TitleAndNavigationBar, {
  ClickHandler,
} from "./components/homepage/titleAndNavigationBar/titleAndNavi";
import HistoryPage from "./components/history-page/historyPage";
import MoviesPage from "./components/movies-page/moviesPage";
import AboutMe from "./components/about-me/about-me";
import ClickPage from "./components/click-page/clickPage";

function App() {
  const [ghibliData, setGhibliData] = useState([]);
  const [naviChosenName, setNaviChosenName] = useState<string | null>("");
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const fetchData = async () => {
    const response = await fetch("http://localhost:5000/ghibliData");
    const data = await response.json();
    setGhibliData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleClick: ClickHandler = (event) => {
    const naviClickName = event.currentTarget.textContent;
    setNaviChosenName(naviClickName);
    console.log(naviChosenName);
  };

  const showPageFunction = () => {
    if (naviChosenName === "Home") {
      return (
        <HomePage
          ghibliData={ghibliData}
          handleClick={handleClick}
          HandleClicked={setIsClicked}
        />
      );
    } else if (naviChosenName === "History") {
      const styleForHistory = {
        backgroundColor: "#dbf7e4",
      };
      return (
        <div style={styleForHistory}>
          <TitleAndNavigationBar handleClick={handleClick} />
          <HistoryPage />
        </div>
      );
    } else if (naviChosenName === "Movies") {
      const styleForMovies = {
        backgroundColor: "#FFF8F4",
        width: "100%",
        height: "100vh",
      };
      return (
        <div style={styleForMovies}>
          <TitleAndNavigationBar handleClick={handleClick} />
          <MoviesPage ghibliData={ghibliData} />
        </div>
      );
    } else if (naviChosenName === "About Me") {
      const styleForMovies = {
        backgroundColor: "#FAECB5",
        width: "100%",
      };
      return (
        <div style={styleForMovies}>
          <TitleAndNavigationBar handleClick={handleClick} />
          <AboutMe />
        </div>
      );
    } else if (naviChosenName === "More Info") {
      return (
        <div>
          <TitleAndNavigationBar handleClick={handleClick} />
          <ClickPage
            ghibliData={ghibliData}
            isClicked={isClicked}
            handleClicked={setIsClicked}
            changeClick={handleClick}
          />
        </div>
      );
    } else {
      return (
        <HomePage
          ghibliData={ghibliData}
          handleClick={handleClick}
          HandleClicked={setIsClicked}
        />
      );
    }
  };

  return <div className="App">{showPageFunction()}</div>;
}
export default App;
