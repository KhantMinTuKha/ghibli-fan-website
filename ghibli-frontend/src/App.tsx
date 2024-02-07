import "./App.css";
import { useEffect, useState } from "react";
import HomePage from "./components/homepage/homePage";
import TitleAndNavigationBar, {
  ClickHandler,
} from "./components/homepage/titleAndNavigationBar/titleAndNavi";
import HistoryPage from "./components/history-page/historyPage";
import MoviesPage from "./components/movies-page/moviesPage";

function App() {
  const [ghibliData, setGhibliData] = useState([]);
  const [naviChosenName, setNaviChosenName] = useState<string | null>("");
  // const [isStarterPage, setIsStarterPage] = useState<boolean>(true);
  let isStarterPage = true;

  const fetchData = async () => {
    const response = await fetch("http://localhost:5000/ghibliData");
    const data = await response.json();
    setGhibliData(data);
    console.log(ghibliData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleClick: ClickHandler = (event) => {
    const naviClickName = event.currentTarget.textContent;
    console.log(naviClickName);
    setNaviChosenName(naviClickName);
  };

  const showPageFunction = () => {
    if (naviChosenName === "Home") {
      return <HomePage ghibliData={ghibliData} handleClick={handleClick} />;
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
        height: "100%",
      };
      return (
        <div style={styleForMovies}>
          <TitleAndNavigationBar handleClick={handleClick} />
          <MoviesPage ghibliData={ghibliData} />
        </div>
      );
    } else if (naviChosenName === "About Me") {
      return (
        <div>
          <TitleAndNavigationBar handleClick={handleClick} />
          <div>This is About Me Page</div>
        </div>
      );
    } else {
      return <HomePage ghibliData={ghibliData} handleClick={handleClick} />;
    }
  };

  return <div className="App">{showPageFunction()}</div>;
}
export default App;
