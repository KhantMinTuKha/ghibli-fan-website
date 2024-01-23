import "./App.css";
import TitleAndNavigationBar from "./components/homepage/titleAndNavigationBar/titleAndNavi";
import ImageSlider from "./components/homepage/imageSlider/imageSlider";
import { useEffect } from "react";

function App() {
  const fetchData = async () => {
    const response = await fetch("http://localhost:5000/ghibliData");
    const data = await response.json();
    console.log(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <div>
        <TitleAndNavigationBar />
        <ImageSlider />
      </div>
    </div>
  );
}

export default App;
