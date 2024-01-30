import "./App.css";
import { useEffect, useState } from "react";
import HomePage from "./components/homepage/homePage";

function App() {
  const [ghibliData, setGhibliData] = useState([]);

  const fetchData = async () => {
    const response = await fetch("http://localhost:5000/ghibliData");
    const data = await response.json();
    setGhibliData(data);
    console.log(ghibliData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <HomePage ghibliData={ghibliData} />
    </div>
  );
}

export default App;
